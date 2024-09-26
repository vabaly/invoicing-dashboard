export const invoice = {
  clientId: 'test',
  client: {
    email: 'test@example.com',
    name: 'Test User',
    clientId: 'test',
    address: '123 Main St',
  },
  invoiceNumber: '12345',
  total: 100,
  dueDate: 'test',
  status: 'pending',
  lineItems: [],
};

export const invoices = [
  invoice,
  {
    clientId: 'test1',
    client: {
      email: 'test1@example.com',
      name: 'Test User1',
      clientId: 'test1',
      address: '123 Main St1',
    },
    invoiceNumber: '123451',
    total: 1000,
    dueDate: 'test1',
    status: 'draft',
    lineItems: [],
  },
];
