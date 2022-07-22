import React from 'react'
import {Todo} from '../MyComponents/Todo';

export const Todos = (props) => {
let myStyle={
  minHeight:'70vh',
  marginBottom:'50px'
}
  return (
    <div className='container' style={myStyle}>
      <h3 className=''>Todos list</h3>
      {props.todos.length === 0? "no data found" :
props.todos.map((todo)=>{
return  (
  <Todo todo={todo} onDelete={()=>props.onDelete(todo)}/>
)


})}
    
    </div>
  )
}
