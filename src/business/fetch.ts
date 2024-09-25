import { processInvoices } from './data';
import { api } from '~/trpc/server';

export default async function fetchData() {
  const invoices = await api.invoice.getList();
  const clients = await api.client.getList();

  const invoicesWithClient = processInvoices(invoices, clients);

  return {
    invoices: invoicesWithClient,
    clients,
  };
}
