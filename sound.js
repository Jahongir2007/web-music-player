$(document).ready(function(){
	const howler = new Howl({
		src: ['./auf.mp3'],
		volume: 0.5
	});
	$("#play").on("click", function(){
		howler.play();
	});
	$("#pause").on("click", function(){
		howler.pause();
	});
	$("#voladd").on("click", function(){
		var vol = howler.volume();
		vol += 0.1;
		if(vol > 1){
			vol = 1;
		}
		howler.volume(vol);
	});
	$("#volmin").on("click", function(){
		var vol = howler.volume();
		vol -=0.1;
		if(vol < 0){
			vol = 0;
		}
		howler.volume(vol);
	});
});
