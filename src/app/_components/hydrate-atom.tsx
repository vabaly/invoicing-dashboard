'use client';

import { type InvoiceWithClient } from '~/business';
import { invoicesAtom } from '../_atoms';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';

export default function HydrateAtom({
  invoices,
}: {
  invoices: InvoiceWithClient[];
}) {
  const setInvoices = useSetAtom(invoicesAtom);

  useEffect(() => {
    setInvoices(invoices);
  }, [invoices, setInvoices]);

  return <></>;
}
