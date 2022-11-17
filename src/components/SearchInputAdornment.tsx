import { Search } from '@mui/icons-material'
import { IconButton, InputAdornment } from '@mui/material'
import React from 'react'

export const SearchInputAdornment = () => {
  return (
    <InputAdornment position='end'>
      <IconButton type='submit' color='primary'>
        <Search />
      </IconButton>
    </InputAdornment>
  )
}
