import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Textarea from '../../components/Textarea';
import api from '../../services/api';



function TeacherForm () {  

  interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
  }
  const history = useHistory();

  let initialState: Array<ScheduleItem> = [
    {week_day: 0, from: '', to: ''},
  ];

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState(initialState);

  function addNewScheduleItem (){    
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: '',
      }
    ]);  
  }

  function setScheduleItemValue (position: number, field:string, value:string){
    const newArray = scheduleItems.map((scheduleItem:ScheduleItem, index) => {
      if (index === position){
        return {...scheduleItem, [field]: value}
      }
      return scheduleItem;
    });

    setScheduleItems(newArray);  
  }

  function handleCreateClass (e: FormEvent){  
    e.preventDefault();

    api.post('/classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule: scheduleItems,
    }).then((response) => {
      console.log(response);    
      alert('Cadastrado com sucesso!');
      history.push('/');
    }).catch((response) => {
      console.log(response);  
      alert('Erro no cadastro!');
    });
    
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você que dar aulas"
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input name="name" label="Nome completo" value={name} onChange={(e) => {
              setName(e.target.value);
            }}/>
            <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => {
              setAvatar(e.target.value);
            }}/>
            <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(e) => {
              setWhatsapp(e.target.value);
            }}/>
            <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => {
              setBio(e.target.value);                        
            }}/>
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select 
              name="subject" 
              label="Matéria"
              value={subject}
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
            <Input name="cost" label="Custo da sua hora por aula" value={cost} onChange={(e) => {
              setCost(e.target.value);
            }}/>         
            
          </fieldset>
          
          <fieldset>
            <legend>Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>        
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">          
                  <Select 
                    name="week_day" 
                    label="Dia da Semana"
                    value={scheduleItem.week_day}
                    onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                    name="from"
                    label="Das" 
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)} 
                  />
                  <Input 
                    name="to" 
                    label="Até" 
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                  />
                </div>
              );
            })}      
          </fieldset>  
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br/>
              Peencha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;