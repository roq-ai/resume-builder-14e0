import * as yup from 'yup';

export const resumeValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  user_id: yup.string().nullable().required(),
  template_id: yup.string().nullable().required(),
});
