/* ==================================================
   MBD AGENCY — SCRIPT
================================================== */
'use strict';

/* Respect users who prefer less motion */
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- DATA ---------- */
const SERVICES = [
  { icon:'🎨', num:'01 / Design', name:'Brand & Visual Design', glow:'rgba(255,77,28,0.1)',
    desc:'Logos, brand identities, UI/UX systems, print design, mockups, prototypes, and everything that makes you unforgettable.',
    tags:['Logo Design','UI/UX','Brand Identity','Mockups','Figma'],
    long:'We craft complete visual identities from the ground up. Whether you need a memorable logo, a full design system, pixel-perfect mockups, or interactive prototypes — our design team blends aesthetics with strategy to make your brand impossible to ignore.',
    deliverables:['Logo & brand marks','Full brand guidelines','UI/UX design systems','Hi-fi mockups','Interactive prototypes','Print & packaging','Motion & animation','Social media kits'],
    tools:['Figma','Illustrator','Photoshop','After Effects','Blender'] },
  { icon:'💻', num:'02 / Engineering', name:'Software & Web Development', glow:'rgba(91,47,255,0.1)',
    desc:'Custom web applications, mobile apps (native & hybrid), enterprise software, APIs, and scalable backend systems.',
    tags:['React / Next.js','Mobile','Node.js','Cloud','APIs'],
    long:'From landing pages to enterprise platforms, we build fast, secure, and scalable software. Native and hybrid mobile apps, real-time web apps, robust APIs, and cloud-native architecture — engineered to grow with you.',
    deliverables:['Web applications','Native iOS & Android','Hybrid apps','REST & GraphQL APIs','Enterprise software','Cloud architecture','Database design','Third-party integrations'],
    tools:['React','Next.js','Flutter','Node.js','PostgreSQL','AWS'] },
  { icon:'🤖', num:'03 / Artificial Intelligence', name:'AI Model Development', glow:'rgba(0,200,150,0.1)',
    desc:'Custom machine learning models, NLP solutions, computer vision, LLM integrations, predictive analytics, and intelligent automation.',
    tags:['Machine Learning','NLP','LLM','PyTorch','TensorFlow'],
    long:'We design, train, and deploy production-grade AI. Custom ML models, natural language processing, computer vision, LLM-powered apps, and intelligent automation — turning your data into a competitive advantage.',
    deliverables:['Custom ML models','NLP & chatbots','Computer vision','LLM integration','Recommendation engines','Predictive analytics','Model fine-tuning','MLOps pipelines'],
    tools:['PyTorch','TensorFlow','HuggingFace','LangChain','OpenAI','scikit-learn'] },
  { icon:'🛡️', num:'04 / Quality Assurance', name:'Software QA & Testing', glow:'rgba(245,200,66,0.1)',
    desc:'End-to-end SQA for native, web, and hybrid apps. Manual & automated testing, CI/CD integration, performance and security audits.',
    tags:['Selenium','Cypress','Jest','Appium','CI/CD'],
    long:'Our dedicated SQA division guarantees your product ships bug-free. Functional, performance, security, and accessibility testing across native, web, and hybrid platforms — fully integrated into your CI/CD pipeline.',
    deliverables:['Functional testing','Automated test suites','Performance & load testing','Security & pen testing','Accessibility audits','CI/CD integration','AI model validation','Detailed QA reports'],
    tools:['Selenium','Cypress','Jest','Appium','JMeter','k6'] },
  { icon:'📚', num:'05 / Academic', name:'Research & Publication', glow:'rgba(91,47,255,0.1)',
    desc:'Expert researchers with indexed journal publications assist in research papers, theses, literature reviews, and data analysis on any topic.',
    tags:['Journal Papers','Thesis Writing','Data Analysis','SCOPUS','IEEE'],
    long:'Our PhD-level academic team has 80+ indexed publications. We assist with research design, paper writing, thesis & dissertation support, systematic literature reviews, statistical analysis, and journal submission — across every discipline.',
    deliverables:['Journal paper writing','Thesis & dissertation','Literature reviews','Statistical analysis','Research methodology','Plagiarism-free content','Journal submission','Peer-review support'],
    tools:['SPSS','R','Python','LaTeX','NVivo','Mendeley'] },
  { icon:'⚡', num:'06 / Managed Services', name:'Consulting & IT Services', glow:'rgba(255,77,28,0.1)',
    desc:'Digital transformation consulting, cloud infrastructure, DevOps pipelines, maintenance & support, and technical team augmentation.',
    tags:['DevOps','AWS / GCP','Consulting','Support','Maintenance'],
    long:'Beyond building, we keep you running. Digital transformation strategy, cloud infrastructure, DevOps automation, ongoing maintenance, and on-demand expert teams to augment your in-house capabilities.',
    deliverables:['Digital transformation','Cloud migration','DevOps & CI/CD','24/7 monitoring','Maintenance & support','Team augmentation','Security hardening','Technical consulting'],
    tools:['Docker','Kubernetes','Terraform','AWS','GCP','GitHub Actions'] }
];

