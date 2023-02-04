import { StyleSheet } from 'react-native';
import { FONTS } from '@/theme/fonts';
export const TextStyles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: FONTS.PoppinsRegular,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: FONTS.PoppinsRegular,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: FONTS.PoppinsRegular,
  },
  error: {
    fontSize: 14,
    fontWeight: '400',
  },
});
