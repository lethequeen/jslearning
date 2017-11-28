var text = document.getElementById('inputtext');
var submit = document.getElementById('submit');
var box = document.getElementById('box');

//按钮操作
submit.onclick = function () {
  addtask();
  del();
  done();
  localStorage.setItem("boxs", box.innerHTML);
  text.value = "";
}


function addtask() {
	var div1 = document.createElement("div");
	div1.style.width = "500px";
	div1.style.height = "20px";
  div1.className = "delbox";
	box.appendChild(div1);
	var div2 = document.createElement("div");
  div2.innerText = text.value;
  div2.className = "div2";
  div2.style.color = "red";
  div2.style.fontSize = "8px";
  div2.style.float = "left";
  div1.appendChild(div2);
  var input2 = document.createElement("input");
	input2.style.width = "30px";
	input2.style.height = "15px";
	input2.style.float = "left";
  input2.style.backgroundColor = "red";
  input2.style.marginLeft = "10px";
  input2.style.color = "white";
	input2.type = "submit";
	input2.value = "del";
	input2.style.fontSize = "5px";
	input2.className = "del";
	div1.appendChild(input2);
  console.log(box);
}

//完成操作
function done() {
  var donetext = document.querySelectorAll('.div2');
  donetext.forEach(function(val, index) {
    donetext[index].onclick = function() {
      donetext[index].style.color = "#fff";
      localStorage.setItem("boxs", box.innerHTML);
    }
  })
}


//删除操作
function del () {
  var delSubmit = document.querySelectorAll('.del');
  var delbox = document.querySelectorAll('.delbox');
  delSubmit.forEach(function (val, index) {
      delSubmit[index].onclick = function () {
        box.removeChild(delbox[index]);
        localStorage.setItem("boxs", box.innerHTML);
      }
  })
}

//使用localStorage本地存储

  box.innerHTML = localStorage.boxs;
  del();
  done();



