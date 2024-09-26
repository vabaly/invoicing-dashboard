'use client';

import { Breadcrumbs, Link, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import i18n from '~/i18n';

export default function AppBreadcrumbs() {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);
  const pathNamesWithHome = [i18n.t('breadcrumbs.home'), ...pathNames];

  return (
    <Breadcrumbs className="px-4" aria-label="breadcrumb">
      {pathNamesWithHome.map((pathName, index) => {
        const to = '/' + pathNamesWithHome.slice(1, index + 1).join('/');
        // The last breadcrumb is the current page, so it doesn't have a link
        if (index === pathNamesWithHome.length - 1) {
          return (
            <Typography key={index} color="text.primary">
              {pathName}
            </Typography>
          );
        } else {
          return (
            <Link
              underline="hover"
              component={NextLink}
              href={to}
              key={index}
              color="text.primary"
            >
              {pathName}
            </Link>
          );
        }
      })}
    </Breadcrumbs>
  );
}
