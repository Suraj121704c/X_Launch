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
    height: hp(4),
    width: wp(5),
  },

  checkIamgeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: wp(1),
    borderColor: 'green',
    padding: wp(2),
  },

  checkimage: {
    height: hp(4),
    width: wp(6.5),
    marginHorizontal: wp(2),
  },

  topbar: {
    marginHorizontal: wp(5),
    marginBottom: hp(1.5),
  },

  log: {
    height: hp(4),
    width: wp(8.5),
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
    marginTop: hp(2.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: hp(0.5),
  },
  numberText: {
    fontSize: hp(2.3),
    color: '#ffff',
    fontWeight: '500',
  },
  numberText2: {
    fontSize: hp(2.8),
    color: '#b30000',
    fontWeight: '500',
  },
  hashView: {
    marginHorizontal: wp(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(85),
  },

  hashView2: {
    marginHorizontal: wp(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(85),
    marginTop: hp(2),
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
  separator2: {
    height: 1,
    backgroundColor: '#000',
    marginTop: hp(1.5),
    width: wp(90),
  },

  monthsView: {
    position: 'absolute',
    backgroundColor: '#fff',
    height: hp(14.5),
    zIndex: 1,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    width: wp(90),
    borderRadius: wp(2),
    right: wp(0),
    top: hp(6),
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    alignItems:'center'
  },

  monthsView2:{
    position: 'absolute',
    backgroundColor: '#fff',
    height: hp(46),
    zIndex: 1,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    width: wp(90),
    borderRadius: wp(2),
    right: wp(0),
    top: hp(6),
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    alignItems:'center'
  },

  headerText2: {
    color: '#000',
    fontSize: hp(2.8),
    marginTop:hp(1)
  },
});
