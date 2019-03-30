function run(imgs) {
    var expandImg = document.getElementById("expanded");

    var imagetxt = document.getElementById('imgtxt');
    expandImg.src = imgs.src;
    imagetxt.innerHTML = imgs.alt;
    expandImg.parentElement.style.display="block";

}