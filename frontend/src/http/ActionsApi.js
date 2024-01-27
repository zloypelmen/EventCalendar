import {$authHost, $host} from "./index";

export const getAllActions = async () => {
    try {
        const response = await $host.get('/api/action/get-all');

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export  const addAction = async ( title, description, label, day, location, author, eventDate) => {
    try {
        const response = await $authHost.post('/api/action/add', {  title, description, label, day, location, author, eventDate });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getActionById = async (id) => {
    try {
        const response = await $host.get(`/api/action/get-by-id/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteAction = async (id) => {
    try {
        const response = await $authHost.delete(`/api/action/del/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};