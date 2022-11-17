import { Button, TextField } from '@mui/material'
import React, { FormEvent, useState } from 'react'

import { usePageSearcher } from '../hooks/usePageSearcher'
import { useSearchPageForm } from '../hooks/usePageSearcherForm'
import { useMySelector } from '../redux/hooks'
import { SearchInputAdornment } from './SearchInputAdornment'

export const PageSearcher = () => {
  const { listIsLoading } = useMySelector(state => state.pokemonReducer)
  const { goBackPage, goNextPage } = usePageSearcher()
  const { inputValue, onChange, searchPage } = useSearchPageForm()

  return (
    <>
      <form onSubmit={searchPage}>
        <TextField
          value={inputValue}
          onChange={onChange}
          type='number'
          label='Busca una pagina'
          InputProps={{ endAdornment: <SearchInputAdornment /> }}
        />
      </form>
      <Button variant='contained' onClick={goBackPage} disabled={listIsLoading} children='BACK' />
      <Button variant='contained' onClick={goNextPage} disabled={listIsLoading} children='NEXT' />
    </>
  )
}
