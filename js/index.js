window.onload = function() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       var array = JSON.parse(this.responseText);
	       create(array);
	    }
	};
	xhttp.open("GET", "js/list.json", true);
	xhttp.send();
};

function create(array) {
	var section = document.getElementById("section");
	for (var i = 0; i < array.length; i++) {
		var img = document.createElement("img");
		var div = document.createElement("div");
		div.value = i;
		div.setAttribute("onclick", "showDescription(this.value);showBorder(this)");
		img.src = "images/" + array[i].image;
		img.className = "images";
		div.appendChild(img);
		section.appendChild(div);
	}
}

function showDescription(i) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var array = JSON.parse(this.responseText);
            showDescription2(i, array);
        }
    };
    xhttp.open("GET", "js/list.json", true);
    xhttp.send();
}

function showBorder(div) {
	var divs = document.getElementById("section").getElementsByTagName("div");
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.borderTop = "4px solid white";
	}
	div.style.borderTop = "4px solid darkred";
}

function showDescription2(i, array) {
	document.getElementById("description").style.animation = "show 0.5s 1 ease-out";
    var model = document.getElementById("description-model");
    model.innerHTML = "<strong>Model: </strong>" + array[i].model;

    var rating = document.getElementById("description-rating");
    var n = array[i].rating;
    rating.innerHTML = "<strong>Rating: </strong>" + "<meter value='"+n+"' max='5'></meter>";

    var date = document.getElementById("description-date");
    date.innerHTML = "<strong>Reviewed on: </strong>" + array[i].date;

    var price = document.getElementById("description-price");
    price.innerHTML = "<strong>Price: </strong>" + array[i].price;

    var price = document.getElementById("description-text");
    price.innerHTML = "<p>" +array[i].description+"</p>";

    var button = document.getElementById("button");
    button.innerHTML = "See video ->>";
    button.style.display = "block";
    button.value = i;
    button.setAttribute("onclick", "playVideo(this.value, this)");
}

function playVideo(i, button) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var array = JSON.parse(this.responseText);
            button.innerHTML = "<video width='400' controls><source src='video/"+array[i].video+".mp4' type='video/mp4'><source src='video/"+array[i].video+".ogg' type='video/ogg'></video>"
        }
    };
    xhttp.open("GET", "js/list.json", true);
    xhttp.send();
}