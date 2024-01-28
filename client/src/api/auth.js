import axios from 'axios';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const registerUser = async ({name,email,phone,password}) => {
    try {
        const reqUrl = `${backendUrl}/auth/register`;
        const reqPayload = {name,email,phone,password};
        const response = await axios.post(reqUrl, reqPayload)
        console.log(response)
    } catch (error) {
         toast.error('Invalid request!');
    }
};

export const loginUser = async ({ email, password }) => {
    try {
        const reqUrl = `${backendUrl}/auth/login`;
        const reqPayload = { email, password };
        const response = await axios.post(reqUrl, reqPayload);

        if (response.status === 201) {
            console.log(response.data); // Log the response data if needed
        } else {
            toast.error('Invalid login credentials!');
        }
    } catch (error) {
        toast.error('Invalid request!');
    }
};