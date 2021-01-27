import { useState } from 'react';
import { VideoData } from '../../data/VideoData';

import { VideoSliderStyle } from './styles';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export default function VideoSlider({ slides }) {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }



    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1)
    }



    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <VideoSliderStyle>
            <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                {VideoData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <>
                                    <h2>{slide.streamerName}</h2>
                                    <iframe width="560" height="315" src={slide.streamingLink} title={slide.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </>
                            )}
                            
                        </div>
                    )
                })}
            </section>
        </VideoSliderStyle>
    )
}
