import { useState } from 'react'
import { useSelector } from 'react-redux'
import AddToDo from './AddToDo/AddToDo'
import ToDoItem from './ToDoItem/ToDoItem'
import Button from '../../components/Button/Button'
import './index.scss'
const ToDo = () => {
  const todos = useSelector((state) => state.common.todos)
  const complated = todos.filter((todo) => todo.completed)
  const uncomplated = todos.filter((todo) => !todo.completed)
  const [filter, setFilter] = useState('all')
  const filterTodos = (filterCase) => {
    switch (filterCase) {
      case 'completed': {
        return complated
      }
      case 'uncompleted': {
        return uncomplated
      }
      case 'current': {
        return todos.filter((todo) => todo.current)
      }
      default: {
        return todos
      }
    }
  }

  const todosToRender = filterTodos(filter)

  return (
    <div className="todo">
      <AddToDo />
      <div className="task-count">
        <p>Total: {todos.length}</p>
        <p>Complated: {complated.length}</p>
        <p>Uncomplated: {uncomplated.length}</p>
      </div>
      <div>
        <Button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Complated
        </Button>
        <Button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          className={filter === 'uncompleted' ? 'active' : ''}
          onClick={() => setFilter('uncompleted')}
        >
          Uncomplated
        </Button>
        <Button
          className={filter === 'current' ? 'active' : ''}
          onClick={() => setFilter('current')}
        >
          Current
        </Button>
      </div>
      <ul>
        {todosToRender.length === 0 ? (
          <p>No todos</p>
        ) : (
          todosToRender.map((todo) => <ToDoItem key={todo.id} todo={todo} />)
        )}
      </ul>
    </div>
  )
}

export default ToDo
