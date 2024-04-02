import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// user defined imports
import {downArrow, right, search, shutdown, wrong} from '../../../utils/images';
import {Route} from '../../../navigation/constants';
import {
  launchAction,
  searchLaunch,
  statusAction,
  yearAction,
} from '../../../redux/actions/launchaction';
import {Lodaer} from '../../../components/Loader';
import {logoutAction} from '../../../redux/actions/loginaction';

const Launch = () => {
  const {data, isLoading} = useSelector((state: any) => state.launch);
  const dispatch = useDispatch<any>();
  const [searching, setSearching] = useState('');
  const [status, setStatus] = useState(true);
  const [year, setYear] = useState('2006');
  const [showStatus, setShowStatus] = useState(false);
  const [showYear, setShowYear] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<any>();

  useEffect(() => {
    dispatch(launchAction());
  }, []);

  const handleSearch = () => {
    dispatch(searchLaunch(searching));
  };

  const handleStausAction = (statue: any) => {
    dispatch(statusAction(statue));
  };

  const handleYearAction = (years: any) => {
    dispatch(yearAction(years));
  };

  const logout = () => {
    dispatch(logoutAction());
  };

  const openStaus = () => {
    setShowStatus(!showStatus);
    setShowYear(false);
  };

  const openYear = () => {
    setShowYear(!showYear);
    setShowStatus(false);
  };

  const closeStatusOnScroll = () => {
    if (status) {
      setStatus(false);
    }
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
      <View style={styles.topbar}>
        <View style={styles.checkIamgeView}>
          <Text style={styles.headerText}>Launch status</Text>
          <TouchableOpacity onPress={openStaus}>
            <Image source={downArrow} style={styles.checkimage} />
          </TouchableOpacity>
        </View>
        {showStatus && (
          <View style={styles.monthsView}>
            <TouchableOpacity
              onPress={() => {
                setShowStatus(false);
                handleStausAction(true);
              }}>
              <Text style={styles.headerText2}>Successfull !!!</Text>
            </TouchableOpacity>
            <View style={styles.separator2} />
            <TouchableOpacity
              onPress={() => {
                setShowStatus(false);
                handleStausAction(false);
              }}>
              <Text style={styles.headerText2}>Failed !!!</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.topbar}>
        <View style={styles.checkIamgeView}>
          <Text style={styles.headerText}>Select Year</Text>
          <TouchableOpacity onPress={openYear}>
            <Image source={downArrow} style={styles.checkimage} />
          </TouchableOpacity>
        </View>
        {showYear && (
          <View style={styles.monthsView2}>
            <TouchableOpacity
              onPress={() => {
                setShowYear(false);
                handleYearAction(2014);
              }}>
              <Text style={styles.headerText2}>2014</Text>
            </TouchableOpacity>
            <View style={styles.separator2} />
            <TouchableOpacity
              onPress={() => {
                setShowYear(false);
                handleYearAction(2015);
              }}>
              <Text style={styles.headerText2}>2015</Text>
            </TouchableOpacity>
            <View style={styles.separator2} />
            <TouchableOpacity
              onPress={() => {
                setShowYear(false);
                handleYearAction(2016);
              }}>
              <Text style={styles.headerText2}>2016</Text>
            </TouchableOpacity>
            <View style={styles.separator2} />
            <TouchableOpacity
              onPress={() => {
                setShowYear(false);
                handleYearAction(2017);
              }}>
              <Text style={styles.headerText2}>2017</Text>
            </TouchableOpacity>
            <View style={styles.separator2} />
            <TouchableOpacity
              onPress={() => {
                setShowYear(false);
                handleYearAction(2018);
              }}>
              <Text style={styles.headerText2}>2018</Text>
            </TouchableOpacity>
            <View style={styles.separator2} />
            <TouchableOpacity
              onPress={() => {
                setShowYear(false);
                handleYearAction(2019);
              }}>
              <Text style={styles.headerText2}>2019</Text>
            </TouchableOpacity>
            <View style={styles.separator2} />
            <TouchableOpacity
              onPress={() => {
                setShowYear(false);
                handleYearAction(2020);
              }}>
              <Text style={styles.headerText2}>2020</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Animated.FlatList
        data={data}
        renderItem={({item, index}) => (
          <View style={styles.numberListView}>
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
            <View style={styles.hashView2}>
              <Text style={styles.numberText}>
                Launch Status :
                {item?.launch_success ? ' Successfull' : ' Failed'}
              </Text>
            </View>
            <View style={styles.hashView2}>
              <Text style={styles.numberText}>Year : {item?.launch_year}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        // ItemSeparatorComponent={() => <View style={styles.separator} />}
        // onScroll={Animated.event(
        //   [{nativeEvent: {contentOffset: {y: scrollY}}}],
        //   {useNativeDriver: true, listener: closeStatusOnScroll},
        // )}
      />
    </SafeAreaView>
  );
};

export default Launch;
