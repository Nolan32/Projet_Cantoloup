console.log('Hello');
var count=0;
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

			if (situations[Alea].response === "resA") {		
				$("#reponsePrevention").html('<div class="card-panel light-green lighten-3 Panel">'+situations[Alea].ifResA+'</div>');
				if (count===0) {
					setTimeout(CreateButon,1000);
				}
			}else{
				$("#reponsePrevention").html('<div class="card-panel light-green lighten-3 Panel">'+situations[Alea].ifResB+'</div>');
				if (count===0) {
					setTimeout(CreateButon,1000);
				}
			}
		} else if (test !== situations[Alea].response){

			if (situations[Alea].response === "resB") {
				$('#reponsePrevention').html('<div class="card-panel red lighten-3 Panel">'+situations[Alea].ifResA+'</div>');
				if (count===0) {
					setTimeout(CreateButon,1000);
				}	
			}else{
				$('#reponsePrevention').html('<div class="card-panel red lighten-3 Panel">'+situations[Alea].ifResB+'</div>');
				if (count===0) {
					setTimeout(CreateButon,1000);
				}
			}

		}else{
			console.log("pas de reponse selectionnée");
			$('#reponsePrevention').html('<div class="card-panel red darken-1 Panel">Veuillez cochez la bonne réponse pour accéder à internet</div>');
		
		}
	}
}









$(document).ready(function(){
	GenererPreventionAlea();
	$("#validate").click(function() {
		reponsePreventionMessage();
		count ++
	});

	$('.parallax').parallax();
});
