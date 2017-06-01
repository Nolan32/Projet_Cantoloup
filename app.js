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
		window.location.href = situations[Alea].redirect;
	});
}

function reponsePreventionMessage(){
	if ($("#radioBtn input").is(':checked')){
		var test = $("#radioBtn input:checked").val();
		console.log(test);

		if(test === situations[Alea].response){	
			if (situations[Alea].response === "resA") {		
				$("#reponsePrevention").html('<div class="card-panel light-green lighten-2 Panel">'+situations[Alea].ifResA+'</div>');
				if (count===0) {
					setTimeout(CreateButon,1000);
					count = 0;
				}
			}else{
				$("#reponsePrevention").html('<div class="card-panel light-green lighten-2 Panel">'+situations[Alea].ifResB+'</div>');
				if (count===0) {
					setTimeout(CreateButon,1000);
					count = 0;
				}
			}
		}else{
			if (situations[Alea].response === "resB") {
				$('#reponsePrevention').html('<div class="card-panel red lighten-2 Panel">'+situations[Alea].ifResA+'</div>');
				if (count===0) {
					setTimeout(CreateButon,1000);
					count = 0;
				}
			}else{
				$('#reponsePrevention').html('<div class="card-panel red lighten-2 Panel">'+situations[Alea].ifResB+'</div>');
				if (count===0) {
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
		count ++;
	});

	$('.carousel').carousel();
	$('.carousel').carousel('next');
	$('.carousel').carousel('next', 3); // Move next n times.
	// Previous slide
	$('.carousel').carousel('prev');
	$('.carousel').carousel('prev', 4); // Move prev n times.
	$('.carousel').carousel('set', 4);
});

