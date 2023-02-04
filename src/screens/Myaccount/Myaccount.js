import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import { HeaderAuth } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Myaccount/Myaccount.styles';
import { account_back, fatacollection, barcode, Line, arrowicon } from '@/assets';
import { FONTS } from '@/theme/fonts';
import { navigate } from '@/navigation/NavigationRef';
import { NAVIGATION } from '@/constants';
export function Myaccount(props) {
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
    <ScrollView style={{}}>
      <HeaderAuth title={'My Account'} backToScreen={() => navigation.goBack()} />

      <View style={styles.container}>
        <ImageBackground source={account_back}
          style={{ width: '100%', height: 400, }}
        >
          <ImageBackground source={fatacollection}
            style={{ width: Dimensions.get('window').width - 70, height: '70%', marginTop: 30, alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}
          >
            <Text style={styles.Title}>Fota Collection Finbarr</Text>

            <View style={{ backgroundColor: 'white', height: '26%', width: '93%', marginTop: 5, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={barcode}
              />
            </View>

            <Image
              source={Line}
              style={{ width: '85%', alignSelf: 'center', marginTop: 25 }}
            />
            <View style={{ paddingTop: 15, flexDirection: 'row' }}>
              <Text style={styles.pointTitle}>You have </Text><Text style={styles.pointTitleAmount}>500 Points</Text>
            </View>
            <Image
              source={Line}
              style={{ width: '85%', alignSelf: 'center', marginTop: 10 }}
            />

          </ImageBackground>
          <TouchableOpacity onPress={() => {
            navigate(NAVIGATION.wallet);

          }} style={{marginTop:10, width: '40%', alignSelf: 'center', alignItems: 'center', alignContent: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', borderColor: '#AC9B7E', borderWidth: 1, padding: 10, borderRadius: 6 }}>
            <Text style={styles.BTNTitle}>Reedem Points</Text>
          </TouchableOpacity>

        </ImageBackground>
        <Text style={styles.titletransaction}>Transaction History</Text>
        <View style={{ backgroundColor: "#FFFF" }}>
        
          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', alignContent: 'center', paddingLeft: 20 }}>
            <View style={{ width: '15%', }}>
              <Image
                source={arrowicon}
              />
            </View>
            <View style={{ width: '70%', paddingTop: 20 }}>
              <Text style={styles.titletransactionname}>Welcome Points</Text>
              <Text style={styles.titletransactiondate}>Feb 28, 2022</Text>
            </View>
            <View style={{ width: '15%', }}>
              <Text style={styles.titletransactionprice}>500</Text>
            </View>
          </View>
          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', alignContent: 'center', paddingLeft: 20 }}>
            <View style={{ width: '15%', }}>
              <Image
                source={arrowicon}
              />
            </View>
            <View style={{ width: '70%', paddingTop: 20 }}>
              <Text style={styles.titletransactionname}>Welcome Points</Text>
              <Text style={styles.titletransactiondate}>Feb 28, 2022</Text>
            </View>
            <View style={{ width: '15%', }}>
              <Text style={styles.titletransactionprice}>500</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
