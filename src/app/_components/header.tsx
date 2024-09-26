import { Typography } from '@mui/material';
import i18n from '~/i18n';
import AppBreadcrumbs from './breadcrumbs';

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 flex-col space-y-2 bg-white py-4">
      <div className="flex flex-1 items-center px-4">
        <Typography
          className="text-gradient ml-4"
          variant="h5"
          fontWeight="bold"
        >
          {i18n.t('siteInfo.title')}
        </Typography>
      </div>
      <AppBreadcrumbs />
      <hr className="divide-y" />
    </header>
  );
}
