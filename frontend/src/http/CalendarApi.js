import {$host} from "./index";

export const getAllCalendar = async () => {
    try {
        const response = await $host.get('/api/event/get-all');

        const modifiedData = response.data.map(item => ({
            ...item,
            day: Number(item.day),
        }));
        console.log(response.data)

        console.log("что-то" + response.data)

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
