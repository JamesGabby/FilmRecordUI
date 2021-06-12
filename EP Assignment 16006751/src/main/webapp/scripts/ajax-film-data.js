// Build a table from purely client-side information.
// To test the getTable function.

function filmTable(formatField, resultRegion) {
  var address = "FilmController";
  var format = getValue(formatField);
  var data = "format=" + format;
  var responseHandler = findHandler(format);
  ajaxPost(address, data, 
           function(request) { 
             responseHandler(request, resultRegion); 
           });
}

function xmlFilmTable(resultRegion) {
  var address = "FilmController";
  var data = "format=xml";
  ajaxPost(address, data, 
           function(request) { 
             showXmlFilmInfo(request, resultRegion); 
           });
}

function showXmlFilmInfo(request, resultRegion) {
  if ((request.readyState == 4) &&
      (request.status == 200)) {
    var xmlDocument = request.responseXML;
    var headings = getXmlValues(xmlDocument, "heading");
    var films = xmlDocument.getElementsByTagName("film");
    var rows = new Array(films.length);
    var subElementNames = ["id", "title", "director", "year", "stars", "review"];
    for(var i=0; i<cities.length; i++) {
      rows[i] = 
        getElementValues(films[i], subElementNames);
    }
    var table = getTable(headings, rows);
    htmlInsert(resultRegion, table);
  }
}

function jsonCityTable(inputField, resultRegion) {
  var address = "show-cities";
  var data = "cityType=" + getValue(inputField) +
             "&format=json";
  ajaxPost(address, data, 
           function(request) { 
             showJsonCityInfo(request, resultRegion); 
           });
}

function showJsonCityInfo(request, resultRegion) {
  if ((request.readyState == 4) &&
      (request.status == 200)) {
    var rawData = request.responseText;
    var data = eval("(" + rawData + ")");
    var table = getTable(data.headings, data.cities);
    htmlInsert(resultRegion, table);
  }
}

function stringCityTable(inputField, resultRegion) {
  var address = "show-cities";
  var data = "cityType=" + getValue(inputField) +
             "&format=string";
  ajaxPost(address, data, 
           function(request) { 
             showStringCityInfo(request, resultRegion); 
           });
}

function showStringCityInfo(request, resultRegion) {
  if ((request.readyState == 4) &&
      (request.status == 200)) {
    var rawData = request.responseText;
    var rowStrings = rawData.split(/[\n\r]+/);
    var headings = rowStrings[0].split("#");
    var rows = new Array(rowStrings.length-1);
    for(var i=1; i<rowStrings.length; i++) {
      rows[i-1] = rowStrings[i].split("#");
    }
    var table = getTable(headings, rows);
    htmlInsert(resultRegion, table);
  }
}

// Reminder: unlike in Java, in JavaScript it is OK to 
// use == to compare strings.

function findHandler(format) {
  if (format == "xml") {
    return(showXmlFilmInfo);
  } else if (format == "json") {
    return(showJsonCityInfo);
  } else {
    return(showStringCityInfo);
  }
}

function showRandomNumberMessage(request, resultRegion) {
  if ((request.readyState == 4) &&
      (request.status == 200)) {
    var rawData = request.responseText;
    var nums = eval("(" + rawData + ")");
    var sum = Math.random() + Math.random() + Math.random();
    for(var i=0; i<nums.length; i++) {
      sum = sum + nums[i];
    }
    var message = "You are a Winner!";
    if (sum < 3.0) {
      message = "You are a Loser!";
    }
    htmlInsert(resultRegion, message);
  }
}

function randomNumberMessage(resultRegion) {
  var address = "show-nums";
  ajaxPost(address, null, 
           function(request) { 
             showRandomNumberMessage(request, resultRegion); 
           });
}

function showFormattedFilms(request, resultRegion) {
  if ((request.readyState == 4) &&
      (request.status == 200)) {
    var rawData = request.responseText;
    htmlInsert(resultRegion, rawData);
  }
}

function formattedFilms(resultRegion, formatField) {
  var address = "FilmController";
  var format = getValue(formatField);
  var data = "format=" + format;
  ajaxPost(address, data, 
           function(request) { 
             showRandomNumberMessage(request, resultRegion); 
           });
}