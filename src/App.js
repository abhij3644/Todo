import React from 'react'
import Resturant from './component/Basics/Resturant'
import UseState from './component/Hooks/useState'
import UseEffect from './component/Hooks/useEffect'
import UseReducer from './component/Hooks/useReducer'
import Todo from './component/TodoReactList/todo'

const App = () => {
  // return <Resturant />   // Calling Resturant function/component 
  // return <UseState />    // Calling UseState functon/component 
  // return <UseEffect />    // Calling UseEffect functon/component 
  // return <UseReducer />    // Calling UseReducer functon/component 
  return <Todo />          // Calling Todolist function/component 
}

export default App
