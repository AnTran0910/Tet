import {Pressable, StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState, useContext} from 'react';
import StylePlayerScreen from '../style/StylePlayerScreen';

const HomeScreen = props => {
  const {navigation} = props;
  // const goToPlayScreen = () => {
  //   navigation.navigate('PlayScreen');
    
  // };

  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [player3, setPlayer3] = useState('');
  const [player4, setPlayer4] = useState('');
  return (
    <View style={StylePlayerScreen.container}>
      <View style={StylePlayerScreen.header}>
        <Text style={StylePlayerScreen.txtHeader}>PlayerScreen</Text>
        <Text>By An Trần </Text>
      </View>

      <View style={StylePlayerScreen.body}>
        <View style={StylePlayerScreen.viewPerson12}>
          <View>
            <TextInput
              onChangeText={txt => setPlayer1(txt)}
              value={player1}
              style={StylePlayerScreen.viewPerson}
              placeholder="Person 1"></TextInput>
          </View>
          <View>
            <TextInput
              onChangeText={txt => setPlayer2(txt)}
              value={player2}
              style={StylePlayerScreen.viewPerson}
              placeholder="Person 2"></TextInput>
          </View>
        </View>
        <View style={StylePlayerScreen.viewPerson12}>
          <View>
            <TextInput
              onChangeText={txt => setPlayer3(txt)}
              value={player3}
              style={StylePlayerScreen.viewPerson}
              placeholder="Person 3"></TextInput>
          </View>
          <View>
            <TextInput
              onChangeText={txt => setPlayer4(txt)}
              value={player4}
              style={StylePlayerScreen.viewPerson}
              placeholder="Person 4"></TextInput>
          </View>
        </View>
        <View>
          <Pressable
            style={StylePlayerScreen.btnStart}
            onPress={() => navigation.navigate('PlayScreen', {player1, player2, player3, player4})} >
            <Text>Start</Text>
          </Pressable>
        </View>
      </View>

      <View style={StylePlayerScreen.footer}></View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
