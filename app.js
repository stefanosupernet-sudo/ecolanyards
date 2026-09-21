/* EcoLanyards app - forms send to commerciale@ecolanyards.it via FormSubmit */
const lanyards = [
    { id: 'L1', title: "Nastro ecologico in PET Riciclato (singolo)", img: "https://ecolanyards.it/writable/mod_articoli/20251209141237-2025-70199-NDP.webp", desc: "Nastro ecologico in PET riciclato da 20 mm, stampa in sublimazione su 2 lati fino a 6 colori. Ideale per congressi e eventi eco-friendly. Quantità minima 100 pz. Tempi di consegna 3-5 giorni." },
    { id: 'L2', title: "Nastro ecologico in PET Riciclato (doppio)", img: "https://ecolanyards.it/writable/mod_articoli/20251209141206-2025-60463-NDP.webp", desc: "Versione doppia più resistente. Stampa sublimazione full color su entrambi i lati. Perfetto per uso intensivo in fiere e eventi." },
    { id: 'L3', title: "Nastro Raso singolo 20mm", img: "https://ecolanyards.it/writable/mod_articoli/20251126111120-2025-41498-NDP.webp", desc: "Nastro in raso di alta qualità da 20 mm, serigrafato o sublimato. Soft touch e aspetto premium." },
    { id: 'L4', title: "Nastro Raso doppio 20mm", img: "https://ecolanyards.it/writable/mod_articoli/20251126121128-2025-52590-NDP.webp", desc: "Nastro raso doppio 20 mm. Maggiore resistenza e finitura elegante. Personalizzabile con logo e testi." },
    { id: 'L5', title: "Nastro Poliestere singolo 15mm", img: "https://ecolanyards.it/writable/mod_articoli/20251209141246-2025-68845-NDP.webp", desc: "Nastro poliestere 15 mm, stampa sublimazione. Compatto e leggero, ideale per badge e portachiavi." },
    { id: 'L6', title: "Nastro Poliestere doppio 20mm", img: "https://ecolanyards.it/writable/mod_articoli/20260108180100-2026-70058-NDP.webp", desc: "Nastro poliestere doppio 20 mm. Ottima tenuta del colore e durata elevata." },
    { id: 'L7', title: "Nastro Raso singolo 15mm", img: "https://ecolanyards.it/writable/mod_articoli/20251209141244-2025-14313-NDP.webp", desc: "Nastro raso 15 mm sublimazione su 2 lati. Ideale per eventi e identificazione personale." },
    { id: 'L8', title: "Lanyards PET – Promo Fiera", img: "https://ecolanyards.it/images/slider/001-pet-fiera.png", desc: "Lanyards in PET riciclato in promozione. Ideali per fiere e congressi. Stampa full color inclusa." },
    { id: 'L9', title: "Lanyards Personalizzati Premium", img: "https://ecolanyards.it/images/slider/promo.jpg", desc: "Soluzione premium per aziende e eventi. Ampia scelta di accessori (moschettoni, clip, yoyo) e finiture." },
    { id: 'L10', title: "Nastro Tubolare Ecologico", img: "https://ecolanyards.it/writable/mod_articoli/20120516110511-2012-35904-NDP.jpg", desc: "Nastro tubolare 10 mm serigrafato. Leggero, resistente e adatto a personalizzazioni semplici." }
];

const badges = [
    { id: 'B1', title: "Badge Pelle / Similpelle Verticale", img: "https://ecolanyards.it/writable/mod_articoli/20260109130127-2026-18273-NDP.webp", desc: "Badge in pelle/similpelle verticale. Elegante e resistente, ideale per eventi corporate e congressi." },
    { id: 'B2', title: "Badge Similpelle Orizzontale", img: "https://ecolanyards.it/writable/mod_articoli/20260109130129-2026-75647-NDP.webp", desc: "Badge in similpelle formato orizzontale/verticale. Finitura premium e comodo da indossare." },
    { id: 'B3', title: "Badge PVC 11x14 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171104-2018-66881-NDP.jpg", desc: "Portabadge in PVC morbido e trasparente 11x14 cm. Perfetto per badge e tessere di grande formato." },
    { id: 'B4', title: "Badge PVC 10.5x7.5 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171127-2018-51561-NDP.jpg", desc: "Badge PVC morbido trasparente 10.5x7.5 cm. Formato standard molto richiesto per eventi." },
    { id: 'B5', title: "Badge PVC 10x15 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171119-2018-89813-NDP.jpg", desc: "Portabadge PVC 10x15 cm. Ampio spazio per tessere e badge identificativi." },
    { id: 'B6', title: "Badge PVC 10x7.5 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171103-2018-43689-NDP.jpg", desc: "Badge PVC morbido 10x7.5 cm. Compatto, leggero e resistente." },
    { id: 'B7', title: "Badge PVC 8x10 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171156-2018-83283-NDP.jpg", desc: "Portabadge PVC 8x10 cm. Formato versatile per badge e biglietti da visita." },
    { id: 'B8', title: "Badge PVC 9x6 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171119-2018-56417-NDP.jpg", desc: "Badge PVC morbido 9x6 cm. Ideale per tessere più piccole e badge da collo." },
    { id: 'B9', title: "Badge Plastica Colorata Rigida", img: "https://ecolanyards.it/writable/mod_articoli/20130326140314-2013-81130-NDP.jpg", desc: "Badge in plastica rigida colorata. Disponibile in più colori, ottimo per distinguere ruoli o aree." },
    { id: 'B10', title: "Badge Plastica Rigida Trasparente", img: "https://ecolanyards.it/writable/mod_articoli/20130326140307-2013-25729-NDP.jpg", desc: "Badge in plastica rigida trasparente. Protezione elevata per tessere e badge stampati." }
];

