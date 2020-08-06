import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherList () {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis">
        <form action="" id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>        

          <div className="input-block">
            <label htmlFor="week">Dia da Semana</label>
            <input type="text" id="week"/>
          </div> 

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div> 
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">  
          <header>
            <img src="https://ipc.digital/wp-content/uploads/2016/07/icon-user-default.png" alt="Nome do Usuário"/>
            
            <div>
        
              <strong>Nome do Usuário</strong>
              <span>Nome da Matéria</span>
            </div>
          </header>

          <p>
            sdxcfgvhbjnlasde e ebh bl vlhj vj vjgv jv lv lv lgjv lgjv 
            <br/>
            lk fktf td hdj ydj d rdr j td tdk tk 
          </p>
          <footer>
            <p>
              Preço/Hora
              <strong>R$ 60,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="WhatsApp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;