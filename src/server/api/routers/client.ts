import mockClients from '~/data/clients-attelas.json';
import { createTRPCRouter, publicProcedure } from '../trpc';

export interface Client {
  clientId: string;
  name: string;
  email: string;
  address: string;
}

const clients: Client[] = mockClients;

export const clientRouter = createTRPCRouter({
  getList: publicProcedure.query(() => {
    return clients;
  }),
});
