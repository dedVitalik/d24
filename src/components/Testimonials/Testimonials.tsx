import { Roboto } from 'next/font/google';
import { useTranslations } from 'next-intl';
import { EmblaCarousel } from './components';

const roboto = Roboto({
  weight: ['500', '700'],
  subsets: ['latin', 'cyrillic']
});

export function Testimonials() {
  const t = useTranslations('Testimonials');
  const SLIDE_COUNT = 5;
  Array.from(Array(SLIDE_COUNT).keys());
  return (
    <section className='mb-16 pt-32'>
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
        <div>
          <EmblaCarousel />
        </div>
      </div>
    </section>
  );
}
