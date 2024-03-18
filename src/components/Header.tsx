import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {colors, fonts} from '../theme';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require('../assets/chevron-left.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <View style={styles.profileWrapper}>
          <Image
            source={require('../assets/myprofile.png')}
            style={styles.profile}
          />
        </View>
        <Text style={[fonts.regular, {color: colors.black}]}>Jacob Jones</Text>
      </View>
      <TouchableOpacity>
        <Image source={require('../assets/overflow.png')} style={styles.icon} />
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
    borderBottomWidth: 1,
    borderBottomColor: '#0000000C',
  },
  profile: {
    width: 20,
    height: 20,
  },
  profileWrapper: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.sunglow,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Header;
