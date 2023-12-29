import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

    React.useEffect (() => {
      setTimeout (() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          
          let parseItem; 
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parseItem = initialValue;
          } else {
            parseItem = JSON.parse(localStorageItem);
            setItem(parseItem)
          }
          
        setLoading(false);
        } catch (error) {
          setLoading(false);
          setError (true);
        }
      }, 2000);
    });
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem)
    };
  
    return { 
      item,
      saveItem,
      loading,
      error,
    };
    }   

    export { useLocalStorage };

  // localStorage.removeItem("TODOS_V1");

  // const defaultTodo = [
  //   {text: "Make the page template ", completed: true},
  //   {text: "Search page layouts", completed: false },
  //   {text: "Finish the React.js course ", completed: false },
  //   {text: "As an achievement, working at Mercado Libre", completed: true },
  //   {text: "Have a successful life with my girlfriend", completed: false },
  // ];
  // localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodo));

