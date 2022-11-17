export type PokeResponse = {
  count: number
  next: string
  previous: string
  results: GeneralPokeData[]
}

export type GeneralPokeData = { name: string; url: string }

export type PokeData = {
  name: string
  sprites: {
    front_default: string
    other: { dream_world: PokeImage; home: PokeImage }
  }
}

type PokeImage = {
  front_default: string
}
