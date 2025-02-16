import { HydrateClient } from '~/trpc/server';
import { InvoiceList } from './_components/invoice-list';
import { Search } from './_components/search';
import fetchData from '~/server/fetch';
import HydrateAtom from './_components/hydrate-atom';

export default async function Home() {
  const { invoices } = await fetchData();
  return (
    <HydrateClient>
      <Search />
      <InvoiceList invoices={invoices} />
      <HydrateAtom invoices={invoices} />
    </HydrateClient>
  );
}
