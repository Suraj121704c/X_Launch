import {View, Text, SafeAreaView, Image, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {astranought} from '../../../utils/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Route} from '../../../navigation/constants';

export default function Homepage() {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <ImageBackground source={astranought} style={styles.image}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.navigate(Route.Launch)}>
          <Text style={styles.headerText}>Launch Details</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
