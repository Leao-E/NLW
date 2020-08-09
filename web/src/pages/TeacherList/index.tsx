import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';

import './styles.css';
import api from '../../services/api';

function TeacherList () {

  
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers (e: FormEvent){
    e.preventDefault();
    
    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });
    
    setTeachers(response.data);    
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
        <Select 
            name="subject" 
            label="Matéria"
            value={subject}
            required={true}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Física', label: 'Física' },
              { value: 'Química', label: 'Química' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Redação', label: 'Redação' },
            ]}
          />      
          <Select 
            name="week_day" 
            label="Dia da Semana"
            value={week_day}
            required={true}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda' },
              { value: '2', label: 'Terça' },
              { value: '3', label: 'Quarta' },
              { value: '4', label: 'Quinta' },
              { value: '5', label: 'Sexta' },
              { value: '6', label: 'Sabádo' },            
            ]}
          />      
          <Input 
            type="time"  
            label="Hora" 
            name="time" 
            required={true}
            value={time} 
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />  
          <button type="submit">
            Buscar
          </button>      
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}      
      </main>
    </div>
  );
}

export default TeacherList;