import React from 'react'; 
import Aux from '../../hoc/Aux/Aux';

const layout = (props) => {
    return ( 
        <Aux>
            {props.children}
        </Aux>
    );
}

export default layout;


