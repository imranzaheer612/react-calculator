import React, { useState } from 'react';
import Keys from './components/keys';
import Screen from './components/screen';


function App() {

    const [expr, setExpr] = useState('')

    /**
     * handling key event
     * @param value: value of the key pressed
    */
    const handelKey = (value) => {
        setExpr(expr + String(value));
    }
   
    return (
        <div className='calculator'>
            <Screen expression={ expr } />
            <Keys 
            expression={ expr }
            onClick={ handelKey }
            onEval={() => setExpr(eval(expr))} 
            onClear={() => setExpr(expr.slice(0, -1))} 
            onClearAll={ () => setExpr("")}
            />
        </div>
    );

}

export default App;