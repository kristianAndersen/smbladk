document.addEventListener("DOMContentLoaded", function(event) {

    //open close FAQ elements
    let articles = document.querySelectorAll('.ossbox');

    let burger = document.querySelector('.hamburger-lines')
    let mobilnav = document.querySelector('.mobilnav');

   // let partnerExpandBtn = document.querySelector('.partnerExpandBtn');
   // let partnersdiv = document.querySelector('.partnersdiv')

    let tl = document.querySelector('.tl')
    let scrollRight = document.getElementById('scroll-right');
    let scrollLeft = document.getElementById('scroll-left');
  
    /*Scroll left right*/
        scrollRight.addEventListener('click', (event) => {
        tl.scrollBy(330, 0);
    });
        scrollLeft.addEventListener('click', (event) => {
        tl.scrollBy(-330, 0);
    });

    /*partners expand top show all 
    partnerExpandBtn.addEventListener('click', (event) => {
        partnersdiv.classList.toggle("partnersdiv-open");
    });
    */

    /*Faq open close */
    for (var i=0; i < articles.length; i++) {
        articles[i].addEventListener("click", toggle);
    };

        burger.addEventListener("click", toggleMobile);
        function toggleMobile(e) {
            mobilnav.classList.toggle("mobilnavOpen");
        }

    function toggle(e) {
        /*e.currentTarget.classList.toggle("ossboxopen");*/
        e.currentTarget.querySelector('.answer').classList.toggle("answerOpen");
       
        let arrow = e.currentTarget.querySelector('.arrow');
       arrow.classList.toggle("openArrow");
    }
})