import {useTheme} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {Config} from 'react-native-config';
import {useSelector} from 'react-redux';
import {TextStyles} from '@/theme';
import {getUser} from '@/selectors/UserSelectors';
import {styles} from '@/screens/Home/Home.styles';
import {strings} from '@/localization';
import SplashScreen from 'react-native-splash-screen';
import {FONTS} from '@/theme/fonts';
import {HeaderAuth} from '@/components';
import {navigate} from '@/navigation/NavigationRef';
import {NAVIGATION} from '@/constants';
import SearchBar from 'react-native-dynamic-search-bar';
import {rewardimage, logo} from '@/assets';
export function Home() {
  const {colors} = useTheme();
  const user = useSelector(getUser);
  useEffect(() => {
    setTimeout(() => {
      if (Platform.OS === 'ios') SplashScreen.hide();
      else SplashScreen.hide();
    }, 1000);
  }, []);
  const [spinnerVisibility, setspinnerVisibility] = useState(false);
  const [searchText, setsearchText] = useState('');
  handleOnChangeText = text => {
    // ? Visible the spinner
    setsearchText(text);
    setspinnerVisibility(true);
    if (text == '') {
      setspinnerVisibility(false);
    }
  };
  handleOnClear = () => {
    setspinnerVisibility(false);
  };
  return (
    // <View style={styles.container}>

    //   <Text style={[TextStyles.title, { color: colors.text }]}>
    //     {strings.home.message} {user?.username}
    //   </Text>
    //   <Text style={[TextStyles.text, { color: colors.text }]}>
    //     {strings.home.variant} {Config.BUILD_VARIANT}
    //   </Text>
    // </View>
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <View style={{paddingTop: 10}}>
        <HeaderAuth title={'Reward Programme'} />
      </View>
      <View style={styles.container}>
        <SearchBar
          style={{
            borderRadius: 26,
            backgroundColor: '#FFFFFF',
            elevation: 10,
            shadowColor: '#F6F6F6',
            height: 46,
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 1,
          }}
          searchIconImageStyle={{tintColor: '#192537', height: 17, width: 16}}
          height={56}
          fontSize={14}
          fontColor="#000000"
          fontFamily={FONTS.PoppinsRegular}
          iconColor="#192537"
          placeholderTextColor="#000000"
          cancelIconColor="#192537"
          //  backgroundColor="#ba312f"
          spinnerVisibility={spinnerVisibility}
          placeholder="Search here..."
          shadowStyle={styles.searchBarShadowStyle}
          onChangeText={handleOnChsangeText}
          onClearPress={handleOnClear}
        />
        <TouchableOpacity
          onPress={() => {
            navigate(NAVIGATION.rewardOffer);
          }}
          style={styles.boxcontain}>
          <Image source={rewardimage} />
          <View style={styles.rewardtitle}>
            <Image source={logo} style={{height: 52, width: 52}} />
            <Text style={styles.Title}>Add your membership</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxcontain}>
          <Image source={rewardimage} />
          <View style={styles.rewardtitle}>
            <Image source={logo} style={{height: 52, width: 52}} />
            <Text style={styles.Title}>Add your membership</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxcontain}>
          <Image source={rewardimage} />
          <View style={styles.rewardtitle}>
            <Image source={logo} style={{height: 52, width: 52}} />
            <Text style={styles.Title}>Add your membership</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
