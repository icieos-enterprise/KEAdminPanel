import api from "../constants/api";

export const uploadClientsFile = async (formData, token) => {
    try {
        const response = await api.post(`/client/populate`, formData, {token: token});
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const uploadProductionFile = async (formData, token) => {
    try {
        const response = await api.post(`/production/populate`, formData, {token: token});
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const uploadLyricsFile = async (formData, token) => {
    try {
        const response = await api.post(`/lyrics/populate`, formData, {token: token});
        return response.data;
    } catch (error) {
        throw error;
    }
};
