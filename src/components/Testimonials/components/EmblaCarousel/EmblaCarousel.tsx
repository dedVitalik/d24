'use client';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback } from 'react';
import { Testimonial } from '..';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { onDotButtonClick, scrollSnaps, selectedIndex } = useDotButton(emblaApi);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='embla relative overflow-hidden pt-16'>
      <div ref={emblaRef} className='embla__viewport'>
        <div className='embla__container flex'>
          <Testimonial />
        </div>
      </div>
      <div className='absolute right-0 top-0'>
        <button
          className='embla__prev mr-1  inline-block h-full  rounded p-0 transition-all duration-500 hover:bg-neutral-400'
          onClick={scrollPrev}
          type='button'
        >
          <span className='inline-block px-4 pb-3 pt-4 transition-all duration-500 [&>svg]:size-4 [&>svg]:fill-zinc-800 [&>svg]:hover:fill-white '>
            <svg viewBox='0 0 320 512' xmlns='http://www.w3.org/2000/svg'>
              <path d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
            </svg>
          </span>
        </button>
        <button
          className='embla__next inline-block rounded p-0 transition-all duration-500 hover:bg-neutral-400'
          onClick={scrollNext}
          type='button'
        >
          <span className='inline-block px-4 pb-3 pt-4 transition-all duration-500 [&>svg]:size-4 [&>svg]:fill-zinc-800 [&>svg]:hover:fill-white '>
            <svg viewBox='0 0 320 512' xmlns='http://www.w3.org/2000/svg'>
              <path d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z' />
            </svg>
          </span>
        </button>
      </div>

      <div className='embla__controls flex justify-center pt-6'>
        <div className='embla__dots flex flex-wrap justify-end space-x-2'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              className={'embla__dot m-1 w-2 h-2 leading-6 text-center rounded border-2 border-transparent border-solid cursor-pointer bg-zinc-300 text-zinc-800  hover:bg-white  hover:border-2 hover:border-sky-600 transition-all duration-500 inline-block'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
              onClick={() => onDotButtonClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
