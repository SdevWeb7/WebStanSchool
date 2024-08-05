"use client";

import {Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext} from "@/components/ui/carousel";
import Image from "next/image";
import htmlImage from '@/../public/html5-css3.png';
import jsReactImage from '@/../public/js-react.png';
import nextjsImage from '@/../public/next-js.jpg';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Main from "@/components/main";
import {useToast} from "@/components/ui/use-toast";
import {useEffect} from "react";


export default function Home({searchParams} : {searchParams: { [key: string]: string | string[] | undefined }}) {
    const { toast } = useToast();

    useEffect(() => {
        if (searchParams.successPaiement) {
            toast({
                description: "Paiement effectué avec succès. Vous pouvez maintenant accéder à tous nos cours.",
            });
        } else if (searchParams.successLogin) {
            toast({
                description: "Vous êtes bien connecté.",
            });
        } else if (searchParams.successSignUp) {
            toast({
                description: "Vous êtes bien inscrit.",
            });
        }
        else if (searchParams.successLogout) {
            toast({
                description: "Vous êtes bien déconnecté.",
            });
        }
        searchParams.successPaiement = undefined;
        searchParams.successLogin = undefined;
        searchParams.successLogout = undefined;
    }, [searchParams.successPaiement, searchParams.successLogin, searchParams.successLogout]);

  return <Main className={'flex flex-col items-center justify-center min-h-[80vh]'}>

      <div className={'flex flex-wrap justify-center items-center gap-28 mt-8'}>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight min750:text-5xl min750:leading-tight">
              <span className={'text-my-primary'}>Dev</span>.js,<br/> apprenez à maitriser<br/>les <span className={"font-extrabold text-my-primary"}>technologies actuelles</span> <br/> du développement web <br/>en vous amusant
          </h1>


          <div>
              <h2 className={'text-center text-4xl font-extrabold text-my-primary mb-8 min750:mr-12'}>Que vais-je apprendre?</h2>
              <Carousel className={'overflow-hidden w-full sm:max-w-[500px] sm:overflow-visible min750:mr-12'}>
                  <CarouselContent>
                      <CarouselItem>
                          <Image src={htmlImage} alt={'html et css'} width={300} height={300} className={'w-full'} />
                      </CarouselItem>
                      <CarouselItem>
                          <Image src={jsReactImage} alt={'javascript et react'} width={300} height={300} className={'w-full'} />
                      </CarouselItem>
                      <CarouselItem>
                          <Image src={nextjsImage} alt={'next js'} width={300} height={300} className={'w-full'} />
                      </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious/>
                  <CarouselNext/>
              </Carousel>
          </div>
      </div>


      <div className={"flex flex-col items-center gap-4 mt-12"}>
          <ul className="text-lg font-semibold my-6 ml-6 list-disc [&>li]:mt-2">
              <li>50 cours par theme</li>
              <li>50 exercices par theme</li>
              <li>Visio-conférences individuelles et collectives (50h par personne)</li>
          </ul>

          <div className={'flex flex-wrap justify-center gap-2'}>
              <Button asChild className={'py-6 px-4'}>
                    <Link href={'/'}>Offre de lancement 89$</Link>
              </Button>


              <Button asChild className={'py-6 px-4'}>
                  <Link href={'/'}>En savoir plus (nos promesses)</Link>
              </Button>
          </div>
      </div>
  </Main>;
}
