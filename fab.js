/* FAB cornetta + form bind + tel force - tracking preservato */
(function(){
  function initFab(){
    var fab=document.getElementById('contactFab');
    var btn=document.getElementById('contactFabBtn');
    if(!fab||!btn)return;
    if(btn.dataset.fabBound)return;
    btn.dataset.fabBound='1';
    btn.addEventListener('click',function(e){
      e.preventDefault();
      e.stopPropagation();
      fab.classList.toggle('open');
    });
    document.addEventListener('click',function(e){
      if(!fab.contains(e.target))fab.classList.remove('open');
    });
    fab.querySelectorAll('a.contact-option').forEach(function(link){
      link.addEventListener('click',function(e){
        e.stopPropagation();
        var href=link.getAttribute('href')||'';
        if(href.indexOf('tel:')===0){
          e.preventDefault();
          window.location.href=href;
        }
        setTimeout(function(){fab.classList.remove('open');},300);
      });
    });
  }
  function bindForm(){
    var form=document.getElementById('contactForm');
    if(!form||form.dataset.bound)return;
    form.dataset.bound='1';
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var btn=form.querySelector('button[type=submit]');
      var t=btn?btn.textContent:'';
      if(btn){btn.disabled=true;btn.textContent='Invio in corso...';}
      fetch(form.action,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}})
        .then(function(r){
          if(r.ok){
            window.dataLayer=window.dataLayer||[];
            var prod=form.querySelector('[name=prodotto]');
            window.dataLayer.push({event:'invio_form_contatti',form_name:'scheda_prodotto',product_name:prod?prod.value:'',event_category:'conversion'});
            alert('\u2705 Richiesta inviata a commerciale@ecolanyards.it e info@supernet.biz.pl');
            form.reset();
            form.dataset.submitted='1';
          }else throw 0;
        })
        .catch(function(){form.submit();})
        .finally(function(){if(btn){btn.disabled=false;btn.textContent=t;}});
    });
  }
  /* tel: forza chiamata + evento click_telefono (dedup via dataset sul link gestito in app.js) */
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[href^="tel:"], .track-phone');
    if(!a)return;
    var href=a.getAttribute('href')||'';
    if(href.indexOf('tel:')===0){
      e.preventDefault();
      window.location.href=href;
    }
  },true);
  function init(){initFab();bindForm();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
  else init();
})();

/* Assicura CC a info@supernet.biz.pl su tutti i form FormSubmit */
(function(){
  function ensureCc(form){
    if(!form || !form.action || form.action.indexOf('formsubmit.co') === -1) return;
    var existing = form.querySelector('input[name="_cc"]');
    if(existing){
      var vals = existing.value.split(',').map(function(s){return s.trim();}).filter(Boolean);
      if(vals.indexOf('info@supernet.biz.pl') === -1){
        vals.push('info@supernet.biz.pl');
        existing.value = vals.join(',');
      }
      return;
    }
    var cc = document.createElement('input');
    cc.type = 'hidden';
    cc.name = '_cc';
    cc.value = 'info@supernet.biz.pl';
    form.appendChild(cc);
  }
  function applyAll(){
    document.querySelectorAll('form').forEach(ensureCc);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applyAll);
  else applyAll();
})();
