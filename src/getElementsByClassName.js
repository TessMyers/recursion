
var getElementsByClassName = function(className){
  console.log('begin')
  console.log(document.body)
  var arr = [];
  arr.push(document.body);

  for (var i = 0; i < document.body.childNodes.length; i++) {
    var name = document.body.childNodes[i].className
    if (typeof name != 'undefined' && name.indexOf(className) >= 0) {
      console.log('pushing in new node')
      arr.push(document.body.childNodes[i])
    }
  }

  console.log('is', arr)
  console.log('should be:', document.getElementsByClassName('targetClassName'))
  return arr;
};