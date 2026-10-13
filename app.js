/* EcoLanyards app - multi-page SEO + WhatsApp CTA + cookie modal */
const lanyards = [
    { id: 'L1', title: "Nastro ecologico in PET Riciclato (singolo)", img: "https://ecolanyards.it/writable/mod_articoli/20251209141237-2025-70199-NDP.webp", desc: "Nastro ecologico in PET riciclato da 20 mm, stampa sublimazione su 2 lati fino a 6 colori. Ideale per fiere e congressi." },
    { id: 'L2', title: "Nastro ecologico in PET Riciclato (doppio)", img: "https://ecolanyards.it/writable/mod_articoli/20251209141206-2025-60463-NDP.webp", desc: "Versione doppia più resistente. Stampa full color su entrambi i lati." },
    { id: 'L3', title: "Nastro Raso singolo 20mm", img: "https://ecolanyards.it/writable/mod_articoli/20251126111120-2025-41498-NDP.webp", desc: "Nastro in raso di alta qualità da 20 mm." },
    { id: 'L4', title: "Nastro Raso doppio 20mm", img: "https://ecolanyards.it/writable/mod_articoli/20251126121128-2025-52590-NDP.webp", desc: "Nastro raso doppio 20 mm." },
    { id: 'L5', title: "Nastro Poliestere singolo 15mm", img: "https://ecolanyards.it/writable/mod_articoli/20251209141246-2025-68845-NDP.webp", desc: "Nastro poliestere 15 mm." },
    { id: 'L6', title: "Nastro Poliestere doppio 20mm", img: "https://ecolanyards.it/writable/mod_articoli/20260108180100-2026-70058-NDP.webp", desc: "Nastro poliestere doppio 20 mm." },
    { id: 'L7', title: "Nastro Raso singolo 15mm", img: "https://ecolanyards.it/writable/mod_articoli/20251209141244-2025-14313-NDP.webp", desc: "Nastro raso 15 mm." },
    { id: 'L8', title: "Lanyards PET – Promo Fiera", img: "https://ecolanyards.it/images/slider/001-pet-fiera.png", desc: "Lanyards in PET riciclato in promozione per fiere." },
    { id: 'L9', title: "Lanyards Personalizzati Premium", img: "https://ecolanyards.it/images/slider/promo.jpg", desc: "Soluzione premium per aziende e eventi." },
    { id: 'L10', title: "Nastro Tubolare Ecologico", img: "https://ecolanyards.it/writable/mod_articoli/20120516110511-2012-35904-NDP.jpg", desc: "Nastro tubolare 10 mm serigrafato." }
];
const badges = [
    { id: 'B1', title: "Badge Pelle / Similpelle Verticale", img: "https://ecolanyards.it/writable/mod_articoli/20260109130127-2026-18273-NDP.webp", desc: "Badge in pelle/similpelle verticale per congressi." },
    { id: 'B2', title: "Badge Similpelle Orizzontale", img: "https://ecolanyards.it/writable/mod_articoli/20260109130129-2026-75647-NDP.webp", desc: "Badge in similpelle." },
    { id: 'B3', title: "Badge PVC 11x14 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171104-2018-66881-NDP.jpg", desc: "Portabadge PVC 11x14 cm." },
    { id: 'B4', title: "Badge PVC 10.5x7.5 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171127-2018-51561-NDP.jpg", desc: "Badge PVC 10.5x7.5 cm." },
    { id: 'B5', title: "Badge PVC 10x15 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171119-2018-89813-NDP.jpg", desc: "Portabadge PVC 10x15 cm." },
    { id: 'B6', title: "Badge PVC 10x7.5 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171103-2018-43689-NDP.jpg", desc: "Badge PVC 10x7.5 cm." },
    { id: 'B7', title: "Badge PVC 8x10 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171156-2018-83283-NDP.jpg", desc: "Portabadge PVC 8x10 cm." },
    { id: 'B8', title: "Badge PVC 9x6 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171119-2018-56417-NDP.jpg", desc: "Badge PVC 9x6 cm." },
    { id: 'B9', title: "Badge Plastica Colorata Rigida", img: "https://ecolanyards.it/writable/mod_articoli/20130326140314-2013-81130-NDP.jpg", desc: "Badge plastica rigida colorata." },
    { id: 'B10', title: "Badge Plastica Rigida Trasparente", img: "https://ecolanyards.it/writable/mod_articoli/20130326140307-2013-25729-NDP.jpg", desc: "Badge plastica rigida trasparente." }
];
window.productSlugs = {"L1":"laccetto-nastro-pet-riciclato-singolo.html","L2":"laccetto-nastro-pet-riciclato-doppio.html","L3":"laccetto-nastro-raso-singolo-20mm.html","L4":"laccetto-nastro-raso-doppio-20mm.html","L5":"laccetto-nastro-poliestere-singolo-15mm.html","L6":"laccetto-nastro-poliestere-doppio-20mm.html","L7":"laccetto-nastro-raso-singolo-15mm.html","L8":"laccetto-pet-promo-fiera.html","L9":"laccetto-personalizzato-premium.html","L10":"laccetto-nastro-tubolare-ecologico.html","B1":"portabadge-similpelle-verticale.html","B2":"portabadge-similpelle-orizzontale.html","B3":"portabadge-pvc-11x14.html","B4":"portabadge-pvc-10-5x7-5.html","B5":"portabadge-pvc-10x15.html","B6":"portabadge-pvc-10x7-5.html","B7":"portabadge-pvc-8x10.html","B8":"portabadge-pvc-9x6.html","B9":"portabadge-plastica-colorata-rigida.html","B10":"portabadge-plastica-rigida-trasparente.html"};
function renderGrid(containerId, products) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    const limit = parseInt(grid.getAttribute('data-limit') || '0', 10);
    const list = limit > 0 ? products.slice(0, limit) : products;
    grid.innerHTML = '';
    list.forEach(p => {
        const href = (window.productSlugs && window.productSlugs[p.id]) || null;
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.cursor = 'pointer';
        if (href) {
            card.onclick = () => { window.location.href = href; };
            card.innerHTML = `<img src="${p.img}" alt="${p.title}" loading="lazy"><div class="card-body"><h3>${p.title}</h3><span class="qty-badge">Quantità minima: da 50-100 pezzi</span><p class="wa-cta-card"><a href="https://wa.me/393358109363" class="track-whatsapp" target="_blank" rel="noopener" onclick="event.stopPropagation()"><strong>Whatsapp</strong> per grafiche e preventivi immediati</a></p><a class="btn" href="${href}" onclick="event.stopPropagation()">Dettagli</a></div>`;
        } else {
            card.onclick = () => openProduct(p);
            card.innerHTML = `<img src="${p.img}" alt="${p.title}" loading="lazy"><div class="card-body"><h3>${p.title}</h3><span class="qty-badge">Quantità minima: da 50-100 pezzi</span><p class="wa-cta-card"><a href="https://wa.me/393358109363" class="track-whatsapp" target="_blank" rel="noopener" onclick="event.stopPropagation()"><strong>Whatsapp</strong> per grafiche e preventivi immediati</a></p><button class="btn">Dettagli</button></div>`;
            card.querySelector('button').onclick = (e) => { e.stopPropagation(); openProduct(p); };
        }
        grid.appendChild(card);
    });
}
renderGrid('lanyards-grid', lanyards);
renderGrid('badge-grid', badges);
function openProduct(p) {
    const href = (window.productSlugs && window.productSlugs[p.id]) || null;
    if (href) { window.location.href = href; return; }
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `<div class="modal"><button class="modal-close" onclick="this.closest('.modal-overlay').remove()">×</button><div class="modal-body"><img src="${p.img}" alt="${p.title}" style="max-width:100%"><h2>${p.title}</h2><p>${p.desc}</p><a class="btn" href="#">Chiudi</a></div></div>`;
    document.body.appendChild(overlay);
}
(function(){
  function rebindCards(){
    if(!window.productSlugs) return;
    document.querySelectorAll('.product-card').forEach(function(card){
      var h3 = card.querySelector('h3');
      if(!h3) return;
      var title = h3.textContent.trim();
      var id = null;
      var all = (typeof lanyards!=='undefined'?lanyards:[]).concat(typeof badges!=='undefined'?badges:[]);
      for(var i=0;i<all.length;i++){ if(all[i].title===title){ id=all[i].id; break; } }
      var href = id ? window.productSlugs[id] : null;
      if(!href) return;
      card.style.cursor='pointer';
      card.onclick=function(){ window.location.href=href; };
      var btn = card.querySelector('.btn, button');
      if(btn && btn.tagName !== 'A'){
        var a=document.createElement('a');
        a.className='btn'; a.href=href; a.textContent='Dettagli';
        a.onclick=function(e){e.stopPropagation();};
        btn.replaceWith(a);
      }
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', function(){ setTimeout(rebindCards, 50); });
  else setTimeout(rebindCards, 50);
})();
