import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem () {
  return (
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
  );
}

export default TeacherItem;