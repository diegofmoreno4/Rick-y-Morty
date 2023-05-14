const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexpassword = /^[A-Za-z0-9]{6,10}$/
const validation = (data) => {
  const errors = {};

  if (!regexEmail.test(data.email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (!data.email) {
    errors.email = "Se requiere un Email";
  }
  if (data.email.lenght > 35) {
    errors.email = "No puede tener más de 35 caracteres";
  }
  if (!/\d+/.test(data.password)) {
    errors.password = "Debe tener al menos 1 número";
  }
  if (!regexpassword.test(data.password)) {
    errors.password = "Debe tener longitud entre 6 y 10 caracteres";
  }
  return errors;
};

export default validation;
