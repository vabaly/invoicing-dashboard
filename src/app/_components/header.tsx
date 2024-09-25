import Image from 'next/image';
import i18n from '~/i18n';

export function Header() {
  return (
    <header className="flex items-center p-4">
      <Image width={103.75} height={24} src={'/logo.png'} alt="logo" />
      <h1 className="ml-4 text-2xl font-bold">{i18n.t('header.title')}</h1>
    </header>
  );
}
