# EcoLanyards – Sito preventivi

Repository del sito statico EcoLanyards (lanyards + badge).

## Funzionalità
- 10 Lanyards + 10 Badge con scheda prodotto e form preventivo
- Form → `commerciale@ecolanyards.it` (FormSubmit)
- GTM: `GTM-K78FC5JR`
- Consent Mode v2 (default denied UE) + banner cookie GDPR
- Eventi conversione: `click_telefono`, `click_whatsapp`, `invio_form_contatti`
- Quantità minima evidenziata (50-100 pezzi)
- FAB Chiama / WhatsApp (335 810 9363)

## Deploy
Usa il file **`index.html`** completo (standalone). Abilita GitHub Pages sulla branch `main` se vuoi pubblicarlo.

## GTM – attivatori eventi personalizzati
| Evento | Uso |
|--------|-----|
| `click_telefono` | Click link telefono |
| `click_whatsapp` | Click WhatsApp |
| `invio_form_contatti` | Form inviato con successo |
| `cookie_consent_update` | Preferenze cookie salvate |

In GA4 marca i primi 3 come conversioni. Nei tag GA4/Ads imposta i requisiti di consenso (`analytics_storage` / `ad_storage`).

## Cookie / Consent Mode v2
Prima di GTM sono impostati i default:
- analytics e ads: **denied**
- functionality e security: **granted**

Il banner permette Accetta tutto / Rifiuta / Personalizza e aggiorna il consenso con `gtag('consent','update',...)`.
