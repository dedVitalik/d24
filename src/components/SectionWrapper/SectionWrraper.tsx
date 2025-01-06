import { useTranslations } from 'next-intl';
import { roboto } from '@/fonts';

interface PostShowProps {
  children: React.ReactNode;
  name: string;
}

export function SectionWrapper({ children, name }: PostShowProps) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const t = useTranslations(name);
  return (
    <section className='pb-8 pt-32'>
      <div className='wrapper'>
        <div className='mb-10 text-center leading-6 text-zinc-800'>
          <h2
            className={`m-0 font-sans text-4xl font-semibold uppercase ${roboto.className}`}
            style={{ lineHeight: '1.3' }}
          >
            {t('section_name')}
          </h2>
          <h5 className='mx-auto my-0 max-w-xl font-sans text-xl font-light uppercase leading-normal tracking-wider text-sky-600'>
            {t('section_desc')}
          </h5>
        </div>
        {children}
      </div>
    </section>
  );
}
