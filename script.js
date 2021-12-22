const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  const xmlDoc = xhttp.responseXML; 
  const cd = xmlDoc.getElementsByTagName('CD');
  loadCD(cd);
};
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();

function loadCD(cd) {
  let table = '<tr><th>Artist</th><th>Title</th></tr>';

  for (let i = 0; i < cd.length; i++) {
    const artist = cd[i].getElementsByTagName('ARTIST')[0].childNodes[0].nodeValue;
    const title = cd[i].getElementsByTagName('TITLE')[0].childNodes[0].nodeValue;
    const year = cd[i].getElementsByTagName('YEAR')[0].childNodes[0].nodeValue;
    const artistHTML = artist.replace(/'/g, '&rsquo;');

    table += `<tr onclick="render('${ artistHTML }', '${ title }', '${ year }')">`;
    table += `<td>${ artist }</td><td>${ title }</td>`;
    table += `</tr>`; 
  }

  document.getElementById('data').innerHTML = table;
}

function render(artist, title, year) {
  const showCD = document.getElementById('showCD');
  const textRender = `Artist: ${ artist } <br/> Title: ${ title } <br/> Year: ${ year }`;
  showCD.innerHTML = textRender;
}

