import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { type InvoiceWithClient } from '~/business';
import i18n from '~/i18n';

export function LineItems({
  lineItems,
}: {
  lineItems: InvoiceWithClient['lineItems'];
}) {
  return (
    <Table className="max-w-[500px]">
      {/* Defines the table header */}
      <TableHead>
        {/* Define a row in the table header */}
        <TableRow>
          <TableCell>{i18n.t('lineItem.description')}</TableCell>
          <TableCell align="right">{i18n.t('lineItem.price')}</TableCell>
          <TableCell align="right">{i18n.t('lineItem.quantity')}</TableCell>
        </TableRow>
      </TableHead>
      {/* Define the table body */}
      <TableBody>
        {/* Map through the invoices array, rendering each line item */}
        {lineItems.map((lineItem) => (
          <TableRow
            key={lineItem.description}
            className="cursor-pointer"
            // Style for the last row to remove the border
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {lineItem.description}
            </TableCell>
            <TableCell align="right">{lineItem.price}</TableCell>
            <TableCell align="right">{lineItem.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
