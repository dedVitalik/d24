import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { roboto, sourceSans } from '@/fonts';

type ServiceItems = {
  [key in 'item0' | 'item1' | 'item2' | 'item3' | 'item4' | 'item5']: {
    title: string;
    description: string;
    image: string;
  };
};

const servicesImageList: Array<string> = Array.from({ length: 6 }, (_, i) => `/images/services/service-${i + 1}.jpg`);

export function Services() {
  const t = useTranslations('Services');

  return (
    <section className='pt-32'>
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
        <div className='flex flex-wrap'>
          {servicesImageList.map((image, index) => {
            const key = `item${index}` as keyof ServiceItems;
            return (
              <div key={index} className='basis-full-full px-4 py-8 md:basis-1/2 lg:basis-1/3'>
                <div
                  className='relative mb-2 overflow-hidden rounded-sm bg-white px-2 pb-4 pt-2 text-center leading-6 text-zinc-800'
                  style={{
                    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'
                  }}
                >
                  <Image
                    alt={t(`service_items.${key}.title`)}
                    className='mb-4 max-w-full border-none text-center align-middle'
                    height={338}
                    src={image}
                    width={507}
                  />
                  <h5
                    className={`mx-0 mb-2 mt-1 font-sans text-2xl font-medium capitalize leading-normal tracking-wider text-sky-600 ${roboto.className}`}
                  >
                    {t(`service_items.${key}.title`)}
                  </h5>
                  <p
                    className={`m-0 p-0 text-center  text-sm leading-6 tracking-wide text-neutral-600 placeholder:font-medium ${sourceSans.className}`}
                  >
                    {t(`service_items.${key}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
