var btn = document.getElementById("btn");
var bInfo = document.getElementById("bookInfo");
btn.addEventListener("click", function(){
	var bestSeller = new XMLHttpRequest();

	bestSeller.open("GET", "https://raw.githubusercontent.com/iprabesh/lab1/iprabesh-patch-1/books.txt", true);
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

	for(i = 0; i <bdata.length; i++){
		htmlString += "<p>" + bdata[i].title + "</p>"
		
	}
	bInfo.insertAdjacentHTML('beforeend', htmlString);
}



