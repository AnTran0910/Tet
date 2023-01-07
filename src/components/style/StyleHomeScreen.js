import {StyleSheet} from 'react-native';

const styleHome = StyleSheet.create({
  /* footer */
  footer: {
    flex: 1,
    // backgroundColor: 'red',
  },
  /*
   */

  /* body */
  txtCreateNewGame: {
    color: 'white',
    fontSize: 14,
  },
  btnCreateNewGame: {
    backgroundColor: 'blue',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  body: {
    flex: 1,
    // backgroundColor: 'aqua',
    justifyContent: 'center',
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
    flex: 1,
    // backgroundColor: 'yellow',
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
