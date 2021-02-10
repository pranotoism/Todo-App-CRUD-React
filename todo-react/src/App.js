import {Typography, Container} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const LOCAL_STORAGE_KEY = 'react-todo-list-todos'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos) {
      setTodos(storageTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function addTodo(todo) {
    setTodos([todo, ...todos])
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <div className="App row" style={{display: 'flex'}}>

        {/* left side */}
        <div className="col-4 p-5">
          <Typography
            style={{ padding: 16}}
            variant="h2"
          >
            React Todo List</Typography>
          <TodoForm addTodo={addTodo} />
        </div>


        {/* right side */}
        <div className="row col-5">
          <Container maxWidth="md">
    
            <div className="col-12">
              <TodoList
                todos={todos}
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}
              />
            </div>

          </Container>
        </div>
        
      </div>
    </>
  );
}

export default App;
