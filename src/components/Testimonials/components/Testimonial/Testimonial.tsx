
import { ImageConfigContext } from 'next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints';
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

const testimonialsList = [
  {
    author: 'Sara William',
    text:
      'Thank you very much. Awesome Template, Highly recommended. I’m impressed with your service. I’ve already told my friends about your template and your quick response, thanks again!',
    image: '/images/testimonials/testimonial-1.jpg',
  },
  {
    author: 'Elizabeth Will',
    text: 'Great Support, I would just like to say thank you for your prompt and effective service, for your friendly and professional support staff! I will recommend your expert company to all my friends.',
    image: '/images/testimonials/testimonial-2.jpg',
  },
  {
    author: 'William Hoy',
    text:
      'Wow Very Nice Team, I\'m so happy with your service. You managed to exceed my expectations! You guys are very efficient and I will refer more people and my social media to your company!',
    image: '/images/testimonials/testimonial-3.jpg',
  },
  {
    author: 'Sara William',
    text:
      'Thank you very much. Awesome Template, Highly recommended. I’m impressed with your service. I’ve already told my friends about your template and your quick response, thanks again!',
    image: '/images/testimonials/testimonial-4.jpg',
  },
  {
    author: 'Elizabeth Will',
    text: 'Great Support, I would just like to say thank you for your prompt and effective service, for your friendly and professional support staff! I will recommend your expert company to all my friends.',
    image: '/images/testimonials/testimonial-5.jpg',
  },
  {
    author: 'William Hoy',
    text:
      'Wow Very Nice Team, I\'m so happy with your service. You managed to exceed my expectations! You guys are very efficient and I will refer more people and my social media to your company!',
    image: '/images/testimonials/testimonial-6.jpg',
  }
];

export const Testimonial = () => {
  // const t = useTranslations('Testimonials');

  return (
    <>
     { testimonialsList.map((testimonial, index) => (
      <div key={index} className="embla__slide min-w-0 basis-1/2 shrink-0 grow-0 p-6">
        <Image
          width={150}
          height={150}
          src={testimonial.image}
          alt="testimonial"
          className="block p-1 my-0 mb-3 mx-auto w-24 max-w-full text-center align-middle border-2 border-white border-solid rounded-[50%]"
        />
        <p className="p-5 my-0 mx-auto mb-4  font-sans text-base font-light tracking-wide leading-5 text-center text-white rounded bg-sky-600">
        {testimonial.text}
        </p>
        <h6 className="m-0 mb-1 font-sans text-xl leading-7 text-center text-zinc-800">
        {testimonial.author}
        </h6>
        <ul className="p-0 m-0 leading-6 text-center list-none space-x-1">
          <li className="inline-block text-center">
            <span className='[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-amber-300'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </span>
          </li>
          <li className="inline-block text-center">
            <span className='[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-amber-300'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </span>
          </li>
          <li className="inline-block text-center">
            <span className='[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-amber-300'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </span>
          </li>
          <li className="inline-block text-center">
            <span className='[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-amber-300'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </span>
          </li>
          <li className="inline-block text-center">
            <span className='[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-amber-300'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </span>
          </li>
        </ul>
      </div>
      ))}
    </>

  );
};
