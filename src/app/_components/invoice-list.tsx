'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { type InvoiceWithClient } from '~/business';
import i18n from '~/i18n';
import './invoice-list.css';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { debounce } from 'lodash';
import { DEBOUNCE_PARAMS } from '~/constants';

interface InvoiceListProps {
  invoices: InvoiceWithClient[];
}

// This function receives invoices as props and returns a table
export function InvoiceList({ invoices }: InvoiceListProps) {
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

  // Use material ui's table component
  return (
    <Table>
      {/* Defines the table header */}
      <TableHead>
        {/* Define a row in the table header */}
        <TableRow>
          {/* Define a table cell, displaying the content of the current language invoice number */}
          <TableCell>{i18n.t('invoiceTableHead.invoiceNumber')}</TableCell>
          <TableCell align="right">
            {i18n.t('invoiceTableHead.clientName')}
          </TableCell>
          <TableCell align="right">
            {i18n.t('invoiceTableHead.total')}
          </TableCell>
          <TableCell align="right">
            {i18n.t('invoiceTableHead.dueDate')}
          </TableCell>
          <TableCell align="right">
            {i18n.t('invoiceTableHead.status')}
          </TableCell>
        </TableRow>
      </TableHead>
      {/* Define the table body */}
      <TableBody>
        {/* Map through the invoices array, rendering each invoice */}
        {invoices.map((invoice) => (
          <TableRow
            key={invoice.invoiceNumber}
            className="cursor-pointer"
            // Style for the last row to remove the border
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            onClick={() => handleRowClick(invoice.invoiceNumber)}
          >
            <TableCell component="th" scope="row">
              {invoice.invoiceNumber}
            </TableCell>
            <TableCell align="right">
              {invoice.client?.name ?? 'Unknown'}
            </TableCell>
            <TableCell align="right">{invoice.total}</TableCell>
            <TableCell align="right">{invoice.dueDate}</TableCell>
            <TableCell align="right">{invoice.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
