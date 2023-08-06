//+=========================== toggle icon navbar============================+//

let menuIcon = document.querySelector('#menu-icon')
// console.log(menuIcon)
let navbar = document.querySelector('.navbar')
// console.log(navbar)


funct = ()=>{
    menuIcon.classList.toggle('fa-x')
    console.log(menuIcon)
    navbar.classList.toggle('active')
    console.log(navbar)
};
menuIcon.addEventListener('click',funct)
// //+=========================== Scroll Section Active Link ============================+//

let sections = document.querySelectorAll('section');
// console.log(sections)
let navLinks = document.querySelectorAll('header nav a');
// console.log(navLinks)

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        // console.log(id)

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                const link =    document.querySelector('header nav a[href*=" + id + "]')
            //  console.log(link)   
            //  link.classList.add('active')
            });
        };
    });
    
    //+=========================== Sticky navbar============================+//

    let header = document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY > 100);
    
    
    //+=========================== REMOVE TOGGLE ICON NAVBAR WHEN CLICK NAVBAR LINKS============================+//
    menuIcon.classList.remove('fa-x')
    navbar.classList.remove('active')
};


 
//+=========================== Scroll Reveal    ============================+//

ScrollReveal({ 
    // reset: true ,
    distance :'80px',
    duration :2000,
    delay : 200
});
 

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });

ScrollReveal().reveal('.home-img,.services-container, .portfilio-box,.contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });

ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });


//+=========================== typed js    ============================+//

const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','Backend Developer', 'Mern Stack Developer', 'Coder','Content Writer'],
    // strings: ['hasan', 'ahsan','ashraf','Coder'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});