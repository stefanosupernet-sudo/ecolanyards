/* Loader: base app + UX A+B+C + listing heroes */
(function(){
  function load(src, cb){
    var s=document.createElement('script');
    s.src=src; s.onload=cb||function(){};
    s.onerror=function(){ if(cb) cb(); };
    document.head.appendChild(s);
  }
  /* A: hero + trust on listing pages */
  function enhanceListing(){
    var hero=document.querySelector('section.hero');
    if(!hero || hero.dataset.trust) return;
    hero.dataset.trust='1';
    var path=location.pathname||'';
    var isL=/laccetti/i.test(path);
    var isB=/portabadge/i.test(path);
    var isHome=!isL && !isB;
    var h1=hero.querySelector('h1');
    var p=hero.querySelector('p');
    if(h1){
      if(isL) h1.textContent='Laccetti personalizzati in 3-7 giorni \u00b7 Preventivo gratis da 50 pezzi';
      else if(isB) h1.textContent='Portabadge personalizzati \u00b7 Preventivo gratis da 50 pezzi';
      else if(isHome) h1.textContent='Laccetti personalizzati in 3-7 giorni \u00b7 Preventivo gratis da 50 pezzi';
    }
    if(p && isHome) p.textContent='Produzione diretta Made in Italy \u00b7 PET riciclato \u00b7 Risposta rapida su form o WhatsApp';
    if(!hero.querySelector('.trust-badges')){
      var tb=document.createElement('div');
      tb.className='trust-badges';
      tb.setAttribute('aria-label','Vantaggi');
      tb.innerHTML='<span>Preventivo gratuito</span><span>Min. 50-100 pezzi</span><span>Made in Italy</span><span>Risposta in poche ore</span>';
      var cta=hero.querySelector('.hero-cta');
      if(cta) hero.insertBefore(tb, cta);
      else hero.appendChild(tb);
    }
    if(!document.getElementById('trust-badges-css')){
      var st=document.createElement('style'); st.id='trust-badges-css';
      st.textContent='.trust-badges{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin:0 auto 20px;max-width:640px}.trust-badges span{background:#e8f5e9;color:#1b5e20;border:1px solid #a5d6a7;border-radius:20px;padding:6px 12px;font-size:.85rem;font-weight:700}@media(max-width:600px){.hero h1{font-size:1.45rem!important;line-height:1.25}.hero-cta{width:100%;max-width:320px;margin:6px auto;display:block;box-sizing:border-box}}';
      document.head.appendChild(st);
    }
    /* C: stronger WA banner copy */
    var ban=document.querySelector('.wa-banner a');
    if(ban && ban.textContent.indexOf('10 secondi')===-1){
      ban.textContent='';
      ban.innerHTML='<strong>WhatsApp</strong> \u00b7 chiedi il prezzo in 10 secondi (risposta rapida)';
      var msg=isB?'Ciao, vorrei un preventivo per portabadge':(isL?'Ciao, vorrei un preventivo per laccetti personalizzati':'Ciao, vorrei un preventivo per laccetti/portabadge');
      ban.href='https://wa.me/393358109363?text='+encodeURIComponent(msg);
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', enhanceListing);
  else enhanceListing();

  load('https://cdn.jsdelivr.net/gh/stefanosupernet-sudo/ecolanyards@c928dc99a2491efc36f87dccd251f37dc2377464/app.js', function(){
    load('ux-abc.js?v=20261023abc');
  });
})();
