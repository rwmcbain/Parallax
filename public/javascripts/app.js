console.log("window has loaded");


function changeColor(){
	var redbox = document.getElementById("boxone");
	redbox.addEventListener("mouseover", function(){
	redbox.style.background = '#9b59b6';
	});
	redbox.addEventListener("mouseleave", function(){
	redbox.style.background = '#e74c3c';
	});
	var orangebox = document.getElementById("boxtwo");
	orangebox.addEventListener("mouseover", function(){
	orangebox.style.background= '#3498db';		
	});
	orangebox.addEventListener("mouseleave", function(){
	orangebox.style.background = '#f39c12';
	});
	var yellowbox = document.getElementById("boxthree");
	yellowbox.addEventListener("mouseover", function(){
	yellowbox.style.background= '#2ecc71';		
	});
	yellowbox.addEventListener("mouseleave", function(){
	yellowbox.style.background = '#f1c40f';
	});
	var greenbox = document.getElementById("boxfour");
	greenbox.addEventListener("mouseover", function(){
	greenbox.style.background= '#f1c40f';		
	});
	greenbox.addEventListener("mouseleave", function(){
	greenbox.style.background = '#2ecc71';
	});
	var bluebox = document.getElementById("boxfive");
	bluebox.addEventListener("mouseover", function(){
	bluebox.style.background= '#f39c12';		
	});
	bluebox.addEventListener("mouseleave", function(){
	bluebox.style.background = '#3498db';
	});
	var purplebox = document.getElementById("boxsix");
	purplebox.addEventListener("mouseover", function(){
	purplebox.style.background= '#e74c3c';		
	});
	purplebox.addEventListener("mouseleave", function(){
	purplebox.style.background = '#9b59b6';
	});
};

changeColor();




