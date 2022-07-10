function myFunction() {
    var x = document.getElementById("corousel");
    if (x.style.display === "block") {
      x.style.visibility = "visible";
    } else {
      x.style.display = "block";
    }
}