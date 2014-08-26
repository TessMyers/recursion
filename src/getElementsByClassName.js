var getElementsByClassName = function(className) {
  var results = [];

  function checkout(element) {
    var children = element.childNodes;

    for(var i = 0; i < children.length; i++) {
      if(typeof children[i].classList != 'undefined' && children[i].classList.contains(className)) {
        results.push(children[i]);
      }
      if(children[i].hasChildNodes) {
        checkout(children[i]);
      }
    }
  }

  checkout(document);
  return results;
};