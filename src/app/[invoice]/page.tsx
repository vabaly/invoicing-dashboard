'use client';

import { Card } from '@mui/material';
import { InvoiceDetail } from '../_components/invoice';
import { Chase } from '../_components/chase';
import { api } from '~/trpc/react';
import { FOOTER_HEIGHT, HEADER_HEIGHT, SPACING_HEIGHT } from '~/constants';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { processInvoices } from '~/business';
import { useAtom } from 'jotai';
import { invoicesAtom } from '../_atoms';

/**
 * The main component for rendering the invoice detail page.
 * It retrieves the invoice details and displays them along with the chase component.
 */
export default function InvoicePage() {
  const [invoices, setInvoices] = useAtom(invoicesAtom);
  const { invoice: invoiceNumber } = useParams<{ invoice: string }>();
  const { data: invoicesWithoutClient } = api.invoice.getList.useQuery(
    undefined,
    {
      // Only enable the query if there are no invoices in the state
      enabled: !invoices.length,
    },
  );
  const { data: clients } = api.client.getList.useQuery(undefined, {
    enabled: !invoices.length,
  });
  // Find the invoice with the matching invoice number in the invoices state
  const invoice = invoices.find(
    (invoice) => invoice.invoiceNumber === invoiceNumber,
  );

  useEffect(() => {
    if (invoicesWithoutClient && clients) {
      // Process the invoices and clients to get the final invoices list
      const invoices = processInvoices(invoicesWithoutClient, clients);
      setInvoices(invoices);
    }
  }, [invoicesWithoutClient, clients, setInvoices]);

  // If there are invoices but the current invoice is not found, show an error message
  if (invoices.length && !invoice) {
    return (
      <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        Invoice not found
      </div>
    );
  } else if (!invoice) {
    return null;
  }

  // If the invoice is found, render the invoice page
  return (
    <div
      className="flex flex-col items-start space-y-4"
      style={{
        // Calculate the minimum height of the page based on the header, footer, and spacing heights
        minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT + SPACING_HEIGHT}px)`,
        paddingBottom: FOOTER_HEIGHT + SPACING_HEIGHT,
      }}
    >
      <Card className="w-full flex-1 p-4">
        <InvoiceDetail invoice={invoice} />
      </Card>
      <Chase invoice={invoice} />
    </div>
  );
}
