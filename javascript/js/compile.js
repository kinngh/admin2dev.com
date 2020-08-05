var startupCode = "console.log('Hello, World');"

var former = console.log;
console.log = function(msg) {
  //former(msg);

  var node = document.createElement("li"); // Create a <li> node
  node.appendChild(document.createTextNode(msg)); // Append the text to <li>
  document.getElementById("log").appendChild(node); // Append <li> to <ul> with id="myList"

}

function clearLog() {
  document.getElementById("log").innerHTML = "";
}

var textClr = "";

var display = document.getElementById("display");
var runButton = document.getElementById("runButton");


function runCode() {
  //clearLog();
  var el = document.getElementById('jscontent');
  var scriptText = el.value;
  var oldScript = document.getElementById('scriptContainer');
  var newScript;

  if (oldScript) {
    oldScript.parentNode.removeChild(oldScript);
  }

  newScript = document.createElement('script');
  newScript.id = 'scriptContainer';
  newScript.text = el.value;
  document.body.appendChild(newScript);
}
