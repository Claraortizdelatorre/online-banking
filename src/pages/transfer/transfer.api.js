import Axios from 'axios';


const url_transfer = `${process.env.BASE_API_URL}/transfer`;

const url = `${process.env.BASE_API_URL}/account-list`;

export const getAccountList = () => 
    Axios.get(url).then(response => {
        return response.data;
    });

export const insertTransfer = transfer => 
    Axios.post(url_transfer, transfer).then(response => {
        return response.data;
    });


