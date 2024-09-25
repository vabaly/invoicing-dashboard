import { type Client } from '~/server/api/routers/client';
import { type Invoice } from '~/server/api/routers/invoice';

export interface InvoiceWithClient extends Invoice {
  client?: Client;
  total: number;
}

/**
 * Processes a list of invoices by associating each invoice with its corresponding client
 * and calculating the total amount for each invoice.
 *
 * @param invoices - An array of Invoice objects to be processed.
 * @param clients - An array of Client objects representing the clients.
 * @returns An array of processed invoices with client names and total amounts.
 */
export function processInvoices(
  invoices: Invoice[],
  clients: Client[],
): InvoiceWithClient[] {
  const processedInvoices = invoices.map((invoice) => {
    // Find the client associated with the current invoice
    const client = clients.find(
      (client) => client.clientId === invoice.clientId,
    );
    // Calculate the total amount for the current invoice
    const total = invoice.lineItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    // Return a new object containing the original invoice information, the client's name, and the total amount
    return {
      ...invoice,
      client,
      total,
    };
  });
  // Return the array of processed invoices
  return processedInvoices;
}
