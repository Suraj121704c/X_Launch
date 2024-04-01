import {createStackNavigator} from '@react-navigation/stack';

// user defined imports
import Login from '../screens/beforelogin/login';
import {Route} from './constants';
import SignUp from '../screens/beforelogin/signup';

const Stack = createStackNavigator();

const BeforeLoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Route.Login}>
      <Stack.Screen name={Route.Login} component={Login} />
      <Stack.Screen name={Route.SignUp} component={SignUp} />
    </Stack.Navigator>
  );
};

export default BeforeLoginStack;
