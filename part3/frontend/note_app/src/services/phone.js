import axios from 'axios';
const baseUrl = 'http://localhost:3002/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (phoneObject) => {
    const request = axios.post(baseUrl, phoneObject)
    return request.then(response => response.data)
}

const noteDelete = (id, phoneObject) => {
    const request = axios.delete(`${baseUrl}/${id}`, phoneObject)
    return request.then(response => response.data)
}

const update = (id, phoneObject) => {
    const request = axios.put(`${baseUrl}/${id}`, phoneObject)
    return request.then(response => response.data)
}

export default { getAll, create, update, noteDelete }