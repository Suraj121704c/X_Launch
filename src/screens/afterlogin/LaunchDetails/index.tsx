import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {back, search, shutdown} from '../../../utils/images';

const Launch = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={back} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Launch Details</Text>
        <TouchableOpacity>
          <Image source={shutdown} style={styles.log} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Image source={search} style={styles.searchIcon} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Mission Name"
          placeholderTextColor="#888"
        />
      </View>
    </SafeAreaView>
  );
};

export default Launch;

{
  /* <FlatList
  data={Phone_data}
  renderItem={({item}) => (
    <View style={styles.numberListView}>
      <View style={styles.hashView}>
        <Image source={user_png} style={styles.imagestyles} />
      </View>
      <View>
        <Text style={styles.numberText}>{item.number}</Text>
      </View>
    </View>
  )}
  keyExtractor={item => item.id}
  ItemSeparatorComponent={() => <View style={styles.separator} />}
/>; */
}
