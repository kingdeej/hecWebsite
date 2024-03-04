import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
export default function PrimaryPopup(props) {
  return (
    <div>
        <AiOutlineClose />
        <div>
            <h1>{props.prompt}</h1> 
            <button onClick={(e) => { console.log('hello'); }}>Click Here</button>
        </div>
    </div>
    
  )
}
