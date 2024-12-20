import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './home';
import FlatelistScreen from './listscreen';
import ScectionListScreen from './section-list-screen';
import TouchableScreen from './touchable-screen';
import ModalScreen from './modelScree';
import PooltoRefreshScreen from './pooltoRefresh';

export type StackParamList = {
  Home: undefined;
  FlatlistScreen: undefined;
  SectionListScreen: undefined;
  TouchableScreen: undefined;
  ModalScreen: undefined;
  PooltoRefreshScreen: undefined;
};

const Stack = createStackNavigator<StackParamList>();
export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FlatlistScreen" component={FlatelistScreen} />
      <Stack.Screen name="SectionListScreen" component={ScectionListScreen} />
      <Stack.Screen name="TouchableScreen" component={TouchableScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="PooltoRefreshScreen"
        component={PooltoRefreshScreen}
      />
    </Stack.Navigator>
  );
}
