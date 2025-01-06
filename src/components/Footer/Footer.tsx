import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { siteNavItems } from '@/constants';

export function Footer() {
  const t = useTranslations('Navigation');
  return (
    <footer className='relative min-h-96 bg-sky-600/85 text-white/100'>
      <Image
        alt='Footer img'
        className='fixed left-0 top-0 h-screen w-full object-cover'
        fill
        sizes='100vw'
        src='/images/footer/footer-bg.jpg'
        style={{
          zIndex: -1
        }}
      />
      <div className='wrapper'>
        <div className='flex flex-wrap py-24 lg:flex-nowrap'>
          <div className='min-w-52 basis-full px-0 md:px-4 lg:basis-1/3'>
            <Link className='mb-3 inline-block' href='/'>
              <Image alt='Logo' height={62} src='/images/header/logo.png' width={200} />
            </Link>
            <p>
              Your health is our mission. Partner with us for exceptional healthcare. Schedule your appointment today
              and experience the difference of exceptional healthcare.
            </p>
            <div className='mt-5 flex justify-between px-4'>
              <div className='font-light leading-6 tracking-wide'>Mon-Fri</div>
              <div className='font-bold leading-6 tracking-wide'>8:00am–7:00pm</div>
            </div>
            <div className='flex justify-between px-4'>
              <div className='font-light leading-6 tracking-wide'>Sat-Sun</div>
              <div className='font-bold leading-6 tracking-wide'>11:00am–11:00pm</div>
            </div>
            <div className='mt-4 flex space-x-5'>
              <Link href='#'>
                <span className='transition-all duration-500 [&>svg]:size-4 [&>svg]:fill-white [&>svg]:hover:fill-zinc-800'>
                  <svg fill='currentColor' viewBox='0 0 320 512' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z' />
                  </svg>
                </span>
              </Link>
              <Link href='#'>
                <span className='transition-all duration-500 [&>svg]:size-4  [&>svg]:fill-white [&>svg]:hover:fill-zinc-800'>
                  <svg fill='currentColor' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z' />
                  </svg>
                </span>
              </Link>
              <Link href='#'>
                <span className='[&>svg]:size-4 [&>svg]:fill-white [&>svg]:hover:fill-zinc-800'>
                  <svg fill='currentColor' viewBox='0 0 576 512' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z' />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className='mt-14 min-w-52 basis-full px-0 md:basis-1/2 md:px-4 lg:mt-0 lg:basis-1/3'>
            <h5 className='before:content-"" relative mb-6 pb-4 text-xl font-medium leading-normal before:absolute before:bottom-0 before:left-0 before:h-[0.12rem] before:w-12 before:bg-sky-700'>
              Useful Links
            </h5>
            <ul className='flex flex-wrap'>
              {siteNavItems.map((item) => (
                <li key={item.href} className='basis-1/2 pr-2'>
                  <Link
                    className='inline-block pb-2 transition-all duration-500 hover:translate-x-2 hover:text-zinc-800'
                    href={`/${item.href}`}
                  >
                    <span className='text-2xl'>&#187; </span>
                    {t(item.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <address className='mt-14 min-w-52 basis-full px-0 not-italic md:basis-1/2  md:px-4 lg:mt-0 lg:basis-1/3'>
            <h5 className='before:content-"" relative mb-6 pb-4 text-xl font-medium leading-normal before:absolute before:bottom-0 before:left-0 before:h-[0.12rem] before:w-12 before:bg-sky-700'>
              Contact:
            </h5>
            <div className='text-base leading-normal'>Address:</div>
            <div className='space-x-2'>
              <span className='[&>svg]:size-4 [&>svg]:fill-white'>
                <svg className='inline' viewBox='0 0 576 512' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3z' />
                </svg>
              </span>
              <span>11 West Town, PB0 12345, United States</span>
            </div>
            <div className='mt-4 text-base leading-normal'>Phone:</div>
            <Link className='block cursor-pointer space-x-2' href='tel:1123456780'>
              <span className='[&>svg]:size-4 [&>svg]:fill-white'>
                <svg className='inline' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
                </svg>
              </span>
              <span>+1 1234 56 780</span>
            </Link>
            <Link className='block cursor-pointer space-x-2' href='tel:1123456780'>
              <span className='[&>svg]:size-4 [&>svg]:fill-white'>
                <svg className='inline' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
                </svg>
              </span>
              <span>+1 1234 56 780</span>
            </Link>
            <div className='mt-4 text-base leading-normal'>Email:</div>
            <Link className='cursor-pointer space-x-2' href='mailto:'>
              <span className='[&>svg]:size-4 [&>svg]:fill-white'>
                <svg className='inline' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z' />
                </svg>
              </span>
              <span>info@example.com</span>
            </Link>
          </address>
        </div>
      </div>
      <div className='bg-sky-600 py-6'>
        <div className='wrapper  flex justify-between space-x-6'>
          <div>Care - Medical © 2023 - Designed by Zr Themes.</div>
          <div className='hidden space-x-8 lg:flex'>
            <Link className='transition-all duration-500 hover:text-zinc-800' href='#'>
              Terms & Conditions
            </Link>
            <Link className='transition-all duration-500 hover:text-zinc-800' href='#'>
              Privacy Policy
            </Link>
            <Link className='transition-all duration-500 hover:text-zinc-800' href='#'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
