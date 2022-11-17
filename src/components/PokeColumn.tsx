import { List } from '@mui/material'
import React from 'react'

import { Pokemon } from '../types'
import { PokeItem } from './PokeItem'

interface Props {
  pokemons: Pokemon[]
}

export const PokeColumn = ({ pokemons }: Props) => {
  const PokeItemColumn = pokemons.map((pokemon, index) => <PokeItem key={index} pokemon={pokemon} />)
  return <List sx={{ mx: 4, width: 'fit-content' }}>{PokeItemColumn}</List>
}
