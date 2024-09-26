import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FakeEmail } from '../email';
import i18n from '~/i18n';
import { type InvoiceProps } from '~/types';

describe('FakeEmail', () => {
  let invoiceProps: InvoiceProps;

  beforeEach(() => {
    invoiceProps = {
      invoice: {
        clientId: 'test',
        client: {
          email: 'test@example.com',
          name: 'Test User',
          clientId: 'test',
          address: '123 Main St',
        },
        invoiceNumber: '12345',
        total: 100,
        dueDate: 'test',
        status: 'pending',
        lineItems: [],
      },
    };
  });

  test('should render when client is present', () => {
    const { asFragment } = render(<FakeEmail {...invoiceProps} />);

    // Snapshot test
    expect(asFragment().children[0]).toMatchSnapshot();

    expect(screen.getByText(i18n.t('email.to'))).toBeInTheDocument();
    if (invoiceProps.invoice.client?.email) {
      const texts = screen.getAllByText(invoiceProps.invoice.client.email);
      expect(texts.length).toBe(2);
      // Pick one to valid
      expect(texts[0]).toBeInTheDocument();
    }
    expect(screen.getByText(i18n.t('email.subject'))).toBeInTheDocument();
    expect(screen.getByText(i18n.t('email.subjectValue'))).toBeInTheDocument();
    expect(
      screen.getByText(
        i18n.t('email.bodies.0', {
          name: invoiceProps.invoice.client?.name ?? 'user',
        }),
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(i18n.t('email.bodies.1'))).toBeInTheDocument();
    expect(screen.getByText(i18n.t('email.bodies.2'))).toBeInTheDocument();
    expect(screen.getByText(i18n.t('email.bodies.3'))).toBeInTheDocument();
  });

  test('should not render when client is not present', () => {
    if (invoiceProps.invoice.client) {
      invoiceProps.invoice.client = undefined;

      render(<FakeEmail {...invoiceProps} />);

      expect(screen.queryByText(i18n.t('email.to'))).not.toBeInTheDocument();
      expect(
        screen.queryByText(i18n.t('email.subject')),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(i18n.t('email.subjectValue')),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(i18n.t('email.bodies.1')),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(i18n.t('email.bodies.2')),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(i18n.t('email.bodies.3')),
      ).not.toBeInTheDocument();
    }
  });
});
