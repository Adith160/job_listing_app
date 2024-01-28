import axios from 'axios';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const postJob = async ({name,email,phone,password}) => {
    try {
        const reqUrl = `${backendUrl}/job/jobs`;
        const reqPayload = {name,email,phone,password};
        const response 
        = await axios.post(reqUrl, reqPayload)
        console.log(response)
    } catch (error) {
         toast.error('Invalid request!');
    }
};

export const editJob = async ({jobId}) => {
    try {
        const reqUrl = `${backendUrl}/job/edit/${jobId}`;
        const response = await axios.put(reqUrl)
        console.log(response)
    } catch (error) {
         toast.error('Invalid request!');
    }
};

export const deleteJob = async ({jobId}) => {
    try {
        const reqUrl = `${backendUrl}/job/delete/${jobId}`;
        const response = await axios.put(reqUrl)
        console.log(response)
    } catch (error) {
         toast.error('Invalid request!');
    }
};

export const getAllJobs = async ({ title, skills }) => {
    try {
        const reqUrl = `${backendUrl}/job/all?title=${title}&skills=${skills}`;
        const response = await axios.get(reqUrl);

        if (response.status === 201) {
            console.log(response.data); // Log the response data if needed
        } else {
            toast.error('Job Not Found!');
        }
    } catch (error) {
        toast.error('Invalid request!');
    }
};

export const getOneJob = async ({ jobId }) => {
    try {
        const reqUrl = `${backendUrl}/job/findOne/${jobId}`;
        const response = await axios.get(reqUrl);

        if (response.status === 201) {
            console.log(response.data); // Log the response data if needed
        } else {
            toast.error('Job Not Found!');
        }
    } catch (error) {
        toast.error('Invalid request!');
    }
};
