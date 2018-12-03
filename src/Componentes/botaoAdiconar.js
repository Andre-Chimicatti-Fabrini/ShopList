import React,{Component} from "react"

class BotaoAdicionar extends Component
{
    render()
    {
        return (
            <div onClick={this.props.clique}>
                <p>+</p>
            </div>
        )
    }
}

export default BotaoAdicionar