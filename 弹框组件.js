var inputs = document.querySelectorAll('input');
inputs.forEach(function (val, index) {
	inputs[index].onclick =function () {
		createbox();
	  var divboxs = document.querySelectorAll('.divbox');
	  divboxs[index].setAttribute("id","divbox"+index);
	  inputs[index].setAttribute("disabled","disabled");
	  var divtoptext = document.querySelectorAll('.divtoptext');
	  divtoptext[index].innerText = "这是第" + (index+1) + "个弹框";
	};
})

var container = document.getElementById('container');
function createbox () {
	console.log(container);
	var divbox = document.createElement("div");
	divbox.className ="divbox";
	container.appendChild(divbox);
  divbox.innerHTML = '<div class="divtop">'
  +'<div class="divtoptext"></div>'
  +'<button class="bottonright">×</button>'
  +'</div>'
  +'<p>hello, i am pang pang yun, i am pang pang yun, i am pang pang yun, i am pang pang yun</p>'
  +'<button class="bottonb1">取消</button>'
  +'<button class="bottonb2">确定</button>'
  console.log(divbox);
}

//有问题
function close () {
	var bottonrights = document.querySelectorAll('.bottonright');
  bottonrights.forEach(function (val, index) {
  	var divboxs = document.querySelectorAll(".divbox");
  	bottonrights[index].onclick = function () {
  		container.removeChild(divboxs[index]);
  		console.log(container);
  	}
  })
  var bottonb1s = document.querySelectorAll('.bottonb1');
  bottonb1s.forEach(function (val, index) {
  	var divboxs = document.querySelectorAll(".divbox");
  	bottonb1s[index].onclick = function () {
  		container.removeChild(divboxs[index]);
  	}
  })
}
close();

var confirms = document.querySelectorAll('bottonb2');
confirms.forEach(function () {
	confirms.onclick = function () {
		var xml = new XMLHttpRequest();
    xml.open("POST", "http://", true);
    xml.withCredentials = true;
    xml.onreadystatechange = function () {
    	if (xml.readyState == 4 && xml.status == 200) {
    		var text = JSON.parse(xml.responseText);
    		if (text.errorcode ==0) {

    		}else if (text.errorcode == 100) {

    		}
    	}
    }
	};
	xml.send(null);
})