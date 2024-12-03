import Image from "next/image";
import ProjectSection from "./component/ProjectSection";

import Permis from "@/public/Permis.png"
import Casque from "@/public/Casque.png"
import Maquette from "@/public/Maquette.png"
import OdsignLogo from "@/public/Odsign Logo blanc.svg"
import Instagram from "@/public/Instagram1.svg"
import Whatsapp from "@/public/WhatsApp.svg"

export default function Home() {
  return (
   <div>
      <header className="text-center flex items-center justify-between rounded-b-lg fixed w-full z-50 bg-inherit bg-opacity-30 backdrop-blur-2xl">
        <Image
          src={OdsignLogo}
          width={100}
          className="ml-6"
        />
        <div className="flex mr-8">
        <a href="" className="mr-4">
          <Image 
            src={Instagram}
            width={25}
          />
        </a>
        <a href="https://wa.me/c/596696676721"> 
          <Image 
          src={Whatsapp}
          width={25}
          />
          </a>
        </div>
      </header> 
      <ProjectSection />
      <h2 className=" text-center my-5">Nos Expertises</h2>

      <div className="my-6 ml-0 mr-16 border border-l-0"> 
        <div className="flex flex-col items-center">
          <h3 className="my-4 text-lg font-bold">Permis de construire</h3>
          <Image
          src={Permis}
          className="w-32"
          />
        </div>
        <p className="text-start ml-4 mr-4 mb-4">Accompagnement complet dans la préparation et le dépôt des demandes de permis, en assurant la conformité avec les réglementations locales et les normes urbanistiques.</p>
      </div>

      <div className="my-6 ml-16 mr-0 border border-r-0"> 
        <div className="flex flex-col items-center">
          <h3 className="my-4 text-lg font-bold">Visualisation 3D immersive</h3>
          <Image
          src={Casque}
          className="w-32"
          />
        </div>
        <p className="text-start mr-4 ml-4 mb-4">Création de maquettes numériques interactives en 3D pour une immersion totale, permettant de visualiser et d’ajuster les projets avant leur réalisation.</p>
        
      </div>

      <div className="my-6 ml-0 mr-16 border border-l-0"> 
        <div className="flex flex-col items-center">
          <h3 className="my-4 text-lg font-bold">Etude de faisabilité solide</h3>
          <Image
          className="w-32"
          src={Maquette}
          />
        </div>
        <p className="text-start mr-4 ml-4 mb-4">Analyse approfondie des projets pour évaluer leur viabilité technique, économique et environnementale, garantissant une planification optimale et sans surprises.</p>
      </div>

      <div className="my-4">
        <h2 className="text-center mt-6 mb-4">Discutons ensemble de votre projet.</h2>
        <div className="flex justify-center">
          <a href="https://wa.me/c/596696676721" className="border flex px-4">
            Un retour en moins de 24h 
          <Image
            src={Whatsapp}
            width={20}
            className="ml-2"
          />
          </a>
          
          </div>
      </div>
    </div>
    
  );
}