function renderGrid(containerId, products) {
    const grid = document.getElementById(containerId);
    grid.innerHTML = '';
    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openProduct(p);
        card.innerHTML = `<img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.src='https://ecolanyards.it/images/slider/001-pet-fiera.png'"><div class="card-body"><h3>${p.title}</h3><button class="btn">Dettagli</button></div>`;
        card.querySelector('button').onclick = (e) => { e.stopPropagation(); openProduct(p); };
        grid.appendChild(card);
    });
}

renderGrid('lanyards-grid', lanyards);
renderGrid('badge-grid', badges);

function showPage(page) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    document.getElementById('nav-home').classList.toggle('active', page === 'home');
    document.getElementById('nav-badge').classList.toggle('active', page === 'badge');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openProduct(prod) {
    document.querySelectorAll('.modal-overlay').forEach(m => m.remove());
    const sameCat = (prod.id.startsWith('L') ? lanyards : badges).filter(p => p.id !== prod.id);
    const otherCat = (prod.id.startsWith('L') ? badges : lanyards).slice(0, 2);
    const related = [...sameCat.slice(0, 4), ...otherCat].slice(0, 6);

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">×</button>
            <h2 style="color:var(--dark); margin-bottom:5px;">${prod.title}</h2>
            <img class="main-img" src="${prod.img}" alt="${prod.title}" onerror="this.src='https://ecolanyards.it/images/slider/001-pet-fiera.png'">
            <p style="margin:15px 0; font-size:1.05rem;">${prod.desc}</p>
            <p style="color:#555; font-size:0.95rem;">
                <strong>Materiale:</strong> PET riciclato / Raso / Poliestere / PVC / Similpelle<br>
                <strong>Personalizzazione:</strong> Sublimazione o serigrafia fino a 6 colori<br>
                <strong>Quantità minima:</strong> da 50-100 pezzi • <strong>Consegna:</strong> 3-7 giorni lavorativi
            </p>
            <h3 style="margin:25px 0 10px; color:var(--dark);">Richiedi Informazioni</h3>
            <form id="contactForm" class="form-grid" action="https://formsubmit.co/commerciale@ecolanyards.it" method="POST">
                <input type="hidden" name="_subject" value="Richiesta informazioni: ${prod.title}">
                <input type="hidden" name="prodotto" value="${prod.title}">
                <input type="hidden" name="_template" value="table">
                <input type="hidden" name="_captcha" value="false">
                <input type="text" name="_honey" style="display:none">
                <input type="text" name="nome" placeholder="Nome *" required>
                <input type="text" name="cognome" placeholder="Cognome *" required>
                <input type="text" name="azienda" placeholder="Azienda">
                <input type="tel" name="telefono" placeholder="Telefono *" required>
                <input type="email" name="email" placeholder="Email *" required class="full">
                <input type="number" name="quantita" placeholder="Quantità *" min="50" required>
                <textarea name="descrizione" rows="4" placeholder="Descrizione / Note (colori, accessori, logo, formato...)" class="full"></textarea>
                <button type="submit" class="btn full" style="padding:14px; font-size:1.05rem;">Richiedi Informazioni</button>
            </form>
            <h3 style="margin:35px 0 10px; color:var(--dark);">Prodotti correlati</h3>
            <div class="related" id="related-container"></div>
        </div>
    `;

    const relatedContainer = overlay.querySelector('#related-container');
    related.forEach(r => {
        const item = document.createElement('div');
        item.className = 'related-item';
        item.innerHTML = `<img src="${r.img}" alt="${r.title}" loading="lazy"><p>${r.title}</p>`;
        item.onclick = () => openProduct(r);
        relatedContainer.appendChild(item);
    });

    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

    overlay.querySelector('#contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const form = e.target;
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.disabled = true;
        btn.textContent = 'Invio in corso...';
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        })
        .then(function(res) {
            if (res.ok) {
                alert('✅ Richiesta inviata con successo!\nArriverà a commerciale@ecolanyards.it.\nTi contatteremo al più presto al 335 810 9363.');
                overlay.remove();
            } else { throw new Error('Errore invio'); }
        })
        .catch(function() { form.submit(); })
        .finally(function() { btn.disabled = false; btn.textContent = originalText; });
    });
}

(function() {
    const fab = document.getElementById('contactFab');
    const btn = document.getElementById('contactFabBtn');
    if (!fab || !btn) return;
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        fab.classList.toggle('open');
    });
    document.addEventListener('click', function(e) {
        if (!fab.contains(e.target)) fab.classList.remove('open');
    });
})();
