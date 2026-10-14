# CLAUDE.md - PollAPP

## Projekt und verbindliche Grundlagen

PollAPP ist eine Umfrage-App für meine Weiterbildung. Wir entwickeln sie mit Angular, TypeScript, HTML, SCSS und Supabase. Das Verständnis des Codes hat Vorrang vor Geschwindigkeit.

Grundlagen:
- Die bereitgestellte „Poll-App Checkliste.pdf“ enthält die Abnahmekriterien.
- Designreferenz: https://www.figma.com/design/yjKdGp9Z612bnRp2iayYe7/Poll-App-Design?node-id=46-2
- Falls Figma oder die Checkliste nicht zugänglich sind, sage das offen. Erfinde keine Designwerte oder Kursvorgaben. Bitte für den betroffenen Schritt um einen Export, Screenshot oder die fehlende Vorgabe.
- Die nachfolgenden Anforderungen übertragen die bereitgestellte Checkliste. Zusätzliche Vorschläge sind keine verbindlichen Kursanforderungen.
- Setze zuerst die Pflichtfunktionen um. Extras nur nach Rücksprache; dokumentiere sie für die Mentoren.

## Designvorgaben aus den bereitgestellten Screenshots

Die Figma-Übersichten zeigen Desktop- und Mobilansichten. Sie sind visuelle Referenzen, keine Quelle für zuverlässig ablesbare exakte Maße oder kleine Texte.

- Homescreen: dunkelvioletter Hintergrund, orangefarbene Überschriften und Akzente, helle Karten sowie eine Illustration im oberen Einleitungsbereich.
- Unter dem Einleitungsbereich folgt „Your surveys“ mit bald endenden Umfragen als hervorgehobenen Karten und anschließend der allgemeinen Liste.
- Die Desktop-Liste ist in mehreren Spalten angeordnet; auf Mobilgeräten stehen die Listeneinträge untereinander. Die hervorgehobenen Karten liegen mobil nebeneinander; das konkrete Scrollverhalten prüfen wir anhand einer vergrößerten Vorlage.
- Detailansicht: heller Hintergrund, Abstimmungsbereich links und Ergebnisse rechts. Auf Mobilgeräten stehen Abstimmung und Auswertung untereinander.
- Ergebnisse werden mit orangefarbenen horizontalen Balken dargestellt. Berücksichtige die sichtbare Variante ohne Ergebnisse und einen sinnvollen Zustand bei null Stimmen.
- Das Erstellungsformular verwendet eine dunkelviolette Fläche, helle Eingabefelder und orangefarbene Aktionsbuttons. Desktop und Mobilansichten zeigen unterschiedliche Anordnungen der Formularbereiche.
- Die Vorlage enthält Varianten mit zusätzlichen Fragen und eine kleine Overlay-/Rückmeldungsansicht. Kläre den funktionalen Umfang anhand lesbarer Details, bevor du daraus zusätzliche Pflichtfunktionen ableitest.
- Das Erstellungsformular bleibt gemäß Checkliste ein Overlay. Ein separat dargestellter Figma-Frame ist keine Anweisung, eine neue Route anzulegen.
- Nutze gemeinsame SCSS-Variablen für vereinbarte Farben und Abstände. Übernimm genaue Farbwerte, Schriftarten, Maße und Assets erst aus zugänglichen Figma-Details oder passenden Exporten. Schätze sie nicht als vermeintlich exakte Designwerte.
- Verwende vorhandene bzw. bereitgestellte Design-Assets. Schneide keine unscharfen Illustrationen aus den Übersichtsaufnahmen als finale Assets aus.
- Vergleiche die jeweils fertiggestellte Ansicht mit der passenden Desktop- und Mobilvorlage. Wenn deren Auflösung für eine Entscheidung nicht ausreicht, frage gezielt nach einem Detailausschnitt.

## Anforderungen aus der Checkliste

### 1. Bald endende Umfragen
- Oberhalb der allgemeinen Umfragenliste gibt es einen Bereich für bald endende Umfragen.
- Sortiere diese chronologisch nach Enddatum, frühestes Ende zuerst.
- Zeige dort nur laufende Umfragen mit Deadline. Die genaue Zeitspanne für „bald endend“ stimmen wir vor der Umsetzung ab.

