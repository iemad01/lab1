	//Date and Time
    var d = new Date();
	document.write(d.toLocaleString().fontcolor("DarkRed")); 
	
	
	//Countdown
	var countDownDate = new Date("September 9, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = "<span style='color:#ff0000'>now</span>";
  now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="book-reviews"

  document.getElementById("book-reviews").innerHTML= days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("book-reviews").innerHTML = "EXPIRED";
  }
}, 1000);

//Enlarge icon on mouseover then return to normal on mouseout
function bigImg(x){
    x.style.fontSize = "200px";
}
function normalImg(x){
    x.style.fontSize = "100px";
}