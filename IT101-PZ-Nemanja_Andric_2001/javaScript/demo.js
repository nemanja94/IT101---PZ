function izracunaj() {
	var brRacunara = document.getElementById("brRacunara").value;
	var vrednostRacunara = document.getElementById("cena").value;
    
    if (brRacunara <= 0) {
        window.alert("Broj racunara ne moze ostati prazan, niti biti nula ili negativan broj.\nUneli ste: " + "' " + brRacunara + " '");
    } 

    if (vrednostRacunara <= 0 ) {
        window.alert("Vrednost racunara ne moze ostati prazna, niti biti nula ili negativan broj.\nUneli ste: " + "' "+ vrednostRacunara + " '");
    } else {
        var zbirBezUstede = brRacunara * vrednostRacunara;
        document.getElementById("rezultat").value = "Cena bez nase solucije iznosi: " + zbirBezUstede;
        var zbirSaUstedom = 2500 + (brRacunara * 100);
        document.getElementById("rezultat").value += "\nCena sa nasom solucijom iznosi: " + zbirSaUstedom;
    }
}