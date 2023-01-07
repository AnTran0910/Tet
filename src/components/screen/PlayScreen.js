import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import StylePlayScreen from '../style/StylePlayScreen';

const OpenDialog = ({visible, children}) => {
  const [showDialog, setShowDialog] = useState(visible);
  useEffect(() => {
    toggleModel();
  }, [visible]);
  const toggleModel = () => {
    if (visible) {
      setShowDialog(true);
    } else {
      setShowDialog(false);
    }
  };
  return (
    <Modal transparent visible={showDialog}>
      <View style={StylePlayScreen.styleDialog}>
        <View style={StylePlayScreen.dialogContainer}>{children}</View>
      </View>
    </Modal>
  );
};

const Item = ({item, onPress}) => (
  <Pressable style={StylePlayScreen.viewScore} onPress={onPress}>
    <Text style={StylePlayScreen.txtScore}>{item.player1}</Text>
    <Text style={StylePlayScreen.txtScore}>{item.player2}</Text>
    <Text style={StylePlayScreen.txtScore}>{item.player3}</Text>
    <Text style={StylePlayScreen.txtScore}>{item.player4}</Text>
  </Pressable>
);
let listData = [];

const PlayScreen = ({route, navigation}) => {
  const {player1} = route.params;
  const {player2} = route.params;
  const {player3} = route.params;
  const {player4} = route.params;

  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);

  const [scorePlayer1, setScorePlayer1] = useState('');
  const [scorePlayer2, setScorePlayer2] = useState('');
  const [scorePlayer3, setScorePlayer3] = useState('');
  const [scorePlayer4, setScorePlayer4] = useState('');
  const [id, setId] = useState(0);
  const [list, setlist] = useState([]);

  const [selectedId, setSelectedId] = useState(0);

  const seletedItem = _id => {
    setSelectedId(_id);
    console.log('_id: ' + _id);
    deleteOrUpdate(_id);
  };

  const setScoreDefault = () => {
    setVisible(true);
    setScorePlayer1(0);
    setScorePlayer2(0);
    setScorePlayer3(0);
    setScorePlayer4(0);
  };

  const addScorePlayer = () => {
    const score = {
      _id: id,
      player1: scorePlayer1,
      player2: scorePlayer2,
      player3: scorePlayer3,
      player4: scorePlayer4,
    };
    listData.push(score);
    setlist(listData);
    setId(id + 1);
    if (listData) console.log(listData);
  };

  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => seletedItem(item._id)} />;
  };

  // const {navigation} = props;
  const goToResultsScreen = () => {
    navigation.navigate('ResultScreen');
  };
  

  const deleteOrUpdate = _id => {
    Alert.alert(
      // title
      'Hello',
      // body
      'What do you want ???',
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('OUT !!!');
          },
        },
        {
          text: 'Update',
          onPress: () => {
            updateItem(_id);
            setVisible2(true);
            console.log('Update !!!');
          },
        },
        {
          text: 'Delete',
          onPress: () => {
            deletItem(_id);
            console.log('Delete !!!');
          },
        },
      ],
    );
  };

  const updateItem = _id => {
    <OpenDialog visible={visible2}>
      <View>
        <Text style={StylePlayScreen.txtScore}>Score Update</Text>
      </View>
      ;{/* Score Player */}
      <View style={StylePlayScreen.scorePlayer}>
        <Text>{player1}</Text>
        <View>
          <TextInput
            style={StylePlayScreen.tipScore}
            onChangeText={Number => setScorePlayer1(Number)}
            value={listData[_id].player1}
            // onChangeText={onChangeNumber}
            // value={number}
            keyboardType="numeric"></TextInput>
        </View>
      </View>
      ;{/* player 2 */}
      <View style={StylePlayScreen.scorePlayer}>
        <Text>{player2}</Text>
        <View>
          <TextInput
            style={StylePlayScreen.tipScore}
            onChangeText={Number => setScorePlayer2(Number)}
            value={listData[_id].player2}
            // onChangeText={onChangeNumber}
            // value={number}
            keyboardType="numeric"></TextInput>
        </View>
      </View>
      ;{/* player 3 */}
      <View style={StylePlayScreen.scorePlayer}>
        <Text>{player3}</Text>
        <View>
          <TextInput
            style={StylePlayScreen.tipScore}
            onChangeText={Number => setScorePlayer3(Number)}
            value={listData[_id].player3}
            // onChangeText={onChangeNumber}
            // value={number}
            keyboardType="numeric"></TextInput>
        </View>
      </View>
      ;{/* player 4 */}
      <View style={StylePlayScreen.scorePlayer}>
        <Text>{player4}</Text>
        <View>
          <TextInput
            style={StylePlayScreen.tipScore}
            onChangeText={Number => setScorePlayer4(Number)}
            value={listData[_id].player4}
            // onChangeText={onChangeNumber}
            // value={number}
            keyboardType="numeric"></TextInput>
        </View>
      </View>
      ;{/*  */}
      {/* btnClose & btnSave */}
      <View style={StylePlayScreen.btn}>
        {/* <TouchableOpacity></TouchableOpacity> */}
        {/* btnClose */}
        <Pressable
          style={StylePlayScreen.btnClose}
          onPress={() => setVisible(false)}>
          <Image
            style={StylePlayScreen.imgClose}
            source={require('../../assets/image/btnClose.png')}
            resizeMode="cover"></Image>
          <Text style={StylePlayScreen.txtClose}>Close</Text>
        </Pressable>
        <Pressable
          style={StylePlayScreen.btnSave}
          onPress={() => setVisible(false, updateScoreList(item._id))}>
          <Image
            style={StylePlayScreen.imgClose}
            source={require('../../assets/image/btnSave.png')}
            resizeMode="cover"></Image>
          <Text style={StylePlayScreen.txtSave}>Save</Text>
        </Pressable>
      </View>
      ;
    </OpenDialog>;
  };

  const updateScoreList = _id => {
    const score = {
      _id: _id,
      player1: scorePlayer1,
      player2: scorePlayer2,
      player3: scorePlayer3,
      player4: scorePlayer4,
    };
    listData[_id] = score;
    setlist = listData;
  };

  return (
    <View style={StylePlayScreen.container}>
      <View style={StylePlayScreen.header}>
        <View style={StylePlayScreen.viewSumGame}>
          <Text>Số ván : </Text>
          <Text>{id}</Text>
        </View>
        <View style={StylePlayScreen.viewNamePlayer}>
          <View style={StylePlayScreen.viewPlayer}>
            <Image
              style={StylePlayScreen.avatarPlayer}
              source={require('../../assets/image/player1.jpg')}
              resizeMode="cover"></Image>
            <Text style={StylePlayScreen.txtNamePlayer}>{player1}</Text>
          </View>

          <View style={StylePlayScreen.viewPlayer}>
            <Image
              style={StylePlayScreen.avatarPlayer}
              source={require('../../assets/image/player2.jpg')}
              resizeMode="cover"></Image>
            <Text style={StylePlayScreen.txtNamePlayer}>{player2}</Text>
          </View>

          <View style={StylePlayScreen.viewPlayer}>
            <Image
              style={StylePlayScreen.avatarPlayer}
              source={require('../../assets/image/player3.jpg')}
              resizeMode="cover"></Image>
            <Text style={StylePlayScreen.txtNamePlayer}>{player3}</Text>
          </View>

          <View style={StylePlayScreen.viewPlayer}>
            <Image
              style={StylePlayScreen.avatarPlayer}
              source={require('../../assets/image/player4.jpg')}
              resizeMode="cover"></Image>
            <Text style={StylePlayScreen.txtNamePlayer}>{player4}</Text>
          </View>
        </View>
      </View>
      <View style={StylePlayScreen.body}>
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList>
            <Pressable style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>{scorePlayer1}</Text>
              <Text style={StylePlayScreen.txtScore}>{scorePlayer2}</Text>
              <Text style={StylePlayScreen.txtScore}>{scorePlayer3}</Text>
              <Text style={StylePlayScreen.txtScore}>{scorePlayer4}</Text>
            </Pressable>

            <Pressable
              
              style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </Pressable>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
              <Text style={StylePlayScreen.txtScore}>3</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>3</Text>
              <Text style={StylePlayScreen.txtScore}>0</Text>
              <Text style={StylePlayScreen.txtScore}>1</Text>
              <Text style={StylePlayScreen.txtScore}>2</Text>
            </View>

            <View style={StylePlayScreen.viewScore}>
              <Text style={StylePlayScreen.txtScore}>{scorePlayer1}</Text>
              <Text style={StylePlayScreen.txtScore}>{scorePlayer2}</Text>
              <Text style={StylePlayScreen.txtScore}>{scorePlayer3}</Text>
              <Text style={StylePlayScreen.txtScore}>{scorePlayer4}</Text>
            </View>
          </FlatList>
        </ScrollView> */}

        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          extraData={selectedId}
          showsVerticalScrollIndicator={false}
        />

        <View style={StylePlayScreen.viewBtnEnd}>
          <Pressable style={StylePlayScreen.btnEnd} onPress={goToResultsScreen}>
            <Text style={StylePlayScreen.txtEnd}>End</Text>
          </Pressable>
        </View>
      </View>

      <View style={StylePlayScreen.footer}>
        <View style={StylePlayScreen.viewBtnAdd}>
          <Pressable onPress={() => setScoreDefault()}>
            <Image
              style={StylePlayScreen.btnAdd}
              source={require('../../assets/image/btnAdd.png')}
              resizeMode="cover"></Image>
          </Pressable>
        </View>

        {/* Dialog Score */}
        <OpenDialog visible={visible}>
          {/* player 1 */}
          <View>
            <Text style={StylePlayScreen.txtScore}>Score</Text>
          </View>

          {/* Score Player */}

          <View style={StylePlayScreen.scorePlayer}>
            <Text>{player1}</Text>
            <View>
              <TextInput
                style={StylePlayScreen.tipScore}
                onChangeText={Number => setScorePlayer1(Number)}
                value={scorePlayer1}
                // onChangeText={onChangeNumber}
                // value={number}
                keyboardType="numeric"></TextInput>
            </View>
          </View>

          {/* player 2 */}
          <View style={StylePlayScreen.scorePlayer}>
            <Text>{player2}</Text>
            <View>
              <TextInput
                style={StylePlayScreen.tipScore}
                onChangeText={Number => setScorePlayer2(Number)}
                value={scorePlayer2}
                // onChangeText={onChangeNumber}
                // value={number}
                keyboardType="numeric"></TextInput>
            </View>
          </View>

          {/* player 3 */}
          <View style={StylePlayScreen.scorePlayer}>
            <Text>{player3}</Text>
            <View>
              <TextInput
                style={StylePlayScreen.tipScore}
                onChangeText={Number => setScorePlayer3(Number)}
                value={scorePlayer3}
                // onChangeText={onChangeNumber}
                // value={number}
                keyboardType="numeric"></TextInput>
            </View>
          </View>

          {/* player 4 */}
          <View style={StylePlayScreen.scorePlayer}>
            <Text>{player4}</Text>
            <View>
              <TextInput
                style={StylePlayScreen.tipScore}
                onChangeText={Number => setScorePlayer4(Number)}
                value={scorePlayer4}
                // onChangeText={onChangeNumber}
                // value={number}
                keyboardType="numeric"></TextInput>
            </View>
          </View>
          {/*  */}

          {/* btnClose & btnSave */}
          <View style={StylePlayScreen.btn}>
            {/* <TouchableOpacity></TouchableOpacity> */}
            {/* btnClose */}
            <Pressable
              style={StylePlayScreen.btnClose}
              onPress={() => setVisible(false)}>
              <Image
                style={StylePlayScreen.imgClose}
                source={require('../../assets/image/btnClose.png')}
                resizeMode="cover"></Image>
              <Text style={StylePlayScreen.txtClose}>Close</Text>
            </Pressable>
            <Pressable
              style={StylePlayScreen.btnSave}
              onPress={() => setVisible(false, addScorePlayer())}>
              <Image
                style={StylePlayScreen.imgClose}
                source={require('../../assets/image/btnSave.png')}
                resizeMode="cover"></Image>
              <Text style={StylePlayScreen.txtSave}>Save</Text>
            </Pressable>
          </View>
        </OpenDialog>

        {/* Dialog delete, update */}
        <OpenDialog></OpenDialog>
      </View>
    </View>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({});