### 2. Homescreen und Kategorien
- Zeige eine Übersicht der verfügbaren Umfragen.
- Reiter wechseln zwischen laufenden und abgeschlossenen Umfragen.
- Jede Umfrage zeigt mindestens Kategorie, Titel und Deadline. Bei fehlender Deadline muss die Darstellung eindeutig sein.
- Kategorienfilter funktionieren sowohl für laufende als auch für abgeschlossene Umfragen. Vermische die beiden Listen nicht.
- Mit „Alle“ lässt sich der Kategorienfilter zurücksetzen.
- Halte auch abgelaufene Testumfragen bereit, damit der zweite Reiter geprüft werden kann.

### 3. Neue Umfrage
- Der Homescreen enthält einen „New Survey“-Button.
- Dieser öffnet ein Formular als Dialog/Modal/Overlay, nicht als eigene Route.
- Kennzeichne und validiere Pflichtangaben, insbesondere Titel und Antwortoptionen.
- Beschreibung und Deadline sind laut Checkliste Beispiele für optionale Angaben.
- Kläre zusätzliche Pflichtfelder und Formularregeln vor ihrer Umsetzung. Leite Kategoriepflicht oder Mindestanzahl der Optionen nicht stillschweigend aus der Checkliste ab.
- Zeige verständliche Validierungsfehler und verhindere doppelte Übermittlung während des Speicherns.

### 4. Detailansicht
- Ein Klick auf eine Umfrage öffnet ihre Detailansicht.
- Zeige Fragestellung, Antwortoptionen, relevante Zusatzinformationen und den aktuellen Auswertungsstand.
- Ergebnisse verändern sich live, auch wenn ein anderer Browser eine Stimme abgibt.
- Abgeschlossene Umfragen erscheinen unter „Past Survey“ und bleiben einsehbar.
- Ihre Abstimmungselemente sind deaktiviert; weitere Stimmen werden auch durch die Datenbank verhindert.

### 5. Abstimmen und Auswertung
- Benutzer stimmen per Klick auf eine Antwortoption ab.
- Die aktuelle Auswertung ist während der Abstimmung sichtbar.
- Im Desktop-Layout steht die Auswertung rechts neben der Abstimmung.
- Ergebnisse aktualisieren sich dynamisch nach einer erfolgreich gespeicherten Stimme.
- Passe kleinere Bildschirmgrößen an die verfügbaren Designvorgaben an.

### 6. Code-Konventionen
- Beachte die HTML- und TypeScript-Guidelines der Weiterbildung, sobald sie bereitgestellt sind.
- Solange diese fehlen, verwende konsistenten, gut lesbaren Code und kennzeichne eigene Konventionen als vorläufig.

## Vor der jeweiligen Umsetzung zu klärende Entscheidungen

Frage gezielt, sobald eine Entscheidung für den nächsten Lernschritt notwendig wird. Stelle nicht alle Fragen auf einmal.
- Können Benutzer ohne Anmeldung teilnehmen, oder benötigen wir Supabase Auth? Anmeldung ist keine ausdrückliche Checklistenanforderung.
- Ist genau eine Stimme pro Benutzer und Umfrage vorgesehen? Darf die Auswahl später geändert werden?
- Wird eine einzelne Antwort gewählt oder sind mehrere Antworten erlaubt?
- Welche Regeln gelten für Kategorien, Antwortoptionen und Umfragen ohne Deadline?
- Was bedeutet „bald endend“ zeitlich? Welche Zeitzone verwenden wir für Eingabe und Anzeige?
- Wie wird eine Umfrage ohne Deadline abgeschlossen? Wer darf erstellen oder schließen?

Halte vereinbarte Entscheidungen kurz in der Projekt-README fest. Keine neue Dokumentation für jeden kleinen Schritt anlegen.

## Angular und Projektstruktur

