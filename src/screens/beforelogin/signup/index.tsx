import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// user defined imports
import {logo} from '../../../utils/images';
import {useNavigation} from '@react-navigation/native';
import {Route} from '../../../navigation/constants';
import {registerValidation} from '../../../validation/register';

const SignUp = () => {
  const [textFields, setTextFields] = useState<any>({
    name: '',
    email: '',
    password: '',
  });

  const [validationError, setValidationError] = useState<any>({
    name: '',
    email: '',
    password: '',
  });

  const emailInputRef = createRef();
  const passwordInputRef = createRef();
  const navigation = useNavigation<any>();

  const handleOnChangeText = (value: string, fieldName: string) => {
    setTextFields({...textFields, [fieldName]: value});
  };

  const register = () => {
    const validation = registerValidation(textFields);
    if (validation === true) {
      console.log('registered');
      setValidationError({
        name: '',
        email: '',
        password: '',
      });
    } else {
      setValidationError(validation);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      {/* <Loader loading={loading} /> */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
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
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={textFields.name}
              onChangeText={(value: string) => {
                handleOnChangeText(value, 'name');
              }}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={textFields.email}
              onChangeText={(value: string) => {
                handleOnChangeText(value, 'email');
              }}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={textFields.password}
              onChangeText={(value: string) => {
                handleOnChangeText(value, 'password');
              }}
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              blurOnSubmit={false}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={register}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(Route.Login)}>
            <Text style={styles.registerTextStyle}>Go back ? Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },

  image: {
    width: wp(50),
    height: hp(20),
    resizeMode: 'contain',
    margin: hp(3),
  },
  
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: hp(5),
    alignItems: 'center',
    borderRadius: wp(5),
    marginLeft: wp(8),
    marginRight: wp(8),
    marginTop: hp(3),
    marginBottom: hp(3),
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  downAlert: {
    color: 'red',
    fontWeight: 'bold',
  },
});
