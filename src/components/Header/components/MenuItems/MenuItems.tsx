import { useTranslations } from 'next-intl';
import { siteNavItems } from '@/constants';
import { Link } from '@/i18n/routing';
import { siteNavItemType } from '@/types/header';

export function MenuItems() {
  const t = useTranslations('Navigation');
  return (
    <ul className='relative mt-4 flex h-screen min-w-72 flex-col rounded-lg bg-inherit p-4 font-medium md:mt-0 md:h-full md:flex-row md:justify-end md:border-0 md:p-0 rtl:space-x-reverse'>
      {siteNavItems.map((item: siteNavItemType) => (
        <li key={item.href} className={`cursor-pointer ${item.href}`}>
          <Link
            className='block cursor-pointer bg-transparent px-4 py-2 font-sans text-base font-normal tracking-wide text-neutral-800 transition-all duration-500  hover:text-neutral-800 focus:text-sky-800 md:text-white lg:px-2'
            href={`/${item.href}`}
          >
            {t(item.title)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
