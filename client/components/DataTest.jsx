import React from 'react'
import {getApiData} from '../api_call'

class Data extends React.Component {

    state = {
        steps: ''
    }

    componentDidMount() {
        getApiData()
        .then (res => {
            this.setState ({
                steps: res
            })
        })
      }

    render () {
        return (
            <h2>You did this many steps today: {this.state.steps}</h2>
        )
    }
}

export default Data