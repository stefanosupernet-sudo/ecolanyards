/* FAB cornetta + form bind - standalone */
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
            alert('✅ Richiesta inviata a commerciale@ecolanyards.it');
            form.reset();
          }else throw 0;
        })
        .catch(function(){form.submit();})
        .finally(function(){if(btn){btn.disabled=false;btn.textContent=t;}});
    });
  }
  function init(){initFab();bindForm();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
  else init();
})();
