/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*=============== MENU SHOW ===============*/
/* Validate if constants exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/
/* Validate if constants exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== Mode Change ===============*/
/* Dark to light vice versa */
const changeMode = document.getElementById('dark-mode');
const rootClass = document.querySelector(':root');

// localStorage.mode ;
// console.log(this.localStorage.getItem("mode"));
// console.log(localStorage.getItem("mode"));

if(localStorage.mode === "dark"){
    rootClass.classList.add('dark');
    changeMode.checked = true;
}else if(localStorage.mode === "light"){
    rootClass.classList.remove('dark');
}

changeMode.addEventListener("change", function(){

    if (this.checked) {
        localStorage.mode = "dark";
        rootClass.classList.add('dark');
        console.log(true);
    } else {
        localStorage.mode = "light";
        rootClass.classList.remove('dark');
        console.log(false);
    }

    // if (localStorage.mode === "light") {
    //     localStorage.mode = "dark";
    //     rootClass.classList.add('dark');
    // } else if (localStorage.mode === "dark") {
    //     localStorage.mode = "light";
    //     rootClass.classList.remove('dark');
    // }
    console.log(localStorage.mode);
})

console.log(localStorage.getItem("mode"));

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav__menu')
    //  when we click on nav__link we remove the show-menu 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header');
    // when the 
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader);


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDetails()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm("service_rk8c6od", "template_cmqjonb", '#contact-form', 'V8wgCDZzhGtHFBwJb')
        .then(() => {
            // Show sent Message
            contactMessage.textContent = 'Message sent successfully ✅'

        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })

}

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height add the show-scroll class to header tag
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
// window.sr = new scrollReveal();
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true //Animation repeat
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, { origin: 'bottom' })
sr.reveal(`.about__data, .skills__data`, { origin: 'left' })
sr.reveal(`.about__image, .skills__content`, { origin: 'right' })
sr.reveal(`.services__card, .projects__card`, { interval: 100 }) 