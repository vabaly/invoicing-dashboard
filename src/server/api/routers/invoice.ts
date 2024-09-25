import mockInvoices from '~/data/invoices-attelas.json';
import { createTRPCRouter, publicProcedure } from '../trpc';

export interface Invoice {
  invoiceNumber: string;
  clientId: string;
  dueDate: string;
  status: string;
  lineItems: InvoiceLineItem[];
}

export interface InvoiceLineItem {
  description: string;
  quantity: number;
  price: number;
}

const invoices: Invoice[] = mockInvoices;

export const invoiceRouter = createTRPCRouter({
  getList: publicProcedure.query(() => {
    return invoices;
  }),
});
