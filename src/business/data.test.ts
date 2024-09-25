import { type Invoice } from '~/server/api/routers/invoice';
import { type Client } from '~/server/api/routers/client';
import { processInvoices } from './data';

// Mock data
const invoices: Invoice[] = [
  {
    invoiceNumber: 'INV001',
    clientId: 'CLIENT001',
    dueDate: '2023-08-31',
    status: 'Paid',
    lineItems: [
      {
        price: 10,
        quantity: 2,
        description: 'Description',
      },
    ],
  },
];

const clients: Client[] = [
  {
    clientId: 'CLIENT001',
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main St',
  },
];

describe('processInvoices', () => {
  test('should process invoices and add client name and total', () => {
    const processedInvoices = processInvoices(invoices, clients);

    expect(processedInvoices).toHaveLength(1);
    expect(processedInvoices[0]).toBeTruthy();
    if (processedInvoices[0]) {
      expect(processedInvoices[0].clientName).toEqual('John Doe');
      expect(processedInvoices[0].total).toEqual(20);
    }
  });
});
