import {NavigationContainer} from '@react-navigation/native';
import BeforeLoginStack from './beforeLoginNavigator';
import AfterLoginStack from './afterLoginNavigator';
import { useSelector } from 'react-redux';

const Navigator = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  console.log(isLoggedIn)

  return (
    <NavigationContainer>
      {isLoggedIn ? <AfterLoginStack /> : <BeforeLoginStack />}
    </NavigationContainer>
  );
};

export default Navigator;
