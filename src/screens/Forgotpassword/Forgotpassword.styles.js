import { StyleSheet } from 'react-native';
import Scale, { moderateScale } from '@/helper/Scale';
import { FONTS } from '@/theme/fonts';
export const styles = StyleSheet.create({
  container: {
    // flex:1,
    paddingTop:50,
    alignItems: 'center',
    justifyContent: 'center',
  //  paddingHorizontal: 40,
  //  backgroundColor:'red'
  },
  formContainer: {
    borderRadius: 5,
    padding: 20,
    width: '100%',
  },
  submitButton: {
    marginTop: 20,
  },
 Title: {
   fontStyle:'normal',
    fontFamily: FONTS.PoppinsSemiBold,
    fontSize: Scale.moderateScale(24),
    color: '#000000',
    fontWeight: '600',
  },
  TitleDis: {
    //paddingTop:10,
    fontFamily: FONTS.PoppinsRegular,
    fontWeight: '400',
    fontSize: Scale.moderateScale(14),
    color: '#615B5B',
  },
  textTitle:
  {
    fontFamily: FONTS.PoppinsRegular,
    paddingTop:10,
    fontSize: Scale.moderateScale(14),
    color: '#313131',
    fontWeight: '400',
  },
  
});
