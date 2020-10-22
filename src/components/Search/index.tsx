import React from 'react';
import {useTranslation} from 'react-i18next';

import {SearchInput} from './style';

export default function Search({searchFunction}): JSX.Element {
  const {t} = useTranslation();

  return (
    <SearchInput
      placeholder={t('search')}
      onChangeText={(text) => searchFunction(text)}
      underlineColorAndroid="transparent"
    />
  );
}
