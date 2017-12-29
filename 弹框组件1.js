var container = document.getElementById('container');
var inputs = document.querySelectorAll('input');
inputs[0].onclick = function () {
	var id0 = divbox0;
	var urlitem0 = "http://000";
	var divtoptext0 = "这是第一个弹框";
	var divtext0 = "这是第一个弹框的内容，这是第一个弹框的内容";
	var input1 = new AlertTtem(id0, urlitem0, divtoptext0, divtext0);
}
inputs[1].onclick = function () {
	var id1 = divbox0;
	var urlitem1 = "http://111";
	var divtoptext1 = "这是第二个弹框";
	var divtext1 = "这是第二个弹框的内容，这是第二个弹框的内容";
	var input2 = new AlertTtem(id1, urlitem1, divtoptext1, divtext1);
}
inputs[2].onclick = function () {
	var id2 = divbox0;
	var urlitem2 = "http://222";
	var divtoptext2 = "这是第三个弹框";
	var divtext2 = "这是第三个弹框的内容，这是第三个弹框的内容"
	var input3 = new AlertTtem(id2, urlitem2, divtoptext2, divtext2);
}

function AlertTtem (id, urlitem, divtoptext, divtext) {
	this.id = id;
	this.urlitem = urlitem;
	this.divtoptext = divtoptext；
	this.divtext = divtext;
}

AlertTtem.prototype.createbox = function () {
	var divbox = document.createElement("div");
	divbox.className = "divbox";
	container.appendChild(divbox);
  divbox.innerHTML = '<div class="divtop">'
  +'<div class="divtoptext"></div>'
  +'<button class="bottonright">×</button>'
  +'</div>'
  +'<p></p>'
  +'<button class="bottonb1">取消</button>'
  +'<button class="bottonb2">确定</button>'
}

AlertTtem.prototype.addcontent = function () {
	var 
}

AlertTtem.prototype.confirm = function () {
	var confirms = document.querySelectorAll('bottonb2');
	confirms.forEach(function (val, index) {
		confirm[index].onclick = functiion () {
			var xml = new XMLHttpRequest();
			xml.open("POST", this.urlitem, true);
			xml.withCredentials = true;
			xml.onreadystatechange = function () {
				if (xml.readyState == 4 && xml.status == 200) {
          var text = TSON.parse(xml.responseText);
					if (text.errorcode == 0) {
						window.location.href = "http://";
					}else if (text.errorcode == 100) {
						alert("错啦");
					}else if (text.errorcode == 101) {
						alert("sorry");
					}
				}
			}
		}
	})
}

AlertTtem.prototype.close = function () {
	var bottonrights = document.querySelectorAll('.bottonright');
	console.log(bottonrights);
  bottonrights.forEach(function (val, index) {
  	var divboxs = document.querySelectorAll(".divbox");
  	bottonrights[index].onclick = function () {
  		container.removeChild(divboxs[index]);
  		console.log(container);
  		inputs[index].removeAttribute("disabled");
  	}
  })
  var bottonb1s = document.querySelectorAll('.bottonb1');
  console.log(bottonb1s);
  bottonb1s.forEach(function (val, index) {
  	var divboxs = document.querySelectorAll(".divbox");
  	bottonb1s[index].onclick = function () {
  		container.removeChild(divboxs[index]);
  		inputs[index].removeAttribute("disabled");
  	}
  })
}