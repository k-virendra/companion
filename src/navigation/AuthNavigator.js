import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { Login,Forgotpassword,Registration,AddMembership,RewardOffer,Resetpassword,RewardProgrammeGuest } from '@/screens';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {


  return (
    <Stack.Navigator>
      <Stack.Screen
        component={AddMembership}
        name={NAVIGATION.addMembership}
        options={{ headerShown: false }}
      /> 
      
      <Stack.Screen
        component={RewardProgrammeGuest}
        name={NAVIGATION.rewardProgrammeGuest}
        options={{ headerShown: false }}
      /> 
   
        <Stack.Screen
        component={RewardOffer}
        name={NAVIGATION.rewardOffer}
        options={{ headerShown: false }}
      /> 
     
      <Stack.Screen
        component={Login}
        name={NAVIGATION.login}
        options={{ headerShown: false }}
      />
    
      
       {/* <Stack.Screen
        component={Wallet}
        name={NAVIGATION.wallet}
        options={{ headerShown: false }}
      /> */}
       <Stack.Screen
        component={Forgotpassword}
        name={NAVIGATION.forgotpassword}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        component={Resetpassword}
        name={NAVIGATION.resetpassword}
        options={{ headerShown: false }}
      />
      
       <Stack.Screen
        component={Registration}
        name={NAVIGATION.registration}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
}
