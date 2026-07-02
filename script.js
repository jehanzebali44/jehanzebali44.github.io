const topbar = document.getElementById('topbar');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
window.addEventListener('scroll', () => topbar.classList.toggle('scrolled', window.scrollY > 30));
menuBtn?.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('show') }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const sections = [...document.querySelectorAll('section[id]')];
const navItems = [...document.querySelectorAll('.nav-links a')];
function setActive(){let current='home';sections.forEach(s=>{if(scrollY >= s.offsetTop-140) current=s.id});navItems.forEach(a=>a.classList.toggle('active', a.getAttribute('href') === '#' + current));}
window.addEventListener('scroll', setActive);setActive();
const words = ['Android Developer','Kotlin Expert','Compose Developer','Team Lead'];
let wi=0, ci=0, del=false;
const target=document.getElementById('typingText');
function type(){if(!target)return;const word=words[wi];target.textContent=word.slice(0,ci);if(!del&&ci<word.length)ci++;else if(del&&ci>0)ci--;else{del=!del;if(!del)wi=(wi+1)%words.length}setTimeout(type,del?45:80)}
type();


const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('contactName')?.value.trim() || '';
  const email = document.getElementById('contactEmail')?.value.trim() || '';
  const subject = document.getElementById('contactSubject')?.value.trim() || 'Portfolio Contact';
  const message = document.getElementById('contactMessage')?.value.trim() || '';
  const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
  window.location.href = `mailto:jehanzebali44@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
});

const filterButtons = document.querySelectorAll('.filter-btn');
const playProjectCards = document.querySelectorAll('.play-project-card');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    playProjectCards.forEach(card => {
      const categories = card.dataset.category || '';
      card.classList.toggle('hide', filter !== 'all' && !categories.includes(filter));
    });
  });
});
