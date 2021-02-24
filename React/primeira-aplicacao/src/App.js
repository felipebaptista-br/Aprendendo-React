import React, { Component } from "react";
import Comentario from "./components/Comentario.js";
import './App.css';

class App extends Component {

  // Aqui temos um array dentro do estado
  state = {
    comentarios: [
      {
        nome: "João",
        email: "joao@mail.com",
        data: new Date(2020, 3, 19),
        mensagem: "Olá, tudo bem?"
      },
      {
        nome: "Maria",
        email: "maria@mail.com",
        data: new Date(2020, 3, 22),
        mensagem: "Olá, tudo bem sim..."
      },
    ],
    novoComentario: {
      nome: "",
      email: "",
      mensagem: ""
    }
  }

  // A função receberá o evento de POST do form como parâmetro, que será cancelado usando o "preventDefault"
  adicionarComentario = evento => {
    evento.preventDefault();
    console.log("Adicionando Comentário");
    const novoComentario = { ...this.state.novoComentario, data: new Date() }
    // Alterando o estado mesclando tudo que já havia no array com os novos dados
    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome: "", email: "", mensagem: "" }
    });
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario);

    this.setState({ comentarios: lista })
  }

  digitacao = evento => {
    // Pegando o value e name na digitação do form usando desconstrução
    const { name, value } = evento.target;
    this.setState({ novoComentario: { ...this.state.novoComentario, [name]: value } })
  }

  render() {
    return (
      <div className="App">
        <h1>Comentários</h1>

        {/* Realizando o mapeamento do array do nosso estado e aplicando os valores como props para outro componente */}
        {/* Sempre que usamos um map, é necessário dar uma chave (key), por isso usamos aquele indice, ou id no array */}
        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key={indice}
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <form
          method="post"
          className="form-comentario"
          onSubmit={this.adicionarComentario}>
          <h2>Adicionar Comentário</h2>
          {/* Conectamos o form com o objeto usando o value */}
          <div>
            <input
              type="text"
              name="nome"
              value={this.state.novoComentario.nome}
              onChange={this.digitacao}
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div>
            <input
              type="emal"
              name="email"
              value={this.state.novoComentario.email}
              onChange={this.digitacao}
              placeholder="Digite seu email"
              required
            />
          </div>
          <div>
            <textarea
              name="mensagem"
              value={this.state.novoComentario.mensagem}
              onChange={this.digitacao}
              rows="4"
              required
            />
          </div>
          <button type="submit">Adicionar Comentário</button>
        </form>
      </div>
    );
  };
}

export default App;
