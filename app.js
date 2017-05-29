console.log('Hello');



var situations = [{
	situation : "Situation numéro 1",
	resA : "Lala1",
	resB : "Lolo1",
	response : "resA",
	ifResA : "Tu as donné la bonne reponse + Message prevention",
	ifResB : "Tu as donné la mauvaise reponse + Message prevention",
	genre : "reseauSociaux.jpg"
},
{
	situation : "Situation numéro 2",
	resA : "Lala2",
	resB : "Lolo2",
	response : "resB",
	ifResA : "Bravo, Tu as donné la bonne reponse + Message prevention",
	ifResB : "Dommage, Tu as donné la mauvaise reponse + Message prevention",
	genre : "porn.jpg",
},];






var Alea =Math.floor(Math.random()*situations.length);				
function GenererPreventionAlea(){
	$('#img').append("<img class='responsive-img' src='res/"+situations[Alea].genre+"'>");
	$('#situation').html(situations[Alea].situation);
	$('#resA').html(situations[Alea].resA);
	$('#resB').html(situations[Alea].resB);
}	
function CreateButon(){
	$('#CreateButon').append("<button class='btn waves-effect green darken-2' id='redirection'>www.google.fr</button>");
	$('#CreateButon').delegate('#redirection','click',function(){
		window.location.href ='http://www.google.fr';
	});
}
function reponsePreventionMessage() {

	if ($("#radioBtn input").is(':checked')){
		var test = $("#radioBtn input:checked").val();
		console.log(test);
		if(test === situations[Alea].response){
			$("#reponsePrevention").html('<div class="card-panel light-green lighten-3 center">'+situations[Alea].ifResA+'</div>');
		}else{
			$('#reponsePrevention').html('<div class="card-panel red lighten-3 center">'+situations[Alea].ifResB+'</div>');
		}
	}else{
		console.log("pas de reponse selectionnée");
	}
	
}

$(document).ready(function(){
	GenererPreventionAlea();
	$("#validate").click(function() {
		reponsePreventionMessage();
		setTimeout(CreateButon,10000);
	});
});

