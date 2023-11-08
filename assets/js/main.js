/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navClose = document.getElementById('nav-close'),
    navToggle = document.getElementById('nav-toggle');

/*=============== MENU SHOW ==========*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show__menu');
    })
};

/*=============== MENU HIDDEN ==========*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show__menu');
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show__menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header');
};

window.addEventListener('scroll', bgHeader);

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__shadow', 1.5, { opacity: 0, y: -300, delay: .2 });
gsap.from('.home__points', 1.5, { opacity: 0, y: -300, delay: .4 });
gsap.from('.home__grass', 1.5, { opacity: 0, y: 300, delay: .2, ease: 'elastic.out(1, .5)' });
gsap.from('.home__pumpkin', 1.5, { opacity: 0, y: -300, delay: .6, ease: 'bounce.out' });
gsap.from('.home__stone', 1.5, { opacity: 0, y: 300, delay: .8, ease: 'elastic.out(1, .5)' });
gsap.from('.home__moon', 1.5, { opacity: 0, y: 300, delay: 1.5, ease: 'elastic.out(1, .5)' });
gsap.from('.home__titles', 1.5, { opacity: 0, y: -300, delay: 1.5, ease: 'elastic.out(1, .5)' });
gsap.from('.home__tree', 1.5, { opacity: 0, y: 300, delay: 2, ease: 'elastic.out(1, .5)' });
gsap.from('.home__data', 1.5, { opacity: 0, y: 200, delay: 1.5, ease: 'elastic.out(1, .5)' });
gsap.from('.main', 1.5, { opacity: 0, y: 300, delay: .5, ease: 'elastic.out(1, .5)' });

/* =========== Song ===============*/

const button = document.querySelector('.home__button');
const pauseButton = document.querySelector('.pause');
const audio = document.querySelector('audio');
const span = document.querySelector('span');

function musicPlay() {
      
        audio.src = 'assets/song/song_background.mp3'
        audio.play();
    } 

function musicPause() {
        audio.src = '';
        audio.pause()
}


button.addEventListener('click', musicPlay)
pauseButton.addEventListener('click', musicPause)


    
