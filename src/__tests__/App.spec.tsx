import React from 'react'
import App from '../App'

import { cleanup, act, waitFor } from '@testing-library/react-native'
import renderer from 'react-test-renderer'


describe('App Page', () => {
  afterEach(cleanup)

  it('should render App component', async () => {
    jest.useFakeTimers();

    await act(async () => {
      const app = renderer.create(<App />)
      expect(app).toMatchSnapshot();
    })
  })
})
