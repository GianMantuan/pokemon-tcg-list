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
        cardStyle: {backgroundColor: '#FFF'},
      }}
    >
      <App.Screen
        options={{headerShown: false}}
        name="Cards"
        component={Cards}
      />
      <App.Screen
        options={{
          headerStyle: {
            elevation: 0,
            borderBottomWidth: 0,
            backgroundColor: '#FFF',
            shadowColor: 'transparent',
          },
          title: 'Card Detail',
        }}
        name="CardsDetail"
        component={CardsDetail}
      />
    </App.Navigator>
  );
}
