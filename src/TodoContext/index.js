import React from "react";
import { useLocalStorage } from "./LocalStorage";

const TodoContext = React.createContext();
function TodoProvider ( {children} ) {
const {
    item: todo,
    saveItem: saveTodo,
    loading,
    error,
  } = useLocalStorage ("PrototypeWen_V0.2", [])
  const [searchValue, setSearchValue] = React.useState ('');
  const [openModal, setOpenModal] = React.useState(false);
      
  const completedTodo = todo.filter (
    todo => !!todo.completed
  ).length;
  const totalTodo = todo.length

  const SearchedTodo = todo.filter ( 
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    },
  );

  const addTodo = (text) => {
    const newTODOs = [...todo];
    newTODOs.push({
      text,
      completed: false,
    });
    saveTodo(newTODOs);
  };

  const completeTodo = (index) => {
    const newTODOs = [...todo];
    const todoIndex = newTODOs.findIndex(
      (todo) => todo.text === index
    );
    newTODOs[todoIndex].completed = 'true';
    saveTodo(newTODOs);
  };

  const deleteTodo = (index) => {
    const newTODOs = [...todo];
    const todoIndex = newTODOs.findIndex(
      (todo) => todo.text === index
    );
    newTODOs.splice(todoIndex, 1)
    saveTodo(newTODOs);
  };
  return(
    <TodoContext.Provider value={{
        loading,
        error,
        completedTodo,
        totalTodo, 
        searchValue,
        setSearchValue,
        SearchedTodo,
        completeTodo,
        deleteTodo,
        addTodo,
        openModal,
        setOpenModal,
      }}>
        {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
