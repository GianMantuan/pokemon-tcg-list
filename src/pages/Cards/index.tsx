import { NavigationProp } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';
import Search from '../../components/Search';

import { Container } from './style';

import CardsContext from '../../store/context/CardsContext';

type Props = {
  navigation: NavigationProp;
};

export default function Cards({ navigation }: Props): JSX.Element {
  const { t } = useTranslation();
  const { state } = useContext(CardsContext);
  const [filtered, setFiltered] = useState(false);

  function searchFilter(text): void {
    if (text.length >= 3) {
      const formattedText = text.toLowerCase();

      const data = _.filter(state.cards, (pokemon) => {
        return pokemon.name.toLowerCase().includes(formattedText);
      });

      setFiltered(data);
    } else {
      setFiltered(false);
    }
  }

  return (
    <Container>
      <Header
        title="Pokedemon: The Card Game"
        subtitle={t('app_description')}
      />
      <Search searchFunction={searchFilter} />
      <PokemonCard pokemon={filtered || state.cards} navigation={navigation} />
    </Container>
  );
}
