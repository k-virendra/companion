import { StyleSheet,Dimensions } from 'react-native';
import Scale, { moderateScale } from '@/helper/Scale';
import { FONTS } from '@/theme/fonts';
export const styles = StyleSheet.create({
  container: {
     flex:1,
   // height:Dimensions.get('window').height,
    opacity:10,
    //backgroundColor:'#E5E5E5'
    paddingTop:15,
  },
  Title: {
    fontFamily: FONTS.PoppinsMedium,
    fontSize: Scale.moderateScale(16),
    fontWeight: '500',
    color:'white',
    paddingTop:80
   
  },
  BTNTitle: {
    fontFamily: FONTS.PoppinsSemiBold,
    fontSize: Scale.moderateScale(14),
    color: '#AC9B7E',
    fontWeight: '600',
  },
  pointTitle:
  {
    fontFamily: FONTS.PoppinsSemiBold,
    fontSize: Scale.moderateScale(16),
    color: '#000000',
    fontWeight: '600',
  },
  pointTitleAmount:
  {
    fontFamily: FONTS.PoppinsSemiBold,
    fontSize: Scale.moderateScale(16),
    color: '#05C85F',
    fontWeight: '600',
   
  },
  titletransaction: {
    fontFamily: FONTS.PoppinsSemiBold,
    fontSize: Scale.moderateScale(14),
    color: '#000000',
    fontWeight: '600',
    paddingLeft:25,
    paddingTop:15,
    paddingBottom:10
  },
  titletransactionname: {
    fontFamily: FONTS.PoppinsMedium,
    fontSize: Scale.moderateScale(16),
    color: '#000000',
    fontWeight: '500',
  
  },
  titletransactiondate:
  {
    fontFamily: FONTS.PoppinsRegular,
    fontSize: Scale.moderateScale(14),
    color: '#5F5E5E',
    fontWeight: '400',
  },
  titletransactionprice:
  {
    fontFamily: FONTS.PoppinsSemiBold,
    fontSize: Scale.moderateScale(16),
    color: '#000000',
    fontWeight: '600',
  }
});
