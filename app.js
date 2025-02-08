document.getElementsByTagName("h1")[0].style.color = "blue";
document.getElementsByTagName("h2")[0].style.color = "red";
document.getElementsByTagName("h3")[0].style.color = "yellow";
document.getElementsByTagName("h4")[0].style.color = "blue";
document.getElementsByTagName("h5")[0].style.color = "green";
document.getElementsByTagName("h6")[0].style.color = "red";

let ox1 = document.getElementById("ox1");
ox1.addEventListener("mouseover", function () {
  ox1.style.borderColor = "white";
});
ox1.addEventListener("mouseout", function () {
  ox1.style.borderColor = "#303134";
});

let ox2 = document.getElementById("ox2");
ox2.addEventListener("mouseover", function () {
  ox2.style.borderColor = "white";
});
ox2.addEventListener("mouseout", function () {
  ox2.style.borderColor = "#303134";
});
