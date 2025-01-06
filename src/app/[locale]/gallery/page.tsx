import { setRequestLocale } from 'next-intl/server';
import { Gallery, PageLayout } from '@/components';

type Props = {
  params: { locale: string };
};

export default function PathnamesPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);
  return (
    <PageLayout>
      <Gallery />
    </PageLayout>
  );
}
