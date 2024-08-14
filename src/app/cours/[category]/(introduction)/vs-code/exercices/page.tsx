export default function page() {

    return <>
        <h2 id="exercice-1">Exercice 1</h2>

        <p>
            Ouvrez VS Code et explorez les différentes sections. Essayez de trouver les
            différentes fonctionnalités proposées par VS Code comme l'explorateur de
            fichier, le terminal intégré et la console.
        </p>

        <h2>Exercice 2</h2>

        <p>Installez les extensions suivantes :</p>
        <ul>
            <li>Prettier</li>
            <li>Live Server</li>
        </ul>
        <p>
            Une fois installée, configurez l'extention Prettier pour qu'elle formate
            automatiquement votre code. Ensuite lancez un projet HTML simple pour voir
            comment fonctionne Live Server.
        </p>

        <h2>Exercice 3</h2>
        <p>
            Après vous être amusé à découvrir VS Code, placez vous dans la barre de
            recherche en haut de l'écran et tapez > pour selectionner `Open User Settings
            (JSON)`. Ce fichier JSON contient toutes vos configurations de VS Code. Vous
            pouvez y ajouter des extensions, changer les couleurs, etc. Vous pouvez
            également exporter votre configuration en JSON et l'importer dans un autre
            projet.
        </p>

        <h3>Comprendre le fichier JSON</h3>
        <p>
            Ci-dessous un exemple de fichier JSON et des explications de chaque propriété
            qui peut être utilisée.
        </p>

        ```json
        {
            "editor.defaultFormatter": "esbenp.prettier-vscode",
            ```

<ul>
  <li>
    Définit `Prettier` comme formateur par défaut pour tous les fichiers.
    L'identifiant `esbenp.prettier-vscode` correspond à l'extension `Prettier`
    installée dans l'
    <a href="#exercice-1">exercice 1</a>.
  </li>
</ul>

```json
            "editor.fomatOnSave": true,
            ```

<ul>
  <li>
    Active le formatage automatique du code à chaque fois que le fichier est
    sauvegardé.
  </li>
</ul>

```json
            "editor.detectIndentation": true,
            ```

<ul>
  <li>
    Permet à l'éditeur de détecter automatiquement le type d'indentation
    (espaces ou tabulations).
  </li>
</ul>

```json
            "editor.rulers": [80],
            ```

<ul>
  <li>
    Affiche une ligne de 80 caractères sur la gauche de l'éditeur afin de
    respecter les conventions de longueur de ligne dans le code.
  </li>
</ul>

```json
            "[javascript]" : {
            "editor.defaultFormatter": "esbenp.prettier-vscode",
            "editor.suggestSelection": "recentlyUsed",
            "editor.suggest.showKeywords": false
        }
            ```

<ul>
  <li>
    `editor.defaultFormatter` utilise `Prettier` comme formateur par défault
    spécifiquement pour les fichiers javascript.
  </li>
  <li>
    `editor.suggestSelection` pré-selectionne les suggestions dans
    l'auto-complétion (par exemple, lorsque vous tapez `const` dans un fichier
    javascript).
  </li>
  <li>
    `editor.suggest.showKeywords` désactive la suggestion des mots-clés
    JavaScript dans les suggestions automatiques.
  </li>
</ul>

<h2>Exercice 4</h2>
<p>
  <em>voir le cours sur GIT et GitHub</em>
</p>

    </>
}
