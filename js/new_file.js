window.onload=function(){
				var botton=document.getElementById("botton");
				var imgs=document.querySelectorAll("img");		
				 var on=true;
				botton.onclick=function(){						
					if(!on){
						return;
					}
					var endNum=0;
					var allEnd=0;
					for (var i=0; i<imgs.length;i++) {
						//imgs[i].style.transition='1s';
						(function(i){
							setTimeout(function(){
							motion(imgs[i],'10ms',function(){
							  this.style.transform='scale(0)';	
							  		 this.style.opacity='0';
							},function(){
								    motion(this,'1s',function(){
									this.style.transform='scale(1)';
								   	this.style.opacity=0;
									},function(){
										endNum++;
										if(endNum==imgs.length){
											toBig();
										 }
									});				
							});
					},Math.random()*1000);
				  })(i)	    
				}				
			};
			 function toBig(){
				          for (var i=0;i<imgs.length;i++) {
				          	imgs[i].style.transition='';
				          	imgs[i].style.transform='rotateY(0deg) translateZ(-'+Math.random()*500+'px)';
				          	(function(i){
				          		setTimeout(function(){
				          			motion(imgs[i],'2s',function(){
				          				this.style.opacity=1;
				          				this.style.transform='rotateY(-360deg) translateZ(0)';
				          			},function(){
				          				allEnd++;
				          				if(allEnd==imgs.length){
				          					on=true;
				          				}
				          			});
				          		},Math.random()*1000);
				          	})(i)
				          }
			           };
			//运动函数声明
				function motion(obj,time,doFn,callBack){
						obj.style.transition=time;
						doFn.call(obj);
						var called=false;
						obj.addEventListener('transitioned',function(){
							if(!called){
								callBack&&callBack.call(obj);//左边为真返回右边，左边为假返回左边
								called=true;
							}
			
						},false);			
					}
};