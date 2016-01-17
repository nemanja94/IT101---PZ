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

function samoBrojevi() {

	var brojTelefona = document.getElementById("broj").value;
	var brojac = 0;

	for(var i = 0; i <  brojTelefona.length; i++){
        if(brojTelefona.charAt(0) === "+" && !isNaN(brojTelefona.charAt(i)) && brojTelefona.length >= 7){
            brojac++;
        } 
    }

    if(brojac <  brojTelefona.length - 1 || brojTelefona == ""){
        alert("Niste pravilno uneli broj telefona!\nFormat telefona treba da izgleda:\n+3816xxxxxxxx\nUneli ste: " + brojTelefona);
        return false;
    } else {
    	alert("Broj je ispravan :D");
        return true;
    }
}

function provera() {
    if (samoBrojevi()) {
        alert("Uspesno ste poslali poruku");
    } else {
        alert("Niste dobro popunili");
    }
}