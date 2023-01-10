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
import React, { useState, useEffect } from 'react';
import StylePlayScreen from '../style/StylePlayScreen';

const OpenDialog = ({ visible, children }) => {
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

const OpenDialog2 = ({ visible, children }) => {
  const [showDialog2, setShowDialog2] = useState(visible);
  useEffect(() => {
    toggleModel();
  }, [visible]);
  const toggleModel = () => {
    if (visible) {
      setShowDialog2(true);
    } else {
      setShowDialog2(false);
    }
  };
  return (
    <Modal transparent visible={showDialog2}>
      <View style={StylePlayScreen.styleDialog}>
        <View style={StylePlayScreen.dialogContainer}>{children}</View>
      </View>
    </Modal>
  );
};

const Item = ({ item, onPress }) => (
  <Pressable style={StylePlayScreen.viewScore} onPress={onPress}>
    <Text style={StylePlayScreen.txtScore}>{item.player1}</Text>
    <Text style={StylePlayScreen.txtScore}>{item.player2}</Text>
    <Text style={StylePlayScreen.txtScore}>{item.player3}</Text>
    <Text style={StylePlayScreen.txtScore}>{item.player4}</Text>
  </Pressable>
);
let listData = [];

const PlayScreen = ({ route, navigation }) => {
  const { player1 } = route.params;
  const { player2 } = route.params;
  const { player3 } = route.params;
  const { player4 } = route.params;

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const [scorePlayer1, setScorePlayer1] = useState(1);
  const [scorePlayer2, setScorePlayer2] = useState(2);
  const [scorePlayer3, setScorePlayer3] = useState(3);
  const [scorePlayer4, setScorePlayer4] = useState(4);

  const [id, setId] = useState(0);
  const [van, setVan] = useState(0);
  const [idUpdate, setIdUpdate] = useState();
  const [list, setlist] = useState([]);

  const [selectedId, setSelectedId] = useState(0);

  const seletedItem = (_id) => {
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
    setVisible(false);
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
    setVan(van + 1);
    if (listData) console.log(listData);
  };

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => seletedItem(item._id)} />;
  };

  // const {navigation} = props;
  const goToResultsScreen = () => {
    navigation.navigate(
      'ResultScreen', 
      {'listData' : list, 'player1' : player1, 'player2' : player2, 'player3' : player3, 'player4' : player4}
    );
  };


  // Dialog xoa hoac cap nhat
  const deleteOrUpdate = (_id) => {
    Alert.alert(
      'Hello', 'What do you want ???',
      [
        { text: 'Cancel', onPress: () => { console.log('OUT !!!') } },
        { text: 'Update', onPress: () => { updateItem(_id) } },
        { text: 'Delete', onPress: () => { deleteItem(_id) } },
      ],
    );
  };

  // Xoa 1 item
  const deleteItem = (_id) => {
    if (listData) {
      setVan(van - 1);
      for (let i = 0; i < listData.length; i++) {
        if (listData[i]._id === _id) {
          listData.splice(i, 1);
        }
      }
      console.log(listData);
      setlist(listData);
    }
  }

  // Cap nhat 1 item
  const updateItem = (_id) => {
    setVisible2(true);
    setIdUpdate(_id);
    console.log(list[_id].player1 + ' ' + list[_id].player2 + ' ' + list[_id].player3 + ' ' + list[_id].player4);
    const score1 = list[_id].player1;
    const score2 = list[_id].player2;
    const score3 = list[_id].player3;
    const score4 = list[_id].player4;
    setScorePlayer1(score1);
    setScorePlayer2(score2);
    setScorePlayer3(score3);
    setScorePlayer4(score4);
  };

  const updateScoreList = (_id) => {
    console.log("UpdateScoreList.......");
    const score = {
      _id: _id,
      player1: scorePlayer1,
      player2: scorePlayer2,
      player3: scorePlayer3,
      player4: scorePlayer4,
    };

    listData[_id] = score;
    if (listData) {
      console.log("ListData new: " + listData);
      setlist(listData);
    }

  };

  return (
    <View style={StylePlayScreen.container}>
      <View style={StylePlayScreen.header}>
        <View style={StylePlayScreen.viewSumGame}>
          <Text>Số ván : </Text>
          <Text>{van}</Text>
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
              onPress={() => addScorePlayer()}>
              <Image
                style={StylePlayScreen.imgClose}
                source={require('../../assets/image/btnSave.png')}
                resizeMode="cover"></Image>
              <Text style={StylePlayScreen.txtSave}>Save</Text>
            </Pressable>
          </View>
        </OpenDialog>
      </View>

      <OpenDialog2 visible={visible2}>
        <View>
          <Text style={StylePlayScreen.txtScore}>Score Update</Text>
        </View>
        {/* Score Player */}
        <View style={StylePlayScreen.scorePlayer}>
          <Text>{player1}</Text>
          <View>
            <TextInput
              style={StylePlayScreen.tipScore}
              onChangeText={Number => setScorePlayer1(Number)}
              value={scorePlayer1}
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
              keyboardType="numeric"></TextInput>
          </View>
        </View>
        {/*  */}
        {/* btnClose & btnSave */}
        <View style={StylePlayScreen.btn}>
          {/* btnClose */}
          <Pressable
            style={StylePlayScreen.btnClose}
            onPress={() => setVisible2(false)}>
            <Image
              style={StylePlayScreen.imgClose}
              source={require('../../assets/image/btnClose.png')}
              resizeMode="cover"></Image>
            <Text style={StylePlayScreen.txtClose}>Close</Text>
          </Pressable>
          <Pressable
            style={StylePlayScreen.btnSave}
            onPress={() => setVisible2(false, updateScoreList(idUpdate))}>
            <Image
              style={StylePlayScreen.imgClose}
              source={require('../../assets/image/btnSave.png')}
              resizeMode="cover"></Image>
            <Text style={StylePlayScreen.txtSave}>Save</Text>
          </Pressable>
        </View>
      </OpenDialog2>
    </View>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({});
