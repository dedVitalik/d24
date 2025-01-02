import { pick } from 'next/dist/lib/pick';
import Image from 'next/image';
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { BurgerIcon } from './components';

export function Header() {
  const t = useTranslations('Header');
  const b = useTranslations('Button');
  const messages = useMessages();
  return (
    <header className="relative h-screen overflow-y-hidden">
      <Image
        alt="Hero img"
        fill
        sizes="100vw"
        src="/images/header/hiro-bg.jpg"
        style={{
          objectFit: 'cover',
          zIndex: -1
        }}
      />

      <div className="wrapper h-screen">
        <div className="hidden justify-between space-x-10 p-5 md:mt-5 md:flex">
          <div className="flex space-x-2">
            <Link href="/">
              <span className="[&>svg]:size-4 [&>svg]:fill-sky-600">
                <svg
                  fill="currentColor"
                  viewBox="0 0 320 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </Link>
            <Link href="/">
              <span className="[&>svg]:size-4 [&>svg]:fill-sky-600">
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
              </span>
            </Link>
            <Link href="/">
              <span className="[&>svg]:size-4 [&>svg]:fill-sky-600">
                <svg
                  fill="currentColor"
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                </svg>
              </span>
            </Link>
            <Link href="/">
              <span className="[&>svg]:size-4 [&>svg]:fill-sky-600">
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z" />
                </svg>
              </span>
            </Link>
            <Link href="/">
              <span className="[&>svg]:size-4 [&>svg]:fill-sky-600">
                <svg
                  fill="currentColor"
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                </svg>
              </span>
            </Link>
          </div>
          <address className="space-x-2 not-italic">
            <span className="[&>svg]:size-4 [&>svg]:fill-zinc-800">
              <svg
                className="inline"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3z" />
              </svg>
            </span>
            <span>11 West Town, PB0 12345, United States</span>
            <a className="space-x-2" href="tel:1123456780">
              <span className="[&>svg]:size-4 [&>svg]:fill-zinc-800">
                <svg
                  className="inline"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
              </span>
              <span>Phone: +1 1234 56 780</span>
            </a>
          </address>
        </div>
        <nav className="relative start-0 mt-10  md:mt-0">
          <div className="relative z-20 rounded bg-sky-600 p-4">
            <Link className="flex w-44 items-center sm:w-52" href="/">
              <Image
                alt="Logo"
                height={62}
                src="/images/header/logo.png"
                width={200}
              />
            </Link>
          </div>

          <div className="md:top-negative-[4.37rem] absolute right-5 top-6 md:relative md:z-30">
            <NextIntlClientProvider messages={pick(messages, ['Navigation'])}>
              <BurgerIcon />
            </NextIntlClientProvider>
          </div>
        </nav>
        <div className="mx-auto mt-24 w-full px-4 text-left md:mt-14">
          <div className="-mx-4 flex flex-wrap text-zinc-800">
            <div className="relative w-full px-4 md:max-w-full md:flex-shrink-0 md:flex-grow-0 md:basis-full lg:flex-shrink-0 lg:flex-grow-0">
              <div className="">
                <h2 className="m-0 font-sans text-3xl font-thin uppercase leading-normal text-neutral-800">
                  {t('subtitle')}
                </h2>
                <h1 className="visible mt-3 font-sans text-3xl font-black leading-normal text-neutral-800 opacity-100 md:text-5xl">
                  {t('title')}
                </h1>
                <p
                  className="mt-3 p-0 text-left font-sans text-sm font-medium uppercase tracking-wide text-neutral-800 opacity-100"
                  style={{maxWidth: 700}}
                >
                  {t('description')}
                </p>
                <h3 className="m-0 font-sans text-3xl font-semibold leading-normal text-neutral-800">
                  +1 234 56 780
                </h3>
                <div className="relative text-base font-light capitalize tracking-wider opacity-100">
                  <Link
                    className="relative mt-5 inline-block cursor-pointer overflow-hidden bg-zinc-700 px-10 py-4 text-center text-base font-normal capitalize text-white hover:bg-white hover:text-sky-600 focus:text-sky-600"
                    href="/"
                    style={{
                      textDecoration: 'none',
                      transition: '0.4s',
                      zIndex: 1,
                      borderRadius: 30,
                      boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'
                    }}
                  >
                    {b('make_an_appointment')}

                    <span
                      className="absolute block size-0 bg-white capitalize"
                      style={{
                        zIndex: -1,
                        borderRadius: 30,
                        transform: 'translate(-50%, -50%)',
                        transition:
                          'width 0.5s ease-in-out, height 0.5s ease-in-out'
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
