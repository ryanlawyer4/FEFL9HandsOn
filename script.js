let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("einsteinName").innerHTML = myObj.name;
    document.getElementById("einsteinBday").innerHTML = myObj.birthday;
  }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();

function getBio() {
    const xml = new XMLHttpRequest();
    xml.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let myObj = JSON.parse(this.responseText);
            document.getElementById("einsteinBio").innerHTML = myObj.bio;
        }
    };
xml.open("GET", "einstein.json", true);
xml.send();

}

