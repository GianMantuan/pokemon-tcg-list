import React, {useEffect} from 'react';
import {Dimensions, TouchableOpacity, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {
  Container,
  Card,
  CardImage,
  Image,
  CardContent,
  CardBody,
  CardTitle,
  CardText,
} from './style';

import {IPokemonCard} from '../../interfaces';

const {width} = Dimensions.get('screen');

export default function PokemonCard({pokemon}): JSX.Element {
  useEffect(() => console.log(pokemon));
  return (
    <Container>
      <Carousel
        layout="default"
        useScrollView={false}
        data={pokemon}
        loop
        sliderWidth={width}
        itemWidth={width}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => console.log('change screen')}>
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
                  <CardTitle>NAME</CardTitle>
                  <CardText>{item.name}</CardText>
                </CardBody>
              </CardContent>
            </Card>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
}
