window.onload = function(){
	var box= document.querySelector(".box");
	var begin = document.querySelector(".lottory-begin");
	var barP = document.querySelectorAll(".lottory-bar-p");
	var photo = document.querySelector(".lottory-photo");
	var barSec = document.querySelector(".lottory-bar-sec");
	var begin = document.querySelector(".lottory-begin");
	var container = document.querySelector("#container");
	var stop= document.querySelector(".container-stop");
	var selecy= document.querySelector(".selecy");
	var num = document.querySelector("#number");
	var num2 = document.querySelector("#num");
	var titleUls = document.querySelector(".lottory-title-uls");
	var model= document.querySelector("#modal");
	var modelImg = document.querySelector(".modal-stop")
	var modeUls = document.querySelector(".modal-uls")
	var modalSec = document.querySelector("#modal-content") 
	var arrPrize = [{"sec":"<img src='img/GZG.jpg'/><p>手表</p>","award":"特等奖"},
					{"sec":"<img src='img/YR5.jpg'/><p>抓紧</p>","award":"一等奖"},
					{"sec":"<img src='img/GZG.jpg'/><p>那好</p>","award":"二等奖"},
					{"sec":"<img src='img/YR5.jpg'/><p>车</p>","award":"三等奖"},
					{"sec":"<img src='img/GZG.jpg'/><p>名字</p>","award":"四等奖"},
					];
	var arrPeople = [
		{"id": "49202",
         "image": "http://wx.qlogo.cn/mmopen/z5fib42HeO0icccmq8d1YiaKypcIJ5ne8ibNAfp4v5byTia7RRKTduwg2wHOapHOFYEiaJ9rPlJdxg1lW4VaMON3wZn5rOVDiaiaVeSq/132",
         "name": "金皓轩®"},
		{"id": "49211",
          "image": "http://wx.qlogo.cn/mmopen/pa8GnxicEgJexicKxVrWQicnn2tHuB7bu6K86jl9hkz799xROoedUlwhXzhiaZcLca59ibZmhjYmiaaXCBpEtNV5NBiciajA9uC8x2cF/132",
           "name": "新媒体策划·志祥"},
		{"id": "49214",
         "image": "http://wx.qlogo.cn/mmopen/Q3auHgzwzM46hjPkDrWvroHEf1l3iaxfqic5RSlD7YJ0zSWY2Hq9IvN5ibOSewmiaY9wkwmlf7DDdzFQHxI4ZFo0VyatjoOww6Qr7s9h64CW72s/132",
         "name": "Jessie"},
		{"id": "49223",
        "image": "http://wx.qlogo.cn/mmopen/QGtk4wsI7JgaTO5HsqYNuOgutdeib30Cyvh33p663pSDOuSk0CRziakBUlsMQic8KNI6LcicbibLJwicibOru581K9IgE6ouuFrMsQB/132",
         "name": "薇薇林"},
        {"id": "49224",
        "image": "http://wx.qlogo.cn/mmopen/XTqibbjlzeZ9XibiaYibcnib9hrHy9YibyB1tECVylAEaEJ5lxpvrabddiak4THUiaHt2kZHyyWLoXEicxdUphQrCgvg4LdHkeoqrtoUU/132",
        "name": "ivy－康晶瑶"},
        {"id": "49483",
        "image": "http://wx.qlogo.cn/mmopen/QPI6TXncK1SUw0mJ3NxUibbqplolMRj3ibiaLIp0rh6tZVe5YJYFVHOJ89NF8q2lib8ZpBK5G7bJqgopVkic4nV6JKt5K23FtUMzia/132",
       	"name": "谷米谷米"},
       	{"id": "50949",
        "image": "http://wx.qlogo.cn/mmopen/Q3auHgzwzM5HgDv92YuPT6ib79HdDU1LSQ2UsgjFAxu517wk56pKurgAhGXsmciaxTgAfI2TQyy9ux07iau0wBbgpIuvOpZONibmyLTiamgWw0UU/132",
        "name": "企动微信营销客服"},
        {"id": "50951",
        "image": "http://wx.qlogo.cn/mmopen/N4HWkmwbSVQe4icluicLNalomkryrreJMCotibiaiasaPBBWIpWWSL7ib9GG8yldzlvpO5PQIBl56NBNrTfA9fA3M2XQ/132",
        "name": "琉璃年华(´-ωก`)"},
        {"id": "55305",
        "image": "http://wx.qlogo.cn/mmopen/pa8GnxicEgJd30Ng6c1KBFg0hECPDqHia8pRXZN87PUYFJaHcJhVlPdP9tKDpnAYbNdgg7Bl75phS0Exticfnf7Qw/132",
        "name": "十一"},
        {"id": "55339",
        "image": "http://wx.qlogo.cn/mmopen/QGtk4wsI7JjZhia9vojnSHPgRHOpKytTQN8SItFsib1nvkU5IflHZtUl6nfpku0tfydicmWwGKvoKf2372UHGe6ucqjniaz39hq4/132",
        "name": "雅包包"}]
	var arrTitle =[];
	var arrP =[];
	var arrti = [];
	var myVar;
	var arr = [];
	
	
	var optArr = new Array;
	var titleV = -1 , titleP = [];
	for (var i = 0; i <arrPrize.length; i++) {
		optArr[i] = 0;
	}
	
	for (var i = 0;i<personArray.length;i++) {
		arr.push(personArray[i])
	}
	num2.innerHTML = arr.length;
	photo.innerHTML = arrPrize[0].sec;
	barSec.innerHTML = arrPrize[0].award;
	barP[0].onclick = function(){
		console.log()
		var n;
		barP[1].style.opacity = "1";
		for (var  i = 0 ;i<arrPrize.length; i++) {
			if(barSec.innerHTML== arrPrize[i].award){
				titleV=i;n = i;
			}
		}
		if(n > 0){
			barSec.innerHTML = arrPrize[n-1].award;
			photo.innerHTML = arrPrize[n-1].sec;
			titleUls.innerHTML = "";
			titleP.length = 0;
			num.innerHTML = 0;
			if (titleV > 0) {
				for (var j = 0;j<optArr[titleV-1].length;j++) {
					console.log(optArr[titleV-1][j])
					titleUls.appendChild(optArr[titleV-1][j]);
				}
			}
		}
		if (n==1) {
			this.style.opacity = "0.45";
		}
	}
	barP[1].onclick = function(){
		var n ;
		barP[0].style.opacity = "1";
		for (var  i = 0 ;i<arrPrize.length; i++) {
			if(barSec.innerHTML == arrPrize[i].award){
				titleV=i;n = i;
			}
		}
		if (n<arrPrize.length-1) {
			barSec.innerHTML = arrPrize[n+1].award;
			photo.innerHTML = arrPrize[n+1].sec;
			titleUls.innerHTML = " ";
			titleP.length = 0;
			num.innerHTML = 0;
			if (titleV<optArr.length) {
				for (var j = 0;j<optArr[titleV+1].length;j++) {
					titleUls.appendChild(optArr[titleV+1][j]);
				}
			}
		}
		if (n == arrPrize.length-2) {
			this.style.opacity = "0.45";
		}
	}
	//点击开始抽奖
	init();
	animate();
	transform( targets.grid, 50, 'grid', 20000);
	begin.onclick = function(){
			titleP.length=0;
			console.log(optArr)
			if( Number(selecy.value)<= Number(num.innerHTML)){
				fn()
				layer.innerHTML = "当前奖项已经抽完"
			}
			if( Number(selecy.value)> Number(num.innerHTML)){
				box.style.display = "none";
				container.style.display = "block";
				getArrayItems(personArray, selecy.value)
			}
			setTimeout(function(){
				stop.style.display = "block";
			},1000)
	}
	//点击停止抽奖
	stop.onclick = function(){
		arrP.splice(0,arrP.length);
		arrti.splice(0,arrti.length);
		container.style.display = "none";
		stop.style.display = "none";
		box.style.display = "block";
		for (var i = 0;i<arrTitle.length;i++) {
			var li = document.createElement("li");
			var div1 = document.createElement("div");
			var div2 = document.createElement("span");
			var p = document.createElement("p");
			var img = document.createElement("img");
			img.src = arrTitle[i].image;
			div1.className = "delete";
			div2.className = "lottory-img";
			p.innerHTML = arrTitle[i].name;
			div2.appendChild(img);
			li.appendChild(div1);
			li.appendChild(div2);
			li.appendChild(p);
			arrti.push(li)

			
			var lis = document.createElement("li");
			var em = document.createElement("em");
			var span = document.createElement("span");
			var imgs = document.createElement("img");
			imgs.src = arrTitle[i].image;
			lis.className = "modal-li";
			lis.appendChild(em);
			lis.appendChild(imgs);
			lis.appendChild(span);
			arrP.push(lis)
		}
		setTimeout(function(){
				modal.style.display = "block";
				modalSec.className= "time";
				modeUls.appendChild(arrP[0]);
					
				setTimeout(function() {
					modalSec.className = "";
					modal.className = "times";
					setTimeout(function(){
						modal.className = "modal";
						modal.style.display = "none";
						modalSec.className= "";
						titleUls.insertBefore(arrti[0],titleUls.children[0]);
						num.innerHTML = titleUls.children.length;
						modeUls.innerHTML= "";
						title(n)
					},1000)
				},4000);
				var n =1;
				myVar = setInterval(function(){ 
					if(n < arrTitle.length){
						
						modal.style.display = "block";
						modalSec.className= "time";
						modeUls.appendChild(arrP[n]);
								
						setTimeout(function() {
							modalSec.className = "";
							modal.className = "times";
							setTimeout(function(){
								modal.className = "modal";
								modal.style.display = "none";
								modalSec.className= "";
								titleUls.insertBefore(arrti[n-1],titleUls.children[0]);
								num.innerHTML = titleUls.children.length;
								modeUls.innerHTML= "";
								title(n)
							},1000)
						},4000);
					} else{
						clearInterval(myVar);
//						n=0;
					}
					n++;
				}, 6000);
		},80)
	}
	function title(num){
		if(num == Number(selecy.value)) {
			for (var i = 0;i<titleUls.children.length;i++) {
				titleP.push(titleUls.children[i])
			}
			var a = [];
			for( var i=0;i<titleP.length;i++ ){
					a.push( titleP[i] );
			}
			console.log(num,titleV+1)
			optArr[titleV+1] = a;
		}
	}
	
	//删除幸运名单的人员
	titleUls.onclick = function(){
		var ev = ev || window.event;
		var target = ev.target || ev.srcElement;
		if(target.nodeName.toLowerCase() == "div"){
			console.log(target)
			target.parentNode.parentNode.removeChild(target.parentNode);
			num.innerHTML = titleUls.children.length;
		}
	}
	//关闭模态框
	modelImg.onclick = function(){
		modal.style.display = 'none'
	}
		
	//抽奖随机函数
	function getArrayItems(arr, num) {
	    var arr1 = [];
	    for (var index in arr) {
	        arr1.push(arr[index]);
	    }
	    for (var i = 0; i<num; i++) {
	        if (arr1.length>0) {
	            var arrIndex = Math.floor(Math.random()*arr1.length);
	            arrTitle[i] = arr1[arrIndex];
	            arr1.splice(arrIndex, 1);
	            arr.splice(arrIndex,1);
				num2.innerHTML = arr.length;
	        } else {
	            break;
	        }
	    }
	    return arrTitle;
	}
	//弹出消息框
	function fn(){
		var layer=document.createElement("p");
		layer.id ="layer";
		layer.className= "div";
	    if(document.getElementById("layer")==null){
	        document.body.appendChild(layer);
	        setTimeout("document.body.removeChild(layer)",2000)
	    }
	}
}
