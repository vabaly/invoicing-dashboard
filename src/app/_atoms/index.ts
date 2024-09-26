import { type InvoiceWithClient } from '~/business';
import { atom } from 'jotai';

export const invoicesAtom = atom<InvoiceWithClient[]>([]);
