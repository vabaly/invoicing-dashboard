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
import { useAtomValue } from 'jotai';
import './invoice-list.css';
import InvoiceRow from './invoice-row';
import { addCommasToNumber } from '~/utils';
import { searchValueAtom } from '../_atoms';
import { filterByNameOrId } from '~/business/filter';

interface InvoiceListProps {
  invoices: InvoiceWithClient[];
}

// This function receives invoices as props and returns a table
export function InvoiceList({ invoices }: InvoiceListProps) {
  const searchValue = useAtomValue(searchValueAtom);
  const filteredInvoices = filterByNameOrId(invoices, searchValue);
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
        {filteredInvoices.map((invoice) => (
          <InvoiceRow invoice={invoice} key={invoice.invoiceNumber}>
            <TableCell component="th" scope="row">
              {invoice.invoiceNumber}
            </TableCell>
            <TableCell align="right">
              {invoice.client?.name ?? 'Unknown'}
            </TableCell>
            <TableCell align="right">
              {addCommasToNumber(invoice.total)}
            </TableCell>
            <TableCell align="right">{invoice.dueDate}</TableCell>
            <TableCell align="right">{invoice.status}</TableCell>
          </InvoiceRow>
        ))}
      </TableBody>
    </Table>
  );
}
