import React from 'react';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import BadgeList from '../BadgeList';
import {
  Container,
  Content,
  Details,
  Item,
  ItemText,
  Title,
  Text,
} from './style';

import {IPokemonAttacks} from '../../interfaces';

type Props = {
  visible: boolean;
  item: IPokemonAttacks;
  setVisible: any;
};

const styles = StyleSheet.create({
  ModalStyle: {
    justifyContent: 'flex-end',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    height: '70%',
  },
});

export default function ModalView({
  visible,
  item,
  setVisible,
}: Props): JSX.Element {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={() => setVisible(false)}
      onBackButtonPress={() => setVisible(false)}
      hideModalContentWhileAnimating
      style={styles.ModalStyle}
      animationOutTiming={500}
    >
      <Container>
        <Content>
          <Title>{item.name}</Title>
          <Text>{item.text}</Text>
          <Details>
            <Item>
              <ItemText>Damage</ItemText>
              <ItemText>
                {item.damage == '' ? 'No Damage' : item.damage}
              </ItemText>
            </Item>
            <Item>
              <ItemText>Mana Cost ({item.convertedEnergyCost})</ItemText>
              <BadgeList item={item.cost} itemName="Cost" />
            </Item>
          </Details>
        </Content>
      </Container>
    </Modal>
  );
}
