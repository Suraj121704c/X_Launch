import {View, Text, StyleSheet, TextInput, LogBox} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Navigator from './src/navigation/navigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';

//@ts-ignore
Text.defaultProps = Text.defaultProps || {};
//@ts-ignore
Text.defaultProps.allowFontScaling = false;
//@ts-ignore
TextInput.defaultProps = {
  ...(TextInput.defaultProps || {}),
  allowFontScaling: false,
};
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{flex: 1, backgroundColor: '#000'}}
        edges={['right', 'left', 'top']}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
