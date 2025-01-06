import { setRequestLocale } from 'next-intl/server';
import { Documents, Documents2, PageLayout, Services, Testimonials, VideoReviews } from '@/components/';

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <PageLayout>
      <Services />
      <Testimonials />
      <Documents />
      <Documents2 />
      <VideoReviews />
    </PageLayout>
  );
}
