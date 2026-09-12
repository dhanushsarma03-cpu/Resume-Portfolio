const body=document.body,themeBtn=document.getElementById('themeBtn'),menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks');
const saved=localStorage.getItem('theme'); if(saved==='dark') body.classList.add('dark');
function syncTheme(){themeBtn.textContent=body.classList.contains('dark')?'☀':'☾'} syncTheme();
themeBtn.addEventListener('click',()=>{body.classList.toggle('dark');localStorage.setItem('theme',body.classList.contains('dark')?'dark':'light');syncTheme()});
menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open')); document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
const progress=document.getElementById('progress'); window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h?scrollY/h*100:0)+'%'});
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12}); document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
