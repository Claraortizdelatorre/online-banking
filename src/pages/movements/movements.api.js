import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

/*Obtener datos*/
export const getMovementsList = () => 
Axios.get(url).then(response => {
    return response.data;
});



