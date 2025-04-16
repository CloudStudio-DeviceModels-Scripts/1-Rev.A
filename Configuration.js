function getConfiguration(config)
{
  // This function allows you to indicate general configuration values
  // for all devices of this model.

  // Depending on the meaning of the "device address" in this device, 
  // you may want to change the label that is used to refer to the 
  // address in the user interface.
  // For instance, if the address of the device is actually a MAC 
  // address, you may want to use the code below.
  
  // config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  var d1 = endpoints.addEndpoint("1", "Día 1", endpointType.genericSensor);
  d1.variableTypeId = 1314;
  var d2 = endpoints.addEndpoint("2", "Día 2", endpointType.genericSensor);
  d2.variableTypeId = 1314;
  var d3 = endpoints.addEndpoint("3", "Día 3", endpointType.genericSensor);
  d3.variableTypeId = 1314;
  var d4 = endpoints.addEndpoint("4", "Día 4", endpointType.genericSensor);
  d4.variableTypeId = 1314;
  var d5 = endpoints.addEndpoint("5", "Día 5", endpointType.genericSensor);
  d5.variableTypeId = 1314;
  var d6 = endpoints.addEndpoint("6", "Día 6", endpointType.genericSensor);
  d6.variableTypeId = 1314;
  var d7 = endpoints.addEndpoint("7", "Día 7", endpointType.genericSensor);
  d7.variableTypeId = 1314;
  var d8 = endpoints.addEndpoint("8", "Día 8", endpointType.genericSensor);
  d8.variableTypeId = 1314;
  var d9 = endpoints.addEndpoint("9", "Día 9", endpointType.genericSensor);
  d9.variableTypeId = 1314;
  var d10 = endpoints.addEndpoint("10", "Día 10", endpointType.genericSensor);
  d10.variableTypeId = 1314;
  var d11 = endpoints.addEndpoint("11", "Día 11", endpointType.genericSensor);
  d11.variableTypeId = 1314;
  var d12 = endpoints.addEndpoint("12", "Día 12", endpointType.genericSensor);
  d12.variableTypeId = 1314;
  var d13 = endpoints.addEndpoint("13", "Día 13", endpointType.genericSensor);
  d13.variableTypeId = 1314;
  var d14 = endpoints.addEndpoint("14", "Día 14", endpointType.genericSensor);
  d14.variableTypeId = 1314;
  var d15 = endpoints.addEndpoint("15", "Día 15", endpointType.genericSensor);
  d15.variableTypeId = 1314;
  var d16 = endpoints.addEndpoint("16", "Día 16", endpointType.genericSensor);
  d16.variableTypeId = 1314;
  var d17 = endpoints.addEndpoint("17", "Día 17", endpointType.genericSensor);
  d17.variableTypeId = 1314;
  var d18 = endpoints.addEndpoint("18", "Día 18", endpointType.genericSensor);
  d18.variableTypeId = 1314;
  var d19 = endpoints.addEndpoint("19", "Día 19", endpointType.genericSensor);
  d19.variableTypeId = 1314;
  var d20 = endpoints.addEndpoint("20", "Día 20", endpointType.genericSensor);
  d20.variableTypeId = 1314;
  var d21 = endpoints.addEndpoint("21", "Día 21", endpointType.genericSensor);
  d21.variableTypeId = 1314;
  var d22 = endpoints.addEndpoint("22", "Día 22", endpointType.genericSensor);
  d22.variableTypeId = 1314;
  var d23 = endpoints.addEndpoint("23", "Día 23", endpointType.genericSensor);
  d23.variableTypeId = 1314;
  var d24 = endpoints.addEndpoint("24", "Día 24", endpointType.genericSensor);
  d24.variableTypeId = 1314;
  var d25 = endpoints.addEndpoint("25", "Día 25", endpointType.genericSensor);
  d25.variableTypeId = 1314;
  var d26 = endpoints.addEndpoint("26", "Día 26", endpointType.genericSensor);
  d26.variableTypeId = 1314;
  var d27 = endpoints.addEndpoint("27", "Día 27", endpointType.genericSensor);
  d27.variableTypeId = 1314;
  var d28 = endpoints.addEndpoint("28", "Día 28", endpointType.genericSensor);
  d28.variableTypeId = 1314;
  var d29 = endpoints.addEndpoint("29", "Día 29", endpointType.genericSensor);
  d29.variableTypeId = 1314;
  var d30 = endpoints.addEndpoint("30", "Día 30", endpointType.genericSensor);
  d30.variableTypeId = 1314;
  var d31 = endpoints.addEndpoint("31", "Día 31", endpointType.genericSensor);
  d31.variableTypeId = 1314;

  var n1 = endpoints.addEndpoint("32", "Volumen de Agua 1", endpointType.genericSensor);
  n1.variableTypeId = 1326;
  var n2 = endpoints.addEndpoint("33", "Volumen de Agua 2", endpointType.genericSensor);
  n2.variableTypeId = 1326;
  var n3 = endpoints.addEndpoint("34", "Volumen de Agua 3", endpointType.genericSensor);
  n3.variableTypeId = 1326;
  var n4 = endpoints.addEndpoint("35", "Volumen de Agua 4", endpointType.genericSensor);
  n4.variableTypeId = 1326;
  var n5 = endpoints.addEndpoint("36", "Volumen de Agua 5", endpointType.genericSensor);
  n5.variableTypeId = 1326;
  var n6 = endpoints.addEndpoint("37", "Volumen de Agua 6", endpointType.genericSensor);
  n6.variableTypeId = 1326;
  var n7 = endpoints.addEndpoint("38", "Volumen de Agua 7", endpointType.genericSensor);
  n7.variableTypeId = 1326;
  var n8 = endpoints.addEndpoint("39", "Volumen de Agua 8", endpointType.genericSensor);
  n8.variableTypeId = 1326;
  var n9 = endpoints.addEndpoint("40", "Volumen de Agua 9", endpointType.genericSensor);
  n9.variableTypeId = 1326;
  var n10 = endpoints.addEndpoint("41", "Volumen de Agua 10", endpointType.genericSensor);
  n10.variableTypeId = 1326;
  var n11 = endpoints.addEndpoint("42", "Volumen de Agua 11", endpointType.genericSensor);
  n11.variableTypeId = 1326;
  var n12 = endpoints.addEndpoint("43", "Volumen de Agua 12", endpointType.genericSensor);
  n12.variableTypeId = 1326;
  var n13 = endpoints.addEndpoint("44", "Volumen de Agua 13", endpointType.genericSensor);
  n13.variableTypeId = 1326;
  var n14 = endpoints.addEndpoint("45", "Volumen de Agua 14", endpointType.genericSensor);
  n14.variableTypeId = 1326;
  var n15 = endpoints.addEndpoint("46", "Volumen de Agua 15", endpointType.genericSensor);
  n15.variableTypeId = 1326;
  var n16 = endpoints.addEndpoint("47", "Volumen de Agua 16", endpointType.genericSensor);
  n16.variableTypeId = 1326;
  var n17 = endpoints.addEndpoint("48", "Volumen de Agua 17", endpointType.genericSensor);
  n17.variableTypeId = 1326;
  var n18 = endpoints.addEndpoint("49", "Volumen de Agua 18", endpointType.genericSensor);
  n18.variableTypeId = 1326;
  var n19 = endpoints.addEndpoint("50", "Volumen de Agua 19", endpointType.genericSensor);
  n19.variableTypeId = 1326;
  var n20 = endpoints.addEndpoint("51", "Volumen de Agua 20", endpointType.genericSensor);
  n20.variableTypeId = 1326;
  var n21 = endpoints.addEndpoint("52", "Volumen de Agua 21", endpointType.genericSensor);
  n21.variableTypeId = 1326;
  var n22 = endpoints.addEndpoint("53", "Volumen de Agua 22", endpointType.genericSensor);
  n22.variableTypeId = 1326;
  var n23 = endpoints.addEndpoint("54", "Volumen de Agua 23", endpointType.genericSensor);
  n23.variableTypeId = 1326;
  var n24 = endpoints.addEndpoint("55", "Volumen de Agua 24", endpointType.genericSensor);
  n24.variableTypeId = 1326;
  var n25 = endpoints.addEndpoint("56", "Volumen de Agua 25", endpointType.genericSensor);
  n25.variableTypeId = 1326;
  var n26 = endpoints.addEndpoint("57", "Volumen de Agua 26", endpointType.genericSensor);
  n26.variableTypeId = 1326;
  var n27 = endpoints.addEndpoint("58", "Volumen de Agua 27", endpointType.genericSensor);
  n27.variableTypeId = 1326;
  var n28 = endpoints.addEndpoint("59", "Volumen de Agua 28", endpointType.genericSensor);
  n28.variableTypeId = 1326;
  var n29 = endpoints.addEndpoint("60", "Volumen de Agua 29", endpointType.genericSensor);
  n29.variableTypeId = 1326;
  var n30 = endpoints.addEndpoint("61", "Volumen de Agua 30", endpointType.genericSensor);
  n30.variableTypeId = 1326;
  var n31 = endpoints.addEndpoint("62", "Volumen de Agua 31", endpointType.genericSensor);
  n31.variableTypeId = 1326;

  //Pozo
  var np1 = endpoints.addEndpoint("63", "Volumen de Agua pozo 1", endpointType.genericSensor);
  np1.variableTypeId = 1326;
  var np2 = endpoints.addEndpoint("64", "Volumen de Agua pozo 2", endpointType.genericSensor);
  np2.variableTypeId = 1326;
  var np3 = endpoints.addEndpoint("65", "Volumen de Agua pozo 3", endpointType.genericSensor);
  np3.variableTypeId = 1326;
  var np4 = endpoints.addEndpoint("66", "Volumen de Agua pozo 4", endpointType.genericSensor);
  np4.variableTypeId = 1326;
  var np5 = endpoints.addEndpoint("67", "Volumen de Agua pozo 5", endpointType.genericSensor);
  np5.variableTypeId = 1326;
  var np6 = endpoints.addEndpoint("68", "Volumen de Agua pozo 6", endpointType.genericSensor);
  np6.variableTypeId = 1326;
  var np7 = endpoints.addEndpoint("69", "Volumen de Agua pozo 7", endpointType.genericSensor);
  np7.variableTypeId = 1326;
  var np8 = endpoints.addEndpoint("70", "Volumen de Agua pozo 8", endpointType.genericSensor);
  np8.variableTypeId = 1326;
  var np9 = endpoints.addEndpoint("71", "Volumen de Agua pozo 9", endpointType.genericSensor);
  np9.variableTypeId = 1326;
  var np10 = endpoints.addEndpoint("72", "Volumen de Agua pozo 10", endpointType.genericSensor);
  np10.variableTypeId = 1326;
  var np11 = endpoints.addEndpoint("73", "Volumen de Agua pozo 11", endpointType.genericSensor);
  np11.variableTypeId = 1326;
  var np12 = endpoints.addEndpoint("74", "Volumen de Agua pozo 12", endpointType.genericSensor);
  np12.variableTypeId = 1326;
  var np13 = endpoints.addEndpoint("75", "Volumen de Agua pozo 13", endpointType.genericSensor);
  np13.variableTypeId = 1326;
  var np14 = endpoints.addEndpoint("76", "Volumen de Agua pozo 14", endpointType.genericSensor);
  np14.variableTypeId = 1326;
  var np15 = endpoints.addEndpoint("77", "Volumen de Agua pozo 15", endpointType.genericSensor);
  np15.variableTypeId = 1326;
  var np16 = endpoints.addEndpoint("78", "Volumen de Agua pozo 16", endpointType.genericSensor);
  np16.variableTypeId = 1326;
  var np17 = endpoints.addEndpoint("79", "Volumen de Agua pozo 17", endpointType.genericSensor);
  np17.variableTypeId = 1326;
  var np18 = endpoints.addEndpoint("80", "Volumen de Agua pozo 18", endpointType.genericSensor);
  np18.variableTypeId = 1326;
  var np19 = endpoints.addEndpoint("81", "Volumen de Agua pozo 19", endpointType.genericSensor);
  np19.variableTypeId = 1326;
  var np20 = endpoints.addEndpoint("82", "Volumen de Agua pozo 20", endpointType.genericSensor);
  np20.variableTypeId = 1326;
  var np21 = endpoints.addEndpoint("83", "Volumen de Agua pozo 21", endpointType.genericSensor);
  np21.variableTypeId = 1326;
  var np22 = endpoints.addEndpoint("84", "Volumen de Agua pozo 22", endpointType.genericSensor);
  np22.variableTypeId = 1326;
  var np23 = endpoints.addEndpoint("85", "Volumen de Agua pozo 23", endpointType.genericSensor);
  np23.variableTypeId = 1326;
  var np24 = endpoints.addEndpoint("86", "Volumen de Agua pozo 24", endpointType.genericSensor);
  np24.variableTypeId = 1326;
  var np25 = endpoints.addEndpoint("87", "Volumen de Agua pozo 25", endpointType.genericSensor);
  np25.variableTypeId = 1326;
  var np26 = endpoints.addEndpoint("88", "Volumen de Agua pozo 26", endpointType.genericSensor);
  np26.variableTypeId = 1326;
  var np27 = endpoints.addEndpoint("89", "Volumen de Agua pozo 27", endpointType.genericSensor);
  np27.variableTypeId = 1326;
  var np28 = endpoints.addEndpoint("90", "Volumen de Agua pozo 28", endpointType.genericSensor);
  np28.variableTypeId = 1326;
  var np29 = endpoints.addEndpoint("91", "Volumen de Agua pozo 29", endpointType.genericSensor);
  np29.variableTypeId = 1326;
  var np30 = endpoints.addEndpoint("92", "Volumen de Agua pozo 30", endpointType.genericSensor);
  np30.variableTypeId = 1326;
  var np31 = endpoints.addEndpoint("93", "Volumen de Agua pozo 31", endpointType.genericSensor);
  np31.variableTypeId = 1326;

  //Poligono
  var npo1 = endpoints.addEndpoint("94", "Volumen de Agua poligono 1", endpointType.genericSensor);
  npo1.variableTypeId = 1326;
  var npo2 = endpoints.addEndpoint("95", "Volumen de Agua poligono 2", endpointType.genericSensor);
  npo2.variableTypeId = 1326;
  var npo3 = endpoints.addEndpoint("96", "Volumen de Agua poligono 3", endpointType.genericSensor);
  npo3.variableTypeId = 1326;
  var npo4 = endpoints.addEndpoint("97", "Volumen de Agua poligono 4", endpointType.genericSensor);
  npo4.variableTypeId = 1326;
  var npo5 = endpoints.addEndpoint("98", "Volumen de Agua poligono 5", endpointType.genericSensor);
  npo5.variableTypeId = 1326;
  var npo6 = endpoints.addEndpoint("99", "Volumen de Agua poligono 6", endpointType.genericSensor);
  npo6.variableTypeId = 1326;
  var npo7 = endpoints.addEndpoint("100", "Volumen de Agua poligono 7", endpointType.genericSensor);
  npo7.variableTypeId = 1326;
  var npo8 = endpoints.addEndpoint("101", "Volumen de Agua poligono 8", endpointType.genericSensor);
  npo8.variableTypeId = 1326;
  var npo9 = endpoints.addEndpoint("102", "Volumen de Agua poligono 9", endpointType.genericSensor);
  npo9.variableTypeId = 1326;
  var npo10 = endpoints.addEndpoint("103", "Volumen de Agua poligono 10", endpointType.genericSensor);
  npo10.variableTypeId = 1326;
  var npo11 = endpoints.addEndpoint("104", "Volumen de Agua poligono 11", endpointType.genericSensor);
  npo11.variableTypeId = 1326;
  var npo12 = endpoints.addEndpoint("105", "Volumen de Agua poligono 12", endpointType.genericSensor);
  npo12.variableTypeId = 1326;
  var npo13 = endpoints.addEndpoint("106", "Volumen de Agua poligono 13", endpointType.genericSensor);
  npo13.variableTypeId = 1326;
  var npo14 = endpoints.addEndpoint("107", "Volumen de Agua poligono 14", endpointType.genericSensor);
  npo14.variableTypeId = 1326;
  var npo15 = endpoints.addEndpoint("108", "Volumen de Agua poligono 15", endpointType.genericSensor);
  npo15.variableTypeId = 1326;
  var npo16 = endpoints.addEndpoint("109", "Volumen de Agua poligono 16", endpointType.genericSensor);
  npo16.variableTypeId = 1326;
  var npo17 = endpoints.addEndpoint("110", "Volumen de Agua poligono 17", endpointType.genericSensor);
  npo17.variableTypeId = 1326;
  var npo18 = endpoints.addEndpoint("111", "Volumen de Agua poligono 18", endpointType.genericSensor);
  npo18.variableTypeId = 1326;
  var npo19 = endpoints.addEndpoint("112", "Volumen de Agua poligono 19", endpointType.genericSensor);
  npo19.variableTypeId = 1326;
  var npo20 = endpoints.addEndpoint("113", "Volumen de Agua poligono 20", endpointType.genericSensor);
  npo20.variableTypeId = 1326;
  var npo21 = endpoints.addEndpoint("114", "Volumen de Agua poligono 21", endpointType.genericSensor);
  npo21.variableTypeId = 1326;
  var npo22 = endpoints.addEndpoint("115", "Volumen de Agua poligono 22", endpointType.genericSensor);
  npo22.variableTypeId = 1326;
  var npo23 = endpoints.addEndpoint("116", "Volumen de Agua poligono 23", endpointType.genericSensor);
  npo23.variableTypeId = 1326;
  var npo24 = endpoints.addEndpoint("117", "Volumen de Agua poligono 24", endpointType.genericSensor);
  npo24.variableTypeId = 1326;
  var npo25 = endpoints.addEndpoint("118", "Volumen de Agua poligono 25", endpointType.genericSensor);
  npo25.variableTypeId = 1326;
  var npo26 = endpoints.addEndpoint("119", "Volumen de Agua poligono 26", endpointType.genericSensor);
  npo26.variableTypeId = 1326;
  var npo27 = endpoints.addEndpoint("120", "Volumen de Agua poligono 27", endpointType.genericSensor);
  npo27.variableTypeId = 1326;
  var npo28 = endpoints.addEndpoint("121", "Volumen de Agua poligono 28", endpointType.genericSensor);
  npo28.variableTypeId = 1326;
  var npo29 = endpoints.addEndpoint("122", "Volumen de Agua poligono 29", endpointType.genericSensor);
  npo29.variableTypeId = 1326;
  var npo30 = endpoints.addEndpoint("123", "Volumen de Agua poligono 30", endpointType.genericSensor);
  npo30.variableTypeId = 1326;
  var npo31 = endpoints.addEndpoint("124", "Volumen de Agua poligono 31", endpointType.genericSensor);
  npo31.variableTypeId = 1326;

  //Pueblo
  var nu1 = endpoints.addEndpoint("125", "Volumen de Agua pueblo 1", endpointType.genericSensor);
  nu1.variableTypeId = 1326;
  var nu2 = endpoints.addEndpoint("126", "Volumen de Agua pueblo 2", endpointType.genericSensor);
  nu2.variableTypeId = 1326;
  var nu3 = endpoints.addEndpoint("127", "Volumen de Agua pueblo 3", endpointType.genericSensor);
  nu3.variableTypeId = 1326;
  var nu4 = endpoints.addEndpoint("128", "Volumen de Agua pueblo 4", endpointType.genericSensor);
  nu4.variableTypeId = 1326;
  var nu5 = endpoints.addEndpoint("129", "Volumen de Agua pueblo 5", endpointType.genericSensor);
  nu5.variableTypeId = 1326;
  var nu6 = endpoints.addEndpoint("130", "Volumen de Agua pueblo 6", endpointType.genericSensor);
  nu6.variableTypeId = 1326;
  var nu7 = endpoints.addEndpoint("131", "Volumen de Agua pueblo 7", endpointType.genericSensor);
  nu7.variableTypeId = 1326;
  var nu8 = endpoints.addEndpoint("132", "Volumen de Agua pueblo 8", endpointType.genericSensor);
  nu8.variableTypeId = 1326;
  var nu9 = endpoints.addEndpoint("133", "Volumen de Agua pueblo 9", endpointType.genericSensor);
  nu9.variableTypeId = 1326;
  var nu10 = endpoints.addEndpoint("134", "Volumen de Agua pueblo 10", endpointType.genericSensor);
  nu10.variableTypeId = 1326;
  var nu11 = endpoints.addEndpoint("135", "Volumen de Agua pueblo 11", endpointType.genericSensor);
  nu11.variableTypeId = 1326;
  var nu12 = endpoints.addEndpoint("136", "Volumen de Agua pueblo 12", endpointType.genericSensor);
  nu12.variableTypeId = 1326;
  var nu13 = endpoints.addEndpoint("137", "Volumen de Agua pueblo 13", endpointType.genericSensor);
  nu13.variableTypeId = 1326;
  var nu14 = endpoints.addEndpoint("138", "Volumen de Agua pueblo 14", endpointType.genericSensor);
  nu14.variableTypeId = 1326;
  var nu15 = endpoints.addEndpoint("139", "Volumen de Agua pueblo 15", endpointType.genericSensor);
  nu15.variableTypeId = 1326;
  var nu16 = endpoints.addEndpoint("140", "Volumen de Agua pueblo 16", endpointType.genericSensor);
  nu16.variableTypeId = 1326;
  var nu17 = endpoints.addEndpoint("141", "Volumen de Agua pueblo 17", endpointType.genericSensor);
  nu17.variableTypeId = 1326;
  var nu18 = endpoints.addEndpoint("142", "Volumen de Agua pueblo 18", endpointType.genericSensor);
  nu18.variableTypeId = 1326;
  var nu19 = endpoints.addEndpoint("143", "Volumen de Agua pueblo 19", endpointType.genericSensor);
  nu19.variableTypeId = 1326;
  var nu20 = endpoints.addEndpoint("144", "Volumen de Agua pueblo 20", endpointType.genericSensor);
  nu20.variableTypeId = 1326;
  var nu21 = endpoints.addEndpoint("145", "Volumen de Agua pueblo 21", endpointType.genericSensor);
  nu21.variableTypeId = 1326;
  var nu22 = endpoints.addEndpoint("146", "Volumen de Agua pueblo 22", endpointType.genericSensor);
  nu22.variableTypeId = 1326;
  var nu23 = endpoints.addEndpoint("147", "Volumen de Agua pueblo 23", endpointType.genericSensor);
  nu23.variableTypeId = 1326;
  var nu24 = endpoints.addEndpoint("148", "Volumen de Agua pueblo 24", endpointType.genericSensor);
  nu24.variableTypeId = 1326;
  var nu25 = endpoints.addEndpoint("149", "Volumen de Agua pueblo 25", endpointType.genericSensor);
  nu25.variableTypeId = 1326;
  var nu26 = endpoints.addEndpoint("150", "Volumen de Agua pueblo 26", endpointType.genericSensor);
  nu26.variableTypeId = 1326;
  var nu27 = endpoints.addEndpoint("151", "Volumen de Agua pueblo 27", endpointType.genericSensor);
  nu27.variableTypeId = 1326;
  var nu28 = endpoints.addEndpoint("152", "Volumen de Agua pueblo 28", endpointType.genericSensor);
  nu28.variableTypeId = 1326;
  var nu29 = endpoints.addEndpoint("153", "Volumen de Agua pueblo 29", endpointType.genericSensor);
  nu29.variableTypeId = 1326;
  var nu30 = endpoints.addEndpoint("154", "Volumen de Agua pueblo 30", endpointType.genericSensor);
  nu30.variableTypeId = 1326;
  var nu31 = endpoints.addEndpoint("155", "Volumen de Agua pueblo 31", endpointType.genericSensor);
  nu31.variableTypeId = 1326;

}

function validateDeviceAddress(address, result)
{
  // This function allows you to validate the address of a device, when
  // the user is creating it. If your device has special validation rules
  // for the address, you can check them here, and return an error message
  // in case the address format is incorrect.

  // In the code below, a validation is made to ensure that the address 
  // is exactly 10 characters long.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // This function allows you to specify UI rules at the device level.
  // For instance, you can make it possible to enable or disable adding
  // endpoints manually to the device after it was created.
  
  // In the code below, adding endpoints manually is disabled in the
  // user interface. This means that the device will be limited to the 
  // endpoints defined by function getEndpoints() above.
  
  // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  // This function allows you to specify UI rules at the endpoint level.
  // For instance, you can make it possible to delete certain endpoints, 
  // or edit their endpoint subtype, if applicable.

  // In the code below, the following rules are defined:
  // - Endpoints cannot be deleted.
  // - The endpoint subtype can be changed, but only for the second 
  //   endpoint.
  
  // rules.canDelete = false;
  // rules.canEditSubType = (endpoint.address == "2");
}
