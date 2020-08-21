import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';

import styles from './styles';

function TeacherList (){
  return (
    <View style={styles.container} >
      <PageHeader title={'Proffys disponíveis'}/>
      <TeacherItem />
    </View>
  );
}

export default TeacherList;