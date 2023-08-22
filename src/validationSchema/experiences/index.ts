import * as yup from 'yup';

export const experienceValidationSchema = yup.object().shape({
  job_title: yup.string().required(),
  company_name: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  resume_id: yup.string().nullable().required(),
});
