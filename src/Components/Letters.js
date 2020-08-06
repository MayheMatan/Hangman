import React, { Component } from 'react';
import Letter from './Letter'

class Letters extends Component {
    render() {
        return (
            <React.Fragment>
                <div>Available Letters</div>
                {Object.keys(this.props.letterStatus).map(letter => {
                    return this.props.letterStatus[letter] ?
                        <Letter key={letter} letter={letter} className="checked"/> :
                        <Letter key={letter} letter={letter}/>
                    })
                }
            </React.Fragment>
        )
    }
}

export default Letters;