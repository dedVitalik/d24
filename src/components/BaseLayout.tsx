import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import Navigation from '@/components/Navigation';

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className='h-full' lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
        </NextIntlClientProvider>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
