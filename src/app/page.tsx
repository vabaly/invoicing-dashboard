import { HydrateClient } from '~/trpc/server';
import { InvoiceList } from './_components/invoice-list';
import fetchData from '~/server/fetch';
import HydrateAtom from './_components/hydrate-atom';

export default async function Home() {
  const { invoices } = await fetchData();
  return (
    <HydrateClient>
      <InvoiceList invoices={invoices} />
      <HydrateAtom invoices={invoices} />
    </HydrateClient>
  );
}
