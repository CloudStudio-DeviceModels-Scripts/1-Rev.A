// Define el endpoint y los datos JSON a enviar
const endpoint = 'https://portal.fccma.com/rest/services/6270631/SMBmoba_posiciones_escuchador';
const data = {
    idVehiculo: '48633983_BAJA',
    matricula: '48633983-4',
    coordenadaX: '2.42589',
    velocidad: '0',
    fechaHora: '19/05/2024T21:20:24',
    coordenadaY: '41.5403',
    idPosicion: '1018868106',
    traza: '',
    evento: 'E',
    tag: 'G0030A000758',
    residuo: '',
    peso: '0'
};
// Define las credenciales de Basic Auth
const username = 'moba';
const password = 'M4677a';

// Función para codificar en Base64
function toBase64(input) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let str = input;
    let output = '';

    for (let block = 0, charCode, idx = 0, map = chars; str.charAt(idx | 0) || (map = '=', idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
        charCode = str.charCodeAt(idx += 3 / 4);

        if (charCode > 0xFF) {
            throw new Error("'toBase64' failed: The string to be encoded contains characters outside of the Latin1 range.");
        }

        block = block << 8 | charCode;
    }

    return output;
}

// Codifica las credenciales en Base64
const base64Credentials = toBase64(`${username}:${password}`);


// Define la función para hacer la solicitud POST con Basic Auth
async function enviarPostConAuth(endpoint, data) {
    try {
        const response = await fetch(endpoint, {
            method: 'POST', // Especifica el método HTTP
            headers: {
                'Content-Type': 'application/json', // Especifica el tipo de contenido
                'Authorization': `Basic ${base64Credentials}` // Añade el encabezado de Basic Auth
            },
            body: JSON.stringify(data) // Convierte el objeto a una cadena JSON
        });

        // Maneja la respuesta
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }

        const responseData = await response.json(); // Convierte la respuesta a JSON
        console.log('Respuesta del servidor:', responseData);
    } catch (error) {
        console.error('Error:', error);
    }
}


function parseUplink(device, payload)
{
	//env.log(payload.asJsonObject());
    // Llama a la función para enviar la solicitud
    enviarPostConAuth(endpoint, data);
}

function buildDownlink(device, endpoint, command, payload) 
{ 
	// Esta función permite convertir un comando de la plataforma en un
	// payload que pueda enviarse al dispositivo.
	// Más información en https://wiki.cloud.studio/page/200

	// Los parámetros de esta función, son:
	// - device: objeto representando el dispositivo al cual se enviará el comando.
	// - endpoint: objeto endpoint representando el endpoint al que se enviará el 
	//   comando. Puede ser null si el comando se envía al dispositivo, y no a 
	//   un endpoint individual dentro del dispositivo.
	// - command: objeto que contiene el comando que se debe enviar. Más
	//   información en https://wiki.cloud.studio/page/1195.

	// Este ejemplo está escrito asumiendo un dispositivo que contiene un único 
	// endpoint, de tipo appliance, que se puede encender, apagar y alternar. 
	// Se asume que se debe enviar un solo byte en el payload, que indica el tipo 
	// de operación.

/*
	 payload.port = 25; 	 	 // Este dispositivo recibe comandos en el puerto LoRaWAN 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // El comando 30 indica "encender" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // El comando 31 indica "apagar" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // El comando 32 indica "alternar" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}


