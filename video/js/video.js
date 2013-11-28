var player={};

player.video=document.getElementById('video');
player.button=document.getElementById('button');
player.span1=document.getElementById('pause1');
player.span2=document.getElementById('pause2');
player.span3=document.getElementById('play');
player.video.load();


player.playPause = function () {
	player.button.classList.remove('loading');
	if(player.video.paused){
		player.video.play();
		player.video.classList.add('play');
		player.span1.classList.remove('remove');
		player.span2.classList.remove('remove');
		player.span3.classList.add('remove');
	}
	else{
		player.video.pause();
		player.span1.classList.add('remove');
		player.span2.classList.add('remove');
		player.span3.classList.remove('remove');
	}
}

player.updateProgress = function () {
	var progressW=this.currentTime*100/this.duration;
	document.querySelector('.progress').style.width=progressW+'%';
	
	var bufferW=this.buffered.end(0)*100/this.duration;
	document.querySelector('.buffer').style.width=bufferW+'%';
}

player.setTime = function (e) {
	//this==e.currentTarget
	player.video.currentTime=e.offsetX*player.video.duration/this.offsetWidth;
}


player.video.addEventListener('canplaythrough',player.playPause,false);
player.video.addEventListener('click',player.playPause,false);
player.button.addEventListener('click',player.playPause,false);
player.video.addEventListener('timeupdate',player.updateProgress,false);
document.getElementById('progressBar').addEventListener('click',player.setTime,false);
















