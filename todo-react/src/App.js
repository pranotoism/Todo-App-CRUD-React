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
    <div className="App" style={{display: 'flex'}}>
      <Container maxWidth="lg">
        
        <div className="row col-12">
          <div className="col-4 p-5">
            <Typography
              style={{ padding: 16}}
              variant="h2"
            >
              React Todo List</Typography>
            <TodoForm addTodo={addTodo} />
          </div>

          <div className="col-8">
            <TodoList
              todos={todos}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
            />
          </div>
        </div>
          
     
    </Container>
    </div>
  );
}

export default App;
