import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

import ModalView from '../Modal';
import {List, CardItem, CardText} from './style';

type Props = {
  item: Array<any>;
};

function CardList({item}: Props): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [attack, setAttack] = useState({});
  const {t} = useTranslation();

  return (
    <>
      {item ? (
        item.map((data, index) => (
          <List
            key={`attacks-${index}`}
            onPress={() => {
              setAttack(data);
              setVisible(true);
            }}>
            <CardItem>
              <CardText>{data.name}</CardText>
              <CardText>{data.damage}</CardText>
            </CardItem>
          </List>
        ))
      ) : (
        <CardText key="no-attacks">{t('noAtk')}</CardText>
      )}
      <ModalView visible={visible} setVisible={setVisible} item={attack} />
    </>
  );
}

export default CardList;
