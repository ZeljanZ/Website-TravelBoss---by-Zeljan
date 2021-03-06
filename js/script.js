let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () =>{
    if(document.body.scrollTop > 40 || document.
        documentElement.scrollTop > 40){
            navbarDiv.classList.add('navbar-cng-bg');
    } else {
        navbarDiv.classList.remove('navbar-cng-bg');
    }
});

const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar__collapse--remove');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar__collapse--remove');
});
// hide side bar when click on some link inside
document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn"  && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar__collapse--remove');
    }
});

// stop transition and animation during window resizing
let resizeTimer; 
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

