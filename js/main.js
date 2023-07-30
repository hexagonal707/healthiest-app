const swup = new Swup();

function scrollToTop() {
    
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function goBack(){ history.go(-2)}

function goBackToProjects() {


    document.getElementById("goBackToProjects").onclick = function () {
        location.href = "../../hexagonal707-website/index.html"
    }

}
