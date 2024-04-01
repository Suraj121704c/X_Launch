import {createStackNavigator} from '@react-navigation/stack';

// user defined imports
import Homepage from '../screens/afterlogin/homepage';
import {Route} from './constants';

const Stack = createStackNavigator();

const AfterLoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Route.HomePage}>
      <Stack.Screen name={Route.HomePage} component={Homepage} />
    </Stack.Navigator>
  );
};

export default AfterLoginStack;
