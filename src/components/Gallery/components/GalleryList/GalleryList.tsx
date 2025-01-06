'use client';

import { useEffect , useState } from 'react';
import type { galleryItemsType } from '@/types/gallery';
import { EmblaGallaryCarousel } from '../EmblaCarousel/EmblaGallaryCarousel';
import GalleryItem from '../GalleryItem/GallaryItem';


export default function GalleryList({ items, tagNameTranslate }: any) {
  const len = items.length;
  const [sliderNumber, setSliderNumber] = useState(0);
  const [tagName, setTagName] = useState('all');

  useEffect(() => {
    if (sliderNumber === 0) {
      const html = document.querySelector('html');
      let top;

      if (html) {
        const topStyle = html.style.top;
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
        html.classList.add('fixed', 'w-full', 'overflow-y-scroll');
        html.style.top = scrollHeight;
      }
    }
  }, [sliderNumber]);

  function getItems(items: Array<galleryItemsType>, tagName: string) {
    const newItems = [];
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
      {sliderNumber ? <EmblaGallaryCarousel items={items} number={sliderNumber} setNumber={setSliderNumber} /> : null}

      <div className='mb-6 text-center leading-6 text-zinc-800  md:mx-auto' style={{ listStyle: 'outside' }}>
        <ul
          className='relative m-0 inline-block max-w-full flex-wrap p-0 text-center  uppercase md:max-w-[75%]'
          id='gallery-flters'
          style={{ listStyle: 'none' }}
        >
          {tagNameTranslate.map((tag: any, index: any) => (
            <li
              key={index}
              className={`${
                tagName === tag.tagName ? 'bg-sky-600 text-white' : ' bg-white text-sky-600'
              } gallery_tag relative mb-2 ml-2 mr-5 mt-0 inline-block cursor-pointer overflow-hidden px-5 py-3 text-sm font-normal hover:text-white focus:text-white`}
              onClick={() => setTagName(tag.tagName)}
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
                className='absolute block size-0 bg-zinc-700 '
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

      <div className='grid grid-flow-row-dense auto-rows-max  grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4'>
        {getItems(items, tagName).map((item, index) => (
          <div
            key={index}
            className={`${item.vertical ? 'row-span-2' : ''} cursor-pointer overflow-hidden rounded`}
            onClick={() => setSliderNumber(item.id+1)}
          >
        
            <GalleryItem image={item.image} keyNumber={index + 1} len={len} vertical={item.vertical} />
          </div>
        ))}
      </div>
    </div>
  );
}
