import Image from 'next/image';
import i18n from '~/i18n';

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 h-16 flex-col bg-white">
      <div className="flex flex-1 items-center p-4">
        <Image width={103.75} height={24} src={'/logo.png'} alt="logo" />
        <h1 className="ml-4 text-2xl font-bold">{i18n.t('header.title')}</h1>
      </div>
      <hr className="divide-y" />
    </header>
  );
}
