import { useDispatch } from 'react-redux'
import {
  deleteTodo,
  toggleTodoCompleted,
  toggleTodoCurrent,
} from '../../../store/commonReducer'
import Button from '../../../components/Button/Button'
import './ToDoItem.scss'
const ToDoItem = ({ todo }) => {
  const dispatch = useDispatch()
  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ 'id': todo.id }))
  }

  const handleToggleCompaleted = () => {
    dispatch(toggleTodoCompleted({ 'id': todo.id }))
  }

  const handleToggleCurrent = () => {
    dispatch(toggleTodoCurrent({ 'id': todo.id }))
  }

  return (
    <li className="todo-item">
      <div className="checkbox-wrapper-15">
        <input
          className="inp-cbx"
          id="cbx-15"
          checked={todo.completed}
          readOnly
          type="checkbox"
          style={{ 'display': 'none' }}
        />
        <label
          className="cbx"
          htmlFor="cbx-15"
          onClick={handleToggleCompaleted}
        >
          <span>
            <svg width="12px" height="9px" viewBox="0 0 12 9">
              <polyline points="1 5 4 8 11 1"></polyline>
            </svg>
          </span>
          <span>{todo.text}</span>
        </label>
      </div>
      <div className="todo-item-buttons">
        <Button className="delete-btn" onClick={handleDeleteTodo}>
          Delete
        </Button>
        <Button
          className={todo.current ? 'active' : ''}
          onClick={handleToggleCurrent}
        >
          Current
        </Button>
      </div>
    </li>
  )
}

export default ToDoItem
