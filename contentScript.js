function getRating(movName) {
	url = "http://www.omdbapi.com/?t=";
	res = url.concat(movName.innerHTML.replace(/\([0-9]*\)/g, ""));
	var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        if (myArr['Response'] == "True" && myArr['imdbRating']!== "N/A") {
        	console.log(myArr['imdbRating']);
        	movName.innerHTML += "<span style='color:#bbb; font-size: 40%;'>&nbsp&nbsp"+myArr['imdbRating']+"/10</span>";
        }

    }
  }
    xmlhttp.open("GET", res, true);
    xmlhttp.send();
}



var movlist = document.querySelectorAll(".post_wrapper article h2 a");
var i = 0;
for(i=0; i<movlist.length;i+=1) {
	getRating(movlist[i]);
}
