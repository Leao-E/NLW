import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

function TeacherItem () {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://github.com/Leao-E.png'}}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Emanuel Leão</Text>
          <Text style={styles.subject}>React Native</Text>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;