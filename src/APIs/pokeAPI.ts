import axios, { AxiosResponse } from 'axios'

import { Pokemon } from '../types'
import { PokeData, PokeResponse } from './PokeResponse'

const baseURL = 'https://pokeapi.co/api/v2/'
const limit = 12

type AxiosPokeResponsePromise = Promise<AxiosResponse<PokeData>>

export const requestPokeAPI = async (offset: number) => {
  const url = `${baseURL}pokemon?limit=${limit}&offset=${offset}`
  const response = await axios.get<PokeResponse>(url)
  const generalSearchResults = response.data.results

  const promises: Array<AxiosPokeResponsePromise> = []
  for (const result of generalSearchResults) promises.push(axios.get<PokeData>(result.url))
  const pokemonsData = (await Promise.all(promises)).map(response => response.data)
  return pokemonsData.map<Pokemon>(pokemonData => ({
    name: pokemonData.name,
    image: pokemonData.sprites.front_default
  }))
}