- Prüfe vor dem ersten Entwicklungsschritt den tatsächlichen Projektordner, vorhandene Dateien, package.json, Angular-Konfiguration und verfügbare npm-Skripte. Behaupte keine Sandbox- oder Betriebssystemumgebung ohne Prüfung.
- Bei einem leeren Projekt erkläre zuerst das Angular-Grundgerüst und den ersten kleinen Einrichtungsschritt. Installationsfreigaben aus dem Lernmodus gelten weiterhin.
- Verwende die vorhandene Angular-Version und kompatible APIs. Führe keine unbeauftragten Versionswechsel durch.
- Für ein neues Projekt bevorzuge Standalone-Komponenten, sofern die Kursvorgaben dazu passen. Erkläre dieses Konzept zuerst.
- Verwende Angular-Templates und Bindings statt manueller DOM-Manipulation für normale UI-Aufgaben.
- Trenne Template, Styles und Logik nachvollziehbar. Nutze Services für Supabase-Zugriffe und Komponenten für Darstellung und Benutzerinteraktion.
- Verwende typisierte Modelle; vermeide any und erkläre notwendige Ausnahmen.
- Erkläre Reactive Forms, Dependency Injection, Routing, Signals, Observables und Subscriptions jeweils bei ihrer ersten Verwendung. Verwende nur die Konzepte, die der aktuelle Schritt benötigt.
- Keine zusätzliche State-Management- oder UI-Bibliothek ohne begründeten Bedarf und Zustimmung.
- Nutze verständliche englische Bezeichner im Code; Erklärungen erfolgen auf Deutsch. UI-Texte richten sich nach Design und Kursvorgaben.
- Nutze semantisches HTML, Labels und echte Buttons. Das Modal braucht Tastaturbedienung, Fokusführung und eine verständliche Schließen-Funktion.
- Halte Ladezustände, leere Listen und Fehlerzustände nachvollziehbar.

Mögliche fachliche Aufteilung, nur schrittweise und nach Bedarf anlegen:
- Umfragenübersicht und Filter
- Umfragekarte
- Erstellungsdialog
- Umfragedetail und Abstimmung
- Ergebnisanzeige
- Umfrage-Service und Datenmodelle

## Supabase, Datenmodell und Sicherheit

- Supabase ist das Backend. Erkläre Tabellen, Beziehungen, Abfragen und Berechtigungen Schritt für Schritt.
- Möglicher Ausgangspunkt: surveys, survey_options, votes und bei Bedarf categories. Das endgültige Modell hängt von den vereinbarten Abstimmungs- und Auth-Regeln ab.
- Erkläre Primärschlüssel, Fremdschlüssel und Constraints vor ihrer Verwendung. Eine Antwortoption muss zu der Umfrage gehören, für die die Stimme gespeichert wird.
- Speichere Zeitpunkte einheitlich und zeitzonenbewusst. Eine Umfrage mit Deadline ist ab Erreichen dieser Deadline geschlossen. Die Datenbankzeit entscheidet über die Zulässigkeit einer Stimme.
- Verhindere Stimmen nach Abschluss durch Datenbankregeln oder eine geeignete transaktionale Datenbankfunktion. Ein deaktivierter Button reicht nicht aus.
- Verhindere unzulässige Mehrfachstimmen gemäß vereinbartem Modell durch Datenbank-Constraints. LocalStorage oder eine Browsersperre sind kein zuverlässiger Schutz pro Person.
- Falls Supabase Auth verwendet wird, leite die Benutzeridentität aus der authentifizierten Sitzung ab. Vertraue keinem frei übergebenen user_id-Wert.
- Aktiviere Row Level Security für aus dem Frontend erreichbare Tabellen und erkläre jede Policy. Keine pauschalen Schreibrechte nur zur schnellen Fehlerbehebung.
- Erlaube Lesen, Erstellen und Abstimmen nur im vereinbarten Umfang. Veröffentliche keine einzelnen Wähleridentitäten über die Auswertung.
- Erstelle Umfrage und Optionen so, dass keine halbfertigen Datensätze bei Fehlern zurückbleiben. Erkläre den dafür gewählten Ansatz.
- Speichere SQL-Änderungen nachvollziehbar im Projekt, beispielsweise als Migrationen. Änderungen am entfernten Supabase-Projekt erst erklären und freigeben lassen.
- Im Angular-Frontend dürfen nur für Clients vorgesehene Supabase-Schlüssel stehen. service_role, Secret Keys und Datenbankpasswörter dürfen nie ins Frontend, Repository oder Chat gelangen.
- Frontend-Konfiguration ist im ausgelieferten Browsercode sichtbar, auch wenn sie aus einer lokalen Umgebungsdatei stammt. RLS und Datenbankregeln schützen die Daten.
- Dokumentiere benötigte Konfigurationsnamen mit Platzhaltern. Die Regel zu sensiblen Dateien im Lernmodus bleibt verbindlich.

