import axios from 'axios';
import queryString from 'query-string';
import { EducationInterface, EducationGetQueryInterface } from 'interfaces/education';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEducations = async (
  query?: EducationGetQueryInterface,
): Promise<PaginatedInterface<EducationInterface>> => {
  const response = await axios.get('/api/educations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEducation = async (education: EducationInterface) => {
  const response = await axios.post('/api/educations', education);
  return response.data;
};

export const updateEducationById = async (id: string, education: EducationInterface) => {
  const response = await axios.put(`/api/educations/${id}`, education);
  return response.data;
};

export const getEducationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/educations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEducationById = async (id: string) => {
  const response = await axios.delete(`/api/educations/${id}`);
  return response.data;
};
