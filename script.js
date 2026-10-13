//Scroll disolve feature
let lastY = 0
const nav = 
document.querySelector('nav')
window.addEventListener('scroll', () => {
    
    if (window.scrollY > lastY){nav.classList.add('hidden');} else {nav.classList.remove('hidden');} lastY = window.scrollY; }
)
