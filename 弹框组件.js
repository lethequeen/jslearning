var inputs = document.querySelectorAll('input');
inputs.forEach(function (val, index) {
	inputs[index].onclick =function () {
		box();
		var divbox = document.getElementById('divbox');
		divbox.style.position = "fixed";
		divbox.style.top = "30%";
		divbox.style.left = "40*index"+"%";
		console.log(divbox.style.left);
		console.log(index);
	};
})

function box () {
	var container = document.getElementById('container');
	console.log(container);
	var divbox = document.createElement("div");
	divbox.setAttribute("id","divbox");
	container.appendChild(divbox);
  divbox.innerHTML = '<div class="divtop">'
  +'<button class="bottonright" id="close">×</button>'
  +'</div>'
  +'<p>hello, i am pang pang yun, i am pang pang yun, i am pang pang yun, i am pang pang yun</p>'
  +'<button class="bottonb" id="confirm">确定</button>'
  console.log(divbox);
}