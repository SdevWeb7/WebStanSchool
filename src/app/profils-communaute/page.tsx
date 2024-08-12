import Main from "@/components/main";
import H1 from "@/components/h1";
import UsersPagination from "@/components/profils-communaute/users-pagination";
import ProfilsCommuContent from "@/components/profils-communaute/profils-commu-content";
import ProfilsCommuSearch from "@/components/profils-communaute/profils-commu-search";


export default async function Page() {


    return <Main>

        <H1 className={"mb-12"}>Profils Communauté</H1>


        <ProfilsCommuSearch />


        <UsersPagination />


        <ProfilsCommuContent />

    </Main>
}