## Echtzeit-Auswertung

- Plane Supabase Realtime für die Live-Anforderung ein und erkläre die erforderliche Konfiguration und Leserechte, bevor sie geändert werden.
- Lade zunächst den aktuellen Stand; aktualisiere ihn nach bestätigten Stimmen und relevanten Echtzeitereignissen auch anderer Clients.
- Prüfe Ereignisse und Wiederverbindung so, dass beim Laden oder Verbindungsabbruch keine dauerhaft veralteten Ergebnisse bleiben.
- Räume Subscriptions beim Verlassen der Ansicht auf und verhindere doppelte Listener.
- Zeige Summen und Prozentwerte verständlich; behandle null Stimmen ohne Division durch null.
- Markiere Verbindungsprobleme, statt eine veraltete Anzeige als live auszugeben.
- Polling ist kein stillschweigender Ersatz für die geforderte Echtzeitfunktion.

## Lernreihenfolge und Überprüfung

Diese Reihenfolge ist eine Orientierung, keine Erlaubnis zur vollständigen automatischen Umsetzung:
1. Projektstand prüfen und den ersten kleinen Schritt vereinbaren.
2. Angular-Grundgerüst verstehen und eine erste Ansicht anzeigen.
3. Layout und Umfragekarte mit klar gekennzeichneten lokalen Beispieldaten.
4. Reiter, Kategorienfilter und bald endende Umfragen, jeweils einzeln.
5. Erstellungsdialog und Validierung in getrennten Schritten.
6. Detailansicht und einfache Ergebnisdarstellung.
7. Datenmodell, nötige Auth-Entscheidungen und RLS schrittweise.
8. Supabase-Lesen, Erstellen und Abstimmen einzeln anbinden; Beispieldaten ersetzen.
9. Echtzeit-Auswertung und Abschlussregeln prüfen.
10. Design, responsive Darstellung und Checkliste abschließend kontrollieren.

Prüfe nach jedem Schritt nur die betroffene Funktion und die passenden vorhandenen Build-/Test-Skripte. Behaupte keine Prüfung, die nicht durchgeführt wurde. Schreibe gezielte Tests für wichtige Logik, etwa Statuswechsel, Filter und Abstimmungsregeln; vermeide Tests, die nur den Code nachbilden.

Zur Abnahme insbesondere manuell prüfen:
- Laufende und abgelaufene Umfragen, fehlende Deadline und Deadline-Grenzfall.
- Kategorienfilter und „Alle“ in beiden Reitern.
- Pflichtfelder, Speichern, Fehler und Modal-Tastaturbedienung.
- Stimmen nach Ablauf und unzulässige Mehrfachstimmen auch bei direktem Datenbank/API-Zugriff.
- Live-Update mit zwei unabhängigen Browser-Sitzungen.
- Null Stimmen, Ergebnisberechnung, Lade- und Verbindungsfehler.
- Desktop: Auswertung rechts; kleine Bildschirme gemäß Design.

## Verbindlicher Lernmodus

Die folgenden Regeln aus meiner bisherigen CLAUDE.md gelten weiterhin. Nach jedem abgeschlossenen Lernschritt stoppen und auf meine nächste Anweisung warten.

## Zweck dieses Projekts

Dieses Projekt ist das Weiterbildungsprojekt PollAPP mit Angular und Supabase.
Ich lerne Programmierung und möchte die Anwendung gemeinsam mit Claude Code Schritt für Schritt entwickeln.

