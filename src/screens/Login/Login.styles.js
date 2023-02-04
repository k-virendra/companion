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
    marginTop: 30,
  },
 Title: {
    fontFamily: FONTS.PoppinsSemiBold,
    fontStyle:'normal',
    fontSize: Scale.moderateScale(32),
    color: '#000000',
    fontWeight: '600',
  },
  TitleDis: {
    fontFamily: FONTS.PoppinsRegular,
    paddingTop:10,
    fontSize: Scale.moderateScale(14),
    color: '#615B5B',
    fontWeight: '400',
  },
  textTitle:
  {
    fontFamily: FONTS.PoppinsRegular,
    paddingTop:10,
    fontSize: Scale.moderateScale(14),
    color: '#313131',
    fontWeight: '400',
  },
  forgotTitle:
  {
    paddingTop:10,
    fontSize: Scale.moderateScale(16),
    fontFamily: FONTS.PoppinsSemiBold,
    fontStyle:'normal',
    fontWeight: '600',
    color: '#192537',
  //  fontWeight: 'bold',
  },
  createaccount:
  {
    paddingBottom:15,
    fontSize: Scale.moderateScale(16),
    fontFamily: FONTS.PoppinsSemiBold,
    fontStyle:'normal',
    color: '#000000',
    fontWeight: '600',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor: '#fff',
},
searchIcon: {
    //paddingRight: 10,
    marginRight:8,
    height:16,
    width:23.47
  //marginBottom:10
},
});
