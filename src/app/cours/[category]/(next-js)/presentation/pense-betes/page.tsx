export default function page() {

    return <>

        <h1>Next.js - Presentation - Pense-Bêtes</h1>

        <p>Créer un projet Next.js :</p>
        ```bash
        npx create-next-app nomduprojet
        ```
        <p>Ouvrir le dossier dans un IDE et taper :</p>
        ```bash
        npm install
        npm run dev
        ```

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

        <h3>Penser à la propriété <b>CHILDREN</b></h3>

    </>
}
