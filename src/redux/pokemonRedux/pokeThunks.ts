import { requestPokeAPI } from '../../APIs/pokeAPI'
import { MyThunkAction } from '../types/MyThunkAction'
import { endLoading, setPokemonList, startLoading } from './pokeActions'

export function fetchPokemonList(offset: number): MyThunkAction {
  return async dispatch => {
    dispatch(startLoading())
    const pokemonList = await requestPokeAPI(offset)
    dispatch(setPokemonList(pokemonList))
    dispatch(endLoading())
  }
}
