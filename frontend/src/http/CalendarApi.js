import {$authHost, $host} from "./index";

export const getAllCalendar = async () => {
    try {
        const response = await $authHost.post('/api/event/get-all');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
