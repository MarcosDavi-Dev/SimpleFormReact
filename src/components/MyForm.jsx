import "./MyForm.css";

import { useState } from "react";

const MyForm = () => {
  // 3 - Gerencimanento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  //   5 - Envio de form
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email);
  };

  console.log(name);
  console.log(email);

  return (
    <div>
      {/* 1 - Criação de form */}
      {/* 5 - Envio de formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
          />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            // 4 - Simplificando manipulação
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
