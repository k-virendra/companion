import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { Home,Myaccount,RewardOffer } from '@/screens';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name={NAVIGATION.home} component={Home} />
      <Stack.Screen options={{headerShown:false}} name={NAVIGATION.myaccount} component={Myaccount} />
      <Stack.Screen
        component={RewardOffer}
        name={NAVIGATION.rewardOffer}
        options={{ headerShown: false }}
      /> 
    </Stack.Navigator>
  );
}
