import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import {back, search, shutdown} from '../../../utils/images';
import {useNavigation} from '@react-navigation/native';
import {Route} from '../../../navigation/constants';
import {useDispatch, useSelector} from 'react-redux';
import {launchAction} from '../../../redux/actions/launchaction';
import {Lodaer} from '../../../components/Loader';

const Launch = () => {
  const {data, isLoading} = useSelector((state: any) => state.launch);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(launchAction());
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <Lodaer visible={isLoading} />
      <View style={styles.header}>
        <TouchableOpacity></TouchableOpacity>
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
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <View style={styles.numberListView}>
            <View>
              <View style={styles.hashView}>
                <Image
                  source={{uri: item?.links?.mission_patch}}
                  style={styles.imagestyles}
                />
                <Text style={styles.numberText}>{item?.mission_name}</Text>
              </View>
              <View style={styles.hashView2}>
                <Text style={styles.numberText}>
                  Site : {item?.launch_site?.site_name}
                </Text>
                <Text style={styles.numberText}>
                  Rocket : {item?.rocket?.rocket_name}
                </Text>
              </View>
              <View style={styles.hashView2}>
                <Text style={styles.numberText}>
                  Date : {item?.launch_date_local}
                </Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default Launch;
