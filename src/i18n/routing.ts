import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['uk', 'ru'],
  defaultLocale: 'uk',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/pathnames': {
      uk: '/pathnames',
      ru: '/pfadnamen'
    },
    '/services': {
      uk: '/services',
      ru: '/services'
    },
    '/doctors': {
      uk: '/doctors',
      ru: '/doctors'
    },
    '/menu': {
      uk: '/menu',
      ru: '/menu'
    },
    '/gallery': {
      uk: '/gallery',
      ru: '/gallery'
    },
    '/blogs': {
      uk: '/blogs',
      ru: '/blogs'
    },
    '/book_appointment': {
      uk: '/book_appointment',
      ru: '/book_appointment'
    },
    '/contact': {
      uk: '/contact',
      ru: '/contact'
    }
  }
});

export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } = createNavigation(routing);
