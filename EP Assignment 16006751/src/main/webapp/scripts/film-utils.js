function showFilm1(idField, resultRegion) {
  var baseAddress = "getFilm";
  var data = "filmID=" + getValue(idField);
  var address = baseAddress + "?" + data;
  ajaxResult(address, resultRegion);
}

function showFilm2(idField, resultRegion) {
  var baseAddress = "FilmController";
  var data = "format=" + getValue(idField);
  var address = baseAddress + "?" + data;
  ajaxResult(address, resultRegion);
}

function clearFilms(idField, resultRegion) {
  var baseAddress = "FilmController";
  var data = "format=" + idField;
  var address = baseAddress + "?" + data;
  ajaxResult(address, resultRegion);
}

function showFilmData(dataField, resultRegion) {
  var baseAddress = "FilmController";
  var data = "format=" + dataField;
  var address = baseAddress + "?" + data;
  ajaxResult(address, resultRegion);
}

function getFilmData(formatField, resultRegion) {
  var address = "FilmController";
  var format = getValue(formatField);
  var data = "format=" + format;
  var responseHandler = findHandler(format);
  ajaxPost(address, data, function(request) { responseHandler(request, resultRegion); });
}

function insertFilm(idField, titleField, yearField, directorField, 
					starsField, reviewField, resultRegion) {
  var baseAddress = "filmInsert";
  var data = "id=" + getValue(idField) +
             "&title=" + getValue(titleField) +
             "&year=" + getValue(yearField) +
             "&director=" + getValue(directorField) +
             "&stars=" + getValue(starsField) +
             "&review=" + getValue(reviewField);
  var address = baseAddress + "?" + data;
  ajaxResult(address, resultRegion);
  $("#film-result-3").fadeOut(10000);
}

function filmTableOld(filmTypeField, formatField, resultRegion) {
  var address = "show-films";
  var filmType = getValue(filmTypeField);
  var format = getValue(formatField);
  var data = "filmType=" + filmType +
             "&format=" + format;
  var responseHandler = findHandler(format);
  ajaxPost(address, data, 
           function(request) { 
             responseHandler(request, resultRegion); 
           });
}