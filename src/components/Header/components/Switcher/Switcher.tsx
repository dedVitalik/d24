'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { ChangeEvent, useTransition } from 'react';

export function Switcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
    // eslint-disable-next-line func-style
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <label className='rounded border-2' htmlFor='language'>
      <p className='sr-only'>change language</p>
      <select
        className='bg-transparent py-2'
        defaultValue={localActive}
        disabled={isPending}
        id='language'
        name=''
        onChange={onSelectChange}
      >
        <option value='uk'>Українська</option>
        <option value='ru'>Русский</option>
      </select>
    </label>
  );
}
