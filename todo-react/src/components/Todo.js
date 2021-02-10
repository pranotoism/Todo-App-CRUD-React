import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react';

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id)
  }

  function handleRemoveClick() {
    removeTodo(todo.id)
  }

  const date = todo.due.split('-')
  console.log(date);

  // If due is today
  if (todo.due == `${new Date().getFullYear() + '-0' + (new Date().getMonth()+1) + '-' + Number(new Date().getDate())}`) {
    return (
      <div className="">
        <ListItem style={{ display: "flex", flexWrap: 'wrap' }}>
          <Checkbox
            className="col-1 row"
            checked={todo.completed}
            onClick={handleCheckboxClick}
          />

          <div className="col-7 row">
            <Typography
              className="col-10 row"
              variant="body1"
              style={{
                fontSize: "18px",
                textDecoration: todo.completed ? "line-through" : null
              }}
            >
              {todo.task}
            </Typography>

            <Typography
              className="col-12"
              variant="body2"
              style={{
                fontSize: "13px",
                color: 'red',
                // textDecoration: todo.completed ? "line-through" : null
              }}
            >
              {`Due: Today - Priority: ${todo.priority}`}
            </Typography>
          </div>

          <IconButton
            className="col-1 row"
            onClick={handleRemoveClick}>
            <CloseIcon />
          </IconButton>
        </ListItem>
      </div>
    )
  } 

  // if due tomorrow
    else if (todo.due == `${new Date().getFullYear() + '-0' + (new Date().getMonth()+1) + '-' + Number(new Date().getDate()+1)}`) {
    return (
      <div className="">
        <ListItem style={{ display: "flex", flexWrap: 'wrap' }}>
          <Checkbox
            className="col-1 row"
            checked={todo.completed}
            onClick={handleCheckboxClick}
          />

          <div className="col-7 row">
            <Typography
              className="col-10 row"
              variant="body1"
              style={{
                fontSize: "18px",
                textDecoration: todo.completed ? "line-through" : null
              }}
            >
              {todo.task}
            </Typography>

            <Typography
              className="col-12"
              variant="body2"
              style={{
                fontSize: "13px",
                color: 'blue',
                // textDecoration: todo.completed ? "line-through" : null
              }}
            >
              {`Due: Tomorrow - Priority: ${todo.priority}`}
            </Typography>
          </div>

          <IconButton
            className="col-1 row"
            onClick={handleRemoveClick}>
            <CloseIcon />
          </IconButton>
        </ListItem>
      </div>
    )
  } 
    // if expired
    else if (date[2] < `${Number(new Date().getDate())}`) {
      return (
        <div className="">
        <ListItem style={{ display: "flex", flexWrap: 'wrap' }}>
          <Checkbox
            className="col-1 row"
            checked={todo.completed}
            onClick={handleCheckboxClick}
          />

          <div className="col-7 row">
            <Typography
              className="col-10 row"
              variant="body1"
              style={{
                fontSize: "18px",
                color: 'gray',
                textDecoration: todo.completed ? "line-through" : null
              }}
            >
              {todo.task}
            </Typography>

            <Typography
              className="col-12"
              variant="body2"
              style={{
                fontSize: "13px",
                color: 'gray',
                // textDecoration: todo.completed ? "line-through" : null
              }}
            >
              {`EXPIRED - Priority: ${todo.priority}`}
            </Typography>
          </div>

          <IconButton
            className="col-1 row"
            onClick={handleRemoveClick}>
            <CloseIcon />
          </IconButton>
        </ListItem>
      </div>
      )
  }
  
  // if due NOT near
    else {
    return (
      <div className="">
        <ListItem style={{ display: "flex", flexWrap: 'wrap' }}>
          <Checkbox
            className="col-1 row"
            checked={todo.completed}
            onClick={handleCheckboxClick}
          />

          <div className="col-7 row">
            <Typography
              className="col-10 row"
              variant="body1"
              style={{
                fontSize: "18px",
                textDecoration: todo.completed ? "line-through" : null
              }}
            >
              {todo.task}
            </Typography>

            <Typography
              className="col-12"
              variant="body2"
              style={{
                fontSize: "13px",
                // textDecoration: todo.completed ? "line-through" : null
              }}
            >
              {`Due: ${todo.due} - Priority: ${todo.priority}`}
            </Typography>
          </div>

          <IconButton
            className="col-1 row"
            onClick={handleRemoveClick}>
            <CloseIcon />
          </IconButton>
        </ListItem>
      </div>
    )

  }

}

export default Todo