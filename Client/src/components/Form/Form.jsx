import React from "react";
import validation from "./validation";
import styles from "./Form.module.css"

export default function Form(props) {
  const { login } = props;
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
  };
  return (
    <div className={styles.selector}>
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formcontainer}>
      <h1 className={styles.formtitle}>Iniciar Sesión</h1>
     
        <label>Email:</label>
        <input
          name="email"
          value={userData.email}
          placeholder="Escribe tu email..."
          type="text"
          onChange={handleChange}
          className={styles.forminput}
        />
       <p>{errors.email}</p>
        <label>Password:</label>
        <input
          name="password"
          value={userData.password}
          placeholder="Escribe tu contraseña..."
          type="text"
          onChange={handleChange}
          className={styles.forminput}
        />
        <p>{errors.password}</p>
        <button className={styles.formbutton}>Login</button>
      </form>
    </div>
    </div>
  );
}
