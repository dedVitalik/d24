import { Roboto, Source_Sans_3 } from 'next/font/google';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const roboto = Roboto({
  weight: ['500', '700'],
  subsets: ['latin', 'cyrillic'],
});

const sourceSans = Source_Sans_3({
  weight: ['500'],
  subsets: ['latin', 'cyrillic'],
});

export function Documents2() {
  const t = useTranslations('Documents');

  return (
    <section className="pb-8 pt-32" >
      <div className='wrapper'>
        <div className='mb-10 text-center leading-6 text-zinc-800'>
          <h2
            className={`m-0 font-sans text-4xl font-semibold uppercase ${roboto.className}`}
            style={{ lineHeight: '1.3' }}
          >
            {t('section_name')}
          </h2>
          <h5
            className="mx-auto my-0 max-w-xl font-sans text-xl font-light uppercase leading-normal tracking-wider text-sky-600"
          >
            {t('section_desc')}
          </h5>
        </div>
        <div className='flex flex-wrap justify-center gap-4 md:flex-nowrap '>
          <div className='basis-full-full justify-items-end p-4 md:basis-1/2'>
            <Image
              alt={t('section_desc')}
              className='mb-4 max-w-full rounded-sm p-2  text-right'
              height={270}
              src='/images/documents/doc.jpg'
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
              }}
              width={270}
            />
          </div>
          <div className='basis-full-full bg-white px-4 py-8  md:basis-1/2'>
            <p
              className={`m-0 pb-2  text-base  leading-6 tracking-wide text-neutral-600 placeholder:font-medium ${sourceSans.className}`}
            >
              {t(`document1`)}
            </p>
            <p
              className={`m-0 p-0 text-base  leading-6 tracking-wide text-neutral-600 placeholder:font-medium ${sourceSans.className}`}
            >
              {t(`document2`)}

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
