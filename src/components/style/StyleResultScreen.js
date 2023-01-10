import {StyleSheet} from 'react-native';

const styleResult = StyleSheet.create({
  /* footer */
  footer: {
    flex: 1,
  },
  /*
   */

  /* body */
  textHome: {
    color: 'red',
    fontSize: 13,
    fontWeight: 'bold',
  },
  btnHome: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 35,
    backgroundColor: 'yellow',
  },
  viewBtn: {
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtScore: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtName: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
  },
  viewNameAndScore: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  body: {
    flex: 8,
    justifyContent: 'center',
  },

  /*
   */

  /* header */
  txtTitle: {
    color: '#C71585',
    fontWeight: 'bold',
    fontSize: 25,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /*
   */

  /*
   */
  container: {
    flex: 1,
    backgroundColor: '#c8f7f7',
  },
});
export default styleResult;
