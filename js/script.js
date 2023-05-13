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
// window.onscroll = function () { myFunction() };

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
        serviceDescription2.textContent = "My painting service offers custom artwork that reflects your personal style and complements your decor, creating a unique look";
    } else {
        serviceDescription2.textContent = "   My painting service offers custom artwork that adds a unique touch to any space.I specialize in creating paintings that reflect your   personal style and complement your decor.Whether you're   for a stunning centerpiece or a series of smaller pieces to create  a cohesive look, I've got you covered. My goal is to bring your  vision to life through vibrant colors and textures that capture  the essence of your space."
    }
}

function updateServiceDescription3() {
    let serviceDescription3 = document.getElementById("service-description-3");

    if (window.matchMedia("(max-width: 767px)").matches) {
        serviceDescription3.textContent = "I specialize in creating visually stunning designs that communicate your messages effectively.";
    } else {
        serviceDescription3.textContent = " My graphics design service offers creative solutions that help your brand stand out in a crowded market. I specialize in crafting visually stunning designs that communicate your message effectively. From logos to marketing materials, I will work closely with you to create designs that capture the essence of your brand."
    }
}



updateServiceDescription1();
updateServiceDescription2();
updateServiceDescription3();


window.addEventListener("resize", updateServiceDescription1);
window.addEventListener("resize", updateServiceDescription2);
window.addEventListener("resize", updateServiceDescription3);
// Services