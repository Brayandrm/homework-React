import React from "react";
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "../Modal";
import { TODOsCreate } from "../TODOsCreate";
import { TODOsError } from '../TODOsError';
import { TODOsLoading } from "../TODOsLoading";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoForm } from "../TodoForm";
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';

function AppUI (){
  const {
    loading,
    error,
    SearchedTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)
  
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
      {loading && (
          <>
            <TODOsLoading />
          </>
        )}
         
        {error && <TODOsError/>}
        {(!loading && SearchedTodo.length === 0) && < TODOsCreate />}

        {SearchedTodo.map(Todo => (
          <TodoItem 
            key={Todo.text} 
            text ={Todo.text}
            completed ={Todo.completed}
            onComplete = {() => completeTodo (Todo.text)}
            onDelete = {() => deleteTodo (Todo.text)}
          />
        ))}
      </TodoList>
    
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
