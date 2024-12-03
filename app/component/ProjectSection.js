"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import Image from 'next/image'
import VillaCapucine from '@/public/BungalowCapucine.jpg'

export default function ProjectSection(){

    return(
        <div>
            <Swiper>
                <SwiperSlide className="p-4">
                    <div className="h-t border p-4">
                        <Image
                            src={VillaCapucine}
                            
                            alt="image du projet"
                        />
                        <h2>Bungalow Capucine</h2>
                        <p>
                        {"Le Bungalow Capucine est conçu pour un couple recherchant une petite maison intimiste et fonctionnelle, nichée au cœur d'un espace extérieur verdoyant. L'accent est mis sur la simplicité et le confort, avec des espaces bien pensés pour maximiser l'intimité et le bien-être, tout en s'intégrant harmonieusement dans la nature environnante."}
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="p-4">
                    <div className="h-t border">
                        <Image
                            src={VillaCapucine}
                            alt="image du projet"
                        />
                        <h2>Bungalow Capucine</h2>
                        <p>
                        {"Le Bungalow Capucine est conçu pour un couple recherchant une petite maison intimiste et fonctionnelle, nichée au cœur d'un espace extérieur verdoyant. L'accent est mis sur la simplicité et le confort, avec des espaces bien pensés pour maximiser l'intimité et le bien-être, tout en s'intégrant harmonieusement dans la nature environnante."}
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="p-4">
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
                </SwiperSlide>
            </Swiper>
        </div>
    )
}