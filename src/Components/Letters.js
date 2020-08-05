import React, { Component } from 'react';
import Letter from './Letter'

class Letters extends Component {
    render() {
        return (
            <React.Fragment>
                <div>Available Letters</div>
                <Letter />
            </React.Fragment>
        )
    }
}

export default Letters;