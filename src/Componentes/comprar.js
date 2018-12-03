import React,{Component} from "react"

class BotaoComprar extends Component
{
    render()
    {
        return (
            <div onClick={this.props.clique}>
                <p>Adicionar ao Carrinho</p>
            </div>
        )
    }
}

export default BotaoComprar