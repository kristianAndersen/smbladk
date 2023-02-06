document.addEventListener("DOMContentLoaded", function(event) {

    //open close FAQ elements
    let articles = document.querySelectorAll('.ossbox');
   
    let burger = document.querySelector('.hamburger-lines')
    let mobilnav = document.querySelector('.mobilnav');

    for (var i=0; i < articles.length; i++) {
        articles[i].addEventListener("click", toggle);
    };



        burger.addEventListener("click", toggleMobile);
        function toggleMobile(e) {
            mobilnav.classList.toggle("mobilnavOpen");
        }

    function toggle(e) {
        e.currentTarget.classList.toggle("ossboxopen");
       let arrow = e.currentTarget.querySelector('.arrow');
       arrow.classList.toggle("openArrow");
    }
})