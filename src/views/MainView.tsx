import { Box, Button, Stack } from '@mui/material'
import React from 'react'

import { SearchPageForm } from '../components/SearchPageForm'
import { useMainView } from '../hooks/useMainView'
import { LoadingView } from './LoadingView'
import { PokemonView } from './PokemonView'

export const MainView = () => {
  const { listIsLoading, goBackPage, goNextPage } = useMainView()

  const ActiveView = listIsLoading ? <LoadingView /> : <PokemonView />

  return (
    <Box className='centered-container' flexDirection='column' height='100vh'>
      <Box className='spaced-container' flexDirection='column' flexGrow={1}>
        {ActiveView}
      </Box>
      <Stack direction='row' spacing={2} marginY={8}>
        <SearchPageForm />
        <Button variant='contained' onClick={goBackPage}>
          BACK
        </Button>
        <Button variant='contained' onClick={goNextPage}>
          NEXT
        </Button>
      </Stack>
    </Box>
  )
}
