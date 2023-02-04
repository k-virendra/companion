import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { Wallet } from '@/screens';

const Stack = createNativeStackNavigator();

export function WalletNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name={NAVIGATION.wallet} component={Wallet} />
    </Stack.Navigator>
  );
}
