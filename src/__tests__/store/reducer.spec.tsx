import CardsReducer from '../../store/reducer/CardsRecuder'

describe('Cards reducer', () => {
  it('should return the initial state', () => {
    const initialState = { cards: [] }
    expect(CardsReducer({ cards: [] }, {})).toEqual(initialState)
  })

  it('should handle ADD_CARDS', () => {
    expect(CardsReducer({ cards: [] }, {
      type: 'ADD_CARDS',
      payload: [{ name: 'card1' }]
    })).toEqual({ cards: [{ name: 'card1' }] })
  })
})