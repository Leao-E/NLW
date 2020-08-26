import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, LayoutAnimation, Platform, UIManager } from 'react-native';

import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';

import styles from './styles';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons'

function TeacherList (){
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const [isFiltersVisible, setIsFilterVisible] = useState(false);

  function handleToggleIsFilterVisible() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsFilterVisible(!isFiltersVisible);
  }


  return (
    <View style={styles.container} >
      <PageHeader 
        title={'Proffys disponíveis'}
        headerRight={(
          <BorderlessButton onPress={handleToggleIsFilterVisible}>
            <Feather name={'filter'} size={20} color= {'#fff'}/>
          </BorderlessButton>
        )}
      >          
        {isFiltersVisible && (
          <View style={styles.searchForm}>        
            <Text style={styles.label}>Matéria</Text>
            <TextInput 
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder="Seleciona a matéria"
            />   
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Selecione o dia"
                />
              </View>            
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  placeholderTextColor="#c1bccc" 
                  style={styles.input}
                  placeholder="Selecione horário"
                />
              </View>
            </View>
            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>
                
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
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </ScrollView>      
    </View>
  );
}

export default TeacherList;