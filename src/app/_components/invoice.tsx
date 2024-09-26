import { Typography } from '@mui/material';
import i18n from '~/i18n';
import classNames from 'classnames';
import { type InvoiceProps } from '~/types';
import { LineItems } from './line-items';
import { addCommasToNumber } from '~/utils';

export function InvoiceItem({
  title,
  text,
  small,
}: {
  title: string;
  text: string | number;
  small?: boolean;
}) {
  return (
    <div
      className={classNames('md:flex md:items-center', {
        'flex items-center': !small,
      })}
    >
      <Typography
        variant="subtitle1"
        className="text-gray-500 md:min-w-40 md:text-right"
      >
        {title}
        {i18n.t('colon')}
      </Typography>
      <Typography
        className={classNames('md:pl-8', {
          'pl-2': !small,
        })}
      >
        {text}
      </Typography>
    </div>
  );
}

interface InvoiceDetailProps extends InvoiceProps {
  small?: boolean;
}

export function InvoiceDetail({ invoice, small }: InvoiceDetailProps) {
  return (
    <div className="space-y-4">
      <Typography className="md:pl-4" variant="h6">
        {i18n.t('invoiceDetail.basicInfo')}
      </Typography>
      <div
        className={classNames('grid grid-cols-1 gap-4', {
          'md:grid-cols-2': !small,
        })}
      >
        <InvoiceItem
          small={small}
          title={i18n.t('invoiceTableHead.invoiceNumber')}
          text={invoice.invoiceNumber}
        />
        <InvoiceItem
          small={small}
          title={i18n.t('invoiceTableHead.dueDate')}
          text={invoice.dueDate}
        />
        <InvoiceItem
          small={small}
          title={i18n.t('invoiceTableHead.total')}
          text={addCommasToNumber(invoice.total)}
        />
        <InvoiceItem
          small={small}
          title={i18n.t('invoiceTableHead.status')}
          text={invoice.status}
        />
      </div>
      {invoice.client ? (
        <>
          <Typography className="pt-4 md:pl-4" variant="h6">
            {i18n.t('invoiceDetail.clientInfo')}
          </Typography>
          <div
            className={classNames('grid grid-cols-1 gap-4', {
              'md:grid-cols-2': !small,
            })}
          >
            <InvoiceItem
              small={small}
              title={i18n.t('invoiceDetail.clientId')}
              text={invoice.client.clientId}
            />
            <InvoiceItem
              small={small}
              title={i18n.t('invoiceTableHead.clientName')}
              text={invoice.client.name}
            />
            <InvoiceItem
              small={small}
              title={i18n.t('invoiceDetail.email')}
              text={invoice.client.email}
            />
            <InvoiceItem
              small={small}
              title={i18n.t('invoiceDetail.address')}
              text={invoice.client.address}
            />
          </div>
        </>
      ) : null}
      <Typography className="pt-4 md:pl-4" variant="h6">
        {i18n.t('invoiceDetail.lineItems')}
      </Typography>
      <LineItems lineItems={invoice.lineItems} />
    </div>
  );
}
