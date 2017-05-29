console.log('Hello');

var situations = [];

var num1 = {
	situation : "situation numéro 1",
	resA : "bonne reponse",
	resB : "mauvaise reponse",
	response : "resA",
	ifResA : "bravo, tu as donné la bonne reponse + message prevention",
	ifResB : "dommage, tu as donné la mauvaise reponse + message prevention",
};




function reponsePreventionMessage() {
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
	reponsePreventionMessage();
});