import { Button, TextField, Slider, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'


const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
];

function valuetext(value) {
  return `${value}`;
}

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    due: '',
    priority: 0,
    completed: false
  })

  const classes = useStyles();

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() })
      // reset inputan si task
      setTodo({ ...todo, task: '' })
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className={'col-7 row'} style={{}}>
        <TextField
          label="Task"
          name="task"
          type="text"
          value={todo.task}
          onChange={handleTaskInputChange}
        />

        <TextField
            id="datetime-local"
            label="Due"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className='mt-3'
            InputLabelProps={{
              shrink: true,
            }}
        />

        <div className="mt-3" style={{textAlign: 'left', paddingLeft: '0px'}}>
          <Typography id="discrete-slider-custom" gutterBottom>
            Priority
          </Typography>
        </div>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            step={1}
            valueLabelDisplay="auto"
            className='ml-5 mr-5'
            marks={marks}
            min={1}
            max={4}
          />

      </div>

      <div className='col-3 mt-4' style={{}}>
        <Button type="submit">submit</Button>
      </div>


    </form>
  )
}

export default TodoForm