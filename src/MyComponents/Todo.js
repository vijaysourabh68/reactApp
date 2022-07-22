import React from 'react'

export const Todo = ({todo, onDelete}) => {
  return (
    <div className='colName'>
    <div className='colp' >
      <h4 >{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={onDelete}>Delete</button>
    </div>
    </div>
  )
}
