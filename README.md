# 🍔 Burgerhouse – Bestell-App

Eine einfache Essensbestell-App nach dem Vorbild von Lieferando, umgesetzt am Beispiel des fiktiven Restaurants **Burgerhouse**.  
Das Projekt bildet die grundlegende Logik einer Bestell-App ab: Gerichte auswählen, in den Warenkorb legen, Mengen anpassen und den Gesamtpreis berechnen.

> Lernprojekt im Rahmen meiner Weiterbildung zum Softwareentwickler.

---

## ✨ Funktionen

- **Speisekarte** – Gerichte mit Name, Beschreibung und Preis werden dynamisch aus einem JavaScript-Array gerendert
- **Warenkorb** – Gerichte hinzufügen, Menge erhöhen/verringern oder entfernen
- **Preisberechnung** – Zwischensumme, Lieferkosten und Gesamtbetrag werden automatisch aktualisiert
- **Bestellung abschicken** – Bestätigung nach dem Bestellen, Warenkorb wird geleert
- **Responsive Design** – nutzbar auf Desktop und Smartphone (mobiler Warenkorb)

## 🛠️ Technologien

| Technologie | Einsatz |
|---|---|
| **HTML5** | Struktur der Seite |
| **CSS3** | Layout & Styling (Flexbox, Media Queries) |
| **JavaScript (Vanilla)** | Rendering, Warenkorb-Logik, Preisberechnung |

Keine Frameworks, keine Bibliotheken – bewusst reines HTML, CSS und JavaScript.

## 📁 Projektstruktur

```
burgerhouse/
├── index.html
├── style.css
├── script.js        # Logik: Rendering, Warenkorb, Berechnung
├── db.js            # Daten der Speisekarte
└── img/             # Bilder & Icons
```

## 📸 Vorschau

![Screenshot der App](img/screenshot.png)

## 📚 Was ich dabei gelernt habe

- DOM-Manipulation und dynamisches Rendern von Inhalten mit Template-Funktionen
- Arbeiten mit Arrays und Objekten zur Datenhaltung
- Trennung von Daten, Darstellung und Logik
- Responsive Layouts mit CSS

## 👤 Autor

**Marven Jansen**
