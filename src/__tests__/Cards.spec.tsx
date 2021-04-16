import React from 'react'
import { View } from 'react-native'

import Cards from '../pages/Cards/index'
import CardsContext from '../store/context/CardsContext'
import CardsReducer from '../store/reducer/CardsRecuder'

import { cleanup } from '@testing-library/react-native'
import renderer from 'react-test-renderer'

const NavigationProp = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})

describe('Cards Page', () => {
  let navigation: any

  afterEach(cleanup)

  beforeEach(() => {
    navigation = NavigationProp({})
  })

  it('should call Card component with a CardsContext', async () => {
    const state = { cards: [] }

    const cardsComponent = renderer.create(
      <CardsContext.Provider value={{ state, CardsReducer }}>
        <Cards navigation />
      </CardsContext.Provider >
    )

    expect(cardsComponent).toMatchSnapshot();
  })
})
