document.getElementById('year').textContent=new Date().getFullYear();
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
function wa(e){e.preventDefault();const v=id=>document.getElementById(id).value;const text=`Hello Trade Wisdom Solutions,%0A%0AName: ${encodeURIComponent(v('name'))}%0AMobile: ${encodeURIComponent(v('phone'))}%0AEmail: ${encodeURIComponent(v('email'))}%0ASubject: ${encodeURIComponent(v('subject'))}%0ARequirement: ${encodeURIComponent(v('message'))}`;window.open('https://wa.me/919599429301?text='+text,'_blank')}
