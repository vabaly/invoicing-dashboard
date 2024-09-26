import { Typography } from '@mui/material';
import i18n from '~/i18n';
import classNames from 'classnames';
import { type InvoiceProps } from '~/types';
import { LineItems } from './line-items';

function InvoiceItem({
  title,
  text,
}: {
  title: string;
  text: string | number;
}) {
  return (
    <div className="flex items-center">
      <Typography
        variant="subtitle1"
        className="min-w-40 text-right text-gray-500"
      >
        {title}
        {i18n.t('colon')}
      </Typography>
      <Typography className="pl-8">{text}</Typography>
    </div>
  );
}

interface InvoiceDetailProps extends InvoiceProps {
  small?: boolean;
}

export function InvoiceDetail({ invoice, small }: InvoiceDetailProps) {
  return (
    <div className="space-y-4">
      <Typography className="pl-4" variant="h6">
        {i18n.t('invoiceDetail.basicInfo')}
      </Typography>
      <div
        className={classNames('grid grid-cols-1 gap-4', {
          'md:grid-cols-2': !small,
        })}
      >
        <InvoiceItem
          title={i18n.t('invoiceTableHead.invoiceNumber')}
          text={invoice.invoiceNumber}
        />
        <InvoiceItem
          title={i18n.t('invoiceTableHead.dueDate')}
          text={invoice.dueDate}
        />
        <InvoiceItem
          title={i18n.t('invoiceTableHead.total')}
          text={invoice.total}
        />
        <InvoiceItem
          title={i18n.t('invoiceTableHead.status')}
          text={invoice.status}
        />
      </div>
      {invoice.client ? (
        <>
          <Typography className="pl-4 pt-4" variant="h6">
            {i18n.t('invoiceDetail.clientInfo')}
          </Typography>
          <div
            className={classNames('grid grid-cols-1 gap-4', {
              'md:grid-cols-2': !small,
            })}
          >
            <InvoiceItem
              title={i18n.t('invoiceDetail.clientId')}
              text={invoice.client.clientId}
            />
            <InvoiceItem
              title={i18n.t('invoiceTableHead.clientName')}
              text={invoice.client.name}
            />
            <InvoiceItem
              title={i18n.t('invoiceDetail.email')}
              text={invoice.client.email}
            />
            <InvoiceItem
              title={i18n.t('invoiceDetail.address')}
              text={invoice.client.address}
            />
          </div>
        </>
      ) : null}
      <Typography className="pl-4 pt-4" variant="h6">
        {i18n.t('invoiceDetail.lineItems')}
      </Typography>
      <LineItems lineItems={invoice.lineItems} />
    </div>
  );
}
