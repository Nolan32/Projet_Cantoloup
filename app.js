console.log('Hello');

var situations = [{
					situation : "situation numéro 1",
					resA : "lala1",
					resB : "lolo1",
					response : "resA",
					ifResA : "bravo, tu as donné la bonne reponse + message prevention",
					ifResB : "dommage, tu as donné la mauvaise reponse + message prevention"},
				{
					situation : "situation numéro 1",
					resA : "lala2",
					resB : "lolo2",
					response : "resA",
					ifResA : "bravo, tu as donné la bonne reponse + message prevention",
					ifResB : "dommage, tu as donné la mauvaise reponse + message prevention"},];

var Alea =Math.floor(Math.random()*situations.length);				
function GenererPreventionAlea(){
	// $('#img').append("<img class='responsive-img' src='/res/nom_de_l_image'>")
	$('#situation').html(situations[Alea].situation);
	$('#resA').html(situations[Alea].resA);
	$('#resB').html(situations[Alea].resB);
};
function preventionMessage() {
	if ($("#radioBtn input").is(':checked')){
		var test = $("#radioBtn input:checked").val();
		console.log(test);
		if(test === situations[Alea].response){
			$("#reponsePrevention").html(situations[Alea].ifResA);
		}else{
			$('#reponsePrevention').html(situations[Alea].ifResB);
		}
	}else{
		console.log("pas de reponse selectionnée");
	}
	
}
$(document).ready(function(){
	GenererPreventionAlea();
	$("#validate").click(function() {
		preventionMessage();
	});
})