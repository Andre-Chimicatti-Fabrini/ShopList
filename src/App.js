import React, { Component } from 'react';
import './App.css';
import BotaoAdicionar from "./Componentes/botaoAdiconar"
import BotaoDiminuir from "./Componentes/botaoDiminuir"
import BotaoComprar from "./Componentes/comprar"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lista:[],
      produto: "",
      quantidade: 0,
      id: 0,
    }
  }

  adicionar = (indice) => {
    
    var novaLista = this.state.lista

    novaLista[indice].quantidade = novaLista[indice].quantidade + 1
    
    this.setState({
      lista: novaLista
    })

     console.log(this.state)
  }

  diminuir = (indice) => {
    if (this.state.lista[indice].quantidade>0)
    {
      var novaLista = this.state.lista

      novaLista[indice].quantidade = novaLista[indice].quantidade -1
      
      this.setState({
        lista: novaLista
      })
    }
  }
  
  comprar = () => {
    const novaLista = [...this.state.lista,
    {
      id: this.state.id,
      produto: this.state.produto,
      quantidade: this.state.quantidade
    }]
    this.setState({
      produto:"",
      lista: novaLista,
      contador: 0,
      id: this.state.id + 1,
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <div>
            <input
              value={this.state.produto}
              placeholder="digite um produto"
              onChange={(string) => {this.setState({ produto: string.target.value})}}/>
          </div>
          <div>
            <BotaoComprar clique={this.comprar} texto="comprar"/>
          </div>
        </div>

        <div>
          <ul>
            {this.state.lista.map((valor, index) => {
              return (
                <li indice={index}>
                  <div>
                    <div>{valor.quantidade == 0 ? <p>ZERO</p> : valor.quantidade}</div>
                    <div>{valor.produto}</div>
                    <BotaoAdicionar clique={() => this.adicionar(valor.id)} />
                    <BotaoDiminuir clique={() => this.diminuir(valor.id)} />
                  </div>
                </li>
              )
            }
            )}
          </ul>
        </div>

        

      </div>
    );
  }
}

export default App;
