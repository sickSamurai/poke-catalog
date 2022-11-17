import { Chip } from '@mui/material'
import { typography } from '@mui/system'
import React from 'react'

import { PokeGrid } from '../components/PokemonGrid'
import { usePokemonView } from '../hooks/usePokemonView'

export const PokemonView = () => {
  const { actualPage, pokeList } = usePokemonView()

  return (
    <>
      <Chip sx={{ typography: 'h5' }} color='primary' label={actualPage} />
      <PokeGrid pokeList={pokeList} />
    </>
  )
}
