import React, { Component } from 'react';
import Letter from './Letter'

class Solution extends Component {
    render() { 
        return (
            <React.Fragment>
                {this.props.solution.word.split('').map(letter => {
                    return this.props.letterStatus[letter] ?
                        <Letter key={letter} letter={letter}/> :
                        <Letter key={letter} letter="_"/>
                    }
                )}
                <div><em>{this.props.solution.hint}</em></div>
            </React.Fragment> 
         );
    }
}
 
export default Solution;