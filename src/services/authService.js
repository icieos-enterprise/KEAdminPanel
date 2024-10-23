import api from '../constants/api';

export const signIn = async (credentials) => {
  try {
    const response = await api.post(`/auth/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};