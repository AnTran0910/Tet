import {StyleSheet} from 'react-native';

const styleHome = StyleSheet.create({
  /* footer */
  footer: {
    flex: 1,
  },
  /*
   */

  /* body */
  btnStart: {
    backgroundColor: 'yellow',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 30,
  },
  viewPerson: {
    marginHorizontal: 10,
    marginVertical: 20,
    width: 150,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingStart: 10,
  },

  viewPerson12: {
    flexDirection: 'row',
  },
  body: {
    flex: 7,
    alignItems: 'center',
  },

  /*
   */

  /* header */
  txtHeader: {
    fontSize: 29,
    fontWeight: 'bold',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /*
   */

  /*
   */
  container: {
    flex: 1,
  },
});
export default styleHome;
