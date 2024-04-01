import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  header: {
    height: hp(6),
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerText: {
    color: '#ffff',
    fontSize: hp(2.8),
  },
  back: {
    height:hp(4),
    width:wp(5)
  },

  log: {
    height:hp(4),
    width:wp(8.4)
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#e6e6e6',
    borderRadius: wp(2),
    paddingHorizontal: wp(3),
    marginHorizontal: wp(3),
    marginVertical: hp(2),
  },
  searchIcon: {
    marginRight: wp(1),
    height: hp(3),
    width: wp(6.6),
  },
  input: {
    flex: 1,
    fontSize: hp(2.3),
    color: '#000',
  },
  numberListView: {
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: hp(0.5),
  },
  numberText: {
    fontSize: hp(2.3),
    color: '#000',
    fontWeight: '500',
  },
  numberText2: {
    fontSize: hp(2.8),
    color: '#b30000',
    fontWeight: '500',
  },
  hashView: {
    marginHorizontal: wp(8),
    backgroundColor: 'red',
    borderRadius: wp(9),
  },

  imagestyles: {
    height: hp(5.05),
    width: wp(10.8),
  },

  separator: {
    height: 1,
    backgroundColor: '#e6e6e6',
    marginTop: hp(1.5),
    width: wp(100),
  },
});
