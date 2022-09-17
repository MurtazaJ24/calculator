
var dec = false;

function back() {
	if (document.getElementById("display").value.length == 1) {
		document.getElementById("display").value = 0;
	}
	else {
		document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);
	}

}
function num(n) {
	if (document.getElementById("display").value == 0) {
		document.getElementById("display").value = n;
	}
	else {
		document.getElementById("display").value += n;
	}
	blur();
}
function sqrt() {
	document.getElementById("display").value = Math.sqrt(document.getElementById("display").value);
}
function dot(){
    if(!dec){
    document.getElementById("display").value += ".";
    dec = true;
    }
} 
function dotchange(){
    dec= false;
}

function myFunction() {
	document.getElementById('arrow').classList.toggle('open');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.themes')) {

		var arrow = document.getElementById('arrow');
			if (arrow.classList.contains('open')) {
				arrow.classList.remove('open');
			}
		
	}
	
}

 document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
	if(!e.shiftKey && !e.crtlKey && !e.altKey) {
		if (e.keyCode == 49) {num(1)}
		if (e.keyCode == 50) {num(2)}
		if (e.keyCode == 51) {num(3)}
		if (e.keyCode == 52) {num(4)}
		if (e.keyCode == 53) {num(5)}
		if (e.keyCode == 54) {num(6)}
		if (e.keyCode == 55) {num(7)}
		if (e.keyCode == 56)  {num(8)}
		if (e.keyCode == 57) {num(9)}
		if (e.keyCode == 48) {num(0)}
		if (e.keyCode == 8) {back()}
		if (e.keyCode == 190) {dot()}    
		if (e.keyCode == 187 || e.keyCode == 13){
			var r = eval(document.getElementById("display").value);
            //alert(r); 
			document.getElementById("display").value  = r;
			}
		if (e.keyCode == 189){document.getElementById("display").value += "-";}
		if (e.keyCode == 191){document.getElementById("display").value += "/";}
		if (e.keyCode == 46){document.getElementById("display").value = 0 ;}
	}

	if (e.keyCode == 56 && e.shiftKey ){document.getElementById("display").value += "*";}
	if (e.keyCode == 187 && e.shiftKey ){document.getElementById("display").value += "+";}
	if (e.keyCode == 57 && e.shiftKey ){num('(');}
	if (e.keyCode == 48 && e.shiftKey ){num(')');}
}



