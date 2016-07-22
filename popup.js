chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  url = "http://www.omdbapi.com/?t=";
  striped = selection[0].replace(/\s+/g, ' ');
  getData = striped.replace(/ /g,"+");
  res = url.concat(getData);

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        if (myArr['Response'] == "True") {
          document.getElementById('image').src=myArr['Poster'];
          document.getElementById('image').style.display='inline';
          document.getElementById('title').innerText = myArr['Title'];
          document.getElementById('rating').innerText = "IMDB rating: ".concat(myArr['imdbRating']);
        }
        else {
          document.getElementById('title').innerText = "Movie not found";
        }
    }
  };
  xmlhttp.open("GET", res, true);
  xmlhttp.send();
});