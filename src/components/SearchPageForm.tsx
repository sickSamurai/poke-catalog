import { TextField } from '@mui/material'
import React, { FormEvent, useState } from 'react'

import { useSearchPageForm } from '../hooks/useSearchPageForm'
import { SearchInputAdornment } from './SearchInputAdornment'

export const SearchPageForm = () => {
  const { inputValue, onChange, searchPage } = useSearchPageForm()

  return (
    <form onSubmit={searchPage}>
      <TextField
        value={inputValue}
        onChange={onChange}
        type='number'
        label='Busca una pagina'
        InputProps={{ endAdornment: <SearchInputAdornment /> }}
      />
    </form>
  )
}
