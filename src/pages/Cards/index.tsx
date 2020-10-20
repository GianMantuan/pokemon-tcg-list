import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import CardsContext from '../../store/context/CardsContext';

import PokemonCard from '../../components/PokemonCard';

import {Container} from './style';

export default function Cards(): JSX.Element {
  const {state} = useContext(CardsContext);

  return (
    <Container>
      <PokemonCard pokemon={state.cards} />
    </Container>
  );
}
