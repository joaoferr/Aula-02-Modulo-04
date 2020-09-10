import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://backend-grades-joao-8081.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});
