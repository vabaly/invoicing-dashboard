'use client';

import { TableRow } from '@mui/material';
import { debounce } from 'lodash';
import { useRouter } from 'next/navigation';
import { useMemo, type PropsWithChildren } from 'react';
import { DEBOUNCE_PARAMS } from '~/constants';
import { type InvoiceProps } from '~/types';

export default function InvoiceRow({
  invoice,
  children,
}: PropsWithChildren & InvoiceProps) {
  const router = useRouter();
  const handleRowClick = useMemo(
    () =>
      debounce(
        async (invoiceNumber: string) => {
          router.push(`/${invoiceNumber}`);
        },
        ...DEBOUNCE_PARAMS,
      ),
    [router],
  );

  return (
    <TableRow
      className="cursor-pointer hover:bg-gray-100"
      // Style for the last row to remove the border
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      onClick={() => handleRowClick(invoice.invoiceNumber)}
    >
      {children}
    </TableRow>
  );
}
