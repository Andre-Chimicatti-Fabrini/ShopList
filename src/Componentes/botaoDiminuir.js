import React,{Component} from "react"

class BotaoDiminuir extends Component
{
    render()
    {
        return (
            <div onClick={this.props.clique}>
                <p>-</p>
            </div>
        )
    }
}

export default BotaoDiminuir