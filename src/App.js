import React ,{useState} from 'react'
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';
import {AddTodo} from './MyComponents/AddTodo';
function App() {

  const onDelete = (element)=>{
console.log('data is deleted',element)

setTodos(todos.filter((e)=>{
  console.log(e)
  return e!== element;
}))
  }

  const addtodo = (title,desc)=>{
    console.log('i am adding add title and add description',title,desc)
    let sno =todos[todos.length-1].sno + 1;
    const myTodo ={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log('dsdsdsd',myTodo)
  }



  const [todos, setTodos] = useState([{
    sno:1,
    title :"website",
    desc: "Free multilingual fonts. Custom domain name. Social media compatible"
  },
 
]
  )
  return (
    <>
    <Header title="##" searchBar={true}/> 
    <AddTodo addtodo={addtodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
      </>
  );
}

export default App;
