import { Roboto, Source_Sans_3 } from 'next/font/google';

export const roboto = Roboto({
  weight: ['500', '700'],
  subsets: ['latin', 'cyrillic']
});

export const sourceSans = Source_Sans_3({
  weight: ['500'],
  subsets: ['latin', 'cyrillic']
});
