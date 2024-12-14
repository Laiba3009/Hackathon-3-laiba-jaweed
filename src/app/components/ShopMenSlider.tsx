"use client"
import React, {useRef} from 'react';
import Slider from "react-slick";
import { nikeProducts } from './Cards/data'; 
import Card from './Cards/Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa6';

const ShopMensSlider = () => {
    const sliderRef = useRef<Slider | null>(null);

  const mensProducts = nikeProducts.filter((product) =>
    product.description.toLowerCase().includes("men")
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="flex mb-4 items-center justify-end">
          <div className="flex items-center gap-4">
            <p>Shop Men's</p>
            <div className="bg-[#F5F5F5] px-5 py-4 rounded-full cursor-pointer" onClick={() => sliderRef.current?.slickPrev()}>
             <FaChevronLeft />
            </div>
            <div className="bg-[#E5E5E5] px-5 py-4 rounded-full cursor-pointer" onClick={() => sliderRef.current?.slickNext()}>
           <FaChevronRight />
            </div>
          </div>
        </div>
    <div className="pb-10">
      <Slider {...settings} ref={sliderRef}>
        {mensProducts.map((product) => (
          <Card
            id={product.id}
            key={product.id}
            tags={product.tags}
            title={product.title}
            description={product.description}
            color={product.color}
            price={product.price}
            imagesUrls={product.imagesUrls}
          />
        ))}
      </Slider>
    </div>
    </>
  );
}

export default ShopMensSlider