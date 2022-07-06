import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { sliderData } from './variables';
import './index.css'
import Container from '../Container/index';

export default function Slider() {
  return (
    <div className="sliderContainer">
        <Container>
            <Carousel
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={3000}
                // width={300}
            >
                {
                    sliderData.map(slide => {
                        return (
                            <div>
                                <img src={slide} />
                            </div>
                        )
                    })
                }
            </Carousel>
        </Container>
    </div>
  )
}
