import Image from "next/image";
import ProjectSection from "./component/ProjectSection";

import Permis from "@/public/Permis.png"
import Casque from "@/public/Casque.png"
import Maquette from "@/public/Maquette.png"

export default function Home() {
  return (
   <div>
      <header className="text-center py-10">
        ODSIGN
      </header> 
      <ProjectSection/>
      <h2 className="ml-8 my-5">Nos Expertises</h2>

      <div className="my-6 ml-0 mr-16 border border-l-0"> 
        <div className="flex flex-col items-center">
          <h3 className="my-4">Permis de construire</h3>
          <Image
          src={Permis}
          className="w-32"
          />
        </div>
        <p className="text-start ml-4 mr-4 mb-4">Accompagnement complet dans la préparation et le dépôt des demandes de permis, en assurant la conformité avec les réglementations locales et les normes urbanistiques.</p>
      </div>

      <div className="my-6 ml-16 mr-0 border border-r-0"> 
        <div className="flex flex-col items-center">
          <h3 className="my-4">Visualisation 3D immersive</h3>
          <Image
          src={Casque}
          className="w-32"
          />
        </div>
        <p className="text-start mr-4 ml-4 mb-4">Création de maquettes numériques interactives en 3D pour une immersion totale, permettant de visualiser et d’ajuster les projets avant leur réalisation.</p>
        
      </div>

      <div className="my-6 ml-0 mr-16 border border-l-0"> 
        <div className="flex flex-col items-center">
          <h3 className="my-4" >Etude de faisabilité solide</h3>
          <Image
          className="w-32"
          src={Maquette}
          />
        </div>
        <p className="text-start mr-4 ml-4 mb-4">Analyse approfondie des projets pour évaluer leur viabilité technique, économique et environnementale, garantissant une planification optimale et sans surprises.</p>
      </div>
   </div>
    
  );
}
