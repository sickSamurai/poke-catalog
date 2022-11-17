import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Pokemon } from '../../types/Pokemon'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: { pokeList: new Array<Pokemon>(), listIsLoading: false, actualPage: 1, offset: 0 },
  reducers: {
    startLoading(state) {
      state.listIsLoading = true
    },

    setPokemonList(state, action: PayloadAction<Pokemon[]>) {
      state.pokeList = action.payload
    },

    endLoading(state) {
      state.listIsLoading = false
    },

    setPage(state, action: PayloadAction<number>) {
      state.actualPage = action.payload
    },

    incrementPage(state) {
      state.actualPage++
    },

    decrementPage(state) {
      state.actualPage--
    },

    updateOffset(state) {
      state.offset = (state.actualPage - 1) * 12
    }
  }
})
