import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import { TabBarIcon } from '@/components';
import { NAVIGATION } from '@/constants';
import { HomeNavigator } from '@/navigation/HomeNavigator';
import { ProfileNavigator } from '@/navigation/ProfileNavigator';
import { WalletNavigator } from '@/navigation/WalletNavigator';
import { rewardicon, rewardinactive,profile_active,profile_inactive,wallet,wallet_in,} from '@/assets';
import { FONTS } from '@/theme/fonts';
const Tab = createBottomTabNavigator();

export function AppNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#192537',
      inactiveTintColor:'#192537',
      style: {
        borderTopWidth: 0,
       paddingTop:4,
      backgroundColor: '#FFFFFF',
      borderColor:'#FFFFFF',
      borderWidth:0,
      elevation: 6, // for Android
        shadowOffset: {
          width: 0,
          height: 0, // for iOS
        },
        shadowColor: 'black',
        shadowOpacity: 0.8,
      },
      labelStyle:{color:'#192537', marginBottom:2,fontSize:12,fontFamily:FONTS.PoppinsRegular,fontWeight:"400"}
    }}
    >
       <Tab.Screen
          name="Reward"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Reward',
            tabBarIcon: ({color, focused}) =>
              focused ? (
                <Image
                source={rewardicon}
                />
              ) : (
                <Image
                source={rewardinactive}
                />
              ),
          }}
        />
         <Tab.Screen
          name="Wallet"
          component={WalletNavigator}
          options={{
            tabBarLabel: 'Wallet',
            tabBarIcon: ({color, focused}) =>
              focused ? (
                <Image
                  source={wallet}
                />
              ) : (
                <Image
                  source={wallet_in}
                />
              ),
          }}
        /> 
        <Tab.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, focused}) =>
              focused ? (
                <Image
                  source={profile_active}
                />
              ) : (
                <Image
                  source={profile_inactive}
                />
              ),
          }}
        /> 
      </Tab.Navigator> 
  );
}
