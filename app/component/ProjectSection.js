"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import Image from 'next/image'
import VillaCapucine from '@/public/BungalowCapucine.jpg'
// import Vidéo from '@/public/Vidéo.mp4'


export default function ProjectSection(){

    return(
        <div className="pt-24">
            <Swiper>
                <SwiperSlide className="p-4">
                    <div className="h-t border p-4">
                        <Image
                            src={VillaCapucine}
                            
                            alt="image du projet"
                        />
                        <h2 className="my-4">Bungalow Capucine</h2>
                        <p>
                        {"Le Bungalow Capucine est conçu pour un couple recherchant une petite maison intimiste et fonctionnelle, nichée au cœur d'un espace extérieur verdoyant. L'accent est mis sur la simplicité et le confort, avec des espaces bien pensés pour maximiser l'intimité et le bien-être, tout en s'intégrant harmonieusement dans la nature environnante."}
                        </p>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className="p-4">
                    <div className="h-t border">

                        <video width="100%" height="auto">
                        <source src={Vidéo} type="video/mp4"/>
                        </video>

                        <h2>Bungalow Capucine</h2>
                        <p>
                        {"Le Bungalow Capucine est conçu pour un couple recherchant une petite maison intimiste et fonctionnelle, nichée au cœur d'un espace extérieur verdoyant. L'accent est mis sur la simplicité et le confort, avec des espaces bien pensés pour maximiser l'intimité et le bien-être, tout en s'intégrant harmonieusement dans la nature environnante."}
                        </p>
                    </div>
                </SwiperSlide> */}
                {/* <SwiperSlide className="p-4">
                    <div className="h-t border">
                        <Image
                            src={VillaCapucine}
                            width={500}
                            height={500}
                            alt="image du projet"
                        />
                        <h2>Bungalow Capucine</h2>
                        <p>
                        {"Le Bungalow Capucine est conçu pour un couple recherchant une petite maison intimiste et fonctionnelle, nichée au cœur d'un espace extérieur verdoyant. L'accent est mis sur la simplicité et le confort, avec des espaces bien pensés pour maximiser l'intimité et le bien-être, tout en s'intégrant harmonieusement dans la nature environnante."}
                        </p>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </div>
    )
}