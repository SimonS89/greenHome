export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Nombre requerido";
  }

  if (!values.email) {
    errors.email = "Email requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Dirección de correo electrónico invalida";
  }

  if (!values.email2) {
    errors.email2 = "Email requerido";
  } else if (values.email2 !== values.email) {
    errors.email2 = "Las direcciones de correo electronico no coinciden";
  }

  if (!values.tel.trim()) {
    errors.tel = "Teléfono requerido";
  }
  if (!values.address.trim()) {
    errors.address = "Ingrese el domicilio para el envio del producto.";
  }

  return errors;
}
