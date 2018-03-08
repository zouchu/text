window.onload = function() {
	var tagid = document.querySelector("#tagid");
	var tagnum = document.querySelector("#tagnum");
	var Num = document.querySelector("#num");

	var btnBegin = document.querySelector(".user-btn-begin");
	var btnStop = document.querySelector(".user-btn-stop");

	var leftRun = document.querySelector("#lottory-left-run");
	var hand = document.querySelector("#user-hand");
	var anew = document.querySelector(".user-anew");
	var hand2 = document.querySelector(".hand");
	var hand3 = document.querySelector("#hand3");
	var userUls = document.querySelector(".user-uls");
	
	var tarNum = [];
	var myTime;
	var arr = [];
	for(var i = 0; i < arrId.length; i++) {
		var opt = document.createElement("option");
		opt.value = i;
		opt.innerHTML = arrId[i]
		tagid.appendChild(opt)
	}
	for(var i = 0; i < personArray.length; i++) {
		arr.push(personArray[i])
	}
	Num.innerHTML = arr.length;
	if(arr.length > 0) {
		btnBegin.addEventListener("click", function() {
			optR.splice(0, optR.length);
			tarNum.splice(0, tarNum.length);
			if(Number(tagid.value) < 0) {
				fn()
				var layer = document.querySelector("#layer");
				layer.innerHTML = "请选择奖项";
			} else {
				getArrayItems(arr, Number(tagnum.value));
				this.style.display = "none";
				leftRun.className = "move";
				setTimeout(function() {
					btnStop.style.display = "block";
				}, 2000)
			}
		})
	} else {
		fn()
		var layer = document.querySelector("#layer");
		layer.innerHTML = "人员不足";
	}

	btnStop.onclick = function() {
		var n = 1;
		let target = Number(tagnum.value)
		if(Number(tagnum.value) > 0) {
			btnStop.style.display = "none";
			leftRun.className = "";
			hand.className = "moves";
			setTimeout(function() {
				var span = document.createElement("span");
				var img = document.createElement("img");
				span.className = "name";
				img.src = tarNum[0].image;
				span.innerHTML = tarNum[0].name;
				hand3.appendChild(img);
				hand3.appendChild(span);
				hand.className = "moving";
				setTimeout(function() {
					clear(n)
					hand3.className = "hand3";
					setTimeout(function() {
						var lusky = document.querySelector(".user-lusky");
						lusky.children[0].src = tarNum[n - 1].image;
						lusky.children[1].innerHTML = tarNum[n - 1].name;
						fn2(n);
					}, 2000)
				}, 2000)
			}, 2500);
			myTime = setInterval(function() {
				n++;
				if(n <= Number(tagnum.value)) {
					leftRun.className = "";
					hand.className = "moves";
					setTimeout(function() {
						var span = document.createElement("span");
						var img = document.createElement("img");
						span.className = "name";
						img.src = tarNum[n - 1].image;
						span.innerHTML = tarNum[n - 1].name;
						hand3.appendChild(img);
						hand3.appendChild(span);
						hand.className = "moving";
						setTimeout(function() {
							clear(n);
							hand3.className = "hand3";
							setTimeout(function() {
								var lusky = document.querySelectorAll(".user-lusky");
								lusky[0].children[0].src = tarNum[n - 1].image;
								lusky[0].children[1].innerHTML = tarNum[n - 1].name;
								fn2(n);
							}, 2000)
						}, 2000)
					}, 2500);
				} else {
					clearInterval(myTime);
				}
			}, 6800)
		}
	}
	anew.onclick = function() {
		hand.className = ""
	}

	function fn2(n) {
		hand.className = "";
		hand3.className = "";
		hand3.innerHTML = "";
		if(n == Number(tagnum.value)) {
			btnBegin.style.display = "block";
			for (var i = 0;i<userUls.children.length;i++) {
				optR.push(userUls.children[i])
			}
			var a = [];
			for( var i=0;i<optR.length;i++ ){
					a.push( optR[i] );
			}
			optArr[optV] = a;
		}
	}

	function clear(num) {
		var div2 = document.createElement("div");
		var span = document.createElement("span");
		var img = document.createElement("img");
		div2.className = "user-lusky";
		div2.appendChild(img);
		div2.appendChild(span)
		var li = document.createElement("li");
		var div1 = document.createElement("div");
		var em = document.createElement("em");
		div1.className = "user-serial";
		em.className = "em"
		div1.innerHTML = 1;
		li.appendChild(div1);
		li.appendChild(div2);
		li.appendChild(em);
		userUls.insertBefore(li, userUls.children[0]);
		
		for(var i = 1; i < userUls.children.length; i++) {
			let serial = userUls.children[i];
			serial.childNodes[0].innerHTML = Number(serial.childNodes[0].innerHTML) + 1;
		}
	}

	function getArrayItems(a, num) {
		var arr1 = [];
		for(var index in a) {
			arr1.push(arr[index]);
		}
		for(var i = 0; i < num; i++) {
			if(arr1.length > 0) {
				var arrIndex = Math.floor(Math.random() * arr1.length);
				tarNum[i] = arr1[arrIndex];
				arr1.splice(arrIndex, 1);
				arr.splice(arrIndex, 1);
				Num.innerHTML = arr.length;
			} else {
				break;
			}
		}
		return tarNum;
	}
	//弹出消息框
	function fn() {
		var layer = document.createElement("p");
		layer.id = "layer";
		layer.className = "div";
		if(document.getElementById("layer") == null) {
			document.body.appendChild(layer);
			setTimeout("document.body.removeChild(layer)", 2000)
		}
	}
	//删除中奖名单的人员
	userUls.onclick = function(ev) {
		var ev = ev || window.event;
		var target = ev.target || ev.srcElement;
		if(target.nodeName.toLowerCase() == "em") {
			var lis = target.parentNode.parentNode.children;
			var index;
			for(var i = 0; i < lis.length; i++) {
				if(lis[i] === target.parentNode) {
					index = i;
				}
			}
			for(var j = index; j < lis.length; j++) {
				let serial = userUls.children[j];
				serial.children[0].innerHTML = Number(serial.children[0].innerHTML) - 1;
			}
			target.parentNode.parentNode.removeChild(target.parentNode);
		}
	}
}