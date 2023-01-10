import {StyleSheet} from 'react-native';

const stylePlay = StyleSheet.create({
  txtEnd: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  btnEnd: {
    backgroundColor: 'yellow',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 20,
  },
  viewBtnEnd: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  /* dialog */
  txtSave: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnSave: {
    backgroundColor: 'red',
    borderRadius: 10,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  txtClose: {
    color: 'grey',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imgClose: {
    width: 12,
    height: 12,
  },
  btnClose: {
    backgroundColor: 'yellow',
    borderRadius: 10,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btn: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tipScore: {
    width: 60,
    padding: 0,
    borderBottomWidth: 2,
    paddingTop: -5,
  },
  scorePlayer: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  txtScore: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  dialogContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 20,
  },
  styleDialog: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  /*
   */
  /* footer */
  btnAdd: {
    width: 45,
    height: 45,
    marginEnd: 20,
  },
  viewBtnAdd: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
  },
  /*
   */

  /* body */
  body: {
    marginTop: 50,
    flex: 6,
  },

  /*
   */

  /* header */
  txtScore: {
    marginHorizontal: 10,
    size: 12,
    color: 'black',
  },
  viewScore: {
    marginTop: 5,
    flexDirection: 'row',
    marginHorizontal: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  // viewNamePlayer:{},
  avatarPlayer: {
    width: 50,
    height: 50,
  },
  txtNamePlayer: {
    marginTop: 10,
    marginBottom: -30,
    marginHorizontal: 10,
    size: 14,
    fontWeight: 'bold',
    color: 'red',
  },
  viewPlayer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  viewNamePlayer: {
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 0,
  },
  viewSumGame: {
    marginTop: 20,
    flexDirection: 'row',
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
  bgImage: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});
export default stylePlay;
