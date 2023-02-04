import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { HeaderAuth } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/RewardProgrammeGuest/RewardProgrammeGuest.styles';
import SearchBar from "react-native-dynamic-search-bar";
import { rewardimage, logo } from '@/assets';
import { FONTS } from '@/theme/fonts';
import { navigate } from '@/navigation/NavigationRef';
import { NAVIGATION } from '@/constants';
export function RewardProgrammeGuest(props) {
  const { navigation, route } = props;
  const { colors } = useTheme();
  const [spinnerVisibility, setspinnerVisibility] = useState(false);
  const [searchText, setsearchText] = useState('');
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
      <HeaderAuth title={'Reward Programme'} backToScreen={() => navigation.goBack()} />

      <View style={styles.container}>
        <SearchBar
          style={{
            borderRadius: 26, backgroundColor: "#FFFFFF", elevation: 10,
            shadowColor: '#F6F6F6', height: 46,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 1,

          }}
          searchIconImageStyle={{ tintColor: '#192537', height: 17, width: 16 }}
          height={56}
          fontSize={14}
          fontColor="#000000"
          fontFamily={FONTS.PoppinsRegular}
          iconColor="#192537"
          placeholderTextColor='#000000'
          cancelIconColor="#192537"
          //  backgroundColor="#ba312f"
          spinnerVisibility={spinnerVisibility}
          placeholder="Search here..."
          shadowStyle={styles.searchBarShadowStyle}
          onChangeText={handleOnChangeText}
          onClearPress={handleOnClear}
        />
        <TouchableOpacity onPress={() => {
            navigate(NAVIGATION.rewardOffer);

          }} style={styles.boxcontain}>
          <Image
            source={rewardimage}
          />
          <View style={styles.rewardtitle}>
            <Image
              source={logo}
              style={{ height: 52, width: 52 }}
            />
            <Text style={styles.Title}>Add your membership</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxcontain}>
          <Image
            source={rewardimage}
          />
          <View style={styles.rewardtitle}>
            <Image
              source={logo}
              style={{ height: 52, width: 52 }}
            />
            <Text style={styles.Title}>Add your membership</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxcontain}>
          <Image
            source={rewardimage}
          />
          <View style={styles.rewardtitle}>
            <Image
              source={logo}
              style={{ height: 52, width: 52 }}
            />
            <Text style={styles.Title}>Add your membership</Text>
          </View>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}
