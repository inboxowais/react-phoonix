import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './custom.hero.carousel.scss';
import Image from 'components/image/Image';
export default function CustomHeroCarousel() {
    return (
        <div id="wrapper-hero">
            <Carousel >
                <div>
                    <Image src="assets/hero2.png" />
                
                </div>
                <div>
                    <Image src="assets/hero.png" />
                  
                </div>
                <div>
                    <Image src="assets/hero2.png" />
                  
                </div>
            </Carousel>
        </div>
    )
}
