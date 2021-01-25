import React from 'react';
import './Button.css'

const Button = ({vieillir,nb}) => {
    return ( 
        <button onClick={vieillir}>+{nb}</button>
     );
}
 
export default Button;