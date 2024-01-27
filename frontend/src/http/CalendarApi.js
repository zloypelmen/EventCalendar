import {$authHost, $host} from "./index";

export const getAllCalendar = async () => {
    try {
        const response = await $host.get('/api/event/get-all');

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export  const addEvent = async (title, description, label, day) => {
    try {
        const userId = localStorage.getItem('userId')
        const response = await $authHost.post('/api/event/add-ce', { title, description, label, day, userId });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const deleteEvent = async (id) => {
    try {
        const response = await $host.delete(`/api/event/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