Das wichtigste Ziel ist NICHT, die Anwendung möglichst schnell fertigzustellen.

Das wichtigste Ziel ist, dass ich den entstehenden Code verstehe und nachvollziehen kann.

---

# Arbeitsweise

Beginne jede Antwort an mich mit einem farbigen Quadrat als Markierung, abwechselnd 🟨 (gelb) und 🟧 (orange). Schau dabei auf deine vorherige Antwort: Hat sie mit 🟨 begonnen, beginnt die nächste mit 🟧 und umgekehrt. So sehe ich beim Scrollen schnell, wo eine neue Antwort anfängt.

Wenn du mich fragst, ob du mit dem nächsten Schritt weitermachen oder einen Vorschlag umsetzen sollst, stelle die Frage mit Auswahl-Buttons (z. B. „Weiter“). Rückfragen schreibe ich dann selbst in das freie Textfeld.

Arbeite immer in kleinen, überschaubaren Schritten.

Implementiere niemals mehrere größere Funktionen gleichzeitig.

Nach jedem sinnvollen Schritt soll gestoppt werden, damit ich:

1. den Code ansehen kann,
2. Fragen stellen kann,
3. den Schritt selbst nachvollziehen kann,
4. das Ergebnis testen kann.

Erst danach soll der nächste Schritt umgesetzt werden.

---

# Vor jeder Änderung

Bevor du Code veränderst:

1. Erkläre kurz, was wir als Nächstes machen.
2. Nenne die Dateien, die geändert oder neu erstellt werden sollen.
3. Erkläre kurz, warum diese Änderung notwendig ist.
4. Warte bei größeren Änderungen auf meine Zustimmung.

Bei sehr kleinen Änderungen darfst du sie direkt durchführen und anschließend erklären.

---

# Nach jeder Änderung

Nach einer Änderung:

1. Zeige mir, welche Datei geändert wurde.
2. Erkläre den neuen Code verständlich.
3. Erkläre wichtige Befehle, Funktionen, Variablen und Sprachkonstrukte.
4. Erkläre, wie der neue Code mit dem bisherigen Code zusammenarbeitet.
5. Sage mir, wie ich die Änderung testen kann.
6. Stoppe danach.
7. Zeige die Änderungen als Diff: hinzugefügte Zeilen mit +, entfernte Zeilen mit -.
   Nutze die grün/rote Diff-Ansicht von VS Code, wenn verfügbar; erfinde keine Farbformatierung im Quellcode.

Nicht automatisch mit dem nächsten Entwicklungsschritt weitermachen.

---

# Größe der Entwicklungsschritte

Bevorzuge kleine Änderungen.

Ein typischer Schritt sollte möglichst nur:

- eine kleine Funktion,
- eine einzelne Komponente,
- einen einzelnen Event-Handler,
- eine kleine Änderung am Datenmodell,
- eine kleine UI-Erweiterung
- oder ein klar abgegrenztes Konzept

enthalten.

Wenn eine Aufgabe zu groß ist, teile sie zuerst in mehrere kleine Schritte auf.

---

# Lernmodus

Gehe davon aus, dass ich den Code lernen und verstehen möchte.

Verwende deshalb möglichst verständlichen und gut lesbaren Code.

Bevorzuge zunächst einfache Lösungen gegenüber besonders cleveren oder stark abstrahierten Lösungen.

Vermeide unnötige Abstraktionen.

Vermeide unnötig komplizierte Design Patterns.

Vermeide unnötige Framework-Magie.

Wenn es mehrere Möglichkeiten gibt, erkläre kurz die wichtigsten Varianten und warum du eine davon verwenden möchtest.

---

# Code erklären

Erkläre insbesondere neue Konzepte, wenn sie zum ersten Mal im Projekt auftauchen.

Beispiele:

- Variablen
- Funktionen
- Parameter
- Rückgabewerte
- Objekte
- Arrays
- Interfaces
- Klassen
- async / await
- Promises
- Event Listener
- DOM-Zugriffe
- Module
- Imports und Exports
- Datenbankabfragen
- APIs

