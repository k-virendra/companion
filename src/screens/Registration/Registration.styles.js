import { StyleSheet } from 'react-native';
import Scale, { moderateScale } from '@/helper/Scale';
import { FONTS } from '@/theme/fonts';
export const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontFamily: FONTS.PoppinsRegular,
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
  textTitlechoose:
  {
    fontFamily: FONTS.PoppinsRegular,
    paddingTop:10,
    fontSize: Scale.moderateScale(12),
    color: '#656464',
    fontWeight: '400',
  },
  textTitleBold:
  {
    fontFamily: FONTS.PoppinsSemiBold,
    paddingTop:10,
    fontSize: Scale.moderateScale(16),
    color: '#000000',
    fontWeight: '600',
  },
  Titleaccount:
  {
    fontFamily: FONTS.PoppinsRegular,
    paddingTop:10,
    fontSize: Scale.moderateScale(14),
    color: '#383737',
    fontWeight: '400',
   textAlign:'center'
  },
  Titleaccountbold:
  {
    fontFamily: FONTS.PoppinsBold,
    fontSize: Scale.moderateScale(14),
    color: '#192537',
    fontWeight: '700',
   textAlign:'center'
  },
  boxview:
  {
    marginTop:10,
    padding:10,
    borderWidth:2,
    borderRadius:12,
    borderColor:'#D9E8FF',
    
  },
  smallboxview:
  {
    flexDirection:'row',
    alignContent:'center',
    alignItems:'center',
    justifyContent:'space-between',
    width:160,
    marginTop:10,
    padding:10,
    borderWidth:1,
    borderRadius:12,
    borderColor:'#E1E1E1',
    margin:2
  },
  smallboxviewactive:
  {
    justifyContent:'space-between',
    alignContent:'center',
    alignItems:'center',
    flexDirection:'row',
    width:170,
    marginTop:10,
    padding:10,
    borderWidth:1,
    borderRadius:12,
    borderColor:'#AC9B7F',
    margin:2
  },
  InterestsTitle:
  {
    fontFamily: FONTS.PoppinsMedium,
    fontSize: Scale.moderateScale(12),
    color: '#333131',
    fontWeight: '500',
    textAlign:'center'
  },
  logo:
  {
    alignSelf:'center'
  },
  textTitleticking:
  {
    fontFamily: FONTS.PoppinsRegular,
    paddingLeft:4,
    fontSize: Scale.moderateScale(12),
    color: '#656464',
    fontWeight: '400',
  },
  radiotitle:
  {
    fontFamily: FONTS.PoppinsRegular,
    paddingLeft:4,
    fontSize: Scale.moderateScale(12),
    color: '#000000',
    fontWeight: '400',
  },
  dropdown3DropdownStyle: {  backgroundColor: "#ffff" },
  dropdown3RowStyle: {
    backgroundColor: "#ffff",
    borderBottomColor: "#AC9B7E",
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdown3BtnStyle: {
    marginTop:10,
    width: "100%",
    paddingHorizontal: 0,
    borderWidth:1,
    borderRadius: 6,
    backgroundColor: "#ffff",
    borderColor:'#E1E1E1',
    height:56
  },
  dropdown3BtnTxt: {
    paddingLeft:7,
    textAlign:'left',
    color: "#282C2E",
    fontFamily: FONTS.PoppinsRegular,
    fontSize: Scale.moderateScale(16),
    fontWeight: '500',
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  dropdown3RowTxt: {
    color: "#282C2E",
    textAlign: "center",
    fontFamily: FONTS.PoppinsRegular,
    fontSize: Scale.moderateScale(14),
   
    marginHorizontal: 12,
  },
});
