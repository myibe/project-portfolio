document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
}

let visibilityForm = document.getElementById("myform");
function formVisibility(){
    if (visibilityForm.style.display == "none"){
        visibilityForm.style.display = "block"
    } else if(visibilityForm.style.display == "block"){
        visibilityForm.style.display = "none"
    }

}

function hideBurger(){
    document.getElementById("nav-content").classList.toggle("hidden")
}