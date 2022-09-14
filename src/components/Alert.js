import React from 'react';



// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 * 
 */
function Alert(props){
    const capital=(word)=>{
     const lower= word.toLowerCase();
     return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return( 
        props.alert &&  <div className={`alert mb-0 alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capital(props.alert.type)}</strong> : {props.alert.msg}
        
      </div>
    )
}


// #endregion

export default Alert;