const PORTFOLIO = [
  { emoji:'🏦', title:'FinTech Dashboard', sub:'React · Node · AWS', glow:'rgba(91,47,255,0.15)', back:'linear-gradient(145deg,#2a1a6e,#150d3d)',
    h:'Real-Time Finance App', p:'Multi-tenant banking dashboard with ML fraud detection and real-time analytics for 50K+ users.',
    li:['ML-powered fraud detection','Real-time transaction streams','Zero-downtime deployment','SOC 2 compliant'] },
  { emoji:'🛒', title:'E-Commerce Platform', sub:'Next.js · Django · GCP', glow:'rgba(255,77,28,0.12)', back:'linear-gradient(145deg,#8b2a00,#3d1200)',
    h:'Smart Commerce Suite', p:'AI-personalized shopping with dynamic pricing, inventory automation, and 3D product previews.',
    li:['AI recommendation engine','Dynamic pricing model','3D product visualization','Multi-currency checkout'] },
  { emoji:'🧬', title:'MedTech Research AI', sub:'Python · FastAPI · PyTorch', glow:'rgba(0,200,150,0.12)', back:'linear-gradient(145deg,#0a5c3a,#063d27)',
    h:'Clinical NLP Engine', p:'Medical literature analysis trained on 2M+ papers, assisting with citation mapping and hypothesis generation.',
    li:['94.7% NER accuracy','2M+ papers indexed','Citation graph visualization','Hypothesis generation AI'] },
  { emoji:'📱', title:'EduApp Mobile', sub:'Flutter · Firebase · ML Kit', glow:'rgba(245,200,66,0.12)', back:'linear-gradient(145deg,#5c4a00,#3d3000)',
    h:'Adaptive Learning Platform', p:'Cross-platform education app with AI-adaptive quizzes, offline mode, and real-time teacher dashboards.',
    li:['Adaptive quiz engine','Offline-first architecture','Live teacher dashboard','10K+ active students'] },
  { emoji:'🎯', title:'SaaS Brand System', sub:'Figma · Illustrator · Brand', glow:'rgba(91,47,255,0.12)', back:'linear-gradient(145deg,#2a1a6e,#150d3d)',
    h:'Complete Brand Identity', p:'Full brand system for a Series B SaaS startup: logo, design language, component library, and marketing.',
    li:['Custom logo suite','200+ component design system','Motion identity','Marketing toolkit'] },
  { emoji:'🔬', title:'Research Publication', sub:'IEEE · SCOPUS · ACM', glow:'rgba(255,77,28,0.12)', back:'linear-gradient(145deg,#3d1200,#280c00)',
    h:'Indexed Journal Papers', p:'Peer-reviewed publications across CS, engineering, medicine, and social sciences — from our academic team.',
    li:['80+ indexed publications','Average impact factor: 4.2','12 research domains','PhD-level research team'] }
];

const TESTIMONIALS = [
  { stars:5, text:'MBD built our entire SaaS platform from scratch in 3 months. The quality was exceptional — their QA team caught issues our internal team missed for months. Worth every penny.', av:'AK', grad:'linear-gradient(135deg,#ff4d1c,#5b2fff)', name:'Arif Karim', role:'CEO, NexaCloud Technologies' },
  { stars:5, text:'Their academic research team helped me publish my thesis as a journal paper in an IEEE-indexed journal. The depth of expertise was astonishing. Highly recommended.', av:'SM', grad:'linear-gradient(135deg,#00c896,#006b50)', name:'Dr. Sadia Mahmud', role:'Assistant Professor, BUET' },
  { stars:5, text:'The brand identity MBD created became the foundation of our Series A pitch deck. Investors loved the visual polish. 10/10 creative team.', av:'RA', grad:'linear-gradient(135deg,#f5c842,#c47c00)', name:'Rafa Ahmed', role:'Founder, GreenRoute Mobility' },
  { stars:5, text:'Their AI team built a custom NLP model for our e-commerce that increased recommendation click-through by 34%. Real business impact, not just demos.', av:'TH', grad:'linear-gradient(135deg,#ff6b6b,#cc0000)', name:'Tanvir Hasan', role:'CTO, ShopX Bangladesh' },
  { stars:5, text:'MBD’s SQA team found 47 critical bugs in our mobile app before launch. Their automated test suite now runs on every push. Game-changer for our dev process.', av:'FK', grad:'linear-gradient(135deg,#00c8c8,#006b6b)', name:'Farhan Khan', role:'Product Lead, MediConnect' },
  { stars:5, text:'One partner for design, development, AND research. MBD replaced three vendors for us and delivered better results across the board. Incredible value.', av:'NJ', grad:'linear-gradient(135deg,#9b30ff,#4b0082)', name:'Nadia Jahan', role:'COO, BrightPath EdTech' }
];

const TECH = [
  ['⚛️','React'],['🔺','Next.js'],['🐦','Flutter'],['🟢','Node.js'],['🐍','Python'],['🔥','PyTorch'],
  ['🧠','TensorFlow'],['☁️','AWS'],['🌐','GCP'],['🐳','Docker'],['⚙️','Kubernetes'],['🗄️','PostgreSQL'],
  ['🍃','MongoDB'],['🎨','Figma'],['🧪','Cypress'],['🤗','HuggingFace']
];

const TEAM = [
  { av:'MR', grad:'linear-gradient(135deg,#ff4d1c,#5b2fff)', name:'Mehedi Rahman', role:'CEO & Founder', bio:'10+ years building digital products. Former lead engineer at a top-3 Bangladesh tech firm. MSc Computer Science.' },
  { av:'SA', grad:'linear-gradient(135deg,#5b2fff,#1a0a3d)', name:'Samira Akter', role:'Head of Design', bio:'Award-winning UX designer. Previous clients include Fortune 500 brands. Figma-certified educator and speaker.' },
  { av:'TI', grad:'linear-gradient(135deg,#00c896,#006b50)', name:'Dr. Tanvir Islam', role:'Head of AI Research', bio:'PhD in Machine Learning. 30+ indexed publications. Former researcher at IEEE-sponsored labs. NLP & CV specialist.' },
  { av:'RH', grad:'linear-gradient(135deg,#f5c842,#7a5c00)', name:'Rabeya Hossain', role:'QA Lead', bio:'ISTQB Advanced certified. 8 years in SQA. Specializes in automated testing for fintech and healthtech.' }
];

