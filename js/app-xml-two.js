{
const xhttp1 = new XMLHttpRequest();
let cd1;
xhttp1.onload = function() {
 const xmlDoc = xhttp1.responseXML; 
 cd1 = xmlDoc.getElementsByTagName("CD");
 loadCD1();
}
xhttp1.open("GET", "cd_catalog.xml");
xhttp1.send();

function loadCD1() {
  let table="<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i < cd1.length; i++) { 
    table += "<tr onclick='displayCD1(" + i + ")'><td>";
    table += cd1[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
    table += "</td><td>";
    table += cd1[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
    table += "</td></tr>";
  }
  document.getElementById("demo-cd").innerHTML = table;
}

function displayCD1(i) {
  document.getElementById("showCD-cd").innerHTML =
  "Artist: " +
  cd1[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  "<br>Title: " +
  cd1[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  "<br>Year: " + 
  cd1[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}
}