Erkläre nicht nur WAS der Code macht, sondern auch WARUM er so geschrieben wurde.

---

# Bestehenden Code respektieren

Bevor du eine Datei änderst, lies den relevanten bestehenden Code.

Ändere nur das, was für den aktuellen Schritt notwendig ist.

Keine unnötigen Refactorings.

Keine Umbenennungen ohne Grund.

Keine komplette Neustrukturierung des Projekts ohne vorherige Rücksprache.

Keine bestehenden Funktionen entfernen, nur weil eine andere Lösung eleganter wäre.

---

# Dateien

Erstelle nur Dateien, die für den aktuellen Schritt notwendig sind.

Lösche keine Dateien ohne meine ausdrückliche Zustimmung.

Verschiebe oder benenne keine Dateien ohne meine Zustimmung.

---

# Pakete und Abhängigkeiten

Installiere keine neuen npm-, Python- oder sonstigen Pakete ohne vorher zu erklären:

- welches Paket benötigt wird,
- wofür es benötigt wird,
- warum die Funktion nicht sinnvoll ohne dieses Paket umgesetzt werden kann.

Warte anschließend auf meine Zustimmung.

Führe insbesondere nicht automatisch Befehle wie

npm install

pip install

oder vergleichbare Installationen aus.

---

# Sicherheit

Sensible Dateien dürfen nicht ohne ausdrückliche Aufforderung gelesen oder verändert werden.

Dazu gehören insbesondere:

.env
.env.local
.env.production

sowie Dateien mit:

- Passwörtern
- API-Keys
- Tokens
- privaten Schlüsseln
- Zugangsdaten

Zeige niemals Geheimnisse oder Zugangsdaten im Chat an.

---

# Terminalbefehle

Erkläre ungewöhnliche oder möglicherweise gefährliche Terminalbefehle vor der Ausführung.

Führe keine destruktiven Befehle ohne ausdrückliche Zustimmung aus.

Insbesondere keine Befehle, die:

- Dateien massenhaft löschen,
- Verzeichnisse löschen,
- Git-Historien verändern,
- Datenbanken löschen,
- Daten überschreiben
- oder Systemkonfigurationen verändern.

---

# Git

Führe keine automatischen Commits oder Pushes durch.

Kein:

git commit

git push

git reset --hard

git clean

ohne meine ausdrückliche Aufforderung.

---

# Fehler

Wenn ein Fehler auftritt:

Nicht sofort mehrere Änderungen ausprobieren.

Gehe systematisch vor.

1. Fehlermeldung lesen.
2. Ursache erklären.
3. Eine mögliche Lösung vorschlagen.
4. Möglichst nur eine Änderung durchführen.
5. Danach erneut testen.

Ich möchte auch verstehen, warum ein Fehler entstanden ist.

---

# Kommentare im Code

Verwende Kommentare dort, wo sie für das Verständnis hilfreich sind.

Kommentiere aber nicht jede offensichtliche Codezeile.

Kommentare sollen hauptsächlich erklären, WARUM etwas gemacht wird.

---

# Wenn ich eine neue Funktion wünsche

Wenn ich beispielsweise sage:

"Wir brauchen jetzt eine Benutzerverwaltung."

Dann sollst du NICHT sofort die komplette Benutzerverwaltung programmieren.

Teile die Aufgabe zunächst in kleine Lernschritte auf.

Zum Beispiel:

1. Datenmodell überlegen
2. Benutzer anzeigen
3. Benutzer hinzufügen
4. Eingaben prüfen
5. Benutzer bearbeiten
6. Benutzer löschen
7. Datenbank anbinden

Wir bearbeiten anschließend immer nur einen Schritt.

---

# Wichtigste Regel

Ich möchte selbst verstehen, wie diese Anwendung entsteht.

Geschwindigkeit ist zweitrangig.

Wenn du zwischen

"komplett automatisch fertigstellen"

und

"kleiner verständlicher Lernschritt"

wählen kannst, wähle immer den kleinen verständlichen Lernschritt.

