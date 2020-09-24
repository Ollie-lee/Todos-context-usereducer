//todos
//all methods to interact w/todos
import React, { createContext, useReducer } from 'react'
import useTodoState from '../hooks/useTodoState'
import todoReducer from '../reducers/todo.reducer'
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer'

const defaultTodos = [
  { id: 1, task: 'code', completed: false },
  { id: 2, task: 'sleep', completed: true }
]

export const TodosContext = createContext()
export const DispatchContext = createContext()

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer('todos', todoReducer, defaultTodos)

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}



