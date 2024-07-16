import React from 'react'
import tick from "../assets/tick.png"
import not_tick from "../assets/not_tick.png";
import delete1 from "../assets/delete1.png";
import pen from "../assets/pen.png";


const Todo_item = ({text,id,isComplete,del,complete,edit}) => {
  return (
    <div className='main-one'>
      <div>
        <img src={isComplete?tick:not_tick} alt="" onClick={()=>{complete(id)}}/>
        {/* <p className={`items ${isComplete ? "items" : " "}`}>{text}</p> */}
        <p className={`items ${isComplete ? 'complete' : ''}`}>{text}</p>
      </div>
      {/* <img src={pen} alt="" onClick={()=>{edit(id,text)}}/> */}
      <img src={delete1} alt="" onClick={()=>{del(id)}}/>
    </div>
  )
}

export default Todo_item