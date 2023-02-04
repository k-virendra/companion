import { StyleSheet,Dimensions } from 'react-native';
import Scale, { moderateScale } from '@/helper/Scale';
import { FONTS } from '@/theme/fonts';
export const styles = StyleSheet.create({
  container: {
     flex:1,
     paddingTop:10,
    // padding:2
  },
  boxcontain: {
    elevation:1,
    // shadowColor: '#F6F6F6',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
   // shadowRadius: 1,
   justifyContent:'center',alignItems:"center",padding:15,margin:12,borderRadius:6,borderColor:'#FFFF',borderWidth:1
  },
  rewardtitle:
  {
    paddingTop: 5, flexDirection: 'column', alignItems: 'flex-start', alignContent: 'flex-start', width: '100%' 
  },
  Title: {
     fontFamily: FONTS.PoppinsMedium,
     fontSize: Scale.moderateScale(18),
     color: '#000000',
     fontWeight: '500',

   },
   Titledis: {
    fontFamily: FONTS.PoppinsRegular,
    fontSize: Scale.moderateScale(14),
    color: '#4E4E4E',
    fontWeight: '400',

  },
  btnTitle:
  {
    fontFamily: FONTS.PoppinsMedium,
    fontSize: Scale.moderateScale(14),
    color: '#46D086',
    fontWeight: '500',

  },
  btn:
  {
    elevation:5, marginTop:7, backgroundColor:'#FFFFFF',width:'100%',padding:10,justifyContent:'center',alignItems:'center',borderColor:'#000000',borderWidth:1,borderRadius:6
  }
   
});
