import Link from "next/link";
import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import Image from "next/image";
import imgGitBranches from "@/../public/git/branche_git.png";


export default function Page() {

    return <>
        <H1Course>Git - Introduction</H1Course>

        <PCourse>Git est un logiciel de gestion de versions décentralisé. C&apos;est un outil incontournable pour les développeurs. Il permet de suivre l&apos;évolution du code source d&apos;un projet et de collaborer avec d&apos;autres développeurs.</PCourse>

        <PCourse>Les fonctionnalités de Git sont nombreuses et permettent de revenir en arrière en cas de problème, de gérer efficacement les branches, les conflits, les tags, les commits, etc.</PCourse>

        <Link href="/git/branche_git.png" target="_blank"><Image src={imgGitBranches} alt="Git Branches" /></Link>

        <PCourse>Utiliser Git est une compétence essentielle pour tout développeur cependant il peut être difficile à prendre en main. C&apos;est pourquoi nous allons voir dans ce cours les bases de Git et comment l&apos;utiliser au quotidien.</PCourse>
    </>
}
