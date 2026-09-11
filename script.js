const menuButton=document.querySelector('.menu-button');
const mobileNav=document.querySelector('.mobile-nav');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open menu');mobileNav.hidden=true;}
menuButton.addEventListener('click',()=>{const opened=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!opened));menuButton.setAttribute('aria-label',opened?'Open menu':'Close menu');mobileNav.hidden=opened;});
mobileNav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape' && !mobileNav.hidden){closeMenu();menuButton.focus();}});
matchMedia('(min-width:701px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
document.querySelector('#copyright-year').textContent=String(new Date().getFullYear());
