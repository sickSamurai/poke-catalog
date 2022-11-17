import { Box, Chip, CircularProgress, Stack } from '@mui/material'
import React from 'react'

import { PageSearcher } from '../components/PageSearcher'
import { PokeGrid } from '../components/PokemonGrid'
import { useMySelector } from '../redux/hooks'

export const MainView = () => {
  const { pokeList, listIsLoading, actualPage } = useMySelector(state => state.pokemonReducer)

  const ActiveView = listIsLoading ? <CircularProgress /> : <PokeGrid pokeList={pokeList} />

  return (
    <Box className='centered-container' flexDirection='column' height='100vh'>
      <Box className='spaced-container' flexDirection='column' flexGrow={1}>
        <Chip sx={{ typography: 'body1' }} color='primary' label={actualPage} />
        {ActiveView}
      </Box>
      <Stack direction='row' spacing={2} marginY={8}>
        <PageSearcher />
      </Stack>
    </Box>
  )
}