Nach jedem abgeschlossenen Lernschritt stoppen und auf meine nächste Anweisung warten.

## HTML- und Typescript- Konventionen 
# HTML- und TypeScript-Konventionen – PollAPP

## 1. Allgemeine Regeln

- Schreibe einfachen, verständlichen und wartbaren Code.
- Verwende Angular mit TypeScript im Strict Mode.
- Bevorzuge moderne Angular-Funktionen und Standalone Components.
- Verwende aussagekräftige englische Namen für Variablen, Funktionen, Klassen und Dateien.
- Schreibe Kommentare und Erklärungen auf Deutsch.
- Vermeide unnötige Abstraktionen und komplexe Lösungen.
- Implementiere nur die aktuell angeforderte Funktionalität.
- Erkläre neue TypeScript- und Angular-Konzepte verständlich.
- Vermeide doppelte Implementierungen (DRY-Prinzip), ohne unnötig zu abstrahieren.

## 2. HTML-Konventionen

### Struktur

- Verwende semantisches HTML5.
- Verwende passende Elemente wie `header`, `main`, `section`, `article`, `nav` und `footer`.
- Verwende `div` nur, wenn kein semantisch passendes Element existiert.
- Achte auf eine logische Überschriftenhierarchie.
- Verwende zwei Leerzeichen für Einrückungen.
- Schreibe HTML-Attribute in Kleinbuchstaben, soweit es sich nicht um Angular-spezifische Bindungen handelt.
- Verwende doppelte Anführungszeichen für Attribute.

### Formulare

- Jedes Eingabefeld erhält ein zugeordnetes `label`.
- Verwende passende Input-Typen wie `email`, `password` oder `number`.
- Verwende für Aktionen `button` statt klickbarer `div`-Elemente.
- Definiere bei Buttons innerhalb von Formularen immer den passenden `type`.
- Zeige verständliche Validierungsfehler an.
- Verwende bei komplexeren Formularen Angular Reactive Forms.

### Angular-Templates

- Verwende die moderne Angular-Control-Flow-Syntax `@if`, `@for` und `@switch`.
- Verwende bei `@for` immer einen geeigneten `track`-Ausdruck.
- Verwende Property Binding `[property]` und Event Binding `(event)`.
- Vermeide komplexe Berechnungen direkt im Template.
- Verwende keine direkten DOM-Manipulationen, wenn Angular eine passende Lösung bietet.
- Verwende Angular-Signals für lokalen reaktiven Zustand, wenn sinnvoll.
- Trenne HTML-Struktur, TypeScript-Logik und SCSS-Styling.
- Verwende keine Inline-Styles, außer wenn sie technisch begründet sind.

### Barrierefreiheit

- Verwende aussagekräftige Button-Beschriftungen.
- Achte auf Tastaturbedienbarkeit.
- Verwende `alt`-Attribute bei Bildern.
- Verwende ARIA-Attribute nur dort, wo semantisches HTML nicht ausreicht.

## 3. TypeScript-Konventionen

### Schreibweise

- Variablen und Funktionen: `camelCase`
- Klassen, Interfaces und Types: `PascalCase`
- Konstanten auf Modulebene: `UPPER_SNAKE_CASE`, wenn es sich um echte unveränderliche Konfigurationswerte handelt
- Dateinamen: `kebab-case`
- Private Eigenschaften: aussagekräftige Namen ohne führenden Unterstrich

### Variablen

- Verwende grundsätzlich `const`.
- Verwende `let` nur bei notwendiger Neuzuweisung.
- Verwende niemals `var`.
- Verwende explizite Typen, wenn sie das Verständnis verbessern.
- Nutze Type Inference bei offensichtlich erkennbaren Typen.
- Vermeide `any`; verwende bei unbekannten Daten `unknown` mit Typprüfung.

### Funktionen

- Bevorzuge kleine Funktionen mit einer klaren Aufgabe.
- Verwende aussagekräftige Funktionsnamen.
- Verwende Arrow Functions dort, wo sie sinnvoll sind.
- Verwende normale Methoden für Angular-Komponenten, wenn dies die Lesbarkeit verbessert.
- Verwende `async/await` für asynchrone Promise-basierte Abläufe.
- Behandle Fehler mit `try/catch`, wenn dies zum verwendeten API-Modell passt.
- Vermeide verschachtelte Bedingungen, wenn Guard Clauses die Lesbarkeit verbessern.

