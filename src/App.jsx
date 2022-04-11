import React, { Component } from 'react';
import Keys from './components/keys';
import Screen from './components/screen';



class App extends Component {
    state = { 
        expression : "", 
    } 

    /**
     * handling key event
     * @param value: value of the key pressed
    */
    handelKey = (value) => {
        var expression = this.state.expression + String(value)
        this.setState({
            expression : expression
        })
    }

    /**
     * handle evaluation event to get the answer
     * of the expression
    */
    handleEqual = () => {
        this.setState({
            expression: eval(this.state.expression)
        })
    }

    /**
     * to clear the screen
    */
    handleClearAll = () => {
        this.setState({
            expression : '', 
        })
    }

    /**
     * backspace
    */
    handleClear = () => {
        this.setState({
            expression: (this.state.expression).slice(0, -1)
        })
    }


    render() { 
        return (
            <div className='calculator'>
                <Screen expression={ this.state.expression } />
                <Keys expression={ this.state.expression } onClick={this.handelKey} onEval={this.handleEqual} onClear={this.handleClear} onClearAll={this.handleClearAll}/>
            </div>
        );
    }
}
 
export default App;