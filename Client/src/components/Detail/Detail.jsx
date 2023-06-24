import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  const [characters, setCharacter] = useState({});

  return (
    <>
      {characters?.name && (
        <div className={styles.selector}>
          <div className={styles.container}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={characters.image}
                alt="not found"
              />
            </div>
            <div className={styles.detailsContainer}>
              <h1>{characters.name}</h1>
              <h2>Status: {characters.status}</h2>
              <h2>Specie: {characters.species}</h2>
              <h2>Gender: {characters.gender}</h2>
              <h2>Origin: {characters.origin.name}</h2>
            </div>
          </div>
            <div>
              <Link to="/home">
                <button className={styles.button}>Volver</button>
              </Link>
            </div>
        </div>
      )}
    </>
  );
}
