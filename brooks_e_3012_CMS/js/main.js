// JavaScript Doc
(function(){
"use strict";
	var container = document.querySelector("#changingcont");/*where it all changes */
	var swapcont = document.createElement("section");
	var contclicked = document.querySelector("#load");
	var contclicked2 = document.querySelector("#load2");
	var contclicked3 = document.querySelector("#load3");


	var content = [
	{header1: "What Does Golden Games Do?", text1: ["Golden Games is a service that is free to use, however to do offer a subscription service for the more invested users that will not only increase the rate at which you earn, but you earn free games on a regular basis! You earn currency from having a connected STEAM, Battle.Net, or U-Play account, and you can use this currency to buy merch, enter raffles, and buy games for free."]},
	];
	var content2 = [
	{header2: "Positive Testimonials", text2: ["'Golden Games has changed my life! I went from being a casual, to a hardcore gamer! I have been playing more games than I could have ever afforded before!' -Chris Tenall, 2017."], text3: ["'Woah, this service is truly amazing! After a week of just playing games normally, I earned enough currency to buy Undertale on Steam. The subscription service is really worth it.' -Tucker Godders, 2017"], text4: ["'Please stop contacting me, this is the 17th time you have asked me for a quote' -Jesse Godders, 2017"]},
	];
		var content3 = [
	{header3: "Team Members", header4: "Ethan Brooks", text5: ["Golden"], image1: "ethan.png", text6: ["The CEO is a huge fan of video games, and is currently taking the Interactive Media Design course at Fanshawe College to better himself as a person, and improve his skills."]},
	];
	/*I ended up using multiple objects since, when I tried putting all the content in one, it just started stacking it multiple times. After some fiddling I got it actually WORKING like this, hopefully this is alright!*/



	function output1(){
	var instcont = "";
		
	for(var i=0; i<content.length; i++){
		instcont += "<h2>"+content[i].header1+" "+"</h2>"+'<p>'+content[i].text1+" "+"</p>"
		}
		/*oh my god I finally got it working I was missing a plus for an hour kill me*/
	swapcont.innerHTML = instcont;
	container.appendChild(swapcont);
	}

	function output2(){
	var instcont = "";
		
	for(var i=0; i<content2.length; i++){
		instcont += "<h2>"+content2[i].header2+" "+"</h2>"+'<p>'+content2[i].text2+" "+"</p>"+'<p>'+content2[i].text3+" "+"</p>"+'<p>'+content2[i].text4+" "+"</p>"
		}
	swapcont.innerHTML = instcont;
	container.appendChild(swapcont);
	}

	function output3(){
	var instcont = "";
		
	for(var i=0; i<content3.length; i++){
		instcont += "<h2>"+content3[i].header3+" "+"</h2>"+"<h3>"+content3[i].header4+" "+"</h3>"+'<img src="'+content3[i].image1+'" alt="ethan brooks profile shot"><p>'+'<p>'+content3[i].text6+" "+"</p>"
		}
	swapcont.innerHTML = instcont;
	container.appendChild(swapcont);
	}
	
	contclicked.addEventListener("click", output1, false);
	contclicked2.addEventListener("click", output2, false);
	contclicked3.addEventListener("click", output3, false);


})();