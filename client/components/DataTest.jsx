import React from 'react'
import { getApiData } from '../api_call'

class Data extends React.Component {

    state = {
        steps: ''
    }

    componentDidMount() {
        getApiData()
            .then(response => {
                this.setState({
                    steps: response
                })
            })
    }

    render() {
        return (
            <div class='container'>
                <div id='contanier-step-count'>
                <h2>You did <i>{this.state.steps} </i> steps today!</h2>
                </div>
                
            </div>

        )
    }
}

export default Data