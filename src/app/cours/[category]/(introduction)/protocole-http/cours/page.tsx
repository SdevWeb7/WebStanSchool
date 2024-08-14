export default function page() {

    return <>

        <h1>Protocole HTTP - Cours</h1>

        <h2>Client/Serveur</h2>
        <p>Lorsqu'on essaye d'accéder à un lien internet (URL en anglais pour Uniform Resource Locator), notre navigateur fait une <b>requête HTTP</b> au serveur distant.</p>

        <p>Le navigateur est le client.</p>

        <p>Le <b>serveur distant</b> n'est autre qu'un <b>ordinateur</b> qui a ouvert un <b>PORT</b> (une porte sur les 65 535 existantes) et qui attend une <b>requête</b> afin de <b>partager</b> des données (des images, des vidéos, des fichiers, des pages web, etc).</p>

        <p>Les <b>requêtes</b> et les <b>réponses</b> contiennent des <b>headers</b>.</p>


        <h2>Les méthodes HTTP</h2>
        <p>Les <b>méthodes HTTP</b> sont des <b>actions</b> que le client peut effectuer sur le serveur.</p>

        <p>Voici quelques exemples de méthodes HTTP :</p>

        <ul>
            <li><b>GET</b> : récupère des données du serveur.</li>

            <li><b>POST</b> : envoie des données au serveur.</li>

            <li><b>PUT</b> : met à jour des données sur le serveur.</li>

            <li><b>DELETE</b> : supprime des données du serveur.</li>

            <li><b>HEAD</b> : récupère les en-têtes d'une ressource.</li>

            <li><b>OPTIONS</b> : récupère les méthodes HTTP supportées par le serveur.</li>

            <li><b>TRACE</b> : envoie une requête de test au serveur.</li>

            <li><b>CONNECT</b> : convertit la requête en un tunnel TCP/IP.</li>
        </ul>

        <p>Les méthodes <b>GET</b>, <b>POST</b>, <b>PATCH</b> et <b>DELETE</b> sont les plus utilisées.</p>


        <h2>Les codes de statut HTTP</h2>
        <p>Les <b>codes de statut HTTP</b> sont des <b>réponses</b> que le serveur envoie au client.</p>

        <p>Voici quelques exemples de codes de statut HTTP :</p>

        <ul>
            <li><b>1xx</b> : Informationnel.</li>

            <li><b>2xx</b> : Succès.</li>

            <li><b>3xx</b> : Redirection.</li>

            <li><b>4xx</b> : Erreur du client.</li>

            <li><b>5xx</b> : Erreur du serveur.</li>
        </ul>

        <h2>URL (Uniform Resource Locator)</h2>

        <p>L'<b>URL</b> est l'adresse d'une ressource sur le web.</p>

        <p>Une URL est composée de plusieurs parties :</p>

        <ul>
            <li><b>Protocole</b> : http, https, ftp, etc.</li>

            <li><b>Nom de domaine</b> : google.com, facebook.com, etc.</li>

            <li><b>Port</b> : 80 (HTTP), 443 (HTTPS), etc. (www.exemple.com:80)</li>

            <li><b>Chemin</b> : /, /home, /about, etc.</li>

            <li><b>Requête</b> : ?id=1, ?name=John, etc.</li>

            <li><b>Ancre</b> : #section1, #section2, etc.</li>
        </ul>

        <a href="/http/url-details.jpg" target="_blank"><img src="/http/url-details.jpg" alt="URL détails" /></a>

        <h2>Headers</h2>
        <p>Les <b>headers</b> sont des <b>informations supplémentaires</b> qui permettent de <b>comprendre</b> la requête ou la réponse.</p>

        <p>Voici quelques exemples de ce que peut contenir un header :</p>

        <ul>
            <li><b>Accept</b> : indique au serveur les types de médias que le client peut traiter.</li>

            <li><b>Accept-Encoding</b> : indique au serveur les types de compression que le client peut traiter.</li>

            <li><b>Accept-Language</b> : indique au serveur les langues que le client peut traiter.</li>

            <li><b>Host</b> : indique au serveur le nom de domaine du client.</li>

            <li><b>User-Agent</b> : indique au serveur le navigateur et le système d'exploitation du client.</li>

            <li><b>Referer</b> : indique au serveur la page web qui a redirigé le client vers la page actuelle.</li>

            <li><b>Cookie</b> : indique au serveur les cookies stockés sur le client.</li>

            <li><b>Authorization</b> : indique au serveur les informations d'authentification du client.</li>

            <li><b>Cache-Control</b> : indique au serveur comment gérer le cache du client.</li>

            <li><b>Content-Type</b> : indique au serveur le type de contenu de la requête ou de la réponse.</li>
        </ul>



        <h2>Le corps de la requête ou <b>BODY</b></h2>
        <p>Le <b>corps de la requête</b> est l'endroit où le client envoie des données au serveur.</p>

        <p>Le corps de la requête est utilisé dans les méthodes <b>POST</b>, <b>PUT</b> et <b>PATCH</b>.</p>

        <p>Le corps de la requête peut contenir des données au format <b>JSON</b>, <b>XML</b>, <b>HTML</b>, <b>texte</b>, etc.</p>


        <h2>Le corps de la réponse ou <b>BODY</b></h2>
        <p>Le <b>corps de la réponse</b> est l'endroit où le serveur envoie des données au client.</p>


        <h2>Les cookies</h2>

        <p>Les <b>cookies</b> sont des <b>petits fichiers</b> stockés sur le <b>client</b> qui permettent de <b>garder des informations</b> sur le client.</p>

        <p>Les cookies :</p>

        <ul>

            <li>sont utilisés pour <b>garder une session</b> ou pour <b>garder des informations</b> sur le client.</li>

            <li>sont envoyés dans les <b>headers</b> de la requête et de la réponse.</li>

            <li>sont stockés sur le client et envoyés au serveur à chaque requête.</li>

            <li>sont <b>limités</b> en taille et en nombre.</li>

            <li>peuvent être <b>sécurisés</b> en utilisant le <b>flag Secure</b> et <b>HttpOnly</b>.</li>

            <li>peuvent être <b>chiffrés</b> pour <b>garder des informations</b> sur le client.</li>

            <li>peuvent être <b>signés</b> pour <b>garder des informations</b> sur le client.</li>

            <li>peuvent être <b>limités</b> dans le temps.</li>
        </ul>



        <h2>DNS (Domain Name System)</h2>

        <p>Le <b>DNS</b> est un <b>service</b> qui permet de <b>traduire</b> un <b>nom de domaine</b> en une <b>adresse IP</b>.</p>
        <p>Il est plus facile pour un humain de retenir une adresse web (URL) qu'une adresse IP.</p>

        </>
}
