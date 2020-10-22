import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';

import {List, BadgeContainer, BadgeTitle} from './style';

type Props = {
  item: Array<any>;
  itemName: string;
};

function BadgeList({item, itemName}: Props): JSX.Element {
  const {t} = useTranslation();

  return (
    <List>
      {item ? (
        item.map((data, index) => (
          <BadgeContainer
            color={data.type ?? data}
            key={`${itemName}-${index}`}>
            <BadgeTitle>{data.type ?? data}</BadgeTitle>
          </BadgeContainer>
        ))
      ) : (
        <Text key="no-type">No {itemName}</Text>
      )}
    </List>
  );
}

export default BadgeList;
