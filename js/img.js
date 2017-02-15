window.onload=function(){
				var botton=document.getElementById("botton");
				var imgs=document.querySelectorAll("img");	
			   var on=true;
			   botton.onclick=function(){
			   			if(!on){
						return;
					}
				var	end
				setInterval( function(){
					for (var i=0;i<imgs.length;i++) {
				          	
				          	(function(i){
				          	imgs[i].style.transition='';
				          	imgs[i].style.opacity=0;
				          	imgs[i].style.transform='rotateY(0deg) translateZ(-'+Math.random()*500+'px)';
				          		setTimeout(function(){
				          			motion(imgs[i],'2s',function(){
				          				this.style.opacity=1;
				          				this.style.transform='rotateY(-360deg) translateZ(0)';
				          			},function(){ 			
				          				this.style.transaction='2s'
				          				this.style.opacity=0;
				          				this.style.transform='rotateY(360deg) translateZ(0)';
				          				
				          			});
				          		},Math.random()*1000);
				          	})(i)
				          }	
				},1000);
						
			}		         
			//运动函数声明
				function motion(obj,time,doFn,callBack){
						obj.style.transition=time;
						doFn.call(obj);
						var called=false;
						obj.addEventListener('transitionend',function(){
							if(!called){
								callBack&&callBack.call(obj);//左边为真返回右边，左边为假返回左边
								called=true;
							}
			
						},false);			
					}
};