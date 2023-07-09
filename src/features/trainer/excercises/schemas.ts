import * as Yup from 'yup';
 
export const NewExerciseSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Demasiado corto')
    .max(100, 'Demasiado largo')
    .required('Requerido'),
});