const FAQS = [
  { q:'What services does MBD actually offer?', a:'Everything digital under one roof: brand & visual design (logos, UI/UX, mockups), software & web development, native/hybrid mobile apps, custom AI/ML model development, full software quality assurance (SQA), and academic research & publication support. You can hire us for one service or the full package.' },
  { q:'How does pricing work?', a:'We offer flexible monthly retainers (Starter, Professional) and custom Enterprise engagements. You can also commission one-off projects. Use the contact form with your budget range and we’ll send a tailored quote within 24 hours.' },
  { q:'Can you really help with academic research and publication?', a:'Yes. Our in-house academic team holds PhD-level degrees with 80+ indexed publications in IEEE, SCOPUS, ACM and more. We assist with research design, paper writing, thesis support, literature reviews, statistical analysis, and journal submission — all plagiarism-free and Turnitin-verified.' },
  { q:'Do you test native, web, AND hybrid apps?', a:'Absolutely. Our SQA division covers functional, performance, security, and accessibility testing across native (iOS/Android), web, and hybrid applications, plus AI model validation. We integrate directly into your CI/CD pipeline.' },
  { q:'How long does a typical project take?', a:'It depends on scope. A logo or brand refresh can take 1–2 weeks; a full web platform 6–12 weeks; AI models vary by data and complexity. After discovery, you get a fixed timeline with weekly demos so there are no surprises.' },
  { q:'Where are you based and do you work internationally?', a:'We’re headquartered in Dhaka, Bangladesh and work with clients worldwide, fully remote. Our hours are Mon–Fri 9am–7pm BST, with flexible overlap for international time zones.' }
];

/* ---------- LOADER ---------- */
(function loader(){
  const texts=['Loading assets...','Initializing UI...','Preparing experience...','Almost ready...'];
  let prog=0;
  const bar=document.getElementById('loaderBar');
  const txt=document.getElementById('loaderText');
  const pct=document.getElementById('loaderPct');
  const iv=setInterval(()=>{
    prog+=Math.random()*16+5; if(prog>100)prog=100;
    bar.style.width=prog+'%';
    pct.textContent=Math.floor(prog)+'%';
    txt.textContent=texts[Math.floor(prog/26)]||'Ready!';
    if(prog>=100){clearInterval(iv);setTimeout(()=>document.getElementById('loader').classList.add('hidden'),400);}
  },80);
})();

/* ---------- INJECT DYNAMIC CONTENT ---------- */
function buildContent(){
  // Services
  const sg=document.getElementById('servicesGrid');
  SERVICES.forEach((s,i)=>{
    const d=document.createElement('button');
    d.className='service-card reveal'+(i?' reveal-delay-'+Math.min(i,5):'');
    d.style.setProperty('--cg',s.glow);
    d.dataset.index=i;
    d.innerHTML=`<span class="service-icon">${s.icon}</span>
      <span class="service-num">${s.num}</span>
      <div class="service-name">${s.name}</div>
      <p class="service-desc">${s.desc}</p>
      <div class="service-tags">${s.tags.map(t=>`<span class="service-tag">${t}</span>`).join('')}</div>
      <span class="service-arrow">↗</span>`;
    d.addEventListener('click',()=>openModal(i));
    sg.appendChild(d);
  });
  // 3D cards
  const cg=document.getElementById('cards3dGrid');
  PORTFOLIO.forEach((c,i)=>{
    const w=document.createElement('div');
    w.className='card-3d reveal'+(i?' reveal-delay-'+Math.min(i,5):'');
    w.innerHTML=`<div class="card-3d-inner">
      <div class="card-3d-front">
        <div class="card-3d-bg" style="background:linear-gradient(180deg,${c.glow},transparent)">${c.emoji}</div>
        <div><div class="card-3d-title">${c.title}</div><div class="card-3d-sub">${c.sub}</div></div>
        <div class="flip-hint">↻ Click to flip</div>
      </div>
      <div class="card-3d-back" style="background:${c.back}">
        <h3>${c.h}</h3><p>${c.p}</p>
        <ul>${c.li.map(x=>`<li>${x}</li>`).join('')}</ul>
      </div>
    </div>`;
    w.addEventListener('click',()=>w.classList.toggle('flipped'));
    cg.appendChild(w);
  });
  // Testimonials
  const tt=document.getElementById('testimonialTrack');
  TESTIMONIALS.forEach(t=>{
    const c=document.createElement('div');
    c.className='testimonial-card';
    c.innerHTML=`<div class="stars">${'★'.repeat(t.stars)}</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="avatar" style="background:${t.grad}">${t.av}</div>
        <div><div class="author-name">${t.name}</div><div class="author-role">${t.role}</div></div>
      </div>`;
    tt.appendChild(c);
  });
  // Tech
  const tg=document.getElementById('techGrid');
  TECH.forEach(([logo,name])=>{
    const it=document.createElement('div');
    it.className='tech-item reveal';
    it.innerHTML=`<div class="tech-logo">${logo}</div><div class="tech-name">${name}</div>`;
    tg.appendChild(it);
  });
  // Team
  const tm=document.getElementById('teamGrid');
  TEAM.forEach((p,i)=>{
    const c=document.createElement('div');
    c.className='team-card reveal'+(i?' reveal-delay-'+i:'');
    c.innerHTML=`<div class="team-avatar" style="background:${p.grad}">${p.av}</div>
      <div class="team-name">${p.name}</div>
      <div class="team-role">${p.role}</div>
      <p class="team-bio">${p.bio}</p>`;
    tm.appendChild(c);
  });
  // FAQ
  const fl=document.getElementById('faqList');
  FAQS.forEach(f=>{
    const it=document.createElement('div');
    it.className='faq-item';
    it.innerHTML=`<button class="faq-q">${f.q}<span class="faq-icon">+</span></button>
      <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>`;
    const btn=it.querySelector('.faq-q');
    const ans=it.querySelector('.faq-a');
    btn.addEventListener('click',()=>{
      const open=it.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o=>{o.classList.remove('open');o.querySelector('.faq-a').style.maxHeight=null;});
      if(!open){it.classList.add('open');ans.style.maxHeight=ans.scrollHeight+'px';}
    });
    fl.appendChild(it);
  });
  // SQA bars
  const sb=document.getElementById('sqa-bars');
  [['Web Apps',98],['Mobile Native',95],['Hybrid Apps',92],['API & Backend',97],['AI Systems',88]].forEach(([l,v])=>{
    const r=document.createElement('div');
    r.className='sqa-bar-row';
    r.innerHTML=`<span class="sqa-bar-label">${l}</span>
      <div class="sqa-bar-track"><div class="sqa-bar-fill" data-w="${v}%"></div></div>
      <span class="sqa-bar-pct">${v}%</span>`;
    sb.appendChild(r);
  });
}

