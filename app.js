console.log('Hello');

var situations = [];

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

var num1 = {
	situation : "situation numéro 1",
	resA : "bonne reponse",
	resB : "mauvaise reponse",
	response : "resA",
	ifResA : "bravo, tu as donné la bonne reponse + message prevention",
	ifResB : "dommage, tu as donné la mauvaise reponse + message prevention",
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