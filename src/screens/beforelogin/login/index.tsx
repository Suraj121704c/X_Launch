import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {logo} from '../../../utils/images';
import {styles} from './styles';
import {Route} from '../../../navigation/constants';
import {loginValidation} from '../../../validation/loginValidation';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../../../redux/actions/loginaction';
import {Lodaer} from '../../../components/Loader';

const LoginScreen = () => {
  const {isLoggedIn, isLoading, isError} = useSelector(
    (state: any) => state.auth,
  );
  const dispatch = useDispatch<any>();
  const [textFields, setTextFields] = useState<any>({
    email: '',
    password: '',
  });

  const [validationError, setValidationError] = useState<any>({
    email: '',
    password: '',
  });

  const navigation = useNavigation<any>();
  const passwordInputRef = createRef();

  const handleOnChangeText = (value: string, fieldName: string) => {
    setTextFields({...textFields, [fieldName]: value});
  };

  const login = () => {
    const validation = loginValidation(textFields);
    if (validation === true) {
      setValidationError({
        email: '',
        password: '',
      });
      dispatch(loginAction(textFields)).then(() => {
        navigation.navigate(Route.HomePage);
      });
    } else {
      setValidationError(validation);
    }
  };

  return (
    <SafeAreaView style={styles.mainBody}>
      <Lodaer visible={isLoading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image source={logo} style={styles.image} />
            </View>
            <View style={{alignItems: 'center'}}>
              {validationError ? (
                <Text style={styles.downAlert}>
                  {validationError.name ||
                    validationError.email ||
                    validationError.password}
                </Text>
              ) : null}
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                value={textFields.email}
                onChangeText={value => handleOnChangeText(value, 'email')}
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                value={textFields.password}
                onChangeText={value => handleOnChangeText(value, 'password')}
                placeholder="Enter Password"
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={login}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(Route.SignUp)}>
              <Text style={styles.registerTextStyle}>New Here ? Register</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default LoginScreen;
