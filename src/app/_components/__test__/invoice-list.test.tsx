import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { InvoiceList } from '../invoice-list';
import i18n from '~/i18n';
import { invoices } from './__mock__';
import { addCommasToNumber } from '~/utils';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe('InvoiceList', () => {
  test('renders without crashing', () => {
    render(<InvoiceList invoices={invoices} />);
  });

  test('displays the correct number of invoice rows', () => {
    render(<InvoiceList invoices={invoices} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(invoices.length + 1); // +1 for the header row
  });

  test('displays the correct invoice data in each row', () => {
    render(<InvoiceList invoices={invoices} />);
    invoices.forEach((invoice) => {
      const row = screen.getByText(invoice.invoiceNumber);
      expect(row).toBeInTheDocument();
      const cells = row.parentElement?.children;
      expect(cells).toHaveLength(5);
      if (cells?.length) {
        expect(cells[0]?.textContent).toBe(invoice.invoiceNumber);
        expect(cells[1]?.textContent).toBe(invoice.client.name);
        expect(cells[2]?.textContent).toBe(addCommasToNumber(invoice.total));
        expect(cells[3]?.textContent).toBe(invoice.dueDate);
        expect(cells[4]?.textContent).toBe(invoice.status);
      }
    });
  });

  test('displays the correct header labels', () => {
    render(<InvoiceList invoices={invoices} />);
    const headers = screen.getAllByRole('columnheader');
    expect(headers).toHaveLength(5);
    expect(headers[0]?.textContent).toBe(
      i18n.t('invoiceTableHead.invoiceNumber'),
    );
    expect(headers[1]?.textContent).toBe(i18n.t('invoiceTableHead.clientName'));
    expect(headers[2]?.textContent).toBe(i18n.t('invoiceTableHead.total'));
    expect(headers[3]?.textContent).toBe(i18n.t('invoiceTableHead.dueDate'));
    expect(headers[4]?.textContent).toBe(i18n.t('invoiceTableHead.status'));
  });
});
