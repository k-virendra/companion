import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login, TYPES } from '@/actions/UserActions';
import { Button, ErrorView, TextField, Header, CheckboxField } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Registration/Registration.styles';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { cooking, meeting, outdoor, check, uncheck, radiocheck, radiouncheck, uk, down ,calendar} from '@/assets';
import SelectDropdown from 'react-native-select-dropdown'
import PhoneInput from 'react-native-phone-number-input';
import DatePicker from 'react-native-datepicker'
import { TextStyles } from '@/theme';
import { FONTS } from '@/theme/fonts';
export function Registration(props) {
  const { navigation, route } = props;
  const phoneInput = useRef(null);
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkstatus, setCheck] = useState(false);
  const [Clubmember, setClubmember] = useState(false);
  const [checkCountry, setCountry] = useState(false);
  const [dob, setdob] = useState("");

  const countriesWithFlags = [
    { title: "United Kingdom", image: uk },
    { title: "United Kingdom", image: uk },
    // { title: "Australia", image: require("./uk.png") },
    // { title: "Ireland", image: require("./uk.png") },
  ];

  const [Regsts, setReg] = useState(false);
  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.LOGIN], state)
  );

  const errors = useSelector(
    state => errorsSelector([TYPES.LOGIN], state),
    shallowEqual
  );

  const handleSubmit = () => {
    dispatch(login(username, password));
  };

  const updatecheck = () => {
    //   alert(checkstatus)
    // setCheck(!checkstatus)
  };
  return (
    <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
      <Header title={strings.login.header} backToScreen={() => navigation.goBack()} />
      <View style={styles.container}>

        <View
          style={[
            styles.formContainer,
            // ShadowStyles.shadow,
            // { backgroundColor: colors.primary },
          ]}
        >
          <Text style={styles.Title}>Create New Account</Text>
          <Text style={styles.TitleDis}>Enter the details to continue</Text>
          <View style={styles.boxview}>
            <Text style={styles.Titleaccountbold}>Account Number</Text>
            <Text style={styles.Titleaccount}>If you have a loyalty card please specify the number here. Otherwise leave it blank & We’ll issue a digital account number</Text>
            <TextField
              autoCapitalize="none"
              placeholder={'600001100000'}
              value={username}
            />
          </View>
          <Text style={styles.textTitleBold}>Interests</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.smallboxview}>
              <Image source={cooking} />
              <Text style={styles.InterestsTitle} > Cooking Classes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.smallboxviewactive}>
              <Image style={styles.logo} source={meeting} />
              <Text style={styles.InterestsTitle} > Meeting & Events</Text>
            </TouchableOpacity>

          </View>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.smallboxview}>
              <Image style={styles.logo} source={outdoor} />
              <Text style={styles.InterestsTitle}>Outdoor Pursuits</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.textTitleBold}>About You</Text>
          <View style={{ flexDirection: 'row', flex: 2, }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textTitle}>First Name</Text>
              <TextField
                style={{ margin: 2 }}
                autoCapitalize="none"
                accessibilityHint={strings.login.usernameHint}
                accessibilityLabel={strings.login.username}
                onChangeText={setUsername}
                placeholder={'Ex: John'}
                value={username}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.textTitle}>Last Name</Text>
              <TextField
                style={{ margin: 2 }}
                autoCapitalize="none"
                accessibilityHint={strings.login.usernameHint}
                accessibilityLabel={strings.login.username}
                onChangeText={setUsername}
                placeholder={'Ex: Smith'}
                value={username}
              />
            </View>
          </View>
          <Text style={styles.textTitle}>Date Of Birth</Text>
          <DatePicker
            style={{ width: '100%', paddingTop: 10,height:56, }}
            date={dob}
            mode="date"
            placeholder="DD    |     MM    |    YY"
            format="DD | MM | YYYY"
            minDate="2022-01-01"
            maxDate="2050-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            iconSource={calendar}
            customStyles={{
              placeholderText: {
                fontSize: 16,
                fontFamily: FONTS.PoppinsRegular,
              },
              dateIcon: {
                width:22,
                height:23,
                position: 'absolute',
                right: 0,
                //top: 4,
                // marginLeft: 0
              },
              dateInput: {
                borderColor:'#E1E1E1',
                borderWidth:1,
                alignContent:'flex-start',
                alignItems:'flex-start',
                paddingLeft:10,
                height:56,
                borderRadius:6,
                // marginLeft: 36
               // fontFamily: FONTS.PoppinsSemiBold,
               
              },
              dateText:{
                fontSize: 16,
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => { setdob(date) }}
          />

          <Text style={styles.textTitle}>Email</Text>
          <TextField
            autoCapitalize="none"
            accessibilityHint={strings.login.usernameHint}
            accessibilityLabel={strings.login.username}
            onChangeText={setUsername}
            placeholder={'Enter your email id'}
            value={username}
          />
          <Text style={styles.textTitle}>Confirm Email</Text>
          <TextField
            autoCapitalize="none"
            accessibilityHint={strings.login.usernameHint}
            accessibilityLabel={strings.login.username}
            onChangeText={setUsername}
            placeholder={'Enter your email id'}
            value={username}
          />
          <Text style={styles.textTitle}>Company</Text>
          <TextField
            autoCapitalize="none"
            accessibilityHint={strings.login.usernameHint}
            accessibilityLabel={strings.login.username}
            onChangeText={setUsername}
            placeholder={'Enter your company name'}
            value={username}
          />
          <Text style={styles.textTitleBold}>Address</Text>
          <Text style={styles.textTitle}>Street Address</Text>
          <TextField
            autoCapitalize="none"
            accessibilityHint={strings.login.usernameHint}
            accessibilityLabel={strings.login.username}
            onChangeText={setUsername}
            placeholder={'Enter here'}
            value={username}
          />
          <Text style={styles.textTitle}>Address Line 1</Text>
          <TextField
            autoCapitalize="none"
            accessibilityHint={strings.login.usernameHint}
            accessibilityLabel={strings.login.username}
            onChangeText={setUsername}
            placeholder={'Enter here'}
            value={username}
          />
          <Text style={styles.textTitle}>Address Line 2</Text>
          <TextField
            autoCapitalize="none"
            accessibilityHint={strings.login.usernameHint}
            accessibilityLabel={strings.login.username}
            onChangeText={setUsername}
            placeholder={'Enter here'}
            value={username}
          />
          <Text style={styles.textTitle}>City</Text>
          <TextField
            autoCapitalize="none"
            accessibilityHint={strings.login.usernameHint}
            accessibilityLabel={strings.login.username}
            onChangeText={setUsername}
            placeholder={'Enter here'}
            value={username}
          />
          <Text style={styles.textTitle}>State</Text>
          <TextField
            autoCapitalize="none"
            accessibilityHint={strings.login.usernameHint}
            accessibilityLabel={strings.login.username}
            onChangeText={setUsername}
            placeholder={'Enter here'}
            value={username}
          />
          <Text style={styles.textTitle}>Zip/Postal Code</Text>
          <TextField
            autoCapitalize="none"
            accessibilityHint={strings.login.usernameHint}
            accessibilityLabel={strings.login.username}
            onChangeText={setUsername}
            placeholder={'Enter here'}
            value={username}
          />
          <Text style={styles.textTitle}>Country</Text>
          <SelectDropdown
            data={countriesWithFlags}
            defaultValueByIndex={1}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonStyle={styles.dropdown3BtnStyle}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={styles.dropdown3BtnChildStyle}>
                  {selectedItem ? (
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={selectedItem.image}
                        style={styles.dropdown3BtnImage}
                      />
                      <Text style={styles.dropdown3BtnTxt}>
                        {selectedItem ? selectedItem.title : "Select country"}
                      </Text>
                    </View>
                  ) : (
                    null
                  )}
                  <Image
                    source={down}
                  />
                </View>
              );
            }}
            dropdownStyle={styles.dropdown3DropdownStyle}
            rowStyle={styles.dropdown3RowStyle}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={styles.dropdown3RowChildStyle}>
                  <Image source={item.image} style={styles.dropdownRowImage} />
                  <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                </View>
              );
            }}
          />
          <Text style={styles.textTitle}>Mobile</Text>
          <PhoneInput
            placeholder="Enter mobile number"
            containerStyle={{
              ...TextStyles.text,
              height: Dimensions.get('window').height / 11.5,
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderColor:'#E1E1E1',
              borderRadius: 6,
              borderWidth: 0.5
            }}
            textInputStyle={{
              ...TextStyles.text,
              height: 50,
              backgroundColor: '#FFFFFF',
              borderLeftWidth: 1,
              borderLeftColor: '#000000',
              backgroundColor: '#FFFFFF',
              paddingTop: 15
            }}
            textContainerStyle={{
              ...TextStyles.text,
              // color:'red',
              height: 50,
              marginTop: 3,
              marginRight: 5,
              backgroundColor: '#FFFFFF',
              // backgroundColor:'red',


            }}
            onChangeCountry={text => {
              console.log('dfd', text);
              // setField({
              //   ...field,
              //   business_phone_code: text.callingCode.toString(),
              // });
            }}
            onChangeFormattedText={text => {
              const checkValid = phoneInput.current?.isValidNumber(text);

              console.log('Checkmobilephone', text);
              //  setField({ ...field, phNumber: text });
            }}
            ref={phoneInput}
            // defaultValue={field.phNumber}
            defaultCode="GB"
          />

          <Text style={styles.textTitleBold}>Assisted Registration</Text>
          <Text style={styles.textTitlechoose}>Did a member of staff help you complete your registration</Text>
          <View style={{ paddingTop: 10, flexDirection: 'column', justifyContent: "flex-start", alignContent: 'flex-start', alignItems: 'flex-start' }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => setReg(!Regsts)} >
                {Regsts == true ?
                  <Image source={radiocheck} />
                  :
                  <Image source={radiouncheck} />
                }
              </TouchableOpacity>
              <Text style={styles.radiotitle}>No</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 5 }}>
              <TouchableOpacity onPress={() => setReg(!Regsts)} >
                {Regsts == false ?
                  <Image source={radiocheck} />
                  :
                  <Image source={radiouncheck} />
                }
              </TouchableOpacity>
              <Text style={styles.radiotitle}>Yes</Text>
            </View>
          </View>
          <Text style={styles.textTitleBold}>Password</Text>
          <Text style={styles.textTitlechoose}>Choose a password</Text>
          <Text style={styles.textTitle}>Password</Text>
          <TextField
            secureTextEntry
            accessibilityHint={strings.login.passwordHint}
            accessibilityLabel={strings.login.password}
            autoCapitalize="none"
            onChangeText={setPassword}
            placeholder={'Enter here'}
            textContentType="password"
            value={password}
          />
          <Text style={styles.textTitle}>Confirm Password</Text>
          <TextField
            secureTextEntry
            accessibilityHint={strings.login.passwordHint}
            accessibilityLabel={strings.login.password}
            autoCapitalize="none"
            onChangeText={setPassword}
            placeholder={'Re enter here'}

            value={password}
          />
          <Text style={styles.textTitleBold}>Leisure Club Member</Text>
          <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignContent: 'flex-start', alignItems: 'flex-start' }}>
            <TouchableOpacity onPress={() => setClubmember(!Clubmember)} >
              <Image style={styles.logo} source={Clubmember ? check : uncheck} />
            </TouchableOpacity>
            <Text style={styles.textTitleticking}>Please tick this box if you are a Leisure Club Member</Text>
          </View>
          <Text style={styles.textTitleBold}>Marketing & Promotions</Text>
          <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignContent: 'flex-start', alignItems: 'flex-start' }}>
            <TouchableOpacity onPress={() => setCheck(!checkstatus)} >
              <Image style={styles.logo} source={checkstatus ? check : uncheck} />
            </TouchableOpacity>
            <Text style={styles.textTitleticking}>By ticking this box you agree to receive exclusive communications and offers from Bridgewood Manor and RBH Hotels. Your personal data will be stored through Inspire Loyalty and will be shared by a 3rd party organisation to fulfill email communications. By ticking this box and submitting this form you agree to all programme terms & conditions. To read our Privacy Statement please refer to the Terms & Conditions page of this website. You can unsubscribe at any time.</Text>
          </View>
          <ErrorView errors={errors} />
          <Button
            // onPress={handleSubmit}
            style={styles.submitButton}
            title={isLoading ? strings.common.loading : strings.common.Submit}
          />

        </View>


      </View>

    </ScrollView>
  );
}
