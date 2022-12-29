export enum CharacterStatus {
  Dead = 'Dead',
  Alive = 'Alive',
  Unknown = 'unknown'
}

export enum CharacterGender {
  Female = 'Female',
  Male = 'Male',
  Genderless = 'Genderless',
  Unknown = 'unknown'
}

export interface ResourceBase {
  id: number
  name: string
  url: string
  created: string
}

export interface CharacterLocation {
  name: string
  url: string
}

export interface Character extends ResourceBase {
  status: 'Dead' | 'Alive' | 'unknown'
  species: string
  type: string
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
  origin: CharacterLocation
  location: CharacterLocation
  image: string
  episode: string[]
  firstEpisode?: string
}

export interface Episode extends ResourceBase {
  air_date: string
  episode: string
  character: string[]
}
