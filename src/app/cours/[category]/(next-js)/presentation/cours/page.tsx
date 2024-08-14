export default function page() {

    return <>

        <h1>Next.js - Presentation - Cours</h1>



        <p>Next.js est un framework très complet qui propose de nombreuses fonctionnalités. Nous ne pouvons donc pas voir toutes les fonctionnalités dans le premier cours. Nous commencerons par le fonctionnement de base pour approfondir par la suite.</p>


        <h2>Les Servers/Clients components</h2>
        <p>Comme vu dans le cours précédent <b>Javascript / React</b> :</p>

        <ul>
            <li>nous ne pouvions pas contacter de base de données donc les données étaient non persistantes (à moins d'utiliser le LocalStorage)</li>
            <li>nous envoyions un gros bundle javascript et le code était éxécuté coté client (dans le navigateur)</li>
            <li>nous devions donc créer une API séparée (serveur) ou un service tiers afin de persister des données</li>
        </ul>

        <p>Next.js a révolutionné une première fois le monde du développement web en introduisant les <b>Server Components</b> et les <b>Client Components</b> (qui est en train d'être intégré nativement dans <b>React.js</b>).</p>
        <p>Je dis première fois, car nous verrons par la suite les <b>Servers Actions</b> qui vont révolutionner une seconde fois le monde du développement web.</p>

        <p>Les <b>Server Components</b> sont des composants qui sont éxécutés <b>côté serveur</b> (<b>Node.js)</b> et les <b>Client Components</b> sont des composants qui sont éxécutés <b>côté client</b> (<b>navigateur</b>).</p>

        <p>Les avantages sont nombreux, vous le verrez au fer et à mesure, mais voici quelques exemples :</p>
        <ul>
            <li>le javascript envoyé au client est beaucoup moins lours, donc bon pour les performances et la sécurité</li>
            <li>les données sont persistantes, donc plus besoin de créer une API séparée</li>
            <li>les données sont chargées côté serveur, donc le temps de chargement est plus rapide ainsi que le SEO</li>
        </ul>

        <h3>Caractéristiques des Server Components</h3>
        <ul>
            <li>tout les composants sont <b>Server Component</b> par défaut</li>
            <li>ils sont <b>ASYNCHRONE</b></li>
            <li>ne peuvent pas avoir de <b>state</b></li>
            <li>le code est éxécuté <b>coté serveur</b> (Node.js) pour renvoyer du html au client</li>
            <li>possibilité de contacter une base de données</li>
            <li>la variable <b>window</b> est undefined</li>
        </ul>

        <h3>Caractéristiques des Clients Components</h3>

        <ul>
            <li>ils sont <b>SYNCHRONE</b></li>
            <li>peuvent avoir un/des <b>state(s)</b></li>
            <li>les données sont chargées et éxécutés <b>côté client</b>(navigateur)</li>
            <li>ne peuvent pas contacter de base de données à moins de <b>fetch</b></li>
            <li>la variable <b>window</b> est définie</li>
        </ul>

        <h3>Hiérarchie des composants dans Next.js</h3>
        <p>Première chose importante tout est par défaut <b>Server Component</b>.</p>
        <p>Pour rendre un composant <b>Client Component</b> il suffit d'ajouter <b>"use client";</b> tout en haut d'un composant (c'est à ce moment qu'on commence normalement à comprendre la puissance de Next.js).</p>
        <p>Tout les composants <b>ENFANTS</b> d'un <b>Client Component</b> est par défaut un <b>Client Component</b>.</p>
        <p>Il est possible d'avoir un <b>Server Component</b> <b>ENFANT</b> d'un <b>Client Component</b> en le passant par la <b>props children</b> cela est appelé la composition et peut-être très utile afin d'éviter de rendre toute notre application <b>Client Component</b> si par exemple, nous devons l'entourer d'un <b>Provider</b>.</p>
        <p>la directive "use server" est utilisée seulement pour les <b>Server Actions</b> que nous verrons très vite.</p>

        <h3>Routing</h3>
        <p>Une autre fonctionnalité très pratique de Next.js est la gestion simple et efficace du routing en fonction de la structure des dossiers.</p>
        <p>Avantages :</p>
        <ul>
            <li>Next.js facilite la gestion des <b>Params</b> et <b>SearchParams</b> de l'URL ainsi que d'autres fonctionnalités</li>
            <li>Moins de fichiers ce qui diminue la possibilité d'erreurs</li>
            <li>le code est plus lisible et plus facile à maintenir</li>
            <li>la structure des dossiers reflète les chemins (routes) donc nous pouvons rapidement avoir une vue d'ensemble de l'application</li>
        </ul>

        <h3>Créer une application</h3>

        <p>Pour créer une application Next.js vous met à disposition une commande très pratique <b>npx create-next-app@latest</b> dans votre terminal, Next.js vous posera quelques questions.</p>

        <a href="/next-js/next-starting.jpg" target="_blank"><img src="/next-js/next-starting.jpg" alt="next-starting" /></a>
        <p>Next.js vous propose :</p>
        <ul>
            <li>De choisir le nom de votre projet (doit être en minuscule sans caractères spéciaux)</li>
            <li>d'utiliser <b>Typescript</b> ou non mais il est fortement recommandé de l'utiliser</li>
            <li>d'utiliser <b>ESLint</b> ou non mais il est fortement recommandé de l'utiliser</li>
            <li>d'utiliser <b>TailwindCSS</b> (conseillé aussi)</li>
            <li>d'utiliser ou non le <b>src</b> directory (j'utilise le dossier src)</li>
            <li>d'utiliser ou non <b>APP Router</b> mais comme tout le reste, cela est très pratique</li>
            <li>et pour finir un <b>alias</b> qui va vous permet d'importer vos fichiers beaucoup plus simplement : "@/" correspondra soit à la <b>racine du projet</b>, soit au dossier <b>src</b> en fonction de votre choix précédent.</li>
        </ul>


        <h2>Structure des dossiers</h2>
        <p>Après avoir répondu à toutes les questions Next.js créer un nouveau projet.</p>
        <p>Il faudra ensuite ouvrir le dossier dans votre éditeur de code préféré et taper <b>npm install</b> dans le terminal.</p>
        <p>Ensuite, en fonction du choix ou non d'utiliser le dossier src, vous verrez une ou l'autre structure de dossier comme celle-ci :</p>
        <h3><b>Avec</b> dossier "src" (ma préférence)</h3>
        <a href="/next-js/exemple-src.png" target="_blank"><img src="/next-js/exemple-src.png" alt="next-structure-folder" /></a>

        <h3><b>Sans</b> dossier "src"</h3>
        <a href="/next-js/exemple-src.png" target="_blank"><img src="/next-js/exemple-src.png" alt="next-structure-folder" /></a>

        <h3>Explication des fichiers "spéciaux"</h3>
        <ul>
            <li><b>layout.tsx</b> : ce fichier à la racine du dossier app englobe toutes vos autres pages. Vous pouvez en avoir un dans chaque dossier de page.</li>
            <li><b>page.tsx</b> : c'est ce fichier et non son dossier qui créer la route (doit forcément s'appeler page et retourner du JSX)</li>
            <li><b>route.tsx</b> : appeler un fichier route.ts en fait une route API (nous verrons ca le moment venu)</li>
            <li><b>loading.tsx</b> : permet de creer un loader personnalisé par page</li>
            <li><b>not-found.tsx</b> : permet de créer une page 404 personnalisée</li>
            <li><b>error.tsx</b> : permet d'englober la page d'un <b>Error Boundary</b> afin de gérer les potentielles erreurs</li>
            <li><b>middleware.tsx</b> : à mettre non pas dans le dossier <b>app</b> mais dans le dossier <b>src</b> ou à la racine de l'application. Il intercepte les requêtes (comme un péage). Très pratique pour l'authentification par exemple</li>
            <li><b>components</b> : c'est ici que vous allez mettre vos composants réutilisables</li>
            <li><b>lib</b> : c'est ici que vous allez mettre vos fonctions utilitaires</li>
            <li><b>public</b> : c'est ici que vous allez mettre vos fichiers statiques (images, vidéos, etc.)</li>
            <li><b>.env</b> : c'est dans de fichier que les informations sensibles seront stockées (exemple des clefs)</li>
            <li><b>tailwind.config.js</b> : c'est ici que vous allez configurer TailwindCSS</li>
            <li><b>next.config.js</b> : c'est ici que vous allez configurer votre application Next.js (comme les nom de domaine autorisés pour les images)</li>
            <li><b>package.json</b> : liste toutes vos dépendance (paquet node.js)</li>
        </ul>


        <h3>Nettoyer la structure des dossiers</h3>

        <p>De base Next.js vous creer une "template" de base afin que vous puissiez comprendre comment fonctionne le framework. Vous pouvez donc supprimer tout ce qui ne vous sert pas dans le fichier CSS (attention à ne pas enlever les imports tailwind si vous voulez l'utiliser) et dans le fichier "page.js".</p>

        <p>Fin du premier cours, je vous propose de faire les exercices afin de vous familiariser avec Next.js avant de passer aux cours suivants.</p>


        <h3>Informations complémentaires</h3>
        <p>Next.js met à votre disposition énormément d'outils et il faut aussi importer certaines balises depuis Next.js.</p>
        <p>Quelques exemples dans Next.js :</p>
        <p>les liens ne se font pas avec des balises <b>a</b> mais des balises <b>Link</b></p>
        <p>les images ne se font pas avec des balises <b>img</b> mais des balises <b>Image</b></p>

    </>
}
