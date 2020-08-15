import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import PageHeader from '../../Components/PageHeader';

function TeacherList (){
  return (
    <View style={styles.container} >
      <PageHeader />
    </View>
  )
}

export default TeacherList;