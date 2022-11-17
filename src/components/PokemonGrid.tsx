import { Box } from '@mui/material'
import React from 'react'

import { Pokemon } from '../types'
import { PokeColumn } from './PokeColumn'

interface Props {
  pokeList: Pokemon[]
}

export const PokeGrid = ({ pokeList }: Props) => {
  const PokeColumns: JSX.Element[] = []

  for (let i = 0; i < 12; i += 3) PokeColumns.push(<PokeColumn pokeItems={pokeList.slice(i, i + 3)} />)

  return (
    <Box display='flex' flexDirection='row'>
      {PokeColumns}
    </Box>
  )
}
