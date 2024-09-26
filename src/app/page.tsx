import { HydrateClient } from '~/trpc/server';
import { InvoiceList } from './_components/invoice-list';
import fetchData from '~/business/fetch';

export default async function Home() {
  const { invoices, clients } = await fetchData();

  console.log('invoices', invoices);
  console.log('clients', clients);

  return (
    <HydrateClient>
      <InvoiceList invoices={invoices} />
    </HydrateClient>
  );
}
