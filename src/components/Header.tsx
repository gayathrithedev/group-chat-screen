import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('../assets/left_arrow.png')} />
      </TouchableOpacity>
      <Text>Jacob Jones</Text>
      <TouchableOpacity>
        <Image source={require('../assets/dots.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
});

export default Header;
