//import { COLORS, FONTS, SF, SH } from '@/theme';
import { FONTS } from '@/theme/fonts';
import React from 'react';
import Scale, { moderateScale } from '@/helper/Scale';
import { StatusBar,StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { BackIcon } from '.';
import { Headerimage,back,logo } from '@/assets';
export function Header(props) {
  return (
    <ImageBackground source={Headerimage} style={styles.headercontainer}>
      <StatusBar barStyle="light-content" backgroundColor={'#192537'} />
      <View style={{ flexDirection:'row'}}>
      <View style={styles.backStyleview}>
        <TouchableOpacity style={styles.backStyle} onPress={props.backToScreen}>
          {props.backToScreen && (
            <Image source={back} />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
      <Image style={styles.logo} source={logo} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  headercontainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    paddingLeft: 5,
    paddingTop: 40,
    height: Scale.moderateScale(147),
  },
  headerTitle: {
    fontFamily: FONTS.PTBold,
   // fontWeight: '700',
   //fontStyle:'normal',
    fontSize: Scale.moderateScale(22),
    color: '#FFFFFF',
  },
  backStyleview:
  {
    flex: 0.5,
  },
  backStyle: {
    width: '55%',
    paddingHorizontal: moderateScale(10),
  },
  logo:
  {
    alignSelf:'center'
  }
});
