import { configureStore } from '@reduxjs/toolkit'

import { pokemonSlice } from './pokemonRedux/pokeSlice'

export const store = configureStore({
  reducer: { pokemonReducer: pokemonSlice.reducer }
})
