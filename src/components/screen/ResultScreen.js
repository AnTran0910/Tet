import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import StyleResultScreen from '../style/StyleResultScreen';
import {parse} from '@babel/core';

const ResultScreen = ({navigation, route}) => {
  //const {navigation} = props;
  const {listData} = route.params;
  const {player1} = route.params;
  const {player2} = route.params;
  const {player3} = route.params;
  const {player4} = route.params;
  const [player11, setplayer11] = useState(0);
  const [player22, setplayer22] = useState(0);
  const [player33, setplayer33] = useState(0);
  const [player44, setplayer44] = useState(0);

  const goToHome = () => {
    navigation.navigate('HomeScreen');
  };

  const getResult = () => {
    console.log(listData);
    if (listData == null) return;
    let score1 = 0,
      score2 = 0,
      score3 = 0,
      score4 = 0;
    for (let i = 0; i < listData.length; i++) {
      console.log(listData[i].player1);
      score1 += parseInt(listData[i].player1);
      score2 += parseInt(listData[i].player2);
      score3 += parseInt(listData[i].player3);
      score4 += parseInt(listData[i].player4);
    }
    setplayer11(score1);
    setplayer22(score2);
    setplayer33(score3);
    setplayer44(score4);

    console.log(player1, player2, player3, player4);
  };

  useEffect(() => {
    if (listData) {
      getResult();
    } else {
      console.log('No listData');
    }
  }, []);

  return (
    <View style={StyleResultScreen.container}>
      <View style={StyleResultScreen.header}>
        <Text style={StyleResultScreen.txtTitle}>ResultScreen</Text>
      </View>

      <View style={StyleResultScreen.body}>
        <View style={StyleResultScreen.viewNameAndScore}>
          <Text style={StyleResultScreen.txtName}>{player1}</Text>
          <Text style={StyleResultScreen.txtScore}>:</Text>
          <Text style={StyleResultScreen.txtScore}>{player11}</Text>
        </View>

        <View style={StyleResultScreen.viewNameAndScore}>
          <Text style={StyleResultScreen.txtName}>{player2}</Text>
          <Text style={StyleResultScreen.txtScore}>:</Text>
          <Text style={StyleResultScreen.txtScore}>{player22}</Text>
        </View>

        <View style={StyleResultScreen.viewNameAndScore}>
          <Text style={StyleResultScreen.txtName}>{player3}</Text>
          <Text style={StyleResultScreen.txtScore}>:</Text>
          <Text style={StyleResultScreen.txtScore}>{player33}</Text>
        </View>

        <View style={StyleResultScreen.viewNameAndScore}>
          <Text style={StyleResultScreen.txtName}>{player4}</Text>
          <Text style={StyleResultScreen.txtScore}>:</Text>
          <Text style={StyleResultScreen.txtScore}>{player44}</Text>
        </View>

        <View style={StyleResultScreen.viewBtn}>
          <Pressable style={StyleResultScreen.btnHome} onPress={goToHome}>
            <Text style={StyleResultScreen.textHome}>OKE</Text>
          </Pressable>
        </View>
      </View>
      <View style={StyleResultScreen.footer}></View>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({});
