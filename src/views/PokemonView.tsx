import { Chip } from '@mui/material'
import React from 'react'

import { PokeGrid } from '../components/PokemonGrid'
import { useMySelector } from '../redux/hooks'

export const PokemonView = () => {
  const { pokeList, actualPage } = useMySelector(state => state.pokemonReducer)

  return (
    <>
      <Chip sx={{ typography: 'body1' }} color='primary' label={actualPage} />
      <PokeGrid pokeList={pokeList} />
    </>
  )
}
