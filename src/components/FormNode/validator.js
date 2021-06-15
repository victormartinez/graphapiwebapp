export const validate = values => {
  const errors = {};

  if (!values.name || values.name.length < 3) {
    errors.name = 'Você precisa fornecer um nome válido.'
  }

  return errors;
};
