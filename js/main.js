// Menu Show
const showMenu = (toogleId, navId) => {
    const toogle = document.getElementById(toogleId),
        nav = document.getElementById(navId)

    if (toogle && nav) {
        toogle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toogle', 'nav-menu')

// ACTIVE and REMOVE Menu
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    // Remove menu Mobile
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//Portfolio Slider
$(document).ready(function () {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cs-hidden');
        }
    });
});

//Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

//Scroll Home
sr.reveal('.home_title', {})
sr.reveal('.home_img', {
    delay: 400
})

//Scroll About
sr.reveal('.about_img', {})
sr.reveal('.about_text', {
    delay: 200
})

//Scroll Skills
sr.reveal('.skills_data', {})

//Scroll Portfolio


//Scroll Photos
sr.reveal('.sub_text-work', {})
sr.reveal('.work_img', {
    interval: 200
})

//Scroll Education
sr.reveal('.education_heading', {})
sr.reveal('.education_text', {
    delay: 400
})
sr.reveal('.text-primary', {
    delay: 600
})
sr.reveal('.sub_text-achievement', {
    delay: 600
})
sr.reveal('.achievement_text', {
    delay: 800
})
sr.reveal('.achievement_icon', {
    delay: 800
})

//Scroll Contact
sr.reveal('.contact_input', {})
sr.reveal('.contact_button', {
    interval: 200
})
sr.reveal('.contact_ilustration img', {
    delay: 400
})
