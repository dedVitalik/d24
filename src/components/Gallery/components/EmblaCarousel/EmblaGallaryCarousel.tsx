'use client';
import React, { useCallback } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import useEmblaCarousel from 'embla-carousel-react';
import type { galleryItemsType } from '@/types/gallery';
import GallaryItem from '../GalleryItem/GallaryItem';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
  items: any;
}

export const EmblaGallaryCarousel = ({ items, setNumber, number }: IProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', startIndex: number - 1 });

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const len = items.length;

  return (
    <div
      className='embla  overflow-hidden fixed h-screen w-full bottom-0 left-0 py-2 z-30'
      onClick={(e: any) => {
        if (e.target.outerHTML.indexOf('embla__slide') != -1) {
          setNumber(0);
        }
      }}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
    >
      <button
        className='absolute top-0 right-7 text-white text-4xl  cursor-pointer hover:text-zinc-400  h-6 w-6 z-40 '
        onClick={() => setNumber(0)}
      >
        ×
      </button>

      <div className='embla__viewport relative' ref={emblaRef}>
        <div className='embla__container flex items-center justify'>
          {items.map((item: galleryItemsType, index: string) => (
            <div key={index} className='embla__slide w-full basis-full h-5/6 shrink-0 grow-0 p-6'>
              <div className='w-11/12 sm:w-fit mx-auto h-auto'>
                <Image
                  src={item.image}
                  width={item.vertical ? '410' : '700'}
                  height={item.vertical ? '700' : '410'}
                  alt='фото'
                  className='h-auto'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className='absolute left-0 top-1/2 h-16 embla__prev  transition-all duration-500  rounded p-0 inline-block mr-1'
        onClick={scrollPrev}
      >
        <span className='inline-block [&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-white [&>svg]:hover:fill-zinc-400 px-4 pt-4 pb-3 transition-all duration-500 '>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
            <path d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
          </svg>
        </span>
      </button>
      <button
        className='absolute top-1/2 right-0 h-16 embla__next  transition-all duration-500 rounded p-0 inline-block'
        onClick={scrollNext}
      >
        <span className='inline-block [&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-white [&>svg]:hover:fill-zinc-400 px-4 pt-4 pb-3 transition-all duration-500 '>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
            <path d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z' />
          </svg>
        </span>
      </button>

      <div className='w-fit mx-auto'>
        <div className='embla__controls flex justify-start ml-auto'>
          <div className='embla__dots flex flex-wrap justify-end space-x-2'>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot m-1 w-2 h-2 leading-6 text-center rounded border-2 border-transparent border-solid cursor-pointer bg-zinc-300 text-zinc-800  hover:bg-white  hover:border-2 hover:border-sky-600 transition-all duration-500 inline-block'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : '',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
