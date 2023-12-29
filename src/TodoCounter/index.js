import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
function TodoCounter() {
  const {
    completedTodo,
    totalTodo,
  }=React.useContext( TodoContext)
  
  return (

totalTodo === completedTodo ?

<h2 className='TodoCounter'>
Congratulations, you have achieved 
your goals and even better, you are now
 working at ... </h2>

:

    <h1 className='TodoCounter'> 
     We have completed <span>{ completedTodo }
     </span>of <span>{ totalTodo } </span>
      TODOs.
    </h1>
  )
}
export { TodoCounter };
