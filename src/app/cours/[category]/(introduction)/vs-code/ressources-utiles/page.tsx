import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import PCourse from "@/components/cours/p-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import Link from "next/link";

export default function page() {
  return (
    <>
      <H1Course>Ressources utiles</H1Course>

<<<<<<< HEAD
    return <>
        <H1Course>Ressources utiles</H1Course>


        <H2Course>Documentation officielle</H2Course>
        <PCourse>Vous y trouverez des tutoriels et des vidéos expliquant comment utiliser VS Code.</PCourse>


        <UlCourse>
            <LICourse>
                <Link href="https://code.visualstudio.com/docs" target="_blank">Documentation officielle</Link>
            </LICourse>
            <LICourse>
                <Link href="www.youtube.com/@code" target="_blank">Chaîne Youtube officielle</Link>
            </LICourse>
        </UlCourse>
=======
      <H2Course>Documentation officielle</H2Course>
      <PCourse>
        Vous y trouverez des tutoriels et des vidéos expliquant comment utiliser
        VS Code.
      </PCourse>
>>>>>>> 7e64a1e17a6ef0b14b31847ffa791019f5b28b21

      <UlCourse>
        <LICourse>
          <Link href="https://code.visualstudio.com/docs" target="_blank">
            Documentation officielle
          </Link>
          utiliser VS Code.
        </LICourse>
        <LICourse>
          <Link href="https://www.youtube.com/@code" target="_blank">
            Chaîne Youtube officielle
          </Link>
        </LICourse>
      </UlCourse>
    </>
  );
}
