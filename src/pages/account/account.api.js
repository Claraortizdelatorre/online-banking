import Axios from "axios";

const url = `${process.env.BASE_API_URL}/account`;

//pasamos la cuenta que queremos insertar nueva
export const insertAccount = account => 
    Axios.post(`${url}/${account.id}`, account).then(response => {
        return response.data;
    });

export const getAccount = id => Axios.get(`${url}/${id}`).then(response => {
    return response.data;
})

//actualizar
export const updateAccount = account =>
    Axios.put(`${url}/${account.id}`, account).then(response => {
        return response.data;
    });