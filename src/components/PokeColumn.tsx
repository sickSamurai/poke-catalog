import { List } from '@mui/material'
import React from 'react'

import { Pokemon } from '../types'
import { PokeItem } from './PokeItem'

interface Props {
  pokeItems: Pokemon[]
}

export const PokeColumn = ({ pokeItems }: Props) => {
  const PokeItemColumn = pokeItems.map((pokemon, index) => <PokeItem key={index} pokemon={pokemon} />)
  return <List sx={{ mx: 4, width: 'fit-content' }}>{PokeItemColumn}</List>
}
