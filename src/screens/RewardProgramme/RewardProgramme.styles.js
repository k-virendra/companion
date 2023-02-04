import { StyleSheet,Dimensions } from 'react-native';
import Scale, { moderateScale } from '@/helper/Scale';
import { FONTS } from '@/theme/fonts';
export const styles = StyleSheet.create({
  container: {
     flex:1,
    height:Dimensions.get('window').height,
     paddingTop:10
  },
  boxcontain: {
    backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:"center",padding:10,margin:10,borderRadius:8,borderColor:'#DCDCDC',borderWidth:1
  },
  rewardtitle:
  {
    paddingTop: 5, flexDirection: 'row', alignItems: 'center', alignContent: 'flex-start', width: '100%' 
  },
  Title: {
     fontFamily: FONTS.PoppinsMedium,
     fontSize: Scale.moderateScale(16),
     color: '#000000',
     fontWeight: '500',

   },
});
