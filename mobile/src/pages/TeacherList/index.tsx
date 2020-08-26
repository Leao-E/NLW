import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

function TeacherList (){
  return (
    <View style={styles.container} >
      <PageHeader title={'Proffys disponíveis'}>      
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
        </View>  
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