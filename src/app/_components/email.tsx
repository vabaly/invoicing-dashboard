import { Chip, Divider, Typography } from '@mui/material';
import i18n from '~/i18n';
import { type InvoiceProps } from '~/types';
import { InvoiceItem } from './invoice';
import { addCommasToNumber } from '~/utils';
// import { InvoiceDetail } from './invoice';

export function FakeEmail({ invoice }: InvoiceProps) {
  const { client } = invoice;

  if (!client) {
    return null;
  }

  return (
    <div className="w-full border px-4 md:w-[500px]">
      <div className="flex items-center space-x-2 border-b p-4">
        <Typography className="min-w-14 text-gray-500" variant="body2">
          {i18n.t('email.to')}
        </Typography>
        <Chip label={client.email} size="small" />
      </div>
      <div className="flex items-center space-x-2 border-b p-4">
        <Typography className="min-w-14 text-gray-500" variant="body2">
          {i18n.t('email.subject')}
        </Typography>
        <Typography variant="body2">{i18n.t('email.subjectValue')}</Typography>
      </div>
      <div className="max-h-[350px] space-y-2 overflow-auto p-4 md:max-h-[450px]">
        <Typography variant="body1">
          {i18n.t('email.bodies.0', { name: invoice.client?.name ?? 'user' })}
        </Typography>
        <Typography className="pb-2" variant="body1">
          {i18n.t('email.bodies.1')}
        </Typography>
        <Divider />
        {/* <InvoiceDetail small invoice={invoice} /> */}
        <InvoiceItem
          small
          title={i18n.t('invoiceTableHead.invoiceNumber')}
          text={invoice.invoiceNumber}
        />
        <InvoiceItem
          small
          title={i18n.t('invoiceTableHead.total')}
          text={addCommasToNumber(invoice.total)}
        />
        <InvoiceItem
          small
          title={i18n.t('invoiceTableHead.dueDate')}
          text={invoice.dueDate}
        />
        <Divider />
        <Typography className="pt-2" variant="body1">
          {i18n.t('email.bodies.2')}
        </Typography>
        <Typography variant="body1">{i18n.t('email.bodies.3')}</Typography>
      </div>
    </div>
  );
}
