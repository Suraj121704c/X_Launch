import {View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export const Lodaer = ({visible}: {visible: boolean}) => {
  return (
    <View>
      <Spinner
        visible={visible}
        textContent="Loading..."
        textStyle={{color: 'green'}}
      />
    </View>
  );
};
