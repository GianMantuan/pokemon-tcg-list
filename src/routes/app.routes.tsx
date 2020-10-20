import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Cards from '../pages/Cards';
import CardsDetail from '../pages/CardsDetail';

type RootParamList = {
  Cards: undefined;
  CardsDetail: undefined;
};

const App = createStackNavigator<RootParamList>();

export default function AppRoutes(): JSX.Element {
  return (
    <App.Navigator
      initialRouteName="Cards"
      screenOptions={{
        cardShadowEnabled: false,
        headerStyle: {
          height: 50,
          borderBottomWidth: 0,
          backgroundColor: '#c1c7c9',
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <App.Screen
        name="Cards"
        component={Cards}
        options={{title: 'List of Pokemon Cards'}}
      />
      <App.Screen name="CardsDetail" component={CardsDetail} />
    </App.Navigator>
  );
}
