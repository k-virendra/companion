import { useTheme } from '@react-navigation/native';
import React, { useState,useEffect } from 'react';
import { View ,ScrollView,Text} from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login, TYPES } from '@/actions/UserActions';
import { Button, ErrorView, TextField, Header } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Forgotpassword/Forgotpassword.styles';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { ShadowStyles } from '@/theme';
import { navigate } from '@/navigation/NavigationRef';
import { NAVIGATION } from '@/constants';
export function Forgotpassword(props) {
  const { navigation, route } = props;
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernamefocus, setUserfocus] = useState(false);
  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.LOGIN], state)
  );

  const errors = useSelector(
    state => errorsSelector([TYPES.LOGIN], state),
    shallowEqual
  );

  const handleSubmit = () => {
    
    navigate(NAVIGATION.resetpassword);
   // dispatch(login(username, password));
  };

  return (
    <ScrollView style={{ }}>
      <Header title={strings.login.header} backToScreen={() => navigation.goBack()}  />
      <View style={styles.container}>
       
        <View
          style={[
            styles.formContainer,
           // ShadowStyles.shadow,
           // { backgroundColor: colors.primary },
          ]}
        >
           <Text style={styles.Title}>Forgot Password</Text>
           <Text style={styles.TitleDis}>Enter your registered email address to receive password reset instructions.</Text>
           <Text style={styles.textTitle}>Email</Text>
          <TextField
          onFocus={() => setUserfocus(true)}
          onBlur ={() => setUserfocus(false)}
           style={{  borderColor:usernamefocus?'#AC9B7E':'#E1E1E1',
           borderWidth:1,}}
            autoCapitalize="none"
            accessibilityHint={strings.login.email}
            accessibilityLabel={strings.login.email}
            onChangeText={setUsername}
            placeholder={strings.login.email}
            value={username}
          />
         
          <ErrorView errors={errors} />
          <Button
          onPress={handleSubmit}
            style={styles.submitButton}
            title={isLoading ? strings.common.loading : strings.login.send}
          />
          
        </View>
      </View>
    </ScrollView>
  );
}
