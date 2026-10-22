# 🍔 BurgerHouse – Bestell-App

Eine einfache Essensbestell-App nach dem Vorbild von Lieferando, umgesetzt am Beispiel des fiktiven Restaurants **BurgerHouse**.  
Das Projekt bildet die grundlegende Logik einer Bestell-App ab: Gerichte auswählen, in den Warenkorb legen, Mengen anpassen und den Gesamtpreis berechnen.

> Lernprojekt im Rahmen meiner Weiterbildung zum Softwareentwickler.

---

## ✨ Funktionen

- **Speisekarte**: Burger, Pizza und Salate werden dynamisch aus einem JavaScript-Objekt gerendert
- **Warenkorb**: Gerichte hinzufügen, Menge erhöhen/verringern oder entfernen; der Button am Gericht zeigt die Anzahl an
- **Preisberechnung**: Zwischensumme, Lieferkosten und Gesamtbetrag werden automatisch aktualisiert
- **Testbestellung**: Bestätigungsdialog nach dem Kauf, der Warenkorb wird geleert
- **Responsive Design**: Auf dem Smartphone mit unterer Navigationsleiste, Warenkorb-Badge und ausklappbarem Warenkorb

## 🛠️ Technologien

| Technologie | Einsatz |
|---|---|
| **HTML5** | Struktur der Seite, `<dialog>` für die Bestellbestätigung |
| **CSS3** | Layout & Styling (Flexbox, Media Queries), lokale Webfonts |
| **JavaScript (Vanilla)** | Rendering, Warenkorb-Logik, Preisberechnung |

Keine Frameworks, keine Bibliotheken: bewusst reines HTML, CSS und JavaScript.

## 📁 Projektstruktur

```
Bestellapp/
├── index.html
├── script.js           # Logik: Rendering, Warenkorb, Berechnung
├── style.css           # Grundlayout
├── scripts/
│   ├── db.js           # Daten: Speisekarte, Warenkorb, Lieferkosten
│   └── template.js     # Reine HTML-Templates für Gerichte, Warenkorb und Dialog
├── styles/
│   ├── components.css  # Speisekarte & Komponenten
│   ├── basket.css      # Warenkorb & mobile Navigation
│   ├── default.css     # Reset, Variablen, Content-Begrenzung
│   └── fonts.css
└── assets/
    ├── fonts/          # Palanquin & Figtree
    ├── icons/
    └── img/            # Logo, Hero-Bild, Produktbilder
```

## 📚 Was ich dabei gelernt habe

- DOM-Manipulation und dynamisches Rendern von Inhalten mit Template-Funktionen
- Arbeiten mit Arrays und Objekten zur Datenhaltung
- Trennung von Daten, Templates und Logik
- Responsive Layouts mit CSS

## 👤 Autor

**Marven Jansen**
