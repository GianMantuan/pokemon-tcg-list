import 'react-native-gesture-handler';

import React, { useContext, useReducer, useEffect, Suspense, useState } from 'react';
import { StatusBar, ActivityIndicator, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import CardsContext from './store/context/CardsContext';
import CardsReducer from './store/reducer/CardsRecuder';

import Routes from './routes';
import { getCards } from './services/api';
import './locales';

export default function App(): JSX.Element {
  const { t } = useTranslation();
  const initialState = useContext(CardsContext);
  const [state, dispatch] = useReducer(CardsReducer, initialState);
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchCards(): Promise<void> {
      if (_.isEmpty(state.cards)) {
        const cards = await getCards();
        if (!cards) {
          setError(true)
        }

        dispatch({
          type: 'ADD_CARDS',
          payload: _.orderBy(cards, 'name', 'asc'),
        });
      }
    }
    fetchCards();
  });

  return (
    <CardsContext.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        <Suspense fallback={<ActivityIndicator />}>
          <StatusBar barStyle="default" backgroundColor="#FFFF" translucent />
          <Routes />
          {error ? Alert.alert(`${t('errorTitle')}`, `${t('errorMessage')}`, [{
            text: "Ok",
            onPress: () => console.log("ok button pressed")
          },]) : null}
        </Suspense>
      </NavigationContainer>
    </CardsContext.Provider>
  );
}
