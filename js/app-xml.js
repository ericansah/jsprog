let i = 0;
let len;
let cd1;

const xhttp1 = new XMLHttpRequest();
xhttp1.onload = function() {
  const xmlDoc = xhttp1.responseXML;
  cd1 = xmlDoc.getElementsByTagName("CD");
  len = cd1.length;
  displayCD(i);
}
xhttp1.open("GET", "cd_catalog.xml");
xhttp1.send();

function displayCD(i) {
  document.querySelector("#showCD1").innerHTML =
  "Artist: " +
  cd1[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  "<br>Title: " +
  cd1[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  "<br>Year: " + 
  cd1[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}

function next() {
  if (i < len-1) {
    i++;
    displayCD(i);
  }
}

function previous() {
  if (i > 0) {
    i--;
    displayCD(i);
  }
}


