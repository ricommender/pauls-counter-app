# ✳ Pauls Counter

Ein mobiles, swipebares Countdown-Dashboard für die nächsten Feiertage, coolen Ereignisse und Ferien rund um Nürtingen (Schuljahr 2026/2027).

**Live:** https://ricommender.github.io/pauls-counter-app/

## So funktioniert das Swipe-Deck

- 📱 **Eine Karte pro Bildschirm** auf dem iPhone, auch auf kleineren Modellen.
- 👈 **Nach links wischen** für den zeitlich nächsten Termin, **nach rechts** für den vorherigen.
- ⏳ **Live-Countdown** je Karte in Tagen, Stunden, Minuten und Sekunden.
- 📅 **Chronologisch sortiert:** Der nächste Termin steht links, weiter entfernte Termine rechts. Abgelaufene Termine werden ausgeblendet.
- 🎃 **Highlights** als Standard: Halloween, Weihnachten, Fasching, Ostern und mehr.
- 🎂 **Pauls 10. Geburtstag** am 20. Januar 2027 – eigene goldene Countdown-Kachel.
- 🌴 **Filter** für alle Termine, Ferien und weitere schulfreie Tage.
- ☷ **Alle Termine:** Liste zum direkten Anspringen einer Karte.
- ⬅️➡️ Alternative Navigation per Pfeilbuttons und Pfeiltasten.
- 🌙 Dark Mode mit eigenen Farben und Motiven je Event.
- 🎉 **Geburtstags-Special:** Auf Pauls Kachel fliegt Konfetti über den ganzen Bildschirm. Über 🎉 lässt sich die Animation wiederholen. Bei unterstützten Geräten vibriert das Handy kurz. **Wichtig:** iPhone/iOS-Browser unterstützen die Web-Vibrations-API nicht; Konfetti funktioniert dort trotzdem. Bei aktivierter Einstellung „Bewegung reduzieren“ bleibt die Animation aus.

## Lokal starten

Kein Framework, Build-Schritt, Konto oder Backend nötig. `index.html` öffnen oder einen lokalen Webserver starten:

```bash
python -m http.server 8000
```

Dann `http://localhost:8000` öffnen.

Die App besteht aus `index.html`, `styles.css` und `app.js`. GitHub Pages veröffentlicht den Branch `main` aus dem Repository-Stammverzeichnis.

## Termine und Daten

Die Daten sind direkt in `app.js` hinterlegt. Grundlage ist [ferienplan-2026-2027.md](ferienplan-2026-2027.md). Die Daten gelten nur für 2026/2027 und müssen für künftige Schuljahre erweitert werden.

**Nicht jeder besondere Anlass ist schulfrei.** Feste, Schulferien, bewegliche/unterrichtsfreie Tage und gesetzliche Feiertage sind getrennt hinterlegt.

[Genehmigter Ferienplan der Nürtinger Schulen 2026/2027](https://www.aichtal.de/fileadmin/Dateien/Website/Dateien/Formulare/Betreuung/Ferienplan_NT_2026-2027_genehmigt.pdf)

## Lizenz

Die Dateien sind öffentlich einsehbar. Eine Lizenzdatei ist noch nicht hinterlegt.
