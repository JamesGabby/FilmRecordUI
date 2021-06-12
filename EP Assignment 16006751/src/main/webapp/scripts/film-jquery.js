

//View All Film Data 
$(document).ready(function(){
	$("#show-all-button").click(function(){
    	$("#display-films2").load("FilmController?format="+$("#selectformat").val());
	});
});
//clear films for above
$(document).ready(function(){
	$("#reset-button").click(function(){
		$("#display-films2").empty();
	});
});


//delete the film
$(document).ready(function(){
	$("#delete-film-button").click(function(){
		$("#delete-film").load("DeleteFilm?filmID="+$("#delete-id").val()).show().delay(3000).fadeOut();
	});
});


//get film by id v2
$(document).ready(function(){
	$("#get-film-by-id-button").click(function(){
		$("#display-film-by-id").load("FilmByIDController?filmID="+$("#film-by-id").val()+
									  "&format="+$("#select-format-id").val());
	});
});
$(document).ready(function() {
	$("#reset-film-button-2").click(function(){
		$("#display-film-by-id").empty();
		$("#film-by-id").val("");
	});
});

//reset insert values
$(document).ready(function() {
	$("#insert-film-button-reset").click(function(){
		$("#film-id-insert").val("");
		$("#film-title").val("");
		$("#film-year").val("");
		$("#film-director").val("");
		$("#film-stars").val("");
		$("#film-review").val("");
	});
});

//get film by title
$(document).ready(function(){
	$("#get-film-by-title-button").click(function(){
		$("#display-film-by-title").load("FilmByTitleController?filmTitle="+
		$("#film-by-title").val().replace(/ /g, "+")
		+"&format="+$("#select-format-title").val());
	});
});
$(document).ready(function() {
	$("#reset-film-button-3").click(function(){
		$("#display-film-by-title").empty();
		$("#film-by-title").val("");
	});
});

//insert a film into the database
//choice of json, xml or plain text
$(document).ready(function() {
	$("#insert-film-v2").click(function() {
		var baseAddress = "filmInsert";
        var textData = "id=" + $("#insert-id").val() +
             "&title=" + $("#insert-title").val().replace(/ /g, "+") +
             "&year=" + $("#insert-year").val() +
             "&director=" + $("#insert-director").val().replace(/ /g, "+") +
             "&stars=" + $("#insert-stars").val().replace(/ /g, "+") +
             "&review=" + $("#insert-review").val().replace(/ /g, "+") +
    		 "&format=" + $("#select-format-insert").val();
        var json = '{ "id":'+$("#insert-id").val()+
        						  ', "title":"'+$("#insert-title").val().replace(/ /g, "+")+
        						  '", "year":'+$("#insert-year").val()+
        						  ', "director":"'+$("#insert-director").val().replace(/ /g, "+")+
        						  '", "stars":"'+$("#insert-stars").val().replace(/ /g, "+")+
        						  '", "review":"'+$("#insert-review").val().replace(/ /g, "+")+
				   				  '", "format":"'+$("#select-format-insert").val()+'"}';
        var jsonObject = JSON.parse(json);
        var jsonData = "id=" + jsonObject.id +
        			   "&title=" + jsonObject.title +
        			   "&year=" + jsonObject.year +
        			   "&director=" + jsonObject.director +
        			   "&stars=" + jsonObject.stars +
        			   "&review=" + jsonObject.review +
        			   "&format=" + jsonObject.format;
        var xml = "<filmList><film>" +
					  "<id>"+$("#insert-id").val()+"</id>" +
					  "<title>"+$("#insert-title").val().replace(/ /g, "+")+"</title>" +
					  "<year>"+$("#insert-year").val()+"</year>" +
					  "<director>"+$("#insert-director").val().replace(/ /g, "+")+"</director>" +
					  "<stars>"+$("#insert-stars").val().replace(/ /g, "+")+"</stars>" +
					  "<review>"+$("#insert-review").val().replace(/ /g, "+")+"</review>" +
					  "<format>"+$("#select-format-insert").val()+"</format>" +
				  "</film></filmList>";
		var domParser = new DOMParser();
		var xmlDoc = domParser.parseFromString(xml,"text/xml");
		var xmlData =  "id=" + xmlDoc.getElementsByTagName("id")[0].childNodes[0].nodeValue +
        			   "&title=" + xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue +
        			   "&year=" + xmlDoc.getElementsByTagName("year")[0].childNodes[0].nodeValue +
        			   "&director=" + xmlDoc.getElementsByTagName("director")[0].childNodes[0].nodeValue +
        			   "&stars=" + xmlDoc.getElementsByTagName("stars")[0].childNodes[0].nodeValue +
        			   "&review=" + xmlDoc.getElementsByTagName("review")[0].childNodes[0].nodeValue +
        			   "&format=" + xmlDoc.getElementsByTagName("format")[0].childNodes[0].nodeValue;
        var jsonAddress = baseAddress + "?" + jsonData; 
        var textAddress = baseAddress + "?" + textData; 
        var xmlAddress = baseAddress + "?" + xmlData;
	    console.log(jsonData);
	    $("#insert-film-v2-dm").empty();
	    if ($("#select-format-insert").val() == "text") {
			$("#insert-film-v2-dm").load(textAddress).show().delay(3000).fadeOut();
		} else if ($("#select-format-insert").val() == "json") {
			$("#insert-film-v2-dm").load(jsonAddress).show().delay(3000).fadeOut();
		} else {
			$("#insert-film-v2-dm").load(xmlAddress).show().delay(3000).fadeOut();
		}
		
	});
});
//reset insert values
$(document).ready(function() {
	$("#reset-insert-button").click(function(){
		$("#insert-film-v2-dm").empty();
		$("#insert-id").val("");
		$("#insert-title").val("");
		$("#insert-year").val("");
		$("#insert-director").val("");
		$("#insert-stars").val("");
		$("#insert-review").val("");
	});
});


