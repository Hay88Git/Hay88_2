function ShowNav() {
    document.getElementById("nav").style.width = "80%";
    document.getElementById("close").style.display = "block";
}
function HideNav() {
    document.getElementById("nav").style.width = "0%";
    document.getElementById("close").style.display = "none";
}

// Change Pic
var newImageSources = [
    "./img/Pic1.png",
    "./img/Pic2.png",
    "./img/Pic3.png",
    "./img/Pic4.png",
    "./img/Pic5.png",
    "./img/Pic6.png",
    "./img/Pic7.png",
    "./img/Pic8.png",
];
var images = document.querySelectorAll(".pic img");
images.forEach(function(img, index) {
    img.src = newImageSources[index];
});

var newAdr = "./img/1.png";
var imgAdr = document.querySelectorAll(".adr img");
imgAdr.forEach(function(img) {
    img.src = newAdr;
});