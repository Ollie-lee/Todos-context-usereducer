//todos
//all methods to interact w/todos
import React, { createContext } from 'react'
import useTodoState from '../hooks/useTodoState'
const defaultTodos = [
  { id: 1, task: 'code', completed: false },
  { id: 2, task: 'sleep', completed: true }
]

export const TodosContext = createContext()

export function TodosProvider(props) {
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(defaultTodos)
  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo, editTodo }}>
      {props.children}
    </TodosContext.Provider>
  )
}



