import '~/styles/globals.css';

import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';

import { TRPCReactProvider } from '~/trpc/react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import i18n from '~/i18n';
import { Header } from './_components/header';
import AppBreadcrumbs from './_components/breadcrumbs';

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
        <TRPCReactProvider>
          <AppRouterCacheProvider>
            <Header />
            <main className="space-y-4 p-4 pt-20">
              <AppBreadcrumbs />
              {children}
            </main>
          </AppRouterCacheProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
