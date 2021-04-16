import React from 'react'
import { Text } from 'react-native'
import Header from '../../components/Header'

import { render, cleanup } from '@testing-library/react-native'
import renderer from 'react-test-renderer'

describe('Header Component', () => {
  afterEach(cleanup)

  it('should render Header component', () => {
    expect(renderer.create(<Header title="title" />)).toMatchSnapshot()
  })

  it('should not have subtitle rendered as a child', () => {
    const header = renderer.create(<Header title="title" />)

    expect(header.root.props.subtitle).toBeFalsy()
  })

  it('should have subtitle rendered as a child', () => {
    const header = renderer.create(<Header title="title" subtitle="subtitle" />)
    const loaderInst = header.root.findAllByType(Text)

    expect(loaderInst[1].props.children).toBe('subtitle')
  })
})