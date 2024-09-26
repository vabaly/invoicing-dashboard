import '@testing-library/jest-dom';
import { Chase } from '../chase';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type InvoiceProps } from '~/types';
import { invoice } from './__mock__';
import i18n from '~/i18n';

describe('Chase', () => {
  let invoiceProps: InvoiceProps;

  beforeEach(() => {
    invoiceProps = {
      invoice,
    };
  });

  test('should render the component', async () => {
    render(<Chase {...invoiceProps} />);

    await waitFor(() => {
      expect(screen.getByText(i18n.t('chase'))).toBeInTheDocument();
    });
  });

  test('should show the fake email dialog when the button is clicked', async () => {
    render(<Chase {...invoiceProps} />);

    const button = screen.getByText(i18n.t('chase'));
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(i18n.t('email.title'))).toBeInTheDocument();
    });
  });

  test('should hide the fake email dialog when the ok button is clicked', async () => {
    render(<Chase {...invoiceProps} />);

    const button = screen.getByText(i18n.t('chase'));
    await userEvent.click(button);

    const okButton = screen.getByText(i18n.t('ok'));
    await userEvent.click(okButton);

    await waitFor(() => {
      expect(screen.queryByText(i18n.t('email.title'))).toBeNull();
    });
  });
});
