import React, { Component } from 'react';

function Keys (props) {

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
            <button className={btn} onClick={(e) => props.onClick(7, e)} >7</button>
            <button className={btn} onClick={(e) => props.onClick(8, e)} >8</button>
            <button className={btn} onClick={(e) => props.onClick(9, e)} >9</button>
            <button className={btn} onClick={(e) => props.onClick(4, e)} >4</button>
            <button className={btn} onClick={(e) => props.onClick(5, e)} >5</button>
            <button className={btn} onClick={(e) => props.onClick(6, e)} >6</button>
            <button className={btn} onClick={(e) => props.onClick(1, e)} >1</button>
            <button className={btn} onClick={(e) => props.onClick(2, e)} >2</button>
            <button className={btn} onClick={(e) => props.onClick(3, e)} >3</button>
            <button className={btn + ' zero'}  onClick={(e) => props.onClick(0, e)} >0</button>
            <button className={btn} onClick={(e) => props.onClick('.', e)} >.</button>
            <button className={btn + ' clear-all'} onClick={props.onClearAll}>C</button>
            <button className={btn + ' clear'} onClick={props.onClear}>{"<-"}</button>
            <button className={plus} onClick={(e) => props.onClick('+', e)} >+</button>
            <button className={minus} onClick={(e) => props.onClick('-', e)} >-</button>
            <button className={cross} onClick={(e) => props.onClick('*', e)} >X</button>
            <button className={divide} onClick={(e) => props.onClick('/', e)} >/</button>
            <button className={equal} onClick={() => props.onEval()}>=</button>
        </div>
    
    );
}
 
export default Keys;