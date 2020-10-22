import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import Carousel from 'react-native-snap-carousel';
import {IPokemon} from '../../interfaces';

import BadgeList from '../BadgeList';

import {
  Container,
  Card,
  CardImage,
  Image,
  CardContent,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
} from './style';

const {width} = Dimensions.get('screen');

type Props = {
  pokemon: Array<IPokemon>;
  navigation: NavigationProp;
};

export default function PokemonCard({pokemon, navigation}: Props): JSX.Element {
  const {t} = useTranslation();

  return (
    <Container>
      <Carousel
        layout="default"
        data={pokemon}
        sliderWidth={width}
        itemWidth={width / 1.3}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('CardsDetail', item)}
          >
            <Card key={item.id}>
              <CardImage>
                <Image source={{uri: item.imageUrl}} />
              </CardImage>
              <CardContent>
                <CardBody>
                  <CardTitle>ID</CardTitle>
                  <CardText>{item.id}</CardText>
                </CardBody>
                <CardBody>
                  <CardTitle>{t('name')}</CardTitle>
                  <CardText>{item.name}</CardText>
                </CardBody>
              </CardContent>
              <CardFooter>
                <CardTitle>{t('cardType')}</CardTitle>
                <BadgeList item={item.types} itemName={t('type')} />
              </CardFooter>
            </Card>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
}
