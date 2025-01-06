import { useTranslations } from 'next-intl';
import { SectionWrapper } from '@/components';
import type { galleryItemsType } from '@/types/gallery';
import GalleryList from './components/GalleryList/GalleryList';

const galleryItems: Array<galleryItemsType> = [
  {
    tag: 'yard',
    image: '/images/gallery/1.jpg',
    vertical: false
  },
  {
    tag: 'bathrooms',
    image: '/images/gallery/2.jpg',
    vertical: true
  },
  {
    tag: 'bathrooms',
    image: '/images/gallery/3.jpg',
    vertical: true
  },
  {
    tag: 'bedrooms',
    image: '/images/gallery/4.jpg',
    vertical: false
  },
  {
    tag: 'bedrooms',
    image: '/images/gallery/5.jpg',
    vertical: false
  },
  {
    tag: 'bedrooms',
    image: '/images/gallery/6.jpg',
    vertical: false
  },
  {
    tag: 'bathrooms',
    image: '/images/gallery/7.jpg',
    vertical: false
  },
  {
    tag: 'bathrooms',
    image: '/images/gallery/8.jpg',
    vertical: false
  },
  {
    tag: 'bedrooms',
    image: '/images/gallery/9.jpg',
    vertical: false
  },
  {
    tag: 'bedrooms',
    image: '/images/gallery/10.jpg',
    vertical: false
  },
  {
    tag: 'bedrooms',
    image: '/images/gallery/11.jpg',
    vertical: false
  },
  {
    tag: 'bedrooms',
    image: '/images/gallery/12.jpg',
    vertical: false
  },
  {
    tag: 'bedrooms',
    image: '/images/gallery/13.jpg',
    vertical: false
  },
  {
    tag: 'bedrooms',
    image: '/images/gallery/14.jpg',
    vertical: false
  }
];

type TagKeys = 'all' | 'bathrooms' | 'bedrooms' | 'yard';

export function Gallery() {
  const t = useTranslations('GalleryTagName');

  function onlyUnique(value: any, index: any, array: any) {
    return array.indexOf(value) === index;
  }

  function getTagName(items: Array<galleryItemsType>) {
    const tagName = [];
    for (let i = 0; i < items.length; i++) {
      tagName.push(items[i].tag);
    }

    return tagName.filter(onlyUnique);
  }

  function getTagNameTranslate() {
    const tagName = getTagName(galleryItems);
    const tagNameTranslate = [{ tagName: 'all', tagNameTranslate: t('all') }];
    for (let i = 0; i < tagName.length; i++) {
      const tag = tagName[i] as TagKeys;
      const tagObject = {
        tagName: tag,
        tagNameTranslate: t(tag)
      };
      tagNameTranslate.push(tagObject);
    }
    return tagNameTranslate;
  }

  return (
    <SectionWrapper name='Gallery'>
      <GalleryList items={galleryItems} tagNameTranslate={getTagNameTranslate()} />
    </SectionWrapper>
  );
}
