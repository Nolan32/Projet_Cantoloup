console.log('Hello');


var image = {
	reseauSociaux:"res/reseauSociaux",
	cyberharcelement:"res/cyberHarcelement",
	porno:"res/porn",
	arnaques:"res/arnaques",
	radicalisation:"res/radicalisation",
	droitAuteur:"res/droit",
	controlParental:"res/controlParental",
	recherche:"res/recherche",
	hack:"res/hack",
};





function preventionMessage() {
	if ($("#radioBtn input").is(':checked')){
		var test = $("#radioBtn input:checked").val();
		console.log(test);
		if(test === num1.response){
			$("#reponsePrevention").html(num1.ifResA);
		}else{
			$('#reponsePrevention').html(num1.ifResB);
		}
	}else{
		console.log("pas de reponse selectionnée");
	}
	
}





$("#validate").click(function() {
	preventionMessage();
});