/* ---------- SERVICE MODAL ---------- */
const modal=document.getElementById('serviceModal');
const modalBody=document.getElementById('modalBody');
function openModal(i){
  const s=SERVICES[i];
  modalBody.innerHTML=`<div class="modal-icon">${s.icon}</div>
    <div class="modal-eyebrow">${s.num}</div>
    <h3 class="modal-title">${s.name}</h3>
    <p class="modal-text">${s.long}</p>
    <div class="modal-section-label">What You Get</div>
    <ul class="modal-list">${s.deliverables.map(d=>`<li>${d}</li>`).join('')}</ul>
    <div class="modal-section-label">Tools We Use</div>
    <div class="modal-tools">${s.tools.map(t=>`<span class="modal-tool">${t}</span>`).join('')}</div>
    <button class="modal-cta" data-scroll="#contact">Get a Quote for ${s.name.split(' ')[0]} →</button>`;
  modal.classList.add('open');
  document.body.style.overflow='hidden';
  modalBody.querySelector('.modal-cta').addEventListener('click',()=>{closeModal();document.querySelector('#contact').scrollIntoView({behavior:'smooth'});});
  bindMagnetic();bindCursor();
}
function closeModal(){modal.classList.remove('open');document.body.style.overflow='';}
document.getElementById('modalClose').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

/* ---------- CURSOR ---------- */
const cursor=document.getElementById('cursor');
const ring=document.getElementById('cursor-ring');
/* Only run the custom cursor on devices with a real (fine) pointer.
   Phones/tablets keep their native cursor and skip the work entirely. */
