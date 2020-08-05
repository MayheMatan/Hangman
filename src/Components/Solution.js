import React, { Component } from 'react';

class Solution extends Component {
    render() { 
        const solution = ["_ ", "_ ", "_ ", "_ "]
        return (
            <React.Fragment>
                {solution.map(letter => <span>{letter}</span>)}
                <div><em>Hint</em></div>
            </React.Fragment> 
         );
    }
}
 
export default Solution;