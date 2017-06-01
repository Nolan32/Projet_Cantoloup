var count=0;
var Alea = Math.floor(Math.random()*situations.length);

function GenererPreventionAlea(){
	$('#img').append("<img class='responsive-img' src='res/"+situations[Alea].genre+"'>");
	$('#situation').html(situations[Alea].situation);
	$('#resA').html(situations[Alea].resA);
	$('#resB').html(situations[Alea].resB);
}

function CreateButon(){
	$('#CreateButon').append("<button class='btn waves-effect green darken-2 btn_redirect' id='redirection'>En savoir plus...</button>");
	$('#CreateButon').delegate('#redirection','click',function(){
		//window.location.href ='http://www.google.fr';
		if (situations[Alea].genre === "arnaques.png") {
			window.location.href = "https://www.internet-signalement.gouv.fr/PortailWeb/planets/ConseilsJeunes.action";
		}else if (situations[Alea].genre === "controleParental.jpg"){
			window.location.href = "http://www.e-enfance.org/";
		}else if (situations[Alea].genre === "cyberHarcelement.jpg"){
			window.location.href = "http://eduscol.education.fr/internet-responsable/communication-et-vie-privee/sexprimer-et-communiquer-librement/respecter-la-dignite-de-chacun.html";
		}else if (situations[Alea].genre === "droit.png"){
			window.location.href = "https://www.axaprevention.fr/conseils-internet/delinquance-numerique/palmares-des-arnaques-sur-internet";
		}else if (situations[Alea].genre === "hack.jpg"){
			window.location.href = "https://www.ssi.gouv.fr/particulier/precautions-elementaires/dix-regles-de-base/";
		}else if (situations[Alea].genre === "porn.jpeg"){
			window.location.href = "http://www.jeunesetmedias.ch/fr/opportunites-et-risques/risques/pornographie.html";
		}else if (situations[Alea].genre === "radicalisation.png"){
			window.location.href = "http://www.stop-djihadisme.gouv.fr/que-faire/relayer-contre-discours/lutter-contre-propagande-djihadiste-internet";
		}else if (situations[Alea].genre === "recherche.png"){
			window.location.href = "http://www.e-enfance.org/les-risques-sur-internet";
		}else if (situations[Alea].genre === "reseausociaux.jpg"){
			window.location.href = "http://surfez-intelligent.dgmic.culture.gouv.fr/spip.php?rubrique7";
		}
	});
}

function reponsePreventionMessage(){
	console.log(count);
	if ($("#radioBtn input").is(':checked')){
		var test = $("#radioBtn input:checked").val();
		console.log(test);


		if(test === situations[Alea].response){	
			if (situations[Alea].response === "resA") {		
				$("#reponsePrevention").html('<div class="card-panel light-green lighten-2 Panel">'+situations[Alea].ifResA+'</div>');
				if (count===0) {
					setTimeout(CreateButon,1000);
					console.log(count);
					count = 0;
				}
			}else{
				$("#reponsePrevention").html('<div class="card-panel light-green lighten-2 Panel">'+situations[Alea].ifResB+'</div>');
				if (count===0) {
					setTimeout(CreateButon,1000);
					console.log(count);
					count = 0;
				}
			}
		}else{
			if (situations[Alea].response === "resB") {
				$('#reponsePrevention').html('<div class="card-panel red lighten-2 Panel">'+situations[Alea].ifResA+'</div>');
				if (count===0) {
					setTimeout(CreateButon,1000);
					console.log(count);
					count = 0;
				}
			}else{
				$('#reponsePrevention').html('<div class="card-panel red lighten-2 Panel">'+situations[Alea].ifResB+'</div>');
				if (count===0) {
					console.log(count);
					setTimeout(CreateButon,1000);
					count = 0;
				}
			}
		}
	}
}

$(document).ready(function(){
	GenererPreventionAlea();
	$("#radioBtn input").click(function() {
		reponsePreventionMessage();

		// console.log(count);
		count ++;
		// console.log(count);
	});
});