const FINE_POINTER=window.matchMedia('(hover:hover) and (pointer:fine)').matches;
if(FINE_POINTER&&cursor&&ring){
  let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my,started=false;
  window.addEventListener('mousemove',e=>{
    mx=e.clientX;my=e.clientY;
    if(!started){started=true;rx=mx;ry=my;}
  },{passive:true});
  /* Single rAF loop, GPU-composited translate3d, no CSS position transition.
     Dot tracks 1:1 (instant); ring eases closely behind. */
  (function cursorLoop(){
    cursor.style.transform=`translate3d(${mx}px,${my}px,0) translate(-50%,-50%)`;
    rx+=(mx-rx)*0.28; ry+=(my-ry)*0.28;
    ring.style.transform=`translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
    requestAnimationFrame(cursorLoop);
  })();
}else{
  if(cursor)cursor.style.display='none';
  if(ring)ring.style.display='none';
  document.body.style.cursor='auto';
}
function bindCursor(){
  document.querySelectorAll('a,button,.service-card,.card-3d,.tech-item,.team-card,.sqa-item,.t-dot,.mood-opt,.contact-item.copyable,.faq-q,.toggle-switch,.sound-switch').forEach(el=>{
    if(el.dataset.cb)return; el.dataset.cb='1';
    el.addEventListener('mouseenter',()=>document.body.classList.add('cursor-grow'));
    el.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-grow'));
  });
}

/* ---------- MAGNETIC ---------- */
function bindMagnetic(){
  document.querySelectorAll('.magnetic').forEach(el=>{
    if(el.dataset.mag)return; el.dataset.mag='1';
    el.addEventListener('mousemove',e=>{
      const r=el.getBoundingClientRect();
      const x=e.clientX-r.left-r.width/2;
      const y=e.clientY-r.top-r.height/2;
      el.style.transform=`translate(${x*0.3}px,${y*0.4}px)`;
    });
    el.addEventListener('mouseleave',()=>{el.style.transform='';});
  });
}

/* ---------- DATA-SCROLL BUTTONS ---------- */
function bindScrollBtns(){
  document.querySelectorAll('[data-scroll]').forEach(el=>{
    if(el.dataset.sb)return; el.dataset.sb='1';
    el.addEventListener('click',()=>{const t=document.querySelector(el.dataset.scroll);if(t)t.scrollIntoView({behavior:'smooth'});});
  });
}

/* ---------- BG CANVAS PARTICLES ---------- */
(function bgCanvas(){
  const canvas=document.getElementById('bg-canvas');
  const ctx=canvas.getContext('2d');
  function size(){canvas.width=innerWidth;canvas.height=innerHeight;}
  size();addEventListener('resize',size);
  const N=Math.min(80,Math.floor(innerWidth/18));
  const ps=[];
  for(let i=0;i<N;i++)ps.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1.5+.5,a:Math.random()*.4+.1});
  function getColor(){return getComputedStyle(document.documentElement).getPropertyValue('--particle').trim()||'91,47,255';}
  function draw(){
    if(REDUCED){ctx.clearRect(0,0,canvas.width,canvas.height);return;}
    const col=getColor();
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ps.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>canvas.width)p.vx*=-1;
      if(p.y<0||p.y>canvas.height)p.vy*=-1;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(${col},${p.a})`;ctx.fill();
    });
    for(let i=0;i<ps.length;i++)for(let j=i+1;j<ps.length;j++){
      const dx=ps[i].x-ps[j].x,dy=ps[i].y-ps[j].y,d=Math.hypot(dx,dy);
      if(d<120){ctx.beginPath();ctx.moveTo(ps[i].x,ps[i].y);ctx.lineTo(ps[j].x,ps[j].y);ctx.strokeStyle=`rgba(${col},${.08*(1-d/120)})`;ctx.lineWidth=.5;ctx.stroke();}
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ---------- FX CANVAS (click bursts + theme particles) ---------- */
const fxCanvas=document.getElementById('fx-canvas');
const fxCtx=fxCanvas.getContext('2d');
function fxSize(){fxCanvas.width=innerWidth;fxCanvas.height=innerHeight;}
fxSize();addEventListener('resize',fxSize);
let fxParticles=[];
function spawnBurst(x,y){
  if(REDUCED)return;
  const theme=document.documentElement.dataset.theme;
  const col=getComputedStyle(document.documentElement).getPropertyValue('--particle').trim();
  const shapes={dark:'circle',spooky:'circle',magic:'star',euphoric:'circle'};
  const n=theme==='euphoric'?22:14;
  for(let i=0;i<n;i++){
    const ang=(Math.PI*2*i)/n+Math.random()*0.5;
    const sp=Math.random()*4+2;
    fxParticles.push({x,y,vx:Math.cos(ang)*sp,vy:Math.sin(ang)*sp-1,life:1,col,shape:shapes[theme],size:Math.random()*4+2,rot:Math.random()*Math.PI});
  }
}
function fxLoop(){
  if(REDUCED){return;}
  fxCtx.clearRect(0,0,fxCanvas.width,fxCanvas.height);
  fxParticles=fxParticles.filter(p=>p.life>0);
  fxParticles.forEach(p=>{
    p.x+=p.vx;p.y+=p.vy;p.vy+=0.12;p.life-=0.02;p.rot+=0.1;
    fxCtx.save();fxCtx.globalAlpha=Math.max(0,p.life);fxCtx.translate(p.x,p.y);fxCtx.rotate(p.rot);
    fxCtx.fillStyle=`rgb(${p.col})`;
    if(p.shape==='star'){drawStar(fxCtx,0,0,5,p.size,p.size/2);}
    else{fxCtx.beginPath();fxCtx.arc(0,0,p.size,0,Math.PI*2);fxCtx.fill();}
    fxCtx.restore();
  });
  requestAnimationFrame(fxLoop);
}
function drawStar(ctx,cx,cy,spikes,outer,inner){
  let rot=Math.PI/2*3,x=cx,y=cy,step=Math.PI/spikes;
  ctx.beginPath();ctx.moveTo(cx,cy-outer);
  for(let i=0;i<spikes;i++){
    x=cx+Math.cos(rot)*outer;y=cy+Math.sin(rot)*outer;ctx.lineTo(x,y);rot+=step;
    x=cx+Math.cos(rot)*inner;y=cy+Math.sin(rot)*inner;ctx.lineTo(x,y);rot+=step;
  }
  ctx.lineTo(cx,cy-outer);ctx.closePath();ctx.fill();
}
fxLoop();
document.addEventListener('click',e=>{
  if(e.target.closest('.mood-switcher'))return;
  spawnBurst(e.clientX,e.clientY);
  playClick();
});

/* ---------- MAGIC SPARKLE TRAIL ---------- */
let lastSpark=0;
document.addEventListener('mousemove',e=>{
  if(document.documentElement.dataset.theme!=='magic')return;
  if(REDUCED)return;
  const now=Date.now();if(now-lastSpark<40)return;lastSpark=now;
  const col=getComputedStyle(document.documentElement).getPropertyValue('--particle').trim();
  fxParticles.push({x:e.clientX,y:e.clientY,vx:(Math.random()-.5)*1,vy:(Math.random()-.5)*1-.5,life:1,col,shape:'star',size:Math.random()*3+1.5,rot:Math.random()*Math.PI});
});

/* ---------- SCROLL REVEAL ---------- */
function bindReveal(){
  const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
  document.querySelectorAll('.reveal:not(.bound)').forEach(el=>{el.classList.add('bound');obs.observe(el);});
}

/* ---------- COUNTERS ---------- */
function animateCount(el,target,suffix){
  let cur=0;const step=target/60;
  const t=setInterval(()=>{cur=Math.min(cur+step,target);el.textContent=Math.floor(cur)+(suffix||'');if(cur>=target)clearInterval(t);},25);
}
const countObs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){animateCount(e.target,parseInt(e.target.dataset.target),e.target.dataset.suffix);countObs.unobserve(e.target);}});},{threshold:.5});
function bindCounters(){document.querySelectorAll('[data-target]').forEach(el=>countObs.observe(el));}

/* ---------- SQA BARS ---------- */
const barObs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.sqa-bar-fill').forEach(b=>setTimeout(()=>b.style.width=b.dataset.w,150));barObs.unobserve(e.target);}});},{threshold:.4});

/* ---------- TYPEWRITER ---------- */
(function typewriter(){
  const el=document.getElementById('typewriter');
  const phrases=['world-class design.','production-grade software.','custom AI models.','flawless QA testing.','published research.','complete digital solutions.'];
  let pi=0,ci=0,deleting=false;
  function tick(){
    const p=phrases[pi];
    el.textContent=deleting?p.substring(0,ci--):p.substring(0,ci++);
    let delay=deleting?40:75;
    if(!deleting&&ci===p.length+1){deleting=true;delay=1800;}
    else if(deleting&&ci===0){deleting=false;pi=(pi+1)%phrases.length;delay=300;}
    setTimeout(tick,delay);
  }
  setTimeout(tick,1600);
})();

