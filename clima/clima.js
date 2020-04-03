const axios = require('axios');
const url=`https://api.openweathermap.org/data/2.5/weather?`;
const appid=`d984cbfd84d45bbc2728315a888fb57c`;
const units=`metric`;

const getClima = async(lat,lon) => {

    const respuesta = await axios.get(`${url}lat=${lat}&lon=${lon}&appid=${appid}&units=${units}`);

    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}