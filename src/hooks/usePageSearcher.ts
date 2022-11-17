import { useEffect, useState } from 'react'

import { useMyDispatch, useMySelector } from '../redux/hooks'
import { decrementPage, fetchPokemonList, incrementPage, updateOffset } from '../redux/pokemonRedux'

export const usePageSearcher = () => {
  const { actualPage, offset } = useMySelector(state => state.pokemonReducer)

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

  return { goBackPage, goNextPage }
}
