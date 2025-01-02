import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { siteNavItems } from '@/constants';

export const MenuItems = () => {
  const t = useTranslations('Navigation');
  return (
    <ul className='relative min-w-72 h-screen md:h-full flex bg-inherit flex-col md:justify-end p-4 md:p-0 mt-4 font-medium rounded-lg rtl:space-x-reverse md:flex-row md:mt-0 md:border-0'>
      {siteNavItems.map((item) => (
        <li key={item.href} className={`cursor-pointer ${item.href}`}>
          <Link
            href={`/${item.href}`}
            className={`block text-base py-2 px-4 font-sans font-normal tracking-wide bg-transparent cursor-pointer lg:px-2 text-neutral-800 md:text-white  hover:text-neutral-800 focus:text-sky-800 transition-all duration-500`}
          >
            {t(item.title)}
          </Link>
        </li>
      ))}
    </ul>
  );
};
