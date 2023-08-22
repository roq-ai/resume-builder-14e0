import * as yup from 'yup';

export const educationValidationSchema = yup.object().shape({
  school_name: yup.string().required(),
  degree: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  resume_id: yup.string().nullable().required(),
});
