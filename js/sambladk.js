document.addEventListener("DOMContentLoaded", function(event) {

    //open close FAQ elements
    let articles = document.querySelectorAll('article');


    for (var i=0; i < articles.length; i++) {
        articles[i].addEventListener("click", toggle);
    };

    function toggle(e) {
        e.currentTarget.classList.toggle("ossboxopen");
       let arrow = e.currentTarget.querySelector('.arrow');
       arrow.classList.toggle("openArrow");
    }
})