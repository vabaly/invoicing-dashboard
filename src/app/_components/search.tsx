'use client';

import { TextField } from '@mui//material';
import { useAtom } from 'jotai';
import { searchValueAtom } from '../_atoms';

export function Search() {
  const [searchValue, setSearchValue] = useAtom(searchValueAtom);
  return (
    <TextField
      className="w-full"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    />
  );
}
