
import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  let initTodo;
  if(localStorage.getItem('todos') === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo) => {
    console.log('Im onDelete of todo', todo);

    setTodos(todos.filter((e) => {
      return e!==todo;
    }))
    localStorage.setItem('todos',JSON.stringify(todos));
  }

  const addTodo = (title,desc) => {
    console.log("Adding this todo",title,desc)
    let num;
    if(todos.length === 0){
      num=0
    }
    else{
      num = todos[todos.length-1].num + 1;
    }
    const myTodo = {
      num: num,
      title: title,
      desc: desc   
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo)
  }
  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header title="My Todos List" searchBar="true" />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;