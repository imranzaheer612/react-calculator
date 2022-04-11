import React, { Component } from 'react';

class Keys extends Component {

    render() { 

        /**
         * defining css classes for each button 
        */
        let btn = "btn btn-light waves-effect cal-btn";
        let equal =  btn +' equal';
        let plus = btn + ' plus';
        let minus = btn + ' minus';
        let divide = btn + ' divide';
        let cross = btn + ' cross';

        return ( 
            <div className='cal-keys'>
                <button className={btn} onClick={(e) => this.props.onClick(7, e)} >7</button>
                <button className={btn} onClick={(e) => this.props.onClick(8, e)} >8</button>
                <button className={btn} onClick={(e) => this.props.onClick(9, e)} >9</button>
                <button className={btn} onClick={(e) => this.props.onClick(4, e)} >4</button>
                <button className={btn} onClick={(e) => this.props.onClick(5, e)} >5</button>
                <button className={btn} onClick={(e) => this.props.onClick(6, e)} >6</button>
                <button className={btn} onClick={(e) => this.props.onClick(1, e)} >1</button>
                <button className={btn} onClick={(e) => this.props.onClick(2, e)} >2</button>
                <button className={btn} onClick={(e) => this.props.onClick(3, e)} >3</button>
                <button className={btn + ' zero'}  onClick={(e) => this.props.onClick(0, e)} >0</button>
                <button className={btn} onClick={(e) => this.props.onClick('.', e)} >.</button>
                <button className={btn + ' clear-all'} onClick={this.props.onClearAll}>C</button>
                <button className={btn + ' clear'} onClick={this.props.onClear}>{"<-"}</button>
                <button className={plus} onClick={(e) => this.props.onClick('+', e)} >+</button>
                <button className={minus} onClick={(e) => this.props.onClick('-', e)} >-</button>
                <button className={cross} onClick={(e) => this.props.onClick('*', e)} >X</button>
                <button className={divide} onClick={(e) => this.props.onClick('/', e)} >/</button>
                <button className={equal} onClick={() => this.props.onEval()}>=</button>
            </div>
        );
    }
}
 
export default Keys;