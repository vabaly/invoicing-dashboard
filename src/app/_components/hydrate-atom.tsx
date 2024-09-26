'use client';

import { type InvoiceWithClient } from '~/business';
import { invoicesAtom } from '../_atoms';
import { useHydrateAtoms } from 'jotai/utils';

export default function HydrateAtom({
  invoices,
}: {
  invoices: InvoiceWithClient[];
}) {
  useHydrateAtoms([[invoicesAtom, invoices]]);

  return <></>;
}
