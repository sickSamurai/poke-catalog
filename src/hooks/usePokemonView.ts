import { useMySelector } from '../redux/hooks'

export const usePokemonView = () => {
  const { pokeList, actualPage } = useMySelector(state => state.pokemonReducer)
  return { pokeList, actualPage }
}
