import {NavigationContainer} from '@react-navigation/native';
import BeforeLoginStack from './beforeLoginNavigator';
import AfterLoginStack from './afterLoginNavigator';
import {useDispatch, useSelector} from 'react-redux';

// user defined imports
import * as Storage from '../services/AsyncStoreConfig';
import { useEffect } from 'react';
import { LOGIN_SUCCESS } from '../redux/types';

const Navigator = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const dispatch = useDispatch<any>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await Storage.getData("Token");
        if (token) {
          dispatch({
            type : LOGIN_SUCCESS
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AfterLoginStack /> : <BeforeLoginStack />}
    </NavigationContainer>
  );
};

export default Navigator;
