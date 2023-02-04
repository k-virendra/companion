import { StyleSheet } from 'react-native';
import Scale, { moderateScale } from '@/helper/Scale';
import { FONTS } from '@/theme/fonts';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
    // paddingLeft:10,
    // paddingRight:10,
    backgroundColor:'#FFFF'
  },
  textTitle:
  {
    fontFamily: FONTS.PoppinsMedium,
    fontSize: Scale.moderateScale(24),
    color: '#000000',
    fontWeight: '500',
  },
 menuTitle:
  {
    fontFamily: FONTS.PoppinsRegular,
    fontSize: Scale.moderateScale(18),
    color: '#000000',
    fontWeight: '400',
    paddingLeft:10
  },
  textTitleedit:
  {
    fontFamily: FONTS.PoppinsMedium,
    fontSize: Scale.moderateScale(10),
    color: '#FFFFFF',
    fontWeight: '500',
    
  },
  label_view: {
    borderColor: '#D6D6D6',
    borderBottomWidth: 0.5,
    paddingBottom: 13,
    paddingTop: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
