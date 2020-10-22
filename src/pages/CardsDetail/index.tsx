import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import BadgeList from '../../components/BadgeList';
import CardList from '../../components/CardList';
import ModalView from '../../components/Modal';

import {Header, Body, Title, ImageContainer, Image, Label} from './style';

export default function CardsDetail({route, navigation}): JSX.Element {
  const [visible, setVisible] = useState(false);
  const item = route.params;

  return (
    <ScrollView>
      <Header>
        <Title>{item.name}</Title>
        <Text>#{item.nationalPokedexNumber}</Text>
      </Header>
      <ImageContainer>
        <Image source={{uri: item.imageUrlHiRes}} />
      </ImageContainer>
      <Body>
        <Label>Types</Label>
        <BadgeList item={item.types} itemName="Types" />

        <Label>Resistances</Label>
        <BadgeList item={item.resistances} itemName="Resistances" />

        <Label>Weaknesses</Label>
        <BadgeList item={item.weaknesses} itemName="Weaknesses" />

        <Label>Attacks</Label>
        <CardList item={item.attacks} />
      </Body>
    </ScrollView>
  );
}
