const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later,wait);
        if (callNow) func.apply(context,args);
    };
};

const ANIMA = document.querySelectorAll('[data-anime]');
const animaClass = 'animate';

function animeScroll() {
    const TOP = window.pageYOffset + ((window.innerHeight * 3) / 4);
    ANIMA.forEach(function(element){
        if((TOP) > element.offsetTop) {
            element.classList.add(animaClass);
        } else {
            element.classList.remove(animaClass);
        }
    })
}

animeScroll();

if(ANIMA.length) {
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
}, 100));
}