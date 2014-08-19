
var stringifyJSON = function(obj) {

  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return '' + obj
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'undefined' || typeof obj === 'function') {
    return '{}'
  } else if ({}.toString.call(obj) === "[object Array]") {
    var stringified = [];
    for (var i = 0; i < obj.length; i++) {
      stringified.push(stringifyJSON(obj[i]));
    }
    return '[' + stringified.join(',') + ']'
  }

  var stringified = [];
  for (key in obj) {
    if (typeof obj[key] != 'undefined' && typeof obj[key] != 'function'){
      var stringKeyValue = stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      stringified.push(stringKeyValue);
    }
  }
   return '{' + stringified.join(',') + '}';
};

// I could probably stand to smooth the flow a bit, especially when handling functions and undefined values.