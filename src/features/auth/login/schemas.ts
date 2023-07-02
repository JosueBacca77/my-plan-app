import * as Yup from 'yup';
 
const getCharacterValidationError = (str: string) => {
    return `Ingrese al menos ${str}`;
  };

export const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Demasiado corto')
    .max(100, 'Demasiado largo')
    .required('Requerido'),
    password: Yup.string()
    .min(8, "La contraseña debe contener un mínimo de 8 caracteres")
    .max(15, 'La contraseña debe contener un máximo de 15 caracteres')
    .required('Requerido')
    .matches(/[0-9]/, getCharacterValidationError("un número"))
    .matches(/[a-z]/, getCharacterValidationError("una letra minúscula"))
    .matches(/[A-Z]/, getCharacterValidationError("una letra mayúscula"))
    .matches(/^(?=.*[!@#$%^&*])/, getCharacterValidationError("un caracter especial"))
});