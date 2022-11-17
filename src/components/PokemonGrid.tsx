import { Box } from '@mui/material'
import React from 'react'

import { Pokemon } from '../types'
import { PokeColumn } from './PokeColumn'

interface Props {
  pokeList: Pokemon[]
}

export const PokeGrid = ({ pokeList }: Props) => {
  return (
    <Box display='flex' flexDirection='row'>
      <PokeColumn pokemons={pokeList.slice(0, 3)} />
      <PokeColumn pokemons={pokeList.slice(3, 6)} />
      <PokeColumn pokemons={pokeList.slice(6, 9)} />
      <PokeColumn pokemons={pokeList.slice(9, 12)} />
    </Box>
  )
}
