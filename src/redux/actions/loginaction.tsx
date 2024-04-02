import {Alert} from 'react-native';

// user defined imports
import {baseUrl, loginEndPoint, registerEndPoint} from '../../services/Api';
import * as Storage from '../../services/AsyncStoreConfig';

import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from '../types';
import navigationService from '../../navigation/navigationService';
import {Route} from '../../navigation/constants';

export const loginAction = (data: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: LOGIN_REQUEST,
    });
    try {
      const url = loginEndPoint;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      console.log(responseData);
      if (responseData?.message === 'User not found') {
        Alert.alert('User not Found', 'Please register first');
        dispatch({
          type: LOGIN_ERROR,
        });
      }
      if (responseData?.message === 'Invalid password') {
        Alert.alert('Invalid password', 'Please check the password');
        dispatch({
          type: LOGIN_ERROR,
        });
      }
      if (responseData?.token) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: responseData?.token,
        });
        await Storage.saveData('Token', responseData?.token);
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };
};

export const registerAction = (data: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: REGISTER_REQUEST,
    });
    try {
      const url = registerEndPoint;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (responseData?.message == 'Email already in use') {
        dispatch({
          type: REGISTER_ERROR,
        });
      }
      if (responseData?.token) {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: responseData?.token,
        });
        await Storage.saveData('Token', responseData?.token);
      }
    } catch (error) {
      dispatch({
        type: REGISTER_ERROR,
      });
    }
  };
};

export const logoutAction = () => {
  return async (dispatch: any) => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    try {
      await Storage.removeData('Token');
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: LOGOUT_ERROR,
      });
    }
  };
};
