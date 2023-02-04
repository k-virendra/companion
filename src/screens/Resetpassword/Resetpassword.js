import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text ,TouchableOpacity,Image} from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login, TYPES } from '@/actions/UserActions';
import { Button, ErrorView, TextField, Header } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Resetpassword/Resetpassword.styles';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { ShadowStyles } from '@/theme';
import { eye,eye_un } from '@/assets';
export function Resetpassword(props) {
  const { navigation, route } = props;
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passfocus, setpassfocus] = useState(false);
  const [passshow, setpasssts] = useState(true);
  const [passfocus2, setpassfocus2] = useState(false);
  const [passshow2, setpasssts2] = useState(true);
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

  return (
    <ScrollView style={{}}>
      <Header title={strings.login.header} backToScreen={() => navigation.goBack()} />
      <View style={styles.container}>

        <View
          style={[
            styles.formContainer,
            // ShadowStyles.shadow,
            // { backgroundColor: colors.primary },
          ]}
        >
          <Text style={styles.Title}>Reset Password</Text>
          <Text style={styles.TitleDis}>Create new password.</Text>
          <Text style={styles.textTitle}>New Password</Text>
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
          <Text style={styles.textTitle}>Confirm Password</Text>
          <View style={{
            flex: 1,
            height: 56,
            borderRadius: 6,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: passfocus2 ? '#AC9B7E' : '#E1E1E1',
            borderWidth: 1
          }}>

            <TextField
             onFocus={() => setpassfocus2(true)}
             onBlur ={() => setpassfocus2(false)}
              style={{
                borderWidth: 0,
                flex: 1,
              }}
              
              secureTextEntry={passshow}
              accessibilityHint={strings.login.passwordHint}
              accessibilityLabel={strings.login.password}
              autoCapitalize="none"
              onChangeText={setPassword2}
              placeholder={strings.login.password}
              textContentType="password"
              value={password2}
            />
           <TouchableOpacity onPress={() => setpasssts2(!passshow2)} >
            <Image style={styles.searchIcon} source={passshow2?eye:eye_un} />
            </TouchableOpacity>
          </View>

          <ErrorView errors={errors} />
          <Button
            //  onPress={handleSubmit}
            style={styles.submitButton}
            title={isLoading ? strings.common.loading : strings.forgotpass.save}
          />
        <TouchableOpacity onPress={() => navigation.goBack()}  style={{paddingTop:12, justifyContent:'center',alignContent:'center',alignItems:'center'}}  >
           <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
