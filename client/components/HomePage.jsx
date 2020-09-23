import React from 'react'
import { getApiData } from '../api_call'

class HomePage extends React.Component {

    state = {
        steps: '*step count - test value*'
    }

    // componentDidMount() {
    //     getApiData()
    //         .then(response => {
    //             this.setState({
    //                 steps: response
    //             })
    //         })
    // }

    render() {
        return (
            <div className='wrapper'>

                <div id="left-col">
                    {this.state.steps} steps
                </div>

                <div id="right-col">
                    <h1 id='landing-page-title'>A Random Indiviudals Daily Step Count</h1>
                    <button>Why have you done this?</button>
                    <button>How did you do this?</button>
                </div>
            </div>

        )
    }
}

export default HomePage