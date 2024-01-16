import {$authHost, $host} from "./index";

export const addNewChange = async (title, description) => {
    try {
        const response = await $authHost.post('/api/change/add', { title, description });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getAllChanges = async () => {
    try {
        const response = await $host.get('/api/change/get-all');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getChangeById = async (id) => {
    try {
        const response = await $host.get(`/api/change/get-by-id/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteChange = async (id) => {
    try {
        const response = await $authHost.delete(`/api/change/del/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};