import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>hey</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default ChatScreen;