//update a film
//choice of json, xml or plain text
$(document).ready(function() {
	$("#update-button-v3").click(function() {
		var baseAddress = "UpdateFilmControllerV2";
        var textData = "attribute=" + $("#select-attribute-v3").val() +
             		   "&id-value="+$('#id-to-update-v3').val()+
    				   "&new-value="+$('#update-new-value-v3').val().replace(/ /g, "+")+
    				   "&format="+$('#select-format-update').val();
        var json = '{ "attribute":"'+$("#select-attribute-v3").val()+
				   '", "idvalue":"'+$("#id-to-update-v3").val()+
				   '", "newvalue":"'+$("#update-new-value-v3").val().replace(/ /g, "+")+
				   '", "format":"'+$("#select-format-update").val()+'"}';
        var jsonObject = JSON.parse(json);
        var jsonData = "attribute=" + jsonObject.attribute +
        			   "&id-value=" + jsonObject.idvalue +
        			   "&new-value=" + jsonObject.newvalue +
        			   "&format=" + jsonObject.format;
        var xml = "<filmList><film>" +
					  "<attribute>"+$("#select-attribute-v3").val()+"</attribute>" +
					  "<id-value>"+$("#id-to-update-v3").val()+"</id-value>" +
					  "<new-value>"+$("#update-new-value-v3").val().replace(/ /g, "+")+"</new-value>" +
					  "<format>"+$("#select-format-update").val()+"</format>" +
				  "</film></filmList>";
		var domParser = new DOMParser();
		var xmlDoc = domParser.parseFromString(xml,"text/xml");
		var xmlData =  "attribute=" + xmlDoc.getElementsByTagName("attribute")[0].childNodes[0].nodeValue +
        			   "&id-value=" + xmlDoc.getElementsByTagName("id-value")[0].childNodes[0].nodeValue +
        			   "&new-value=" + xmlDoc.getElementsByTagName("new-value")[0].childNodes[0].nodeValue +
        			   "&format=" + xmlDoc.getElementsByTagName("format")[0].childNodes[0].nodeValue;
        var jsonAddress = baseAddress + "?" + jsonData; 
        var textAddress = baseAddress + "?" + textData; 
        var xmlAddress = baseAddress + "?" + xmlData;
	    console.log("text data: " + textData);
	    console.log("parsed json data: " + jsonData);
	    console.log("parsed xml data: " + xmlData);
	    $("#update-film-v3").empty();
	    if ($("#select-format-update").val() == "text") {
			$("#update-film-v3").load(textAddress).show().delay(3000).fadeOut();
		} else if ($("#select-format-update").val("json")) {
			$("#update-film-v3").load(jsonAddress).show().delay(3000).fadeOut();
		} else {
			$("#update-film-v3").load(xmlAddress).show().delay(3000).fadeOut();
		}
	});
});
//reset insert values
$(document).ready(function() {
	$("#reset-update-button").click(function(){
		$("#id-to-update-v3").val("");
		$("#update-new-value-v3").val("");
		$("#update-film-v3").empty();
	});
});
	
	
//style the buttons
$( "#reset-insert-button" ).button();
$( "#insert-film-v2" ).button();
$( "#delete-film-button" ).button();
$( "#update-button-v3" ).button();
$( "#reset-film-button-2" ).button();
$( "#get-film-by-id-button" ).button();
$( "#reset-film-button-3" ).button();
$( "#get-film-by-title-button" ).button();
$( "#reset-update-button" ).button();
$( "#show-all-button" ).button();
$( "#reset-button" ).button();


var availableIDs = [
	"10000",
	"10001",
	"10002",
	"10003",
	"10004",
	"10005",
	"10100",
	"10101",
	"10102",
	"10103",
	"10104",
	"10105",
	"10106",
	"10201",
	"10202",
	"10203",
	"10204",
	"10205",
	"10300",
	"10301",
	"10302",
	"10303"
];
var availableTitles = [
	"Ace Ventura: When Nature Calls",
	"A Better Tomorrow",
	"A Bronx Tale",
	"A Nightmare on Elm Street",
	"A.P.E.X.",
	"Beethoven",
	"Bed of Roses",
	"Braveheart",
	"China Moon",
	"City Slickers",
	"Class Act",
	"Dantes Peak",
	"Dave",
	"Delta of Venus",
	"Die Hard",
	"Fargo",
	"Evita",
	"Emma",
	"Eddy",
	"Eraser",
	"Enter the Dragon",
	"Fantasia",
	"Forrest Gump",
	"Free Willy",
	"Fresh",
	"Generation X",
	"Gladiator",
	"Godfather III",
	"Hackers",
	"Halloween",
	"Hardware",
];
$( "#film-by-id, #id-to-update-v3, #delete-id" ).autocomplete({
	source: availableIDs
});
$( "#film-by-title" ).autocomplete({
	source: availableTitles
});


$( "#selectformat" ).selectmenu();
$( "#select-attribute-v3" ).selectmenu();
$( "#select-format-id" ).selectmenu();
$( "#select-format-title" ).selectmenu();
$( "#select-format-insert" ).selectmenu();
$( "#select-format-update" ).selectmenu();

