/*! catalog-update.js – Nov 2026
 * - Rimuove Nastro Poliestere singolo 15mm dal catalogo
 * - Quantità minima: 100 pezzi (niente più 50)
 * - Diciture: stampa 1-6 colori entrambi i lati; impianti stampa gratis
 */
(function () {
  if (window.__catalogUpdate) return;
  window.__catalogUpdate = 1;

  if (!document.getElementById('catalog-update-css')) {
    var st = document.createElement('style');
    st.id = 'catalog-update-css';
    st.textContent = [
      '.product-claims{list-style:none;padding:0;margin:12px 0;display:flex;flex-direction:column;gap:8px}',
      '.product-claims li{background:#e8f5e9;border:1px solid #a5d6a7;border-radius:10px;padding:10px 12px;font-size:.92rem;font-weight:700;color:#1b5e20}',
      '.product-claims li::before{content:"✓ ";color:#2e7d32;font-weight:900}',
      '.qty-badge,.qty-banner{font-weight:700}'
    ].join('');
    document.head.appendChild(st);
  }

  function textReplace(root) {
    var walk = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT, null);
    var node;
    while ((node = walk.nextNode())) {
      var v = node.nodeValue;
      if (!v || v.indexOf('50') === -1) continue;
      var n = v
        .replace(/da 50[\s–\-]*100 pezzi/gi, 'da 100 pezzi')
        .replace(/50[\s–\-]*100 pezzi/gi, '100 pezzi')
        .replace(/Min\.\s*50[\s–\-]*100/gi, 'Min. 100')
        .replace(/minimo\s*50[\s–\-]*100/gi, 'minimo 100')
        .replace(/Preventivo gratis da 50 pezzi/gi, 'Preventivo gratis da 100 pezzi')
        .replace(/Preventivo gratuito da 50 pezzi/gi, 'Preventivo gratuito da 100 pezzi')
        .replace(/da 50 pezzi/gi, 'da 100 pezzi');
      if (n !== v) node.nodeValue = n;
    }
  }

  function removePoliestere15() {
    document.querySelectorAll('.card, .related-item').forEach(function (el) {
      var t = (el.textContent || '') + ' ' + (el.getAttribute('href') || '') + ' ' + ((el.querySelector('a') || {}).href || '');
      if (/poliestere\s+singolo\s+15|poliestere-singolo-15/i.test(t)) el.remove();
    });
    document.querySelectorAll('a[href*="poliestere-singolo-15"]').forEach(function (a) {
      var card = a.closest('.card, .related-item, article, li');
      if (card) card.remove();
      else a.remove();
    });
    if (window.lanyards && Array.isArray(window.lanyards)) {
      window.lanyards = window.lanyards.filter(function (p) {
        return !(p && (p.id === 'L5' || /poliestere singolo 15/i.test(p.title || '')));
      });
    }
    if (window.productSlugs && window.productSlugs.L5) delete window.productSlugs.L5;
  }

  function injectClaims() {
    var info = document.querySelector('.product-info');
    if (!info || info.querySelector('.product-claims')) return;
    if (/poliestere-singolo-15/i.test(location.pathname || '')) return;
    var ul = document.createElement('ul');
    ul.className = 'product-claims';
    ul.innerHTML = '<li>Stampa logo da 1 a 6 colori, entrambi i lati</li><li>Impianti stampa gratis</li>';
    var qty = info.querySelector('.qty-banner');
    if (qty) qty.after(ul);
    else {
      var h1 = info.querySelector('h1');
      if (h1) h1.after(ul);
      else info.insertBefore(ul, info.firstChild);
    }
  }

  function fixFormMin() {
    document.querySelectorAll('input[name="quantita"]').forEach(function (inp) {
      inp.min = '100';
      if (inp.placeholder) inp.placeholder = inp.placeholder.replace(/50[\s–\-]*100/g, '100').replace(/\b50\b/g, '100');
    });
  }

  function run() {
    try {
      removePoliestere15();
      textReplace(document.body);
      injectClaims();
      fixFormMin();
    } catch (e) {}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
  setTimeout(run, 400);
  setTimeout(run, 1200);
})();
