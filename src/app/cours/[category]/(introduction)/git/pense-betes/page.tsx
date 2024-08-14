export default function page() {

    return <>
        <h1>Git - Pense-Bête</h1>


        <h2>Commandes de base</h2>

        <h3>Récupérer un dépôt</h3>

        ```bash
        git clone url_du_depot
        ```

        <h3>Créer un dépôt</h3>

        ```bash
        git init
        ```

        <h3>Ajouter un fichier</h3>

        ```bash
        git add nom_du_fichier
        ```

        <h3>Ajouter tous les fichiers</h3>

        ```bash
        git add .
        ```


        <h3>Valider un fichier</h3>

        ```bash
        git commit -m "Message"
        ```

        <h3>Envoyer sur un dépôt</h3>

        ```bash
        git push origin main
        ```

        <h3>Récupérer les modifications</h3>

        ```bash
        git fetch
        git merge origin/master
        ```

        <h3>Récupérer les modifications (fetch+merge)</h3>

        ```bash
        git pull
        ```

        <h3>Créer une branche</h3>

        ```bash
        git branch nom_de_la_branche
        ```

        <h3>Changer de branche</h3>

        ```bash
        git checkout nom_de_la_branche
        ```

        <h3>Fusionner une branche</h3>

        ```bash
        git merge nom_de_la_branche
        ```

        <h3>Supprimer une branche</h3>

        ```bash
        git branch -d nom_de_la_branche
        ```

        <h3>Voir les modifications</h3>

        ```bash
        git status
        ```

        <h3>Voir l'historique</h3>

        ```bash
        git log
        ```

        <h3>Revenir en arrière</h3>

        ```bash
        git checkout -- nom_du_fichier
        ```

    </>
}
