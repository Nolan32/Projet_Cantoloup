console.log('Hello');



var situations = [{
					situation : "situation numéro 1",
					resA : "lala1",
					resB : "lolo1",
					response : "resA",
					ifResA : "tu as donné la bonne reponse + message prevention",
					ifResB : "tu as donné la mauvaise reponse + message prevention",
					genre : "reseauSociaux.jpg"
				},
				{
					situation : "situation numéro 2",
					resA : "lala2",
					resB : "lolo2",
					response : "resB",
					ifResA : "bravo, tu as donné la bonne reponse + message prevention",
					ifResB : "dommage, tu as donné la mauvaise reponse + message prevention",
					genre : "porn.jpg",
				},];






var Alea =Math.floor(Math.random()*situations.length);				
function GenererPreventionAlea(){
	$('#img').append("<img class='responsive-img' src='res/"+situations[Alea].genre+"'>")
	$('#situation').html(situations[Alea].situation);
	$('#resA').html(situations[Alea].resA);
	$('#resB').html(situations[Alea].resB);
}	

function reponsePreventionMessage() {

	if ($("#radioBtn input").is(':checked')){
		var test = $("#radioBtn input:checked").val();
		console.log(test);
		if(test === situations[Alea].response){
			$("#reponsePrevention").html('<div class="card-panel light-green lighten-3">'+situations[Alea].ifResA+'</div>');
		}else{
			$('#reponsePrevention').html('<div class="card-panel red lighten-3">'+situations[Alea].ifResB+'</div>');
		}
	}else{
		console.log("pas de reponse selectionnée");
	}
	
}

$(document).ready(function(){
	GenererPreventionAlea();
	$("#validate").click(function() {
		reponsePreventionMessage();
	});
});

