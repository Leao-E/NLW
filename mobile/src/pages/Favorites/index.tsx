import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';

import styles from './styles';

function Favorites (){

  const [favoriteTeachers, setFavoriteTeachers] = useState ([]);

  return (
    <View style={styles.container} >
      <PageHeader title={'Meus proffys favoritos'}/>         
        <ScrollView
          style={styles.teacherList}

          contentContainerStyle={{        
            paddingBottom: 24,          
            paddingHorizontal: 14                        
          }}                      
        >
          {favoriteTeachers.map((teacher: Teacher) => {
            <TeacherItem 
              key={teacher.id}
              teacher={teacher}
            />
          })}        
        </ScrollView> 
    </View>
  )
}

export default Favorites;