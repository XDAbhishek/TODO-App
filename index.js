
function addItem()
{
  var list = document.getElementById('input').value ;
  var text = document.createTextNode(list);
  var newList = document.createElement('li');
  newList.appendChild(text);
  document.getElementById('list').appendChild(newList);
}