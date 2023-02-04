import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login, TYPES } from '@/actions/UserActions';
import { Button, ErrorView, TextField, Header } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Login/Login.styles';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { ShadowStyles } from '@/theme';
import { navigate } from '@/navigation/NavigationRef';
import { NAVIGATION } from '@/constants';
import { eye,eye_un } from '@/assets';
export function Login(props) {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernamefocus, setUserfocus] = useState(false);
  const [passfocus, setpassfocus] = useState(false);
  const [passshow, setpasssts] = useState(true);
  
  
  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.LOGIN], state)
  );

  const errors = useSelector(
    state => errorsSelector([TYPES.LOGIN], state),
    shallowEqual
  );
  const handleSubmit = () => {
    dispatch(login(username, password));
  //navigate(NAVIGATION.);
    
  };
  return (
    <ScrollView style={{}}>
      <Header title={strings.login.header} backToScreen={() => navigation.goBack()} />
      <View style={styles.container}>
        <View
          style={[
            styles.formContainer,
          ]}
        >
          <Text style={styles.Title}>Login</Text>
          <Text style={styles.TitleDis}>Enjoy your Rewards. To earn loyalty points & view transactions, please login to your account</Text>
          <Text style={styles.textTitle}>Card Number/Email</Text>
          <TextField
           onFocus={() => setUserfocus(true)}
           onBlur ={() => setUserfocus(false)}
            style={{
              borderColor: usernamefocus ? '#AC9B7E' : '#E1E1E1',
              borderWidth: 1,
            }}
            autoCapitalize="none"
            accessibilityHint={strings.login.usernameHint}
            accessibilityLabel={strings.login.username}
            onChangeText={setUsername}
            placeholder={strings.login.username}
            value={username}
          />
          <Text style={styles.textTitle}>Password</Text>
          <View style={{
            flex: 1,
            height: 56,
            borderRadius: 6,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: passfocus ? '#AC9B7E' : '#E1E1E1',
            borderWidth: 1
          }}>

            <TextField
             onFocus={() => setpassfocus(true)}
             onBlur ={() => setpassfocus(false)}
              style={{
                borderWidth: 0,
                flex: 1,
              }}
              
              secureTextEntry={passshow}
              accessibilityHint={strings.login.passwordHint}
              accessibilityLabel={strings.login.password}
              autoCapitalize="none"
              onChangeText={setPassword}
              placeholder={strings.login.password}
              textContentType="password"
              value={password}
            />
           <TouchableOpacity onPress={() => setpasssts(!passshow)} >
            <Image style={styles.searchIcon} source={passshow?eye:eye_un} />
            </TouchableOpacity>
          </View>
          {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <TextField
              style={{
                borderColor: password ? '#AC9B7E' : '#E1E1E1',
                borderWidth: 1,
              }}
              secureTextEntry
              accessibilityHint={strings.login.passwordHint}
              accessibilityLabel={strings.login.password}
              autoCapitalize="none"
              onChangeText={setPassword}
              placeholder={strings.login.password}
              textContentType="password"
              value={password}
            />
            <Image style={styles.searchIcon} source={cooking} />
          </View> */}
          <TouchableOpacity onPress={() => {
            navigate(NAVIGATION.forgotpassword);

          }}>
            <Text style={styles.forgotTitle}>Forgot Password?</Text>
          </TouchableOpacity>
          <ErrorView errors={errors} />
          <Button
            onPress={handleSubmit}
        
            style={styles.submitButton}
            title={isLoading ? strings.common.loading : strings.login.button}
          />

        </View>
        <TouchableOpacity onPress={() => {
          navigate(NAVIGATION.registration);

        }}
          style={{ marginTop: 40 }}
        >
          <Text style={styles.createaccount}>Not a member? <Text style={{ textDecorationLine: 'underline' }}>Create New Account</Text></Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}
