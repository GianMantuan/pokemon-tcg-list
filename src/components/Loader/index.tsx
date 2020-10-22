import React from 'react';
import {ActivityIndicator} from 'react-native';

import {LoaderContainer, LoaderText} from './style';

type Props = {
  text?: string;
};

export default function Loader({text}: Props): JSX.Element {
  return (
    <LoaderContainer>
      <ActivityIndicator size={36} />
      {text ? <LoaderText>{text}</LoaderText> : null}
    </LoaderContainer>
  );
}
