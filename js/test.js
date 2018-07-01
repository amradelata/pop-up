    // global variables
    var x = document.getElementById("myDIV");
    var y = document.getElementById("opacity");




function myFunction() {

        if (x.style.display === "block") {
        x.style.display = "none";

        }else {
        x.style.display = "block";
        }
 
        // hidden and show opacity

        if (y.style.display === "block") {
        y.style.display = "none";

        }else {
        y.style.display = "block";

        }
}

     x.style.display    = "block 1s";
     y.style.transition = "opacity 1s";
     x.style.transition = "opacity 1s";


