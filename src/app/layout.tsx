import '~/styles/globals.css';

import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';

import { TRPCReactProvider } from '~/trpc/react';
import i18n from '~/i18n';

export const metadata: Metadata = {
  title: i18n.t('siteInfo.title'),
  description: i18n.t('siteInfo.description'),
  icons: [{ rel: 'icon', url: '/favicon.png' }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
