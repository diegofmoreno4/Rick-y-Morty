import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { removeFav, orderCards, filterCards } from "../../redux/actions";
import styles from "./Favorites.module.css";
import { useState } from "react";

export default function Favorites() {
  const dispatch = useDispatch();
  //const [aux,setAux] = useState(false)

  //const myFavorites = useSelector((state) => state.myFavorites);
  const { myFavorites } = useSelector((state) => state);
  const onClose = (id) => {
    dispatch(removeFav(id));
  };

  const handleOrder = (event) => {
    const order = event.target.value;
    dispatch(orderCards(order));
    //setAux(!aux)
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
    //setAux(!aux)
  };

  return (
    <div>
      <div>
        <select className={styles.select1} onChange={handleOrder}>
          <option value="" selected disabled>
            Ordenar
          </option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select className={styles.select2} onChange={handleFilter}>
          <option value="" selected disabled>
            Filtrar
          </option>
          <option value="All" selected>All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={styles.cardItem}>
        {myFavorites.map((character) => {
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin.name}
              image={character.image}
              onClose={onClose}
            />
          );
        })}
      </div>
    </div>
  );
}
