import axios from 'axios';

const api = {
	getDollar(){return axios.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`).then(responce => responce.data[0].sale)},
}

export default api;