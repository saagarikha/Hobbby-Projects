	var imgar=["Drawable/banana.png","Drawable/red_apple.png","Drawable/apple.png","Drawable/watermelon.png","Drawable/trouble.jpg","Drawable/guava.png"];
	    var c,k=0,clicked=0,score=0,lost=0;
		var count=120;var counter;
		var bool=false;
		window.onload=function(){
			//alert("heyy");
			setInterval(timer,5000);			
			counter=setInterval(timer1, 1000); //1000 will  run it every 1 second
			}
		function timer1()
			{
			  count=count-1;
			  if (count <= 0)
			  {
			     clearInterval(counter);
			     var timeup=document.getElementsByClassName("finish");
			     timeup[0].style.display = "block";
			document.getElementById('random').style.display="none";
          	document.getElementById('random1').style.display="none";
          	document.getElementById('random2').style.display="none";
          	document.getElementById('timer').style.display="none";
          	document.getElementById('container').style.display="none";
          	document.getElementById('end').innerHTML="GameOver you Scored "+score;
          	
          	document.getElementById('end').style.display="block";
			     return;
			  }
			  if(count>59)
			  {
			   	var div=Math.floor(count/60);
			  	document.getElementById("timer").innerHTML= div+" mins"+ count%60 + " secs";
			  }
			  else
			  	document.getElementById("timer").innerHTML=count+ "secs";
			  //Do code for showing the number of seconds here
			}
		function timer()
		{
			var id1=Math.floor(Math.random()*4);
			var contain=document.getElementById('random');
  		 var id=document.getElementById('random').getElementsByTagName('img');				
			if(id.length>clicked)
				lost+=id.length-clicked;
			else if(clicked==0)
				lost+=id.length;
			document.getElementById('random').innerHTML="";
			k=0;
			while(id1!=-1)
			{
				var img=document.createElement("img");
				var num=Math.floor(Math.random()*imgar.length);
			    img.src=imgar[num];//var name="node"+k;
				img.id="node"+k;
				k++;
				clicked=0;
				contain.appendChild(img);
			 for (var i =0; i < id.length; i++) {
             id[i].onmouseover=function(){
               var img=this.src;
               this.style.display="none";
               score+=5;
               console.log(img);
               if(img=="/Users/sasrinivasan/Desktop/SagsGithub/Hobbby-Projects/FruitNinja/Drawable/trouble.jpg")
              	{lost=3;
              		score-=5;
               		console.log("entered");
               	}
               bool=true;
               clicked++;
               document.getElementById('random1').style.background="url("+img+")";           
               document.getElementById('random2').style.background="url("+img+")";           
             }
           }
           	id1--;
		if(lost>=3)
          {
           	document.getElementById('random').style.display="none";
          	document.getElementById('random1').style.display="none";
          	document.getElementById('random2').style.display="none";
          	document.getElementById('timer').style.display="none";
          	document.getElementById('container').style.display="none";
          	document.getElementById('end').innerHTML="GameOVer you Scored "+score;
          	document.getElementById('end').style.display="block";
           }		
		}
		if(lost<3)
	   document.getElementById('random').style.display="block";
 	}	