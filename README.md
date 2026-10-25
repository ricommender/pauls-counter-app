# ✳ Pauls Counter

Ein responsives, farbiges Dashboard, das die **nächsten coolen Termine** im Schuljahr **2026/2027** für Nürtingen und Umgebung zeigt.

## Features

- ⏳ **Live-Countdown** bis zum nächsten Event (Tage, Stunden, Minuten, Sekunden)
- 🎃 **31 Highlights** von Halloween über Fasching bis Ostern und Maientag
- 🌴 **Ferien- und Schulfrei-Radar** mit Schulferien und freien Zusatztagen
- 🗓️ **Interaktiver Monatskalender** mit Events und freien Tagen
- 🔎 **Suche und Filter** nach Highlights, Ferien und Schulfrei
- 📱 **Responsive Design** für Handy, Tablet und Desktop
- 🌙 Dark-Mode-Design ohne Framework oder Backend

## Lokal starten

Es gibt keinen Build-Schritt. `index.html` im Browser öffnen oder einen lokalen HTTP-Server starten:

```bash
python -m http.server 8000
```

Anschließend `http://localhost:8000` öffnen.

## Mit GitHub Pages veröffentlichen

1. Im Repository auf **Settings → Pages** gehen.
2. Unter **Build and deployment** bei **Source** → **Deploy from a branch** wählen.
3. Branch **main** und Ordner **/(root)** auswählen und **Save** klicken.
4. Nach erfolgreicher Veröffentlichung ist die App unter `https://ricommender.github.io/pauls-counter-app/` erreichbar.

Die Seite besteht aus `index.html`, `styles.css` und `app.js`. Es ist kein Server und keine API nötig.

## Termine und Daten

Die Daten für das Schuljahr 2026/2027 sind im JavaScript in `app.js` enthalten; Grundlage ist die [Ferienplan-Markdown-Datei](ferienplan-2026-2027.md). Die Daten sind auf dieses Schuljahr begrenzt: Für spätere Schuljahre müssen die Termine erweitert werden.

Bei besonderen Anlässen bedeutet ein eingetragener Termin **nicht automatisch schulfrei**. Offizielle gesetzliche Feiertage und besondere schulfreie Tage sind getrennt berücksichtigt.

[Originaler Ferienplan der Nürtinger Schulen 2026/2027](https://www.aichtal.de/fileadmin/Dateien/Website/Dateien/Formulare/Betreuung/Ferienplan_NT_2026-2027_genehmigt.pdf)

## Lizenzhinweis

Die Webapp-Quelldateien sind öffentlich lesbar. Es ist noch keine Lizenzdatei hinterlegt.
