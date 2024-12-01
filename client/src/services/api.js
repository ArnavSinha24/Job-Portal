import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api';

export const saveData = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/save`, data);
        return response.data;
    } catch (error) {
        console.error('Error while calling save data API', error.message);
        throw error;
    }
}

export const getData = async () => {
    try {
        const response = await axios.get(`${API_URL}/get`);
        return response.data;
    } catch (error) {
        console.error('Error while calling get data API', error.message);
        throw error;
    }
}