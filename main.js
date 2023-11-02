/*----loding----------------------------------------------------*/

window.addEventListener("load", function() {
    document.querySelector(".loader_bg").classList.add("hidden");

});

/*----animation --------------------------------------------------*/
AOS.init({
    once: true,
    offset: 100,
});


/*----navbar manipulation-----------------------------------------*/

const div = document.getElementById('navbar-avo');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {

        div.classList.remove('bg-transparent');
        div.classList.add('bg-light');

    } else {

        div.classList.remove('bg-light');
        div.classList.add('bg-transparent');

    }
});

// counter------------------------------------------------------------*/
const counters = document.querySelectorAll('.counter');
let speed = 100; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        if (target == 21) {
            speed = 21;
        } else {
            speed = 100;
        }

        const inc = target / speed;

        // console.log(inc);
        // console.log(count);


        if (count < target) {

            counter.innerText = count + inc;

            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});


/* carousal-------------------------------------------------------------*/
//-------------card carousal-------------------------------

$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [650, 1],
        pagination: true,
        navigation: false,
        slideSpeed: 1000,
        autoPlay: false
    });
});


//----------------------------------------------------------

$(document).ready(function() {
    $("#main-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsMobile: [650, 1],
        pagination: true,
        navigation: false,
        slideSpeed: 1000,
        autoPlay: true

    });
});