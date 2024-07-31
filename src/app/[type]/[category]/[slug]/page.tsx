import prisma from "@/lib/db";
import Main from "@/components/main";
import H1 from "@/components/h1";


type CoursePageProps = {
    params: {
        type: string
        category: string
        slug: string
    }
}
export default async function Page({params} : CoursePageProps) {

    const course = await prisma.course.findFirst({
        where: {
            type: params.type,
            category: params.category,
            slug: params.slug,
        }
    })

    return <Main>

        <H1 className={'capitalize'}>{params.type} - {params.category === "next-js" ? "Next.js" : params.category.replace('-', ' & ')} - {course?.title}</H1>


        <p className={'text-center mt-16'}>Ceci est la page d&apos;un {params.type}</p>

    </Main>
}
