import { Roboto, Source_Sans_3 } from 'next/font/google';
import Image from 'next/image';



const roboto = Roboto({
  weight: ['500', '700'],
  subsets: ['latin', 'cyrillic'],
});

const sourceSans = Source_Sans_3({
  weight: ['500'],
  subsets: ['latin', 'cyrillic'],
});

interface GallaryItemType {
  vertical: boolean;
  image: string;
  len: number;
  keyNumber: number;
}

export default function GalleryItem({ image, keyNumber, len, vertical }: GallaryItemType) {

  return ( 
        <Image alt='фото' className='size-full' height={300} src={image} width={400} />
  );
}
