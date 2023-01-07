import {Pressable, StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useState, useContext} from 'react';
import StyleHomeScreen from '../style/StyleHomeScreen';

const HomeScreen = (props) => {
  const {navigation} = props;
  const goToPlayerScreen = () => {
    navigation.navigate('PlayerScreen')
  }
  const localImg = require('../../assets/image/bg.jpg');
  // const img = {
  //   uri: 'https://www.facebook.com/messenger_media/?attachment_id=6080356835331741&message_id=mid.%24gAA_-ouIovQCLnpoArGFbVSxkyxdn&thread_id=4502100183137536',
  // };
  return (
    <ImageBackground
      source={localImg}
      resizeMode="cover"
      style={StyleHomeScreen.container}>
      <View style={StyleHomeScreen.header}>
        <Text style={StyleHomeScreen.txtHeader}>HomeScreen</Text>
        <Text>By An siêu cấp vip pro</Text>
      </View>

      <View style={StyleHomeScreen.body}>
        <Pressable style={StyleHomeScreen.btnCreateNewGame} onPress={goToPlayerScreen}>
          <Text style={StyleHomeScreen.txtCreateNewGame}>
            Tạo trận mới nè !!!
          </Text>
        </Pressable>
      </View>

      <View style={StyleHomeScreen.footer}>{/* <Text>footer</Text> */}</View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
