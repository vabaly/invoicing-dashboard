import { type InvoiceWithClient } from './data';

export function filterByNameOrId(
  invoices: InvoiceWithClient[],
  value: string,
): InvoiceWithClient[] {
  if (!value) {
    return invoices;
  }
  return invoices.filter((item) => [item.invoiceNumber].includes(value));
}
