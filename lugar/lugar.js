const axios = require('axios');

const getLugarLatLon = async(dir) => {

    const encodeURL = encodeURI(dir);

    const respuesta = await axios({
        "method":"GET",
        "url":"https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"devru-latitude-longitude-find-v1.p.rapidapi.com",
        "x-rapidapi-key":"b41e739565mshe2124f6331ed1f0p193356jsn8f804987e7d8"
        },"params":{
        "location": encodeURL
        }
        });
    if(respuesta.data.Results.length === 0){
        throw new Error(`No hay resultados para ${dir}`);
    } 

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon; 

    return {
       direccion, 
       lat, 
       lon 
    }        
}

module.exports = {
    getLugarLatLon
}