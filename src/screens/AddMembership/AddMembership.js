import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { TYPES } from '@/actions/UserActions';
import { HeaderAuth } from '@/components';
import { styles } from '@/screens/AddMembership/AddMembership.styles';
import { addmember_bag } from '@/assets';
import { navigate } from '@/navigation/NavigationRef';
import { NAVIGATION } from '@/constants';
export function AddMembership(props) {
  const { navigation, route } = props;
  const { colors } = useTheme();

  return (
    <ScrollView style={{ backgroundColor:'white'}}>
      <View style={{paddingTop:10}}>
       <HeaderAuth title={'Add or Register your membership'} />
      </View>
      <View style={styles.container}>
        <ImageBackground source={addmember_bag}
          style={{ width: 335, height: 400,right:7 }}        >
          <TouchableOpacity onPress={() => {
            navigate(NAVIGATION.rewardProgrammeGuest);

          }} style={{ width: '50%', position: 'absolute', top: 10, left: 120, right: 0, bottom: 45, justifyContent: 'flex-end', alignItems: 'flex-start' }}>
            <Text style={styles.Title}>Add your </Text>
            <Text style={styles.Title}>membership</Text>
          </TouchableOpacity>
        </ImageBackground>

      </View>
    </ScrollView>
  );
}
