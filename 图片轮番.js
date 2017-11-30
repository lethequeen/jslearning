window.onload=function(){
	var list=document.getElementById("list");
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");

	function animate(offset){
		var newleft=parseInt(list.style.left)+offset;
		list.style.left=newleft+"px";
		if(newleft<-3000){
		        list.style.left=-600+"px";
	    }
			if(newleft>-600){
		        list.style.left=-3000+"px";
			}
	}
    prev.onclick=function(){
		animate(600);
	}
	next.onclick=function(){
		animate(-600);
	}

	//	循环滚动
	var timer;
	function play(){
		timer=setInterval(function(){
			next.onclick();
		},1500);
	}
	play();

	//清除定时器
	var container=document.getElementById('container');
	function stop(){
		clearInterval(timer);
	}
	container.onmouseover=stop;
	container.onmouseout=play;


    //小圆点特效
	var buttons=document.getElementById("buttons").getElementsByTagName('span');
	var index=1;
    function buttonsshow(){
    	for(var i=0;i<buttons.length;i++){
    		if(buttons[i].className=="on"){
    			buttons[i].className=" ";
    		}
    	}
    	buttons[index - 1].className="on";
    }
    prev.onclick=function(){
    	index-=1;
    	if(index<1){
    		index=5;
    	}
    	buttonsshow();
    	animate(600);
    }
    next.onclick=function(){
    	index+=1;
    	if(index>5){
    		index=1;
    	}
    	buttonsshow();
    	animate(-600);
    }
    

    //点击到相应的图片
    for(var i=0;i<buttons.length;i++){
    	(function(i){
	    	buttons[i].onclick=function(){
	    		console.log(i);
	    		var clickIndex=parseInt(this.getAttribute('index'));
	    		var offset=600*(index-clickIndex);
	    		animate(offset);
	    		index=clickIndex;
	    		buttonsshow();
    	    }
        })(i)
    }
}

