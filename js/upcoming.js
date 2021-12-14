function myFunction() {
    var x = document.getElementsByID("article-paragraph");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}