import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/wedding-1.jpg';
import banner2 from '../../../images/banner/wedding-2.jpg';
import banner3 from '../../../images/banner/wedding-3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item style={{height: "80vh"}}>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>The moment you will always remember</h3>
                    <p>I will capture your moment in a lively way.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height: "80vh"}}>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Your candid photo</h3>
                    <p>You will love your candid moments captured with my camera.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height: "80vh"}}>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Best in the market</h3>
                    <p>
                        I will offer you the best service possible.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;