export const TILES = [
  'AAEEGN',
  'ELRTTY',
  'AOOTTW',
  'ABBJOO',
  'EHRTVW',
  'CIMOTU',
  'DISTTY',
  'EIOSST',
  'DELRVY',
  'ACHOPS',
  'HIMNQU',
  'EEINSU',
  'EEGHNW',
  'AFFKPS',
  'HLNNRZ',
  'DEILRX'
]

export const API_KEY = '7d9f1980-6810-488c-8baf-0e61bd2dd99b'

export const Actions = {
  INITIALIZE_SCORECARD: 'INITIALIZE_SCORECARD',
  INITIALIZE_BOARD: 'INITIALIZE_BOARD',
  INITIALIZE_TIMER: 'INITIALIZE_TIMER',
  DECREASE_TIMER: 'DECREASE_TIMER',
  APPEND_CURRENT_WORD: 'APPEND_CURRENT_WORD',
  REMOVE_FROM_CURRENT_WORD: 'REMOVE_FROM_CURRENT_WORD',
  ADD_WORD: 'ADD_WORD',
  RESET_CURRENT_WORD: 'RESET_CURRENT_WORD'
}

export const defaultState = {
  scorecard: [],
  board: [],
  currentWord: [],
  timer: 180
}

// For reference only. Not used in game code.
export const sampleState = {
  scorecard: [
    {
      word: 'cat',
      score: '1'
    },
    {
      word: 'that',
      score: '1'
    },
    {
      word: 'eat',
      score: '1'
    },
    {
      word: 'cheat',
      score: '2'
    }
  ],
  board: [
    'Z',
    'A',
    'E',
    'H',
    'E',
    'T',
    'C',
    'S',
    'A',
    'X',
    'Y',
    'I',
    'T',
    'H',
    'A',
    'Q'
  ],
  currentWord: [1, 5, 4],
  timer: 180
}
