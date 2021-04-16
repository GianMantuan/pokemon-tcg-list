import React from 'react'
import { Text } from 'react-native'
import Loader from '../../components/Loader'

import { render, cleanup } from '@testing-library/react-native'
import renderer from 'react-test-renderer'

describe('Loader Component', () => {
  afterEach(cleanup)

  it('should render Loader component', () => {
    expect(renderer.create(<Loader />)).toMatchSnapshot()
  })

  it('should not have text rendered as a child', () => {
    const loader = renderer.create(<Loader />)

    expect(loader.root.props).toStrictEqual({})
  })

  it('should have text rendered as a child', () => {
    const loader = renderer.create(<Loader text="loading" />)
    const loaderInst = loader.root.findByType(Text)

    expect(loaderInst.props.children).toBe('loading')
  })
})