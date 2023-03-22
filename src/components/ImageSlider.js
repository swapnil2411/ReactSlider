import React from 'react'
import { useState } from 'react';

const ImageSlider = () => {
    const [currentImage, setImage] = useState(0);

    const ImgData = [
        'https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&h=450&w=940',
        'https://images.pexels.com/photos/812958/pexels-photo-812958.jpeg?auto=compress&cs=tinysrgb&h=450&w=940',
        'https://images.pexels.com/photos/1646311/pexels-photo-1646311.jpeg?auto=compress&cs=tinysrgb&h=450&w=940',
        'https://images.pexels.com/photos/2397653/pexels-photo-2397653.jpeg?auto=compress&cs=tinysrgb&h=450&w=940'
    ];

    const prevSlide = () =>{
        const isStartingSlide = currentImage === 0
        const newImageIndex = isStartingSlide ? ImgData.length - 1 : currentImage - 1
        setImage(newImageIndex)
    }

    const nextSlide = () =>{
        const isLastSlide = currentImage === ImgData.length - 1
        const newImageIndex = isLastSlide ? 0 : currentImage + 1
        setImage(newImageIndex);
    }

    const goToSlide = sliderIndex => {
        setImage(sliderIndex);
    }

    return (
        <section className='slider_area'>
            <img src={ImgData[currentImage]} alt={"image" + currentImage} data-id={currentImage} />
            <div className='prev_btn btn' onClick={() => prevSlide()}>
                <span class="iconify" data-icon="material-symbols:arrow-back"></span>
            </div>
            <div className='nect_btn btn' onClick={() => nextSlide()}>
                <span class="iconify" data-icon="material-symbols:arrow-forward"></span>
            </div>

            <div className='carosuel-dots'>
                {
                    ImgData.map((sliderDot, sliderIndex) => {
                        return(
                            <button key={sliderIndex} onClick={() => goToSlide(sliderIndex)}>
                                <span></span>
                            </button>
                        )
                    })
                }
            </div>
           
        </section>
    )
}

export default ImageSlider