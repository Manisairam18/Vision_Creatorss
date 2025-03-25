import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Product image imports
import ProductImage1 from '../assets/red-shirt.png';
import ProductImage2 from '../assets/black-cap.png';
import ProductImage3 from '../assets/yellow-bag.png';

// Arrow image imports
import RightArrow from '../assets/Right_Arrow.png'; // Custom right arrow
import LeftArrow from '../assets/Left_Arrow.png'; // Custom left arrow

const CorporateGifts = () => {
  // Unique refs for each section's carousel
  const sliderRef1 = useRef(null); // Ref for the second section's carousel
  const sliderRef2 = useRef(null); // Ref for the third section's carousel
  const sliderRef3 = useRef(null); // Ref for the fourth section's carousel
  const sliderRef4 = useRef(null); // Ref for the fifth section's carousel
  const sliderRef5 = useRef(null); // Ref for the sixth section's carousel

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay
    arrows: false, // Disable default arrows (we'll use custom buttons)
    responsive: [
      {
        breakpoint: 1280, // Large Screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Functions to handle navigation for each section's carousel
  const goToPrev1 = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickPrev();
    }
  };

  const goToNext1 = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickNext();
    }
  };

  const goToPrev2 = () => {
    if (sliderRef2.current) {
      sliderRef2.current.slickPrev();
    }
  };

  const goToNext2 = () => {
    if (sliderRef2.current) {
      sliderRef2.current.slickNext();
    }
  };

  const goToPrev3 = () => {
    if (sliderRef3.current) {
      sliderRef3.current.slickPrev();
    }
  };

  const goToNext3 = () => {
    if (sliderRef3.current) {
      sliderRef3.current.slickNext();
    }
  };

  const goToPrev4 = () => {
    if (sliderRef4.current) {
      sliderRef4.current.slickPrev();
    }
  };

  const goToNext4 = () => {
    if (sliderRef4.current) {
      sliderRef4.current.slickNext();
    }
  };

  const goToPrev5 = () => {
    if (sliderRef5.current) {
      sliderRef5.current.slickPrev();
    }
  };

  const goToNext5 = () => {
    if (sliderRef5.current) {
      sliderRef5.current.slickNext();
    }
  };

  return (
    <div className="bg-white flex flex-col">
      {/* First Section */}
      <div className="bg-[#FFF9FB] w-full px-4 pt-10 pb-[50px] sm:p-8 md:p-12 lg:p-16 mt-8 sm:mt-12 md:mt-16">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[113px]">
          <div className="flex flex-col items-center sm:items-start w-full sm:w-full md:w-[935px] gap-6 sm:gap-8 shrink-0 text-center sm:text-left">
            {/* Heading */}
            <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-poppins font-semibold leading-[125%] text-[#252627] mb-2">
              Corporate Gifts
            </h1>

            {/* Subheading */}
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-poppins font-semibold leading-[125%] text-[#252627] mb-3 max-w-[510px]">
              Make your stakeholders feel special. <br />
              Secure Your Brand’s Loyalty with Us.
            </h2>

            {/* Paragraph */}
            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[150%] text-[#252627] mb-4 max-w-[600px]">
              We create lasting impressions for your company, enhancing brand equity. <br />
              We do this by equipping you with creative gifts that are tailored to your <br />
              brand’s identity, to your employees, customers, and extended network.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <button className="border-2 border-[#E92429] text-[#E92429] font-poppins text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] py-1.5 sm:py-2 px-5 sm:px-6 transition-colors">
                Order Now
              </button>
              <a
                href="#"
                className="relative text-[#252627] font-poppins font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-normal after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 sm:after:left-0 sm:after:-translate-x-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-[#E92429] after:transition-transform after:scale-x-100 sm:ml-8"
              >
                Straight to services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-[#FFF9FB] w-full p-16 mt-16">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Side - Heading */}
            <div className="md:w-1/3 w-full">
              <h1 className="text-[36px] font-poppins font-semibold leading-[125%] text-[#252627]">
                Executive Level <br /> Gifts
              </h1>
            </div>

            {/* Right Side - Carousel */}
            <div className="md:w-2/3 w-full flex justify-end relative mt-[-35px]">
              <div className="w-[840px] relative">
                <Slider ref={sliderRef1} {...settings}>
                  {/* Slide 1 */}
                  <div className="flex flex-col items-center px-6">
                    <div className="bg-white flex items-center justify-center p-12">
                      <img
                        src={ProductImage1}
                        alt="Product 1"
                        className="w-[230px] h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[16px] font-inter font-normal mt-2 text-center">
                      Product image
                    </p>
                  </div>

                  {/* Slide 2 */}
                  <div className="flex flex-col items-center px-6">
                    <div className="bg-white flex items-center justify-center p-12">
                      <img
                        src={ProductImage2}
                        alt="Product 2"
                        className="w-[230px] h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[16px] font-inter font-normal mt-2 text-center">
                      Product image
                    </p>
                  </div>

                  {/* Slide 3 */}
                  <div className="flex flex-col items-center px-6">
                    <div className="bg-white flex items-center justify-center p-12">
                      <img
                        src={ProductImage3}
                        alt="Product 3"
                        className="w-[230px] h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[16px] font-inter font-normal mt-2 text-center">
                      Product image
                    </p>
                  </div>
                </Slider>

                {/* Custom Navigation Buttons */}
                <button
                  onClick={goToPrev1}
                  className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 z-10 hidden md:block"
                >
                  <img src={LeftArrow} alt="Previous" className="w-[13px] h-[30px]" />
                </button>
                <button
                  onClick={goToNext1}
                  className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 z-10 hidden md:block"
                >
                  <img src={RightArrow} alt="Next" className="w-[13px] h-[30px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-[#FFF9FB] w-full p-16 mt-16">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Side - Carousel */}
            <div className="md:w-2/3 w-full flex justify-start relative mt-[-35px]">
              <div className="w-[840px] relative">
                <Slider ref={sliderRef2} {...settings}>
                  {/* Slide 1 */}
                  <div className="flex flex-col items-center px-6">
                    <div className="bg-white flex items-center justify-center p-12">
                      <img
                        src={ProductImage1}
                        alt="Product 1"
                        className="w-[230px] h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[16px] font-inter font-normal mt-2 text-center">
                      Product image
                    </p>
                  </div>

                  {/* Slide 2 */}
                  <div className="flex flex-col items-center px-6">
                    <div className="bg-white flex items-center justify-center p-12">
                      <img
                        src={ProductImage2}
                        alt="Product 2"
                        className="w-[230px] h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[16px] font-inter font-normal mt-2 text-center">
                      Product image
                    </p>
                  </div>

                  {/* Slide 3 */}
                  <div className="flex flex-col items-center px-6">
                    <div className="bg-white flex items-center justify-center p-12">
                      <img
                        src={ProductImage3}
                        alt="Product 3"
                        className="w-[230px] h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[16px] font-inter font-normal mt-2 text-center">
                      Product image
                    </p>
                  </div>
                </Slider>

                {/* Custom Navigation Buttons */}
                <button
                  onClick={goToPrev2}
                  className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 z-10 hidden md:block"
                >
                  <img src={LeftArrow} alt="Previous" className="w-[13px] h-[30px]" />
                </button>
                <button
                  onClick={goToNext2}
                  className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 z-10 hidden md:block"
                >
                  <img src={RightArrow} alt="Next" className="w-[13px] h-[30px]" />
                </button>
              </div>
            </div>

            {/* Right Side - Heading */}
            <div className="md:w-1/3 w-full ml-[10%]">
              <h1 className="text-[36px] font-poppins font-semibold leading-[125%] text-[#252627] whitespace-nowrap">
                Managerial Level <br /> Gifts
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="bg-[#FFF9FB] w-full p-16 mt-16">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Side - Heading */}
            <div className="md:w-1/3 w-full">
              <h1 className="text-[36px] font-poppins font-semibold leading-[125%] text-[#252627]">
                Premium grade <br /> employee and customer gift
              </h1>
            </div>

            {/* Right Side - Carousel */}
            <div className="md:w-2/3 w-full flex justify-end relative mt-[-35px]">
              <div className="w-[840px] relative">
                <Slider ref={sliderRef3} {...settings}>
                  {/* Slide 1 */}
                  <div className="flex flex-col items-center px-6">
                    <div className="bg-white flex items-center justify-center p-12">
                      <img
                        src={ProductImage1}
                        alt="Product 1"
                        className="w-[230px] h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[16px] font-inter font-normal mt-2 text-center">
                      Product image
                    </p>
                  </div>

                  {/* Slide 2 */}
                  <div className="flex flex-col items-center px-6">
                    <div className="bg-white flex items-center justify-center p-12">
                      <img
                        src={ProductImage2}
                        alt="Product 2"
                        className="w-[230px] h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[16px] font-inter font-normal mt-2 text-center">
                      Product image
                    </p>
                  </div>

                  {/* Slide 3 */}
                  <div className="flex flex-col items-center px-6">
                    <div className="bg-white flex items-center justify-center p-12">
                      <img
                        src={ProductImage3}
                        alt="Product 3"
                        className="w-[230px] h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[16px] font-inter font-normal mt-2 text-center">
                      Product image
                    </p>
                  </div>
                </Slider>

                {/* Custom Navigation Buttons */}
                <button
                  onClick={goToPrev3}
                  className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 z-10 hidden md:block"
                >
                  <img src={LeftArrow} alt="Previous" className="w-[13px] h-[30px]" />
                </button>
                <button
                  onClick={goToNext3}
                  className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 z-10 hidden md:block"
                >
                  <img src={RightArrow} alt="Next" className="w-[13px] h-[30px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Section */}
      <div className="bg-[#FFF9FB] w-full p-16 mt-16">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Side - Carousel */}
            <div className="md:w-2/3 w-full flex justify-start relative mt-[-35px]">
              <div className="w-[840px] relative">
                <Slider ref={sliderRef4} {...settings}>
                  {/* Slide 1 */}
                  <div className="flex flex-col items-center px-6">
                    <div className="bg-white flex items-center justify-center p-12">
                      <img
                        src={ProductImage1}
                        alt="Product 1"
                        className="w-[230px] h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[16px] font-inter font-normal mt-2 text-center">
                      Product image
                    </p>
                  </div>

                  {/* Slide 2 */}
                  <div className="flex flex-col items-center px-6">
                    <div className="bg-white flex items-center justify-center p-12">
                      <img
                        src={ProductImage2}
                        alt="Product 2"
                        className="w-[230px] h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[16px] font-inter font-normal mt-2 text-center">
                      Product image
                    </p>
                  </div>

                  {/* Slide 3 */}
                  <div className="flex flex-col items-center px-6">
                    <div className="bg-white flex items-center justify-center p-12">
                      <img
                        src={ProductImage3}
                        alt="Product 3"
                        className="w-[230px] h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[16px] font-inter font-normal mt-2 text-center">
                      Product image
                    </p>
                  </div>
                </Slider>

                {/* Custom Navigation Buttons */}
                <button
                  onClick={goToPrev4}
                  className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 z-10 hidden md:block"
                >
                  <img src={LeftArrow} alt="Previous" className="w-[13px] h-[30px]" />
                </button>
                <button
                  onClick={goToNext4}
                  className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 z-10 hidden md:block"
                >
                  <img src={RightArrow} alt="Next" className="w-[13px] h-[30px]" />
                </button>
              </div>
            </div>

            {/* Right Side - Heading */}
            <div className="md:w-1/3 w-full ml-[10%]">
              <h1 className="text-[36px] font-poppins font-semibold leading-[125%] text-[#252627] whitespace-nowrap">
                Standard grade <br /> employee and <br /> customer gift
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Sixth Section */}
      <div className="bg-[#FFF9FB] w-full p-16 mt-16">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Side - Heading */}
            <div className="md:w-1/3 w-full">
              <h1 className="text-[36px] font-poppins font-semibold leading-[125%] text-[#252627]">
                Basic grade employee and customer gift
              </h1>
            </div>

            {/* Right Side - Carousel */}
            <div className="md:w-2/3 w-full flex justify-end relative mt-[-35px]">
              <div className="w-[840px] relative">
                <Slider ref={sliderRef5} {...settings}>
                  {/* Slide 1 */}
                  <div className="flex flex-col items-center px-6">
                    <div className="bg-white flex items-center justify-center p-12">
                      <img
                        src={ProductImage1}
                        alt="Product 1"
                        className="w-[230px] h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[16px] font-inter font-normal mt-2 text-center">
                      Product image
                    </p>
                  </div>

                  {/* Slide 2 */}
                  <div className="flex flex-col items-center px-6">
                    <div className="bg-white flex items-center justify-center p-12">
                      <img
                        src={ProductImage2}
                        alt="Product 2"
                        className="w-[230px] h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[16px] font-inter font-normal mt-2 text-center">
                      Product image
                    </p>
                  </div>

                  {/* Slide 3 */}
                  <div className="flex flex-col items-center px-6">
                    <div className="bg-white flex items-center justify-center p-12">
                      <img
                        src={ProductImage3}
                        alt="Product 3"
                        className="w-[230px] h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[16px] font-inter font-normal mt-2 text-center">
                      Product image
                    </p>
                  </div>
                </Slider>

                {/* Custom Navigation Buttons */}
                <button
                  onClick={goToPrev5}
                  className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 z-10 hidden md:block"
                >
                  <img src={LeftArrow} alt="Previous" className="w-[13px] h-[30px]" />
                </button>
                <button
                  onClick={goToNext5}
                  className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 z-10 hidden md:block"
                >
                  <img src={RightArrow} alt="Next" className="w-[13px] h-[30px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateGifts;
