import React from 'react';

const Button = ({vieillir,nb}) => {
    return ( 
        <button onClick={vieillir}>+{nb}</button>
     );
}
 
export default Button;