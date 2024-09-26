import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { InvoiceDetail } from '../invoice';
import { type InvoiceWithClient } from '~/business';
import i18n from '~/i18n';

describe('InvoiceDetail', () => {
  let invoice: InvoiceWithClient;

  beforeEach(() => {
    invoice = {
      invoiceNumber: '123',
      dueDate: '2023-01-01',
      total: 100,
      status: 'Paid',
      clientId: '456',
      client: {
        clientId: '456',
        name: 'John Doe',
        email: 'johndoe@example.com',
        address: '123 Main St',
      },
      lineItems: [],
    };
  });

  test('should render basic info', () => {
    render(<InvoiceDetail invoice={invoice} />);

    expect(
      screen.getByText(i18n.t('invoiceDetail.basicInfo')),
    ).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByText('2023-01-01')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('Paid')).toBeInTheDocument();
  });

  test('should render client info', () => {
    render(<InvoiceDetail invoice={invoice} />);

    expect(
      screen.getByText(i18n.t('invoiceDetail.clientInfo')),
    ).toBeInTheDocument();
    expect(screen.getByText('456')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('johndoe@example.com')).toBeInTheDocument();
    expect(screen.getByText('123 Main St')).toBeInTheDocument();
  });

  test('should render line items', () => {
    render(<InvoiceDetail invoice={invoice} />);

    expect(
      screen.getByText(i18n.t('invoiceDetail.lineItems')),
    ).toBeInTheDocument();
  });

  test('should not render client info if no client', () => {
    if (invoice.client) {
      invoice.client = undefined;

      render(<InvoiceDetail invoice={invoice} />);

      expect(
        screen.queryByText('invoiceDetail.clientInfo'),
      ).not.toBeInTheDocument();
    }
  });
});