### Interfaces und Types

- Definiere Interfaces für strukturierte Datenmodelle.
- Verwende `type` für Union Types und zusammengesetzte Typen.
- Verwende optionale Eigenschaften nur, wenn diese tatsächlich optional sind.
- Verwende keine unnötigen Typumwandlungen mit `as`.
- Bevorzuge typsichere Rückgabewerte.

## 4. Angular-Konventionen

- Verwende Standalone Components.
- Verwende `inject()` für Dependency Injection.
- Verwende Signals für einfachen lokalen Komponentenstatus.
- Verwende `computed()` für abgeleitete Zustände.
- Verwende `effect()` nur für tatsächliche Seiteneffekte.
- Verwende Services für Datenzugriff und gemeinsam genutzte Geschäftslogik.
- Halte Komponenten möglichst schlank.
- Verwende `ChangeDetectionStrategy.OnPush`, sofern sinnvoll.
- Verwende Angular Router für die Navigation.
- Verwende SCSS für das Styling.
- Verwende keine zusätzlichen Bibliotheken ohne vorherige Rücksprache.

## 5. Supabase-Konventionen

- Kapsle Supabase-Zugriffe in Angular-Services.
- Verwende TypeScript-Typen für Datenbankeinträge.
- Prüfe Rückgabefehler von Supabase-Abfragen.
- Verwende `async/await` für Supabase-Abfragen.
- Speichere niemals Service-Role-Keys oder andere geheime Zugangsdaten im Frontend.
- Verwende Row Level Security (RLS) zur Absicherung von Daten.
- Verlasse dich bei Berechtigungen niemals ausschließlich auf Frontend-Prüfungen.
- Trenne Datenbanklogik und Benutzeroberfläche.

## 6. SCSS-Konventionen

- Verwende SCSS statt Inline-CSS.
- Verwende `kebab-case` für CSS-Klassen.
- Verwende aussagekräftige Klassennamen.
- Verwende SCSS-Nesting nur bei sinnvoller Verschachtelung.
- Vermeide unnötig hohe CSS-Spezifität.
- Verwende CSS-Variablen für wiederkehrende Designwerte.
- Orientiere dich am bereitgestellten Figma-Design.
- Achte auf responsive Darstellung für Desktop, Tablet und Smartphone.

## 7. Kommentare und Dokumentation

- Schreibe Kommentare auf Deutsch.
- Kommentiere insbesondere komplexe Abläufe und wichtige Entscheidungen.
- Vermeide Kommentare, die nur den offensichtlichen Code wiederholen.
- Erkläre neue Angular- und TypeScript-Konzepte beim erstmaligen Einsatz.
- Verwende bei Bedarf kurze JSDoc-Kommentare für komplexere Funktionen.

## 8. Regeln für Claude Code im Lernprojekt

Diese Regeln haben besonders hohe Priorität:

1. Implementiere immer nur einen kleinen, nachvollziehbaren Entwicklungsschritt.
2. Erkläre vor größeren Änderungen kurz, was du vorhast.
3. Verwende möglichst einfache Lösungen.
4. Erkläre neue TypeScript- und Angular-Syntax.
5. Erzeuge nicht mehrere neue Komponenten oder Services auf einmal, sofern ich das nicht ausdrücklich verlange.
6. Zeige mir nach jedem Schritt, welche Dateien geändert wurden.
7. Erkläre die wichtigsten Änderungen und deren Zusammenhänge.
8. Prüfe nach Änderungen, soweit möglich, ob der Code kompiliert.
9. Frage vor größeren Architekturentscheidungen nach.
10. Warte nach jedem abgeschlossenen Lernschritt auf meine Freigabe, bevor du weitermachst.

**Wichtig:** Verständlichkeit und Lerneffekt haben Vorrang vor möglichst kurzer Implementierungszeit.
