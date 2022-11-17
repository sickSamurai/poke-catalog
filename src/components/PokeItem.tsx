import { ListItem, ListItemText } from '@mui/material'
import React from 'react'

import { Pokemon } from '../types'

interface Props {
  pokemon: Pokemon
}

export const PokeItem = ({ pokemon }: Props) => {
  return (
    <ListItem disablePadding>
      <ListItemText primary={pokemon.name.toUpperCase()} />
      <img src={pokemon.image} alt={pokemon.name} loading='lazy' />
    </ListItem>
  )
}
