import axios from 'axios';
import queryString from 'query-string';
import { ResumeInterface, ResumeGetQueryInterface } from 'interfaces/resume';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getResumes = async (query?: ResumeGetQueryInterface): Promise<PaginatedInterface<ResumeInterface>> => {
  const response = await axios.get('/api/resumes', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createResume = async (resume: ResumeInterface) => {
  const response = await axios.post('/api/resumes', resume);
  return response.data;
};

export const updateResumeById = async (id: string, resume: ResumeInterface) => {
  const response = await axios.put(`/api/resumes/${id}`, resume);
  return response.data;
};

export const getResumeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/resumes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteResumeById = async (id: string) => {
  const response = await axios.delete(`/api/resumes/${id}`);
  return response.data;
};
