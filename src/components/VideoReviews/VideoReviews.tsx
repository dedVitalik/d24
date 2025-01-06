import { Roboto, Source_Sans_3 } from 'next/font/google';
import { useTranslations } from 'next-intl';

const roboto = Roboto({
  weight: ['500', '700'],
  subsets: ['latin', 'cyrillic']
});

const sourceSans = Source_Sans_3({
  weight: ['500'],
  subsets: ['latin', 'cyrillic']
});

export function VideoReviews() {
  const t = useTranslations('VideoRewies');

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
        <div className='flex flex-wrap justify-center gap-4 lg:flex-nowrap '>
          <div className='basis-full-full justify-items-end p-4 lg:basis-1/2'>
            <iframe
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
              className='h-auto max-w-full'
              frameBorder={0}
              height={315}
              referrerPolicy='strict-origin-when-cross-origin'
              src='https://www.youtube.com/embed/vIG6Ua09aSo?si=UoiRBwMmckma_Ves'
              title='YouTube video player'
              width={560}
            />
          </div>
          <div className='basis-full-full bg-white px-4 py-8  lg:basis-1/2'>
            <p
              className={`m-0 pb-2  text-base  leading-6 tracking-wide text-neutral-600 placeholder:font-medium ${sourceSans.className}`}
            >
              {t(`text1`)}
            </p>
            <p
              className={`m-0 p-0 text-base  leading-6 tracking-wide text-neutral-600 placeholder:font-medium ${sourceSans.className}`}
            >
              {t(`text2`)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
