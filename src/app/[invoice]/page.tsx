import { Card } from '@mui/material';
import fetchData from '~/business/fetch';
import { InvoiceDetail } from '../_components/invoice';
import { Chase } from '../_components/chase';
import { HydrateClient } from '~/trpc/server';
import { FOOTER_HEIGHT, HEADER_HEIGHT, SPACING_HEIGHT } from '~/constants';

export default async function InvoicePage({
  params: { invoice: invoiceNumber },
}: {
  params: { invoice: string };
}) {
  const { invoices } = await fetchData();

  console.log('invoices', invoices);
  const invoice = invoices.find(
    (invoice) => invoice.invoiceNumber === invoiceNumber,
  );

  if (!invoice) {
    return (
      <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        Invoice not found
      </div>
    );
  }

  return (
    <HydrateClient>
      <div
        className="flex flex-col items-start space-y-4"
        style={{
          minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT + SPACING_HEIGHT}px)`,
          paddingBottom: FOOTER_HEIGHT + SPACING_HEIGHT,
        }}
      >
        <Card className="w-full flex-1 p-4">
          <InvoiceDetail invoice={invoice} />
        </Card>
        <Chase invoice={invoice} />
      </div>
    </HydrateClient>
  );
}
