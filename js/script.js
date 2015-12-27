$( document ).ready(function() {
	generate();

  function generate(){
    var quotes =
		[
			"Always have faith. Always have hope.",
			"The key is to make it.",
			"Key to more success is clean heart and clean face.",
			"You smart! You loyal! You’re a genius!",
			"Give thanks to the most high.",
			"The key to more success is coco butter.",
			"There will be road blocks but we will overcome it.",
			"They don’t want you to jet ski.",
			"Them doors that was always closed, I ripped the doors off, took the hinges off. And when I took the hinges off, I put the hinges on the f*ckboys’ hands.",
			"You want my advice? Don’t play yourself.",
			"I can deal with everything. I got the answer for anything. This DJ Khaled."
		];

		randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
		$('.saying').text(randomQuote);
		var audio = new Howl({urls:['anotherOne.mp3']}).play();
  }


$(".button").on( "click", function() {
    generate();
});

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        generate();
    }
};

});
