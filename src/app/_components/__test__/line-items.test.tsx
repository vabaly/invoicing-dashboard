import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LineItems } from '../line-items';
import { type InvoiceWithClient } from '~/business';
import i18n from '~/i18n';

describe('LineItems', () => {
  let lineItems: InvoiceWithClient['lineItems'];

  beforeEach(() => {
    lineItems = [
      { description: 'Item 1', price: 10, quantity: 2 },
      { description: 'Item 2', price: 20, quantity: 1 },
    ];
  });

  test('should render table with correct headers', () => {
    render(<LineItems lineItems={lineItems} />);

    const headers = screen.getAllByRole('columnheader');
    expect(headers[0]).toHaveTextContent(i18n.t('lineItem.description'));
    expect(headers[1]).toHaveTextContent(i18n.t('lineItem.price'));
    expect(headers[2]).toHaveTextContent(i18n.t('lineItem.quantity'));
  });

  test('should render table rows with correct data', () => {
    render(<LineItems lineItems={lineItems} />);

    const rows = screen.getAllByRole('row');
    expect(rows[1]).toHaveTextContent('Item 1');
    expect(rows[1]).toHaveTextContent('10');
    expect(rows[1]).toHaveTextContent('2');
    expect(rows[2]).toHaveTextContent('Item 2');
    expect(rows[2]).toHaveTextContent('20');
    expect(rows[2]).toHaveTextContent('1');
  });
});
