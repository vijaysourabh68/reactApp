import React, { useEffect, useState } from "react";
import logo from '../assets/logo.png';
export const AddTodo = ({addtodo}) => {
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");

  const submit = (e)=>{
e.preventDefault();
if(!title ||  !desc){
  alert('Please Enter the Title or Description.')
}
addtodo(title,desc);
}

  useEffect(() => {
    console.log("desc",desc)
  }, [desc])
  
  return (
    <div className="container my-3">
      {/* <img style={{textAlign: 'center',
    width: '59px',
    marginLeft: '33%',
    marginBottom: '32px'}} src={logo}/> */}
      <h3>Add a Todo </h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control" value={title}
            id="title" onChange={(e)=>setTitle(e.target.value)}
            aria-describedby="emailHelp"
          />
        
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
        Todo Description
          </label>
          <input
            type="text" value={desc}
            className="form-control" onChange={(e)=>setDesc(e.target.value)}
            id="desc"
          />
        </div>
      
        <button type="submit" className="btn btn-success btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
};
