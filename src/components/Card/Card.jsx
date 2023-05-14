import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

export function Card(props) {
  const { onClose } = props;
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = (event) => {
    event.preventDefault();
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav(props);
    }
  };
  useEffect(() => {
    props.myFavorite.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorite]);

  return (
    <div key={props.id} className={styles.cardItem}>
      <button className={styles.buttonClose} onClick={onClose}>
        X{" "}
      </button>
      {isFav ? (
        <button className={styles.buttonFav} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={styles.buttonFav} onClick={handleFavorite}>
          🤍
        </button>
      )}
      <Link to={`/detail/${props.id}`}>
        <img className={styles.img} src={props.image} alt="not found" />
      </Link>
      <h1 className={styles.name}>{props.name}</h1>
      <h2>Status: {props.status}</h2>
      <h2>Specie: {props.species}</h2>
      <h2>Gender: {props.gender}</h2>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: (char) => dispatch(addFav(char)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export function mapStateToProps(state) {
  return {
    myFavorite: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
