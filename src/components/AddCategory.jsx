import { useState } from 'react';

//nuevo componente
export const AddCategory = ({onNewCategory}) => {

const [inputValue, setinputValue] = useState('')

const onInputChange = ({target}) =>{
    setinputValue (target.value);
}

const onSubmit = (event) => {
   event.preventDefault();
  //  console.log(inputValue);
  if (inputValue.trim().length <= 1) return;

    //setCategories (categories => [inputValue, ...categories])
    setinputValue('');
    onNewCategory(inputValue.trim())

}



  return (
    <form onSubmit={onSubmit}>
         <input 
    type= 'text'
    placeholder="buscar gifs"
    value = {inputValue}
    onChange={onInputChange}
    />
    </form>
   
  )
}

