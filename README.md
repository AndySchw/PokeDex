
# PokeDex-Anwendung

Willkommen bei der PokeDex-Anwendung! Dies ist ein einfaches Webanwendungsprojekt, das Informationen über verschiedene Pokémon bereitstellt.

## Anwendungsbereich

Die PokeDex-Anwendung besteht aus einem Backend und einem Frontend, die mit einer MongoDB-Datenbank interagieren. Das Backend dient zur Bereitstellung von Daten über Pokémon, während das Frontend diese Daten anzeigt.

## Verwendung der Anwendung

### Voraussetzungen

- [Docker](https://www.docker.com/) muss auf Ihrem System installiert sein.

### Schritte zur Ausführung

1. **Projekt klonen:** Klone das Projekt von GitHub:

   ```bash
   git clone https://github.com/AndySchw/PokeDex.git
   ```

2. **Verzeichnis wechseln:** Wechseln Sie in das Verzeichnis des Projekts:

   ```bash
   cd PokeDex
   ```

3. **Docker-Container starten:** Erstellen und starten Sie die Docker-Container:

   ```bash
   docker-compose up --build
   ```

   Dadurch wird die MongoDB-Instanz, das Backend und das Frontend gestartet.

4. **Anwendung öffnen:** Warten Sie, bis die Container gestartet sind, und öffnen Sie dann Ihren Webbrowser.

5. **URL aufrufen:** Rufen Sie die Anwendung auf, indem Sie die folgende URL in Ihrem Browser öffnen:

   ```
   http://localhost:3000
   ```

### Verwendung der Seite

- Die Hauptseite zeigt eine Liste von Pokémon-Karten an.
- Klicken Sie auf den Namen eines Pokémon, um weitere Details anzuzeigen.
- Die Detailseite zeigt den Namen, ein Bild und eine Beschreibung des ausgewählten Pokémon.

## Kontakt

Diese Anwendung wurde von [AndySchw] entwickelt. Bei Fragen oder Problemen können Sie mich unter [Ihre E-Mail-Adresse] kontaktieren.

Vielen Dank, dass Sie die PokeDex-Anwendung verwenden!

