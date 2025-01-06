'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { Dispatch , SetStateAction, useCallback } from 'react';
import type { galleryItemsType } from '@/types/gallery';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';

interface IProps {
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
  items: any;
}

export function EmblaGallaryCarousel({ items, number, setNumber }: IProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', startIndex: number - 1 });

  const { onDotButtonClick, scrollSnaps, selectedIndex } = useDotButton(emblaApi);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const len = items.length;

  return (
    <div
      className='embla  fixed bottom-0 left-0 z-30 h-screen w-full overflow-hidden py-2'
      onClick={(e: any) => {
        if (e.target.outerHTML.indexOf('embla__slide') != -1) {
          setNumber(0);
        }
      }}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
    >
      <button
        className='absolute right-7 top-0 z-40 size-6  cursor-pointer text-4xl  text-white hover:text-zinc-400 '
        onClick={() => setNumber(0)}
      >
        ×
      </button>

      <div ref={emblaRef} className='embla__viewport relative'>
        <div className='embla__container justify flex items-center'>
          {items.map((item: galleryItemsType, index: string) => (
            <div key={index} className='embla__slide h-5/6 w-full shrink-0 grow-0 basis-full p-6'>
              <div className='mx-auto h-auto w-11/12 sm:w-fit'>
                <Image
                  alt='фото'
                  className='h-auto'
                  height={item.vertical ? '700' : '410'}
                  src={item.image}
                  width={item.vertical ? '410' : '700'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className='embla__prev absolute left-0 top-1/2 mr-1  inline-block h-16  rounded p-0 transition-all duration-500'
        onClick={scrollPrev}
      >
        <span className='inline-block px-4 pb-3 pt-4 transition-all duration-500 [&>svg]:size-6 [&>svg]:fill-white [&>svg]:hover:fill-zinc-400 '>
          <svg viewBox='0 0 320 512' xmlns='http://www.w3.org/2000/svg'>
            <path d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
          </svg>
        </span>
      </button>
      <button
        className='embla__next absolute right-0 top-1/2 inline-block  h-16 rounded p-0 transition-all duration-500'
        onClick={scrollNext}
      >
        <span className='inline-block px-4 pb-3 pt-4 transition-all duration-500 [&>svg]:size-6 [&>svg]:fill-white [&>svg]:hover:fill-zinc-400 '>
          <svg viewBox='0 0 320 512' xmlns='http://www.w3.org/2000/svg'>
            <path d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z' />
          </svg>
        </span>
      </button>

      <div className='mx-auto w-fit'>
        <div className='embla__controls ml-auto flex justify-start'>
          <div className='embla__dots flex flex-wrap justify-end space-x-2'>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                className={'embla__dot m-1 w-2 h-2 leading-6 text-center rounded border-2 border-transparent border-solid cursor-pointer bg-zinc-300 text-zinc-800  hover:bg-white  hover:border-2 hover:border-sky-600 transition-all duration-500 inline-block'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : '',
                )}
                onClick={() => onDotButtonClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
