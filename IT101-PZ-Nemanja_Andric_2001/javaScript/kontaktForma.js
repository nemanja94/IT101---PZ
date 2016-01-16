//Fukcija proverava svaki unos sa tastature u poljima gde je dozvoljeno unosenje samo slova. Ne dozvoljava unos znakova i belina
function samoSlova(e, t) {
    if (window.event) {
        var charCode = window.event.keyCode;
    }
    else if (e) {
        var charCode = e.which;
    }
    else { 
     	return true; 
    }

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
        return true;
    else {
    	return false;
    }
}

//Fukcija proverava svaki unos sa tastature u poljima gde je dozvoljeno unosenje samo brojeva i znaka +. Ne dozvoljava unos drugih znakova i belina
function samoBrojevi(e, t) {
	if (window.event) {
		var numberCode = window.event.keyCode;
	} else if (e) {
		var numberCode = e.which;
	} else {
		return true;
	}

	if (numberCode >= 48 && numberCode <= 57) {
		return true;
	} else {
		return false;
	}
}