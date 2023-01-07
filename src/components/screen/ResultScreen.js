import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState, useContext} from 'react';
import StyleResultScreen from '../style/StyleResultScreen';

const ResultScreen = props => {
  const {navigation} = props;

  const goToHome = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <View>
      <Text>ResultScreen</Text>
      <Pressable onPress={goToHome}>
        <Text>OKE</Text>
      </Pressable>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({});
