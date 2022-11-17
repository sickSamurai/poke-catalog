import { Box, Stack } from '@mui/material'
import React from 'react'

import { PageSearcher } from '../components/PageSearcher'
import { useMySelector } from '../redux/hooks'
import { LoadingView } from './LoadingView'
import { PokemonView } from './PokemonView'

export const MainView = () => {
  const { listIsLoading } = useMySelector(state => state.pokemonReducer)

  const ActiveView = listIsLoading ? <LoadingView /> : <PokemonView />

  return (
    <Box className='centered-container' flexDirection='column' height='100vh'>
      <Box className='spaced-container' flexDirection='column' flexGrow={1}>
        {ActiveView}
      </Box>
      <Stack direction='row' spacing={2} marginY={8}>
        <PageSearcher />
      </Stack>
    </Box>
  )
}
