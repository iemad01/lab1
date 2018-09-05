var btn = document.getElementById("btn");
var bInfo = document.getElementById("bookInfo");
btn.addEventListener("click", function(){
	var bestSeller = new XMLHttpRequest();

	bestSeller.open("GET", "https://raw.githubusercontent.com/iprabesh/lab1/c99f505bc699b5569b87a4c8cdd8c38271f9a0bf/books.txt", true);
	bestSeller.onload= function(){
	var bookData = JSON.parse(bestSeller.responseText);
	renderHTML(bookData);
	};
	bestSeller.send();

	btn.classList.add("hide-me");
});

//Function to add on HTML page.

function renderHTML(bdata){
	var htmlString = "";
	var purchaseButton = "Purchase";

	for(i = 0; i <bdata.length; i++){
		htmlString += "<p> Title: " + bdata[i].title + "<br>" + "Isbn: " +bdata[i].isbn +  "<button>" + purchaseButton + "</button>" +"</p>"
		
	}
	bInfo.insertAdjacentHTML('beforeend', htmlString);
}
