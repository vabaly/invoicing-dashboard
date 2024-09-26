import { processInvoices } from '../business/data';
import { api } from '~/trpc/server';

const fetchData = async () => {
  const invoices = await api.invoice.getList();
  const clients = await api.client.getList();

  const invoicesWithClient = processInvoices(invoices, clients);

  return {
    invoices: invoicesWithClient,
    clients,
  };
};

export default fetchData;
