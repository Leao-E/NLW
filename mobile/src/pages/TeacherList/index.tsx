import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, LayoutAnimation, Platform, UIManager } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';

import api from '../../services/api';

import styles from './styles';

function TeacherList (){

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState <number[]> ([]);
  const [isFiltersVisible, setIsFilterVisible] = useState(false);

  const [weekDay, setWeekDay] = useState('');
  const [subject, setSubject] = useState('');
  const [time, setTime] = useState('');

  function animation(){
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        150,
        LayoutAnimation.Types.easeOut,
        LayoutAnimation.Properties.opacity,
      ));
  }

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(res => {
      if (res){
        const favoritedTeachers = JSON.parse(res);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        });
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  function handleToggleIsFilterVisible() {
    //LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    animation();
    setIsFilterVisible(!isFiltersVisible);
  }

  async function handleFilterSubmit (){
    loadFavorites()
    
    const params = {
      subject: subject,
        week_day: weekDay,
        time: time,
    }
  
    try {
      const response = await api.get('classes', {
        params: params,
      });    
    
      setTeachers(response.data);        

    } catch (error) {
      console.log(error);      
    }
      
    animation();

    setIsFilterVisible(false);  
  }

  return (
    <View style={styles.container} >
      <PageHeader 
        title={'Proffys disponíveis'}
        headerRight={(
          <BorderlessButton onPress={handleToggleIsFilterVisible}>
            <Feather name={'filter'} size={25} color= {'#04D361'}/>
          </BorderlessButton>
        )}
      >          
        {isFiltersVisible && (
          <View style={styles.searchForm}>        
            <Text style={styles.label}>Matéria</Text>
            <TextInput 
              onChangeText={text => setSubject(text)}
              value={subject}
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder="Seleciona a matéria"
            />   
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  onChangeText={text => setWeekDay(text)}
                  value={weekDay}
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Selecione o dia"
                />
              </View>            
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  onChangeText={text => setTime(text)}
                  value={time}
                  placeholderTextColor="#c1bccc" 
                  style={styles.input}
                  placeholder="Selecione horário"
                />
              </View>
            </View>
            <RectButton 
              style={styles.submitButton}
              onPress={handleFilterSubmit}
            >
              <Text style={styles.submitButtonText}>
                Filtrar
              </Text>
            </RectButton>
          </View>                  
        )}  
      </PageHeader>
        <ScrollView
          style={styles.teacherList}

          contentContainerStyle={{        
            paddingBottom: 24,          
            paddingHorizontal: 14                        
          }}                      
        >
          {teachers.map((teacher: Teacher) => {
            return (
              <TeacherItem 
                key={teacher.id} 
                teacher={teacher} 
                favorited={favorites.includes(teacher.id)}
              />
            )})}      
        </ScrollView>      
    </View>
  );
}

export default TeacherList;