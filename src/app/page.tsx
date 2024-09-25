import { api, HydrateClient } from '~/trpc/server';
import { InvoiceList } from './_components/invoice-list';
import { processInvoices } from '~/business/data';

export default async function Home() {
  const invoices = await api.invoice.getList();
  const clients = await api.client.getList();

  const invoicesWithClient = processInvoices(invoices, clients);

  void api.post.getLatest.prefetch();

  console.log('invoices', invoices);
  console.log('clients', clients);

  return (
    <HydrateClient>
      <InvoiceList invoices={invoicesWithClient} />
    </HydrateClient>
  );
}
