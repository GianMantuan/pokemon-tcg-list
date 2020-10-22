import 'react-native-gesture-handler';

import React, {useContext, useReducer, useEffect, Suspense} from 'react';
import {StatusBar, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import _ from 'lodash';

import CardsContext from './store/context/CardsContext';
import CardsReducer from './store/reducer/CardsRecuder';

import Routes from './routes';
import {api} from './services/api';
import './locales';

export default function App(): JSX.Element {
  const initialState = useContext(CardsContext);
  const [state, dispatch] = useReducer(CardsReducer, initialState);

  useEffect(() => {
    async function fetchCards(): Promise<void> {
      if (_.isEmpty(state.cards)) {
        const {data} = await api.get(`/cards`);
        dispatch({
          type: 'ADD_CARDS',
          payload: _.orderBy(data.cards, 'name', 'asc'),
        });
      }
    }
    fetchCards();
  });

  return (
    <CardsContext.Provider value={{state, dispatch}}>
      <NavigationContainer>
        <StatusBar barStyle="default" backgroundColor="#FFFF" translucent />
        <Suspense fallback={<ActivityIndicator />}>
          <Routes />
        </Suspense>
      </NavigationContainer>
    </CardsContext.Provider>
  );
}
