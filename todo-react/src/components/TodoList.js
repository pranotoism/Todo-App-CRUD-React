import { List } from '@material-ui/core'
import React from 'react'
import Todo from './Todo'

function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <List>
      { todos.sort((a,b) => (a.priority < b.priority) ? 1 : ((b.priority < a.priority) ? -1 : 0)).map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  )
}

export default TodoList