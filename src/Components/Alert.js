import React from 'react'

export default function Alert(props) {
    // const capitilize = (word) =>{
    //     const low = word.toLowerCase();
    //     return low.charAt(0).toUpperCase() + low.slice(1);

    // }
  return (
    <div style={{height : '50px'}}>
        
         <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong> {props.alert.message} 
        </div>
      
    </div>
  )
}
