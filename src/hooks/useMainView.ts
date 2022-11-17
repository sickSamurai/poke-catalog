import { useEffect, useState } from 'react'

import { useMyDispatch, useMySelector } from '../redux/hooks'
import { decrementPage, fetchPokemonList, incrementPage, updateOffset } from '../redux/pokemonRedux'

export const useMainView = () => {
  const { listIsLoading, pokeList, actualPage, offset } = useMySelector(state => state.pokemonReducer)

  const dispatch = useMyDispatch()

  const goNextPage = () => {
    dispatch(incrementPage())
  }

  const goBackPage = () => {
    if (actualPage > 1) dispatch(decrementPage())
  }

  useEffect(() => {
    dispatch(updateOffset())
  }, [actualPage])

  useEffect(() => {
    dispatch(fetchPokemonList(offset))
  }, [offset])

  return { listIsLoading, goBackPage, goNextPage }
}
