/*Navbar menu*/

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = 'black';

    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
window.onscroll = function () { myFunction() };

/*Navbar menu*/


// Services
function updateServiceDescription1() {
    let serviceDescription1 = document.getElementById("service-description-1");

    if (window.matchMedia("(max-width: 767px)").matches) {
        serviceDescription1.textContent = "I design and develop websites tailored to your brand identity and business goals, creating a powerful online presence that drives results.";
    } else {
        serviceDescription1.textContent = "  I design and develop modern, user-friendly websites that help your business succeed online.My custom designs are tailored to your  unique brand identity and business goals.Let me help you create a powerful online presence that drives results for your business."
    }
}

function updateServiceDescription2() {
    let serviceDescription2 = document.getElementById("service-description-2");

    if (window.matchMedia("(max-width: 767px)").matches) {
        serviceDescription2.textContent = "I design and develop websites tailored to your brand identity and business goals, creating a powerful online presence that drives results.";
    } else {
        serviceDescription2.textContent = "  I design and develop modern, user-friendly websites that help your business succeed online.My custom designs are tailored to your  unique brand identity and business goals.Let me help you create a powerful online presence that drives results for your business."
    }
}

function updateServiceDescription3() {
    let serviceDescription3 = document.getElementById("service-description-3");

    if (window.matchMedia("(max-width: 767px)").matches) {
        serviceDescription3.textContent = "I design and develop websites tailored to your brand identity and business goals, creating a powerful online presence that drives results.";
    } else {
        serviceDescription3.textContent = "  I design and develop modern, user-friendly websites that help your business succeed online.My custom designs are tailored to your  unique brand identity and business goals.Let me help you create a powerful online presence that drives results for your business."
    }
}



updateServiceDescription1();
updateServiceDescription2();
updateServiceDescription3();


window.addEventListener("resize", updateServiceDescription1);
window.addEventListener("resize", updateServiceDescription2);
window.addEventListener("resize", updateServiceDescription3);
// Services