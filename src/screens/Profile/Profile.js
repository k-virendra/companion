import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View ,Image,TouchableOpacity,Alert} from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '@/actions/UserActions';
import { Button } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Profile/Profile.styles';
import { TextStyles } from '@/theme';
import { profile_imge,Profileicon,menuicon,logoutimage,terms,privacy} from '@/assets';
import { navigate } from '@/navigation/NavigationRef';
import { NAVIGATION } from '@/constants';
export function Profile(props) {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const { navigation, route } = props;
  const logoutUser = () => {
    Alert.alert(
      "",
      "Are you sure you want to log out.",
      [
        { text: "OK", onPress: () => dispatch(logout()) },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        
      ])
    //dispatch(logout());
  };

  return (
    <View style={styles.container}>

      <View style={{borderBottomColor:'#EAEAEA',borderBottomWidth:1, padding:20, width:'100%', flexDirection:'row' ,alignContent:'center',justifyContent:'flex-start',alignItems:'center'}}>
       <View style={{width:'30%'}}>
       <Image
          source={profile_imge}
         />
        </View>
        <View style={{width:'50%'}}>
        <Text style={styles.textTitle}>John Smith</Text>
        </View>
        <View style={{ justifyContent:'center',alignContent:'center', width:'15%',backgroundColor:'#B7A88E',alignItems:'center',padding:4,borderRadius:5}}>
        <Text style={styles.textTitleedit}>Edit</Text>
        </View>
      </View>
    <TouchableOpacity style={{paddingTop:25,paddingLeft:10, width:'100%', flexDirection:'row' ,alignContent:'center',alignItems:'center'}}>
       <TouchableOpacity onPress={() => {
          navigate(NAVIGATION.myaccount);

        }} style={{flexDirection:'row',width:'90%'}} >
       <Image
          source={Profileicon}
         />
          <Text style={styles.menuTitle}>My Account</Text>
        </TouchableOpacity>
       
        <View style={{ justifyContent:'flex-end',alignContent:'flex-end',alignItems:'flex-end'}}>
        <Image
          source={menuicon}
         />
        </View>
     </TouchableOpacity>
     <TouchableOpacity style={{paddingLeft:10,paddingTop:25, width:'100%', flexDirection:'row' ,alignContent:'center',alignItems:'center'}}>
       <View style={{flexDirection:'row',width:'90%'}} >
       <Image
          source={privacy}
         />
          <Text style={styles.menuTitle}>Privacy Policy</Text>
        </View>
       
        <View style={{ justifyContent:'flex-end',alignContent:'flex-end',alignItems:'flex-end'}}>
        <Image
          source={menuicon}
         />
        </View>
     </TouchableOpacity>
     <TouchableOpacity style={{paddingLeft:10,paddingTop:25, width:'100%', flexDirection:'row' ,alignContent:'center',alignItems:'center'}}>
       <View style={{flexDirection:'row',width:'90%'}} >
       <Image
          source={terms}
         />
          <Text style={styles.menuTitle}>Terms & Coinditions</Text>
        </View>
       
        <View style={{ justifyContent:'flex-end',alignContent:'flex-end',alignItems:'flex-end'}}>
        <Image
          source={menuicon}
         />
        </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={logoutUser} style={{paddingLeft:10,paddingTop:25, width:'100%', flexDirection:'row' ,alignContent:'center',alignItems:'center'}}>
       <View style={{flexDirection:'row',width:'90%'}} >
       <Image
          source={logoutimage}
         />
          <Text style={styles.menuTitle}>Logout</Text>
        </View>
       
        <View style={{ justifyContent:'flex-end',alignContent:'flex-end',alignItems:'flex-end'}}>
        <Image
          source={menuicon}
         />
        </View>
     </TouchableOpacity>
     
  
      {/* <Text style={[TextStyles.title, styles.title, { color: colors.text }]}>
        {strings.profile.message}
      </Text>
      <Button title={strings.profile.logout} onPress={logoutUser} /> */}
    </View>
  );
}
