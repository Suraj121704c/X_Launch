import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// user defined imports
import {search, shutdown} from '../../../utils/images';
import {Route} from '../../../navigation/constants';
import {launchAction} from '../../../redux/actions/launchaction';
import {Lodaer} from '../../../components/Loader';
import {logoutAction} from '../../../redux/actions/loginaction';

const Launch = () => {
  const {data, isLoading} = useSelector((state: any) => state.launch);
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<any>();
  const [searching, setSearching] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [monthListOpen, setMonthListopen] = useState(false);

  useEffect(() => {
    dispatch(launchAction());
  }, []);

  const handleSearch = () => {
    dispatch(launchAction(searching));
  };

  const logout = () => {
    dispatch(logoutAction());
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <Lodaer visible={isLoading} />
      <View style={styles.header}>
        <TouchableOpacity></TouchableOpacity>
        <Text style={styles.headerText}>Launch Details</Text>
        <TouchableOpacity onPress={logout}>
          <Image source={shutdown} style={styles.log} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={handleSearch}>
          <Image source={search} style={styles.searchIcon} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Mission Name"
          placeholderTextColor="#888"
          value={searching}
          onChangeText={text => setSearching(text)}
          onSubmitEditing={handleSearch}
        />
      </View>
      {/* <View style={{marginHorizontal: wp(5), marginBottom: hp(1.5)}}>
        <TouchableOpacity
          style={styles.monthBtnView}
          onPress={() => setMonthListopen(!monthListOpen)}>
          <Text style={styles.monthBtnTxt}>
            {selectedMonth == '' ? 'Month' : selectedMonth}
          </Text>
          <Image source={dropDown} style={styles.arrowIcon} />
        </TouchableOpacity>
        {monthListOpen && (
          <View style={styles.monthListView}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={months}
              keyExtractor={index => index.toString()}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.FlatList}
                  onPress={() => {
                    setSelectedMonth(item.label);
                    setMonthListopen(false);
                  }}>
                  <Text style={styles.labelText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View> */}
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
