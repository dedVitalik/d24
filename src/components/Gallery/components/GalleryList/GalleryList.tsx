'use client';

import type { galleryItemsType } from '@/types/gallery';
import { useState } from 'react';
import GalleryItem from '../GalleryItem/GallaryItem';
import { EmblaGallaryCarousel } from '../EmblaCarousel/EmblaGallaryCarousel';
import { useEffect } from 'react';

export default function GalleryList({ items, tagNameTranslate }: any) {
  const len = items.length;
  const [sliderNumber, setSliderNumber] = useState(0);
  const [tagName, setTagName] = useState('all');

  useEffect(() => {
    if (sliderNumber === 0) {
      let html = document.querySelector('html');
      let top;

      if (html) {
        let topStyle = html.style.top;
        top = topStyle.replace('px', '');
        top = parseInt(top);
      }

      html?.removeAttribute('style');
      html?.classList.remove('fixed', 'w-full', 'overflow-y-scroll');

      if (top) {
        window.scrollTo({ top: -top });
      }
    } else {
      const html = document.querySelector('html');
      let scrollHeight;
      if (html) {
        scrollHeight = '-' + Math.round(html.scrollTop) + 'px';
        html?.classList.add('fixed', 'w-full', 'overflow-y-scroll');
        html.style.top = scrollHeight;
      }
    }
  }, [sliderNumber]);

  function getItems(items: galleryItemsType[], tagName: string) {
    let newItems = [];
    if (tagName == 'all') {
      for (let i = 0; i < items.length; i++) {
        const itemObject = {
          tag: items[i].tag,
          image: items[i].image,
          vertical: items[i].vertical,
          id: i,
        };
        newItems.push(itemObject);
      }
      return newItems;
    } else {
      for (let i = 0; i < items.length; i++) {
        if (items[i].tag == tagName) {
          const itemObject = {
            tag: items[i].tag,
            image: items[i].image,
            vertical: items[i].vertical,
            id: i,
          };
          newItems.push(itemObject);
        }
      }
      return newItems;
    }
  }

  return (
    <div>
      {sliderNumber ? <EmblaGallaryCarousel items={items} setNumber={setSliderNumber} number={sliderNumber} /> : null}

      <div className='leading-6 text-center text-zinc-800 mb-6  md:mx-auto' style={{ listStyle: 'outside' }}>
        <ul
          className='inline-block relative flex-wrap p-0 m-0 text-center uppercase  md:max-w-[75%] max-w-full'
          id='gallery-flters'
          style={{ listStyle: 'none' }}
        >
          {tagNameTranslate.map((tag: any, index: any) => (
            <li
              key={index}
              onClick={() => setTagName(tag.tagName)}
              className={`${
                tagName === tag.tagName ? 'bg-sky-600 text-white' : ' bg-white text-sky-600'
              } gallery_tag inline-block overflow-hidden relative py-3 px-5 mt-0 mr-5 mb-2 ml-2 text-sm font-normal cursor-pointer hover:text-white focus:text-white`}
              style={{
                zIndex: 1,
                borderRadius: 30,
                boxShadow: '0 7px 25px rgb(41 41 41 / 27%)',
                transition: '0.4s',
                borderWidth: 'medium',
                listStyle: 'none',
              }}
            >
              <span
                className='block absolute w-0 h-0 bg-zinc-700 '
                style={{
                  zIndex: -1,
                  borderRadius: 30,
                  transform: 'translate(-50%, -50%)',
                  transition: 'width 0.5s ease-in-out, height 0.5s ease-in-out',
                  listStyle: 'none',
                }}
              />

              {tag.tagNameTranslate}
            </li>
          ))}
        </ul>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 auto-rows-max grid-flow-row-dense gap-2'>
        {getItems(items, tagName).map((item, index) => (
          <div
            key={index}
            onClick={() => setSliderNumber(item.id+1)}
            className={`${item.vertical ? 'row-span-2' : ''} overflow-hidden rounded cursor-pointer`}
          >
        
            <GalleryItem vertical={item.vertical} image={item.image} len={len} keyNumber={index + 1} />
          </div>
        ))}
      </div>
    </div>
  );
}
