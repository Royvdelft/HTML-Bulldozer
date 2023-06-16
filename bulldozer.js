
var tags = document.getElementsByTagName('*');

for (var i = tags.length - 1; i >= 0; i--) {
  var tag = tags[i];
  tag.parentNode.removeChild(tag);
}


document.body.textContent = '';
