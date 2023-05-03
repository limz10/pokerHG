import { writable } from 'svelte/store';

export const gameList = writable({
  user: "",
  games: [],
})

export const game = writable({
  name: "",
  location: "",
  description: "",
  time: null,
  players: [],
})

export const player = writable({
  name: "",
  starting: 0,
  ending: 0,
})
