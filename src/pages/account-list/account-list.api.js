import Axios from "axios";

const url = `${process.env.BASE_API_URL}/account-list`;

/*Obtener datos*/
export const getAccountList = () => 
Axios.get(url).then(response => {
    return response.data;
});


