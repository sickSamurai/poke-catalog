import { pokemonSlice } from './pokeSlice'

export const {
  setPokemonList,
  startLoading,
  endLoading,
  setPage,
  incrementPage,
  decrementPage,
  updateOffset
} = pokemonSlice.actions