/* ---------- SCRAMBLE ---------- */
class Scrambler{
  constructor(el){this.el=el;this.chars='!<>-_\\/[]{}—=+*^?#________';this.text=el.dataset.text||el.textContent;}
  run(){
    if(REDUCED){this.el.innerHTML=this.text;return;}
    const old=this.el.textContent,len=Math.max(old.length,this.text.length);
    this.queue=[];
    for(let i=0;i<len;i++){const from=old[i]||'';const to=this.text[i]||'';const start=Math.floor(Math.random()*30);const end=start+Math.floor(Math.random()*30);this.queue.push({from,to,start,end});}
    cancelAnimationFrame(this.frame);this.frameReq=0;this.update=this.update.bind(this);this.update();
  }
  update(){
    let out='',done=0;
    for(let i=0;i<this.queue.length;i++){
      let{from,to,start,end,char}=this.queue[i];
      if(this.frameReq>=end){done++;out+=to;}
      else if(this.frameReq>=start){if(!char||Math.random()<.28){char=this.chars[Math.floor(Math.random()*this.chars.length)];this.queue[i].char=char;}out+=`<span style="opacity:.6">${char}</span>`;}
      else out+=from;
    }
    this.el.innerHTML=out;
    if(done===this.queue.length){this.el.innerHTML=this.text;return;}
    this.frameReq++;this.frame=requestAnimationFrame(this.update);
  }
}
const scrambleObs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting&&!e.target.dataset.done){e.target.dataset.done='1';new Scrambler(e.target).run();scrambleObs.unobserve(e.target);}});},{threshold:.6});
function bindScramble(){document.querySelectorAll('.scramble').forEach(el=>scrambleObs.observe(el));}

/* ---------- TESTIMONIAL CAROUSEL ---------- */
(function carousel(){
  const track=document.getElementById('testimonialTrack');
  const dots=document.getElementById('testimonialDots');
  let idx=0;
  function perView(){return innerWidth<=768?1:innerWidth<=1024?2:3;}
  function pages(){return Math.max(1,TESTIMONIALS.length-perView()+1);}
  function build(){dots.innerHTML='';for(let i=0;i<pages();i++){const d=document.createElement('div');d.className='t-dot'+(i===0?' active':'');d.addEventListener('click',()=>{idx=i;render();});dots.appendChild(d);}}
  function render(){
    const card=track.querySelector('.testimonial-card');if(!card)return;
    const gap=24;const w=card.offsetWidth+gap;
    if(idx>pages()-1)idx=0;
    track.style.transform=`translateX(-${idx*w}px)`;
    dots.querySelectorAll('.t-dot').forEach((d,i)=>d.classList.toggle('active',i===idx));
  }
  setTimeout(()=>{build();render();},300);
  setInterval(()=>{idx=(idx+1)%pages();render();},4500);
  addEventListener('resize',()=>{build();render();});
})();

/* ---------- NAV ---------- */
(function navScroll(){
  const navbar=document.getElementById('navbar');
  const prog=document.getElementById('scroll-progress');
  const btt=document.getElementById('backToTop');
  const sections=[...document.querySelectorAll('section[id]')];
  const links=[...document.querySelectorAll('.nav-links a')];
  let ticking=false;
  function update(){
    ticking=false;
    const y=scrollY;
    navbar.classList.toggle('scrolled',y>80);
    const h=document.documentElement.scrollHeight-innerHeight;
    prog.style.width=(h>0?y/h*100:0)+'%';
    btt.classList.toggle('show',y>600);
    let cur='';for(const s of sections){if(y>=s.offsetTop-200)cur=s.id;}
    for(const a of links)a.classList.toggle('active',a.getAttribute('href')==='#'+cur);
  }
  /* rAF-throttled + passive: at most one DOM update per frame while scrolling */
  addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(update);}},{passive:true});
  update();
})();
document.getElementById('backToTop').addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

/* ---------- MOBILE MENU ---------- */
let menuOpen=false;
document.getElementById('menuToggle').addEventListener('click',function(){
  menuOpen=!menuOpen;
  document.getElementById('mobileNav').classList.toggle('open',menuOpen);
  const s=this.querySelectorAll('span');
  if(menuOpen){s[0].style.transform='rotate(45deg) translate(5px,5px)';s[1].style.opacity='0';s[2].style.transform='rotate(-45deg) translate(5px,-5px)';}
  else{s[0].style.transform='';s[1].style.opacity='1';s[2].style.transform='';}
});
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('menuToggle').click()));

/* ---------- BILLING TOGGLE ---------- */
let annual=false;const prices={m:['499','1,299'],a:['399','1,039']};
document.getElementById('billingToggle').addEventListener('click',function(){
  annual=!annual;this.classList.toggle('active',annual);
  document.getElementById('price1').textContent=annual?prices.a[0]:prices.m[0];
  document.getElementById('price2').textContent=annual?prices.a[1]:prices.m[1];
});

/* ---------- FORM ---------- */
document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  const n=document.getElementById('notification');
  n.classList.add('show');setTimeout(()=>n.classList.remove('show'),4000);
  this.reset();spawnBurst(innerWidth/2,innerHeight/2);
});

/* ---------- COPY EMAIL ---------- */
document.querySelectorAll('.contact-item.copyable').forEach(el=>{
  el.addEventListener('click',()=>{
    navigator.clipboard?.writeText(el.dataset.copy);
    const hint=el.querySelector('.copy-hint');const o=hint.textContent;hint.textContent='copied!';setTimeout(()=>hint.textContent=o,1500);
  });
});

