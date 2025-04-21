function getConfiguration(config)
{
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.
  
  // Dependiendo del significado de la "dirección del dispositivo" en este 
  // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
  // para hacer referencia a la dirección en la interfaz de usuario.
  // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
  // MAC, es posible que desee utilizar el código siguiente.
  
     config.addressLabel = {en: "Direccion DIGI EN", es: "Direccion DIGI"};
}

function getEndpoints(deviceAddress, endpoints)
{
  // Esta función le permite indicar la configuración inicial de los endpoints
  // cuando se crea un dispositivo de este modelo. Esto mejora significativamente 
  // la experiencia del usuario final, ya que permite a la plataforma crear 
  // todos los endpoints incluidos en el dispositivo automáticamente cuando se 
  // crea el dispositivo.

  // En el código siguiente, se crean dos endpoints. El primero es un sensor de 
  // temperatura, mientras que el segundo es un sensor de dióxido de carbono.

     endpoints.addEndpoint("1", "Temperature sensor", endpointType.TemperatureSensor);
     endpoints.addEndpoint("2", "CO2 sensor", endpointType.PpmConcentrationSensor, ppmConcentrationSensorSubType.CarbonDioxide);
     endpoints.addEndpoint("3", "Digi sensor", endpointType.VolumeSensor);

}

function validateDeviceAddress(address, result)
{
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.
  
  // En el código siguiente, se realiza una validación para asegurarse de que la 
  // dirección tiene exactamente 10 caracteres.
  
     if (address.length != 22) {
       result.ok = false;
       result.errorMessage = {
         en: "The address must be 22 characters long", 
         es: "La dirección debe tener exactamente 22 caracteres"
       };
     }
}

function updateDeviceUIRules(rules)
{
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.

  // En el código siguiente, el agregado manual de endpoints está deshabilitada 
  // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
  // endpoints definidos por la función getEndpoints() anterior.
  
     rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpointAddress, rules)
{
  // Esta función le permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.

  // En el código siguiente, se definen las siguientes reglas:
  // - Los endpoints no se pueden eliminar.
  // - Las descripciones de los endpoints se pueden cambiar (para todos los 
  //   endpoints del dispositivo).
  // - El subtipo de extremo se puede cambiar, pero solo para el segundo endpoint.
  
     rules.canDelete = true;
     rules.canEditElectricalCircuit = true;
     rules.canEditSummationAutoReset = true;
     rules.canEditSubtype = (endpointAddress == "2");
}
