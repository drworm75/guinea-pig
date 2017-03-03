var pageTitle = document.getElementById("page-title")
var outputDiv = document.getElementById("output-target")
var guineaPig = document.getElementById("guinea-pig")
var inputText = document.getElementById("keypress-input")
// get references to each button
var colorBtn =document.getElementById("add-color")
var hulkBtn =document.getElementById("make-large")
var captureBtn =document.getElementById("add-border")
var roundedBtn =document.getElementById("add-rounding")


document.body.addEventListener("click", whatsThatClick);
pageTitle.addEventListener("mouseover", whatsThatMouseover);
pageTitle.addEventListener("mouseout", whatsThatMouseoff);
inputText.addEventListener("keyup", copyText);

function whatsThatClick(event) {
	if(event.target.className === "article-section") {
		outputDiv.innerHTML = `You have clicked on the ${event.target.textContent} section!`;
	} 	else if(event.target.localName === "button") {
		if (event.target.id ==="add-color") {
			guineaPig.className += "blue-text ";
			colorBtn.removeAttribute("id");
		}	else if(event.target.id === "make-large") {
				guineaPig.className += "hulk-out ";
				hulkBtn.removeAttribute("make-large");
		}	else if(event.target.id === "add-border") {
				guineaPig.className += "capture-this ";
				captureBtn.removeAttribute("add-border");
		}	else if(event.target.id === "add-rounding") {
				guineaPig.className += "round-up ";
				roundedBtn.removeAttribute("make-large");
	}
			



	}
}


function whatsThatMouseover(event) {
		console.log(event);
		outputDiv.innerHTML = `You moved your mouse over the page header!`;
}

function whatsThatMouseoff(event) {
		console.log(event);
		outputDiv.innerHTML = `You left me!`;
}

function copyText(event) {
	outputDiv.innerHTML = inputText.value;

}

function btnPress() {

}