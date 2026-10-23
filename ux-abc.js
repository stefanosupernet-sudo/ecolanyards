(function(){
  if(document.getElementById('ux-abc-css')) return;
  var s=document.createElement('style'); s.id='ux-abc-css';
  s.textContent=".form-contact-hint{grid-column:1/-1;font-size:.9rem;color:#1b5e20;background:#f1f8e9;border-radius:8px;padding:8px 12px;margin:0 0 4px;line-height:1.4}.form-abandon-nudge{position:fixed;left:12px;right:12px;bottom:88px;z-index:990;max-width:420px;margin:0 auto;background:#fff;border:2px solid #25D366;border-radius:14px;padding:14px 40px 14px 16px;box-shadow:0 8px 28px rgba(0,0,0,.18);display:none;flex-direction:column;gap:8px}.form-abandon-nudge.show{display:flex}.form-abandon-nudge p{margin:0;font-size:.95rem;color:#222;font-weight:600}.form-abandon-nudge a{display:inline-block;background:#25D366;color:#fff;text-decoration:none;font-weight:800;padding:10px 16px;border-radius:10px}.form-abandon-nudge .nudge-close{position:absolute;top:8px;right:10px;border:none;background:transparent;font-size:1.4rem;cursor:pointer;color:#666}.form-block{background:#fff;border:2px solid #4caf50;border-radius:14px;padding:18px 16px;margin-top:18px;box-shadow:0 6px 20px rgba(46,125,50,.12)}.form-trust,.form-steps{font-size:.9rem;color:#555;margin:0 0 10px}.form-steps{background:#f1f8e9;padding:8px 10px;border-radius:8px}.sticky-cta{position:fixed;left:0;right:0;bottom:0;z-index:980;display:none;gap:10px;padding:10px 14px;background:rgba(255,255,255,.97);border-top:1px solid #ddd;box-shadow:0 -4px 20px rgba(0,0,0,.12);justify-content:center;flex-wrap:wrap}.sticky-cta.show{display:flex}.sticky-cta a{flex:1;min-width:140px;max-width:280px;text-align:center;text-decoration:none;font-weight:800;padding:12px 14px;border-radius:10px;font-size:.95rem}.sticky-cta .cta-quote{background:#2e7d32;color:#fff}.sticky-cta .cta-wa{background:#25D366;color:#fff}body.has-sticky-cta{padding-bottom:78px}.quick-actions{display:flex;flex-direction:column;gap:10px;margin:14px 0}.quick-actions a{display:block;text-align:center;text-decoration:none;font-weight:800;padding:12px 16px;border-radius:10px}.qa-primary{background:#2e7d32;color:#fff}.qa-wa{background:#e8f5e9;color:#075E54;border:2px solid #25D366}.benefit-box{background:#fff;border:1px solid #c8e6c9;border-radius:12px;padding:14px 16px;margin:14px 0}.benefit-box .benefit-title{font-weight:800;color:#1b5e20;margin:0 0 8px}.product-faq{max-width:1000px;margin:28px auto 8px;padding:0 20px}.product-faq .faq-item{background:#fff;border:1px solid #e0e0e0;border-radius:10px;padding:12px 14px;margin-bottom:10px}.product-faq .faq-item strong{display:block;color:#1b5e20;margin-bottom:4px}.product-faq .faq-cta{text-align:center;margin-top:14px}.product-faq .faq-cta a{display:inline-block;background:#2e7d32;color:#fff;text-decoration:none;font-weight:800;padding:12px 20px;border-radius:10px}.related-intro{font-size:.95rem;color:#555;margin:0 0 14px}.related-footer-cta{margin:18px 0 0;text-align:center}.related-footer-cta a{display:inline-block;background:#e8f5e9;color:#1b5e20;border:2px solid #2e7d32;text-decoration:none;font-weight:800;padding:11px 18px;border-radius:10px}.rel-cta{display:block;margin-top:6px;font-size:.8rem;color:#2e7d32;font-weight:700}@media(max-width:600px){.sticky-cta .cta-wa{flex:1.15;box-shadow:0 2px 10px rgba(37,211,102,.35)}body.has-sticky-cta{padding-bottom:86px}}";
  document.head.appendChild(s);
})();
/* UX A+B+C */
(function(){
  function $$(sel, root){ return Array.prototype.slice.call((root||document).querySelectorAll(sel)); }
  function productName(form){
    var pf = form && form.querySelector('[name=prodotto]');
    if(pf && pf.value) return pf.value;
    var h1 = document.querySelector('.product-info h1, h1');
    return h1 ? h1.textContent.trim() : 'laccetti/portabadge';
  }
  function waHref(form){
    return 'https://wa.me/393358109363?text=' + encodeURIComponent('Ciao, vorrei un preventivo per: ' + productName(form));
  }
  function slimForm(form){
    if(!form || form.dataset.slimmed) return;
    form.dataset.slimmed = '1';
    var cognome = form.querySelector('[name=cognome]');
    if(cognome){ cognome.removeAttribute('required'); cognome.placeholder = 'Cognome (opzionale)'; }
    var email = form.querySelector('[name=email]');
    var telefono = form.querySelector('[name=telefono]');
    if(email){ email.removeAttribute('required'); email.placeholder = 'Email (o lascia il telefono)'; email.classList.add('full'); }
    if(telefono){ telefono.removeAttribute('required'); telefono.placeholder = "Telefono (o lascia l'email)"; }
    var nome = form.querySelector('[name=nome]');
    if(nome) nome.placeholder = 'Nome *';
    var azienda = form.querySelector('[name=azienda]');
    if(azienda) azienda.placeholder = 'Azienda (consigliato)';
    var quantita = form.querySelector('[name=quantita]');
    if(quantita) quantita.placeholder = 'Quantita indicativa (es. 200) *';
    var desc = form.querySelector('[name=descrizione], textarea');
    if(desc){ desc.placeholder = 'Note (es. fiera Milano, colori logo) - opzionale'; desc.rows = 3; }
    if(!form.querySelector('.form-contact-hint')){
      var hint = document.createElement('p');
      hint.className = 'form-contact-hint';
      hint.innerHTML = 'Bastano <strong>nome</strong>, <strong>quantita</strong> e <strong>email o telefono</strong>. Circa 30 secondi.';
      var first = form.querySelector('input:not([type=hidden])');
      if(first) form.insertBefore(hint, first); else form.insertBefore(hint, form.firstChild);
    }
    var btn = form.querySelector('button[type=submit]');
    if(btn) btn.textContent = 'Invia richiesta preventivo gratis';
  }
  function bindFormValidation(form){
    if(!form || form.dataset.abcBound) return;
    form.dataset.abcBound = '1';
    form.addEventListener('submit', function(e){
      var email = ((form.querySelector('[name=email]')||{}).value||'').trim();
      var tel = ((form.querySelector('[name=telefono]')||{}).value||'').trim();
      if(!email && !tel){
        e.preventDefault();
        e.stopImmediatePropagation();
        alert('Inserisci almeno email oppure telefono per ricevere il preventivo.');
        var el = form.querySelector('[name=email]') || form.querySelector('[name=telefono]');
        if(el) el.focus();
      }
    }, true);
  }
  function abandonNudge(form){
    if(!form || form.dataset.abandonBound) return;
    form.dataset.abandonBound = '1';
    var touched = false;
    form.addEventListener('input', function(){ touched = true; }, true);
    form.addEventListener('focusout', function(){
      if(form.dataset.submitted || form.dataset.nudgeDismissed || !touched) return;
      setTimeout(function(){
        if(form.contains(document.activeElement) || form.dataset.submitted) return;
        var hasData = false;
        $$('input:not([type=hidden]), textarea', form).forEach(function(el){ if((el.value||'').trim()) hasData = true; });
        if(!hasData) return;
        var nudge = document.getElementById('formAbandonNudge');
        if(!nudge){
          nudge = document.createElement('div');
          nudge.id = 'formAbandonNudge';
          nudge.className = 'form-abandon-nudge';
          nudge.innerHTML = '<p>Preferisci WhatsApp? Scrivici in 10 secondi e ti diamo il prezzo.</p><a class="track-whatsapp" href="'+waHref(form)+'" target="_blank" rel="noopener">Apri WhatsApp</a><button type="button" class="nudge-close" aria-label="Chiudi">x</button>';
          document.body.appendChild(nudge);
          nudge.querySelector('.nudge-close').onclick = function(){ nudge.classList.remove('show'); form.dataset.nudgeDismissed='1'; };
        }
        nudge.classList.add('show');
      }, 280);
    });
  }
  function enhance(){
    var form = document.getElementById('contactForm') || document.querySelector('form[action*="formsubmit"]');
    if(!form) return;
    if(!form.id) form.id = 'contactForm';
    slimForm(form);
    bindFormValidation(form);
    abandonNudge(form);
    if(!form.closest('.form-block')){
      var h2=null, prev=form.previousElementSibling;
      while(prev){ if(prev.tagName==='H2'){ h2=prev; break; } prev=prev.previousElementSibling; }
      var block=document.createElement('div');
      block.className='form-block'; block.id='preventivo';
      if(h2){ h2.parentNode.insertBefore(block,h2); block.appendChild(h2);
        if(h2.textContent && h2.textContent.indexOf('preventivo')===-1) h2.textContent='Richiedi preventivo gratuito';
      } else form.parentNode.insertBefore(block, form);
      if(!block.querySelector('.form-trust')){
        var trust=document.createElement('p'); trust.className='form-trust';
        trust.innerHTML='\u2713 Preventivo <strong>gratuito</strong> \u00b7 \u2713 Risposta in breve tempo \u00b7 \u2713 Produzione Made in Italy \u00b7 Min. 50\u2013100 pezzi';
        block.appendChild(trust);
      }
      if(!block.querySelector('.form-steps')){
        var steps=document.createElement('p'); steps.className='form-steps';
        steps.innerHTML='<strong>3 passi:</strong> 1) Compila i dati \u00b7 2) Invia \u00b7 3) Ricevi il prezzo personalizzato';
        block.appendChild(steps);
      }
      block.appendChild(form);
    }
    var info = document.querySelector('.product-info');
    var wh = waHref(form);
    if(info && !info.querySelector('.quick-actions')){
      var qa=document.createElement('div'); qa.className='quick-actions';
      qa.innerHTML='<a class="qa-primary" href="#contactForm">Richiedi preventivo gratis</a><a class="qa-wa track-whatsapp" href="'+wh+'" target="_blank" rel="noopener">WhatsApp \u00b7 prezzo in 10 secondi</a>';
      var h1=info.querySelector('h1');
      if(h1) h1.after(qa); else info.insertBefore(qa, info.firstChild);
    }
    if(info && !info.querySelector('.benefit-box')){
      var box=document.createElement('div'); box.className='benefit-box';
      box.innerHTML='<p class="benefit-title">Perche scegliere questo modello</p><ul><li>Preventivo <strong>gratuito</strong> e senza impegno</li><li>Produzione diretta <strong>Made in Italy</strong></li><li>Ideale per fiere, congressi ed eventi</li><li>Personalizzazione logo e colori</li><li>Quantita da <strong>50\u2013100 pezzi</strong></li></ul>';
      var qaEl=info.querySelector('.quick-actions');
      if(qaEl) qaEl.after(box); else info.appendChild(box);
    }
    if(!document.getElementById('stickyCtaBar')){
      var bar=document.createElement('div');
      bar.id='stickyCtaBar'; bar.className='sticky-cta';
      bar.innerHTML='<a class="cta-quote" href="#contactForm">Preventivo gratis</a><a class="cta-wa track-whatsapp" href="'+wh+'" target="_blank" rel="noopener">WhatsApp \u00b7 prezzo rapido</a>';
      document.body.appendChild(bar);
      document.body.classList.add('has-sticky-cta');
      function toggleBar(){
        var r=form.getBoundingClientRect();
        bar.classList.toggle('show', !(r.top < window.innerHeight && r.bottom > 80));
      }
      window.addEventListener('scroll', toggleBar, {passive:true});
      toggleBar();
    }
    if(!document.querySelector('.product-faq')){
      var isBadge=/portabadge|badge/i.test(location.pathname+(document.title||''));
      var items = isBadge ? [
        ['Quantita minima?','Da <strong>50\u2013100 pezzi</strong>.'],
        ['Tempi di consegna?','Orientativi <strong>3\u20137 giorni lavorativi</strong>.'],
        ['Come richiedere il prezzo?','Form sopra, <a href="'+wh+'" class="track-whatsapp" target="_blank" rel="noopener">WhatsApp</a> o <a href="tel:+393358109363" class="track-phone">335 810 9363</a>.'],
        ['Si abbinano ai laccetti?','Si: <a href="laccetti.html">laccetti personalizzati</a> + portabadge.']
      ] : [
        ['Quantita minima?','Da <strong>50\u2013100 pezzi</strong>.'],
        ['Tempi di consegna?','Orientativi <strong>3\u20137 giorni lavorativi</strong>.'],
        ['Come richiedere il preventivo?','Form, <a href="'+wh+'" class="track-whatsapp" target="_blank" rel="noopener">WhatsApp</a> o <a href="tel:+393358109363" class="track-phone">335 810 9363</a>.'],
        ['Che stampa usate?','<strong>Sublimazione</strong> (full color) e <strong>serigrafia</strong> (pochi colori).']
      ];
      var faq=document.createElement('section'); faq.className='product-faq';
      var html='<h2>Domande frequenti</h2><p class="faq-intro">Risposte rapide prima di richiedere il preventivo:</p>';
      items.forEach(function(p){ html+='<div class="faq-item"><strong>'+p[0]+'</strong><span>'+p[1]+'</span></div>'; });
      html+='<p class="faq-cta"><a href="#contactForm">Richiedi preventivo gratis \u2192</a></p>';
      faq.innerHTML=html;
      var rel=document.querySelector('.related-section');
      if(rel) rel.parentNode.insertBefore(faq, rel);
      else form.parentNode.appendChild(faq);
    }
    var relSection=document.querySelector('.related-section');
    if(relSection && !relSection.dataset.uxRelated){
      relSection.dataset.uxRelated='1';
      var rh2=relSection.querySelector('h2');
      if(rh2) rh2.textContent='Hai visto anche questi modelli?';
      if(!relSection.querySelector('.related-intro')){
        var intro=document.createElement('p'); intro.className='related-intro';
        intro.innerHTML='Confronta un altro modello e <strong>richiedi preventivo</strong> \u2014 oppure resta qui e invia la richiesta per questo prodotto.';
        if(rh2) rh2.after(intro);
      }
      if(!relSection.querySelector('.related-footer-cta')){
        var foot=document.createElement('p'); foot.className='related-footer-cta';
        foot.innerHTML='<a href="#contactForm">Preferisci questo modello? Richiedi preventivo gratis \u2192</a>';
        relSection.appendChild(foot);
      }
    }
    $$('.related-item').forEach(function(a){
      if(a.querySelector('.rel-cta')) return;
      var span=document.createElement('span'); span.className='rel-cta'; span.textContent='Vedi e richiedi preventivo \u2192';
      a.appendChild(span);
      if(a.href && a.href.indexOf('#')===-1) a.href=a.href.split('#')[0]+'#contactForm';
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', enhance);
  else enhance();
})();
