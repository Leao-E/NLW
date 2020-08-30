import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';

import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

function Favorites (){

  const [favorites, setFavorites] = useState<Teacher[]>([]);

  useFocusEffect(() => {
    AsyncStorage.getItem('favorites').then(res => {
      if (res){      
        setFavorites(JSON.parse(res));
      }
    });
  });

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
          {favorites.map((teacher: Teacher) => {
            return (
              <TeacherItem 
                key={teacher.id}
                teacher={teacher}
                favorited={true}
              />
            )          
          })}        
        </ScrollView> 
    </View>
  )
}

export default Favorites;