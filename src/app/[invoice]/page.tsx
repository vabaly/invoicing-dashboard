import { Button, Card } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import fetchData from '~/business/fetch';
import i18n from '~/i18n';
import { InvoiceDetail } from '../_components/invoice';
import { Chase } from '../_components/chase';
import { HydrateClient } from '~/trpc/server';

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
      <div className="flex h-[calc(100vh-100px)] flex-col items-start space-y-4 pb-16">
        <Button startIcon={<ArrowBackIcon />} color="inherit" aria-label="back">
          {i18n.t('back')}
        </Button>
        <Card className="w-full flex-1 p-4">
          <InvoiceDetail invoice={invoice} />
        </Card>
        <Chase invoice={invoice} />
      </div>
    </HydrateClient>
  );
}
