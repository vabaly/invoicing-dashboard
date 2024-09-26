import '~/styles/globals.css';

import { type Metadata } from 'next';

import { TRPCReactProvider } from '~/trpc/react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import i18n from '~/i18n';
import { Header } from './_components/header';
import localFont from 'next/font/local';
import { ThemeProvider } from '@mui/material';
import theme from '~/theme';
import { HEADER_HEIGHT } from '~/constants';

const IBMFont = localFont({
  src: [
    {
      path: './_fonts/IBMPlexSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './_fonts/IBMPlexSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './_fonts/IBMPlexSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './_fonts/IBMPlexSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-ibm',
});

export const metadata: Metadata = {
  title: i18n.t('siteInfo.title'),
  description: i18n.t('siteInfo.description'),
  icons: [{ rel: 'icon', url: '/favicon.png' }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={IBMFont.variable}>
      <body>
        <TRPCReactProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <Header />
              <main
                className="space-y-4 p-4"
                style={{ paddingTop: HEADER_HEIGHT }}
              >
                {children}
              </main>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
