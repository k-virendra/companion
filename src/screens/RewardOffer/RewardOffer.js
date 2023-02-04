import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { HeaderAuth } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/RewardOffer/RewardOffer.styles';
import { offer, logo } from '@/assets';
import { FONTS } from '@/theme/fonts';
import { navigate } from '@/navigation/NavigationRef';
import { NAVIGATION } from '@/constants';
export function RewardOffer(props) {
  const { navigation, route } = props;
  handleOnChangeText = (text) => {
    // ? Visible the spinner
    setsearchText(text)
    setspinnerVisibility(true)
    if (text == '') {
      setspinnerVisibility(false)
    }
  };
  handleOnClear = () => {
    setspinnerVisibility(false)
  }
  return (
    <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
      <HeaderAuth title={'Rewards and Offers'} backToScreen={() => navigation.goBack()} />

      <View style={styles.container}>
        <View style={styles.boxcontain}>
          <View style={{width:'100%',height:158, justifyContent:"center",alignItems:"center",alignContent:'center'}}>
          <Image
           style={{width:'100%',height:'100%',borderRadius:6}}
            resizeMode='cover'
            source={offer}
          />
          </View>
          <View style={styles.rewardtitle}>
            <Text style={styles.Title}>Voucher The Kingsley</Text>
            <Text style={styles.Titledis}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
          </View>
          <TouchableOpacity onPress={() => {
            navigate(NAVIGATION.login);

          }}  style={styles.btn}>
          <Text style={styles.btnTitle}>Get This Offer</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxcontain}>
          <View style={{width:'100%',height:158, justifyContent:"center",alignItems:"center",alignContent:'center'}}>
          <Image
           style={{width:'100%',height:'100%',borderRadius:6}}
            resizeMode='cover'
            source={offer}
          />
          </View>
          <View style={styles.rewardtitle}>
            <Text style={styles.Title}>Voucher The Kingsley</Text>
            <Text style={styles.Titledis}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
          </View>
          <TouchableOpacity onPress={() => {
            navigate(NAVIGATION.login);

          }}  style={styles.btn}>
          <Text style={styles.btnTitle}>Get This Offer</Text>
          </TouchableOpacity>
        </View>

       

      </View>
    </ScrollView>
  );
}
