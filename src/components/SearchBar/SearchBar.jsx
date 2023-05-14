import styles from './SearchBar.module.css'
import React from 'react';


export default function SearchBar(props) {
   const [character,setCharacter] = React.useState('')
   
   const handleChange = (event) => {
      const { value } = event.target
      setCharacter(value);
   }

   return (
      <div className={styles.navbar}>
         <input type='search' placeholder='Buscar Personaje                            🔎' onChange={handleChange} />
         <button onClick={()=> props.onSearch(character)}>Agregar</button> 
      </div>
   );
}
