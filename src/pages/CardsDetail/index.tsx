import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, Text} from 'react-native';

import BadgeList from '../../components/BadgeList';
import CardList from '../../components/CardList';

import {Header, Body, Title, ImageContainer, Image, Label} from './style';

export default function CardsDetail({route, navigation}): JSX.Element {
  const {t} = useTranslation();
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
        <Label>{t('type')}</Label>
        <BadgeList item={item.types} itemName={t('type')} />

        <Label>{t('res')}</Label>
        <BadgeList item={item.resistances} itemName={t('res')} />

        <Label>{t('weak')}</Label>
        <BadgeList item={item.weaknesses} itemName={t('weak')} />

        <Label>{t('atk')}</Label>
        <CardList item={item.attacks} />
      </Body>
    </ScrollView>
  );
}
