import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../../store/commonReducer'
import uuid from 'react-uuid'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'
import './AddToDo.scss'
const AddToDo = () => {
  const MIN_LENGTH = 1
  const MAX_LENGTH = 50
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    if (todo.length < MIN_LENGTH || todo.length > MAX_LENGTH) {
      return
    }
    const todoItem = {
      'id': uuid(),
      'text': todo,
      'completed': false,
      'current': false,
    }

    dispatch(addTodo(todoItem))
    setTodo('')
  }

  return (
    <div className="AddToDo">
      <div className="input-wrapper">
        <Input
          placeholder="Add todo"
          type="text"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <Button className="add-btn" onClick={handleAddTodo}>
          Add
        </Button>
      </div>
    </div>
  )
}

export default AddToDo
