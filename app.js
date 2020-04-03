const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima.',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El tiempo de ${coords.direccion} es de ${temp}°C.`;        
    } catch (error) {
        return `No se pudo determinar el tiempo de ${direccion}. ${error}`        
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
