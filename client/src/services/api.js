import axios from "axios";

const API_URL = "";
// const API_URL = "http://ec2-13-235-115-118.ap-south-1.compute.amazonaws.com:8000";

export const savaData = async (data) => {
    try {
        await axios.post(`${API_URL}/save`, data);
    } catch (error) {
        console.error('Error while calling save data api', error.message);
    }
}

export const getData = async (data) => {
    try {
        let response = await axios.get(`${API_URL}/get`);
        return response.data;
    } catch (error) {
        console.error('Error while calling save data api', error.message);
    }
}