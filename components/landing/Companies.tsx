import React from "react";
import { observer } from "mobx-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Companies = observer(() => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToScroll: 1,
    slidesToShow: 5,
    autoplay: true,
    cssEase: "linear",
  };
  const images = [
    { src: "/images/envato.svg", alt: "Envato" },
    { src: "/images/scale.svg", alt: "Scale" },
    { src: "/images/intuit.svg", alt: "Intuit" },
    { src: "/images/guidewire.svg", alt: "Guidewire" },
    { src: "/images/my-muscle-chef.svg", alt: "My Muscle Chef" },
    { src: "/images/abnormal.svg", alt: "Abnormal" },
  ];

  return (
    <div className="observe-section w-full hidden md:flex flex-col max-w-screen-lg mx-auto py-20">
      <p className={`w-full text-center text-xl`}>
        Trusted by following Companies
      </p>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <img src={image.src} alt={image.alt} className="w-full h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default Companies;