/* ---------- TILT ON SERVICE CARDS ---------- */
function bindTilt(){
  document.querySelectorAll('.service-card').forEach(card=>{
    if(card.dataset.tilt)return;card.dataset.tilt='1';
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5;
      const y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(800px) rotateY(${x*6}deg) rotateX(${-y*6}deg)`;
    });
    card.addEventListener('mouseleave',()=>card.style.transform='');
  });
}

/* ---------- MOOD SWITCHER ---------- */
const moodToggle=document.getElementById('moodToggle');
const moodPanel=document.getElementById('moodPanel');
moodToggle.addEventListener('click',e=>{e.stopPropagation();moodPanel.classList.toggle('open');});
document.addEventListener('click',e=>{if(!e.target.closest('.mood-switcher'))moodPanel.classList.remove('open');});
let batTimer=null,confettiTimer=null;
document.querySelectorAll('.mood-opt').forEach(opt=>{
  opt.addEventListener('click',()=>{
    const mood=opt.dataset.mood;
    document.documentElement.dataset.theme=mood;
    document.querySelectorAll('.mood-opt').forEach(o=>o.classList.remove('active'));
    opt.classList.add('active');
    moodToggle.querySelector('.mood-toggle-icon').textContent={dark:'🌑',spooky:'🎃',magic:'🪄',euphoric:'🌈'}[mood];
    try{localStorage.setItem('mbd-mood',mood);}catch(err){}
    clearInterval(batTimer);clearInterval(confettiTimer);
    if(!REDUCED&&mood==='spooky'){batTimer=setInterval(spawnBat,2600);spawnBat();}
    if(!REDUCED&&mood==='euphoric'){confettiTimer=setInterval(()=>spawnConfetti(),1800);spawnConfetti();}
    spawnBurst(innerWidth-70,innerHeight/2);
  });
});
/* restore saved mood on load */
(function restoreMood(){
  let saved;try{saved=localStorage.getItem('mbd-mood');}catch(err){}
  if(saved&&saved!=='dark'){
    const opt=document.querySelector(`.mood-opt[data-mood="${saved}"]`);
    if(opt)opt.click();
  }
})();
function spawnBat(){
  const b=document.createElement('div');
  b.className='bat';b.textContent='🦇';
  b.style.cssText=`top:${Math.random()*55}%;left:-60px;font-size:${Math.random()*18+16}px;animation-duration:${Math.random()*3+4}s`;
  document.body.appendChild(b);setTimeout(()=>b.remove(),7000);
}
function spawnConfetti(){
  if(REDUCED)return;
  const col=['#ff5e3a','#9b30ff','#00e676','#ffd23f','#00e5ff'];
  for(let i=0;i<24;i++)fxParticles.push({x:Math.random()*innerWidth,y:-10,vx:(Math.random()-.5)*2,vy:Math.random()*3+2,life:1.4,col:hexToRgb(col[i%col.length]),shape:Math.random()<.5?'star':'circle',size:Math.random()*4+3,rot:Math.random()*Math.PI});
}
function hexToRgb(h){const n=parseInt(h.slice(1),16);return`${(n>>16)&255},${(n>>8)&255},${n&255}`;}

/* ---------- SOUND (web audio ambient + clicks) ---------- */
let audioCtx=null,soundOn=false,droneOsc=null,droneGain=null;
document.getElementById('soundSwitch').addEventListener('click',function(){
  soundOn=!soundOn;this.classList.toggle('on',soundOn);
  if(soundOn){ensureAudio();startDrone();}else stopDrone();
});
function ensureAudio(){if(!audioCtx)audioCtx=new (window.AudioContext||window.webkitAudioContext)();if(audioCtx.state==='suspended')audioCtx.resume();}
function startDrone(){
  ensureAudio();stopDrone();
  droneOsc=audioCtx.createOscillator();droneGain=audioCtx.createGain();
  droneOsc.type='sine';droneOsc.frequency.value=72;
  const osc2=audioCtx.createOscillator();osc2.type='sine';osc2.frequency.value=108;
  droneGain.gain.value=0.04;
  droneOsc.connect(droneGain);osc2.connect(droneGain);droneGain.connect(audioCtx.destination);
  droneOsc.start();osc2.start();droneOsc._extra=osc2;
}
function stopDrone(){if(droneOsc){try{droneOsc.stop();droneOsc._extra.stop();}catch(e){}droneOsc=null;}}
function playClick(){
  if(!soundOn||!audioCtx)return;
  const o=audioCtx.createOscillator(),g=audioCtx.createGain();
  o.type='triangle';o.frequency.value=600+Math.random()*200;
  g.gain.setValueAtTime(0.06,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(0.001,audioCtx.currentTime+0.15);
  o.connect(g);g.connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+0.15);
}

/* ---------- LIVE TOAST ---------- */
(function liveToast(){
  const toast=document.getElementById('liveToast');
  const txt=document.getElementById('liveText');
  const events=[
    ['Sarah','requested a quote for AI development'],['Imran','started a logo design project'],
    ['A startup','booked a full SQA audit'],['Dr. Chen','requested research assistance'],
    ['Maya','hired us for a mobile app'],['TechCorp','signed an Enterprise plan'],
    ['Leo','requested a brand identity'],['A clinic','booked a web platform build']
  ];
  function show(){
    const[who,what]=events[Math.floor(Math.random()*events.length)];
    txt.innerHTML=`<b>${who}</b> just ${what}`;
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'),4500);
  }
  setTimeout(function loop(){show();setTimeout(loop,Math.random()*8000+9000);},6000);
})();

/* ---------- KONAMI ---------- */
(function konami(){
  const code=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let pos=0;
  addEventListener('keydown',e=>{
    pos=(e.key.toLowerCase()===code[pos].toLowerCase()||e.key===code[pos])?pos+1:0;
    if(pos===code.length){pos=0;party();}
  });
  function party(){
    const banner=document.getElementById('konamiBanner');
    banner.classList.add('show');
    let n=0;const iv=setInterval(()=>{spawnConfetti();spawnBurst(Math.random()*innerWidth,Math.random()*innerHeight);if(++n>16)clearInterval(iv);},250);
    setTimeout(()=>banner.classList.remove('show'),3500);
  }
})();

/* ---------- COMMAND PALETTE (⌘K / Ctrl+K) ---------- */
(function cmdk(){
  const overlay=document.getElementById('cmdkOverlay');
  const input=document.getElementById('cmdkInput');
  const results=document.getElementById('cmdkResults');
  const hint=document.getElementById('cmdkHint');
  if(!overlay)return;

  const go=sel=>()=>{closePalette();const t=document.querySelector(sel);if(t)t.scrollIntoView({behavior:'smooth'});};
  const nav=[
    {ico:'⌂',label:'Top / Home',group:'Navigate',run:()=>{closePalette();scrollTo({top:0,behavior:'smooth'});}},
    {ico:'🛠',label:'Services',group:'Navigate',run:go('#services')},
    {ico:'💼',label:'Our Work',group:'Navigate',run:go('#showcase')},
    {ico:'🔄',label:'Process',group:'Navigate',run:go('#process')},
    {ico:'📚',label:'Research',group:'Navigate',run:go('#research')},
    {ico:'🛡',label:'SQA / Testing',group:'Navigate',run:go('#sqa')},
    {ico:'👥',label:'Team',group:'Navigate',run:go('#about')},
    {ico:'💳',label:'Pricing',group:'Navigate',run:go('#pricing')},
    {ico:'❓',label:'FAQ',group:'Navigate',run:go('#faq')},
    {ico:'✉',label:'Contact',group:'Navigate',run:go('#contact')}
  ];
  const svc=SERVICES.map((s,i)=>({ico:s.icon,label:s.name,sub:'Open details',group:'Services',run:()=>{closePalette();openModal(i);}}));
  const moodRun=m=>()=>{closePalette();const o=document.querySelector(`.mood-opt[data-mood="${m}"]`);if(o)o.click();};
  const actions=[
    {ico:'✦',label:'Get a Quote',sub:'Contact',group:'Actions',run:go('#contact')},
    {ico:'🌑',label:'Vibe: Midnight',group:'Actions',run:moodRun('dark')},
    {ico:'🎃',label:'Vibe: Spooky',group:'Actions',run:moodRun('spooky')},
    {ico:'🪄',label:'Vibe: Magician',group:'Actions',run:moodRun('magic')},
    {ico:'🌈',label:'Vibe: Euphoric',group:'Actions',run:moodRun('euphoric')},
    {ico:'🔊',label:'Toggle Ambient Sound',group:'Actions',run:()=>{const s=document.getElementById('soundSwitch');if(s)s.click();}},
    {ico:'📋',label:'Copy Email Address',sub:'hello@mbdagency.com',group:'Actions',run:()=>{navigator.clipboard?.writeText('hello@mbdagency.com');closePalette();}}
  ];
  const ALL=[...nav,...svc,...actions];
  let flat=[],active=0;

  function render(items){
    results.innerHTML='';flat=[];
    if(!items.length){results.innerHTML='<div class="cmdk-empty">No matches. Try “AI”, “pricing”, or “spooky”.</div>';return;}
    let lastGroup='';
    items.forEach(it=>{
      if(it.group!==lastGroup){lastGroup=it.group;const g=document.createElement('div');g.className='cmdk-group-label';g.textContent=it.group;results.appendChild(g);}
      const el=document.createElement('div');
      el.className='cmdk-item';el.setAttribute('role','option');
      el.innerHTML=`<span class="cmdk-ico">${it.ico}</span><span class="cmdk-label">${it.label}</span>${it.sub?`<span class="cmdk-sub">${it.sub}</span>`:''}`;
      const idx=flat.length;
      el.addEventListener('click',it.run);
      el.addEventListener('mousemove',()=>setActive(idx));
      results.appendChild(el);flat.push({el,run:it.run});
    });
    active=0;paint();
  }
  function paint(){flat.forEach((f,i)=>f.el.classList.toggle('active',i===active));}
  function setActive(i){active=i;paint();}
  function move(d){if(!flat.length)return;active=(active+d+flat.length)%flat.length;paint();flat[active].el.scrollIntoView({block:'nearest'});}
  function filter(q){
    q=q.trim().toLowerCase();
    if(!q)return render(ALL);
    render(ALL.filter(it=>(it.label+' '+(it.sub||'')+' '+it.group).toLowerCase().includes(q)));
  }
  function openPalette(){overlay.classList.add('open');input.value='';render(ALL);setTimeout(()=>input.focus(),60);hint.classList.add('hide');}
  function closePalette(){overlay.classList.remove('open');hint.classList.remove('hide');}

  input.addEventListener('input',()=>filter(input.value));
  input.addEventListener('keydown',e=>{
    if(e.key==='ArrowDown'){e.preventDefault();move(1);}
    else if(e.key==='ArrowUp'){e.preventDefault();move(-1);}
    else if(e.key==='Enter'){e.preventDefault();if(flat[active])flat[active].run();}
    else if(e.key==='Escape'){e.preventDefault();closePalette();}
  });
  overlay.addEventListener('click',e=>{if(e.target===overlay)closePalette();});
  hint.addEventListener('click',openPalette);
  window.addEventListener('keydown',e=>{
    if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();overlay.classList.contains('open')?closePalette():openPalette();}
  });
})();

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded',()=>{
  buildContent();
  bindReveal();bindCounters();bindScramble();bindTilt();bindMagnetic();bindCursor();bindScrollBtns();
  barObs.observe(document.getElementById('sqa-bars'));
});
