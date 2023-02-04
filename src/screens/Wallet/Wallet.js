import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { TYPES } from '@/actions/UserActions';
import { HeaderAuth } from '@/components';
import { styles } from '@/screens/AddMembership/AddMembership.styles';
import { wallethotel } from '@/assets';
import { navigate } from '@/navigation/NavigationRef';
import { NAVIGATION } from '@/constants';
export function Wallet(props) {
  const { navigation, route } = props;
  const { colors } = useTheme();

  return (
    <ScrollView style={{ backgroundColor:'white'}}>
      <View style={{paddingTop:10}}>
      <HeaderAuth title={'Your Wallet'}  />
      </View>
      <View style={styles.container}>
        <ImageBackground source={wallethotel}
          style={{ width: 335, height: 400, }}>
         
        </ImageBackground>
        <TouchableOpacity style={{borderRadius:6,marginTop:20, backgroundColor:'#EEEEEE',height:50,width:'90%',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <Text style={styles.Title}>Clear Hotel</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}
