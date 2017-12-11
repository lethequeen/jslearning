function TodoItem(value, status) {
  this.value = value;
  this.status = status;
}

TodoItem.prototype.del = function() {
  localStorage
}
TodoItem.prototype.changeStatus = function(){
  //如果是未完成，状态变成已完成
  //如果是已完成，变成未完成
}
TodoItem.prototype.render = function() {
  var button = document.createELement('button');
  button.onclick = this.del();
  var changeBt = ;
  changeBt.onclick = this.changeStatus();
}

var items = localStorage.items ? [] : ;

onclick = function() {
  var item = new TodoItem(input.value, 'undo');
  items.push(item);
}

items.forEach(function(ele) {
  ele.render();
});

localStorage.items = items;