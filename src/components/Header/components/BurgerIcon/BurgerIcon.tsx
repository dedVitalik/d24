'use client';
import { useClickAway } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from 'react';
import { MenuItems } from '..';



export function BurgerIcon() {
  const [navbar, setNavbar] = useState(false);
  let ref = useRef<any>(null);
  ref = useClickAway(() => {
    setNavbar(false);
  });

  useEffect(
    () => {
      if (navbar) {
        document
          .querySelector("html")
          ?.classList
          .add("fixed", "w-full", "overflow-y-scroll");



      } else {
        document
          .querySelector("html")
          ?.classList
          .remove("fixed", "w-full", "overflow-y-scroll");
      }
    },
    [navbar]
  );


  return (
    <div ref={ref}>
      <button className='relative z-20 mt-2 h-8 w-9 items-center p-0 text-sm text-white focus:outline-none md:hidden'
        id='nav-button'
        onClick={() => setNavbar(!navbar)}
        type='button'
      >
        <span className='sr-only'>Open main menu</span>
        <div
          className={`absolute top-0 h-1 w-9 rounded bg-white transition-all duration-200 ${navbar ? 'top-3 -rotate-45' : ''
            }`}
         />
        <div
          className={`absolute top-3 h-1 w-9 rounded bg-white transition-all duration-200 ${navbar ? 'opacity-0' : ''}`}
         />
        <div
          className={`absolute top-6 h-1 w-9 rounded bg-white transition-all duration-200 ${navbar ? 'top-[0.75rem] rotate-45' : ''
            }`}
         />
      </button>
      <div className={`header-nav absolute -right-5 top-14 z-10 bg-white  transition-all duration-500 ease-in-out md:static md:w-full md:translate-x-0 md:bg-transparent md:opacity-100 ${navbar ? 'open' : ''
          } `}
        id='menu-list'
      >
        <div >
          <MenuItems />
        </div>


      </div>
    </div>
  );
}
