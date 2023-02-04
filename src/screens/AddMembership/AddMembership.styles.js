import { StyleSheet } from 'react-native';
import Scale, { moderateScale } from '@/helper/Scale';
import { FONTS } from '@/theme/fonts';
export const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:10,
    alignItems: 'center',
    justifyContent: 'center',
  //  paddingHorizontal: 40,
   height:'100%'
  },
  Title: {
    fontStyle:'normal',
     fontFamily: FONTS.PoppinsMedium,
     fontSize: Scale.moderateScale(18),
     color: '#000000',
     fontWeight: '500',
     textAlign:'justify',

   },
});
