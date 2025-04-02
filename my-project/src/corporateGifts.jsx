import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Product image imports
import ProductImage1 from '../assets/red-shirt.png';
import ProductImage2 from '../assets/black-cap.png';
import ProductImage3 from '../assets/yellow-bag.png';

// Arrow image imports
import RightArrow from '../assets/Right_Arrow.png';
import LeftArrow from '../assets/Left_Arrow.png';

const CorporateGifts = () => {
  // Unique refs for each section's carousel
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3 = useRef(null);
  const sliderRef4 = useRef(null);
  const sliderRef5 = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time in desktop
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
          slidesToShow: 2, // Show 2 slides at a time in mobile, matching 1024px view
          slidesToScroll: 1,
        },
      },
    ],
  };
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
      <div className="bg-[#FFF9FB] w-full px-2 pt-10 pb-[50px] sm:p-8 md:p-10 lg:p-16 mt-8 sm:mt-12 md:mt-14">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col items-start w-full md:w-[720px] lg:w-[935px] gap-3 sm:gap-6 md:gap-7 text-left">
            {/* Heading */}
            <h1 className="text-[20px] xs:text-[22px] sm:text-[26px] md:text-[28px] lg:text-[36px] font-poppins font-semibold leading-[125%] text-[#252627] mb-2">
              Corporate Gifts
            </h1>

            {/* Subheading */}
            <h2 className="text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-poppins font-semibold leading-[125%] text-[#252627] mb-3 max-w-[510px] md:max-w-[580px]">
              Make your stakeholders feel special.
              <br />
              Secure Your Brand's Loyalty with Us.
            </h2>

            {/* Paragraph */}
            <p className="text-[11px] xs:text-[13px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-inter font-normal leading-[150%] text-[#252627] mb-4 max-w-[300px] xs:max-w-[400px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[700px] -mt-3 sm:-mt-4 md:-mt-5">
              <span className="md:hidden">
                We create lasting impressions for your company enhancing brand equity. We do this by equipping you with creative gifts that are tailored to your brand's identity, to your employees, customers and extended network.
              </span>
              <span className="hidden md:block">
                We create lasting impressions for your company enhancing brand equity.
                <br />
                We do this by equipping you with creative gifts that are tailored to your
                <br />
                brand's identity, to your employees, customers, and extended network.
              </span>
            </p>

            {/* Buttons */}
            <div className="flex flex-row items-center gap-3 sm:gap-5 md:gap-6">
              <button className="border-[2.4px] border-[#E92429] text-[#E92429] font-poppins text-[12px] xs:text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px] py-1.5 xs:py-2 px-5 xs:px-6 transition-colors md:py-2 md:px-6">
                Order Now
              </button>
              <a
                href="#"
                className="relative text-[#252627] font-poppins font-normal text-[12px] xs:text-[14px] sm:text-[14px] md:text-[15px] lg:text-[18px] leading-normal after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-[#E92429] after:transition-transform after:scale-x-100 ml-5"
              >
                See Our Projects
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Second Section */}
      <div className="bg-[#FFF9FB] w-full p-4 sm:p-16 mt-8 sm:mt-16">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            {/* Left Side - Heading */}
            <div className="md:w-1/3 w-full text-center md:text-left relative">
              <h1 className="text-[5vw] sm:text-[36px] font-poppins font-semibold leading-[125%] text-[#252627] mb-4 sm:mb-0 translate-x-[-30px] sm:translate-x-0 translate-y-[16px] sm:translate-y-0">
                <span className="sm:hidden">Executive Level Gifts</span>
                <span className="hidden sm:block">
                  Executive Level <br /> Gifts
                </span>
              </h1>
            </div>

            {/* Right Side - Carousel */}
            <div className="md:w-2/3 w-full flex justify-center md:justify-end relative">
              <div className="w-full max-w-[840px] relative">
                <Slider ref={sliderRef1} {...settings}>
                  {/* Slide 1 */}
                  <div className="flex flex-col items-end px-1 sm:items-center sm:px-4">
                    <div className="bg-white flex items-center justify-center p-3 w-[40vw] sm:w-[180px] lg:p-8 lg:w-auto mr-2 sm:mr-0">
                      <img
                        src={ProductImage1}
                        alt="Product 1"
                        className="w-[30vw] sm:w-[100px] lg:w-[200px] xl:w-[230px] h-[40vw] sm:h-[140px] lg:h-[170px] xl:h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[3.5vw] sm:text-[14px] lg:text-[16px] font-inter font-normal mt-1 text-left sm:text-center w-[40vw] sm:w-auto ml-6 sm:mr-0">
                      Product image 1
                    </p>
                  </div>

                  {/* Slide 2 */}
                  <div className="flex flex-col items-center px-1 sm:items-center sm:px-4">
                    <div className="bg-white flex items-center justify-center p-3 w-[40vw] sm:w-[180px] lg:p-8 lg:w-auto">
                      <img
                        src={ProductImage2}
                        alt="Product 2"
                        className="w-[30vw] sm:w-[150px] lg:w-[200px] xl:w-[230px] h-[40vw] sm:h-[140px] lg:h-[170px] xl:h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[3.5vw] sm:text-[14px] lg:text-[16px] font-inter font-normal mt-1 text-center">
                      Product image 2
                    </p>
                  </div>

                  {/* Slide 3 */}
                  <div className="flex flex-col items-center px-1 sm:items-center sm:px-4">
                    <div className="bg-white flex items-center justify-center p-3 w-[40vw] sm:w-[180px] lg:p-8 lg:w-auto">
                      <img
                        src={ProductImage3}
                        alt="Product 3"
                        className="w-[30vw] sm:w-[150px] lg:w-[200px] xl:w-[230px] h-[40vw] sm:h-[140px] lg:h-[170px] xl:h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[3.5vw] sm:text-[14px] lg:text-[16px] font-inter font-normal mt-1 text-center">
                      Product image 3
                    </p>
                  </div>
                </Slider>

                {/* Custom Navigation Buttons */}
                <button
                  onClick={goToPrev1}
                  className="absolute top-1/2 left-[-5vw] sm:left-[-30px] lg:left-[-40px] transform -translate-y-1/2 z-10"
                >
                  <img src={LeftArrow} alt="Previous" className="w-[2.5vw] sm:w-[10px] lg:w-[12px] xl:w-[13px] h-[6vw] sm:h-[25px] lg:h-[28px] xl:h-[30px]" />
                </button>
                <button
                  onClick={goToNext1}
                  className="absolute top-1/2 right-[-5vw] sm:right-[-30px] lg:right-[-40px] transform -translate-y-1/2 z-10"
                >
                  <img src={RightArrow} alt="Next" className="w-[2.5vw] sm:w-[10px] lg:w-[12px] xl:w-[13px] h-[6vw] sm:h-[25px] lg:h-[28px] xl:h-[30px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section - Left Carousel + Right Heading */}
      <div className="bg-[#FFF9FB] w-full p-4 sm:p-16 mt-8 sm:mt-16">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            {/* Right Side - Heading */}
            <div className="md:w-1/3 w-full text-center md:text-left relative order-1 md:order-2 md:ml-[10%] whitespace-nowrap">
              <h1 className="text-[5vw] sm:text-[28px] lg:text-[36px] font-poppins font-semibold leading-[125%] text-[#252627] mb-4 sm:mb-0 translate-x-[-30px] sm:translate-x-0 translate-y-[16px] sm:translate-y-0">
                <span className="sm:hidden whitespace-nowrap">Managerial Level Gifts</span>
                <span className="hidden sm:block md:hidden">
                  Managerial Level <br /> Gifts
                </span>
                <span className="hidden md:block lg:hidden">
                  Managerial <br /> Level <br /> Gifts
                </span>
                <span className="hidden lg:block">
                  Managerial Level <br /> Gifts
                </span>
              </h1>

            </div>

            {/* Left Side - Carousel */}
            <div className="md:w-2/3 w-full flex justify-center md:justify-start relative order-2 md:order-1">
              <div className="w-full max-w-[840px] relative">
                <Slider ref={sliderRef2} {...settings}>
                  {/* Slide 1 */}
                  <div className="flex flex-col items-end px-1 sm:items-center sm:px-4">
                    <div className="bg-white flex items-center justify-center p-3 w-[40vw] sm:w-[180px] lg:p-8 lg:w-auto mr-2 sm:mr-0">
                      <img
                        src={ProductImage1}
                        alt="Product 1"
                        className="w-[30vw] sm:w-[150px] lg:w-[200px] xl:w-[230px] h-[40vw] sm:h-[140px] lg:h-[170px] xl:h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[3.5vw] sm:text-[14px] lg:text-[16px] font-inter font-normal mt-1 text-left sm:text-center w-[40vw] sm:w-auto ml-6 sm:mr-0">
                      Product image 1
                    </p>
                  </div>

                  {/* Slide 2 */}
                  <div className="flex flex-col items-center px-1 sm:items-center sm:px-4">
                    <div className="bg-white flex items-center justify-center p-3 w-[40vw] sm:w-[180px] lg:p-8 lg:w-auto">
                      <img
                        src={ProductImage2}
                        alt="Product 2"
                        className="w-[30vw] sm:w-[150px] lg:w-[200px] xl:w-[230px] h-[40vw] sm:h-[140px] lg:h-[170px] xl:h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[3.5vw] sm:text-[14px] lg:text-[16px] font-inter font-normal mt-1 text-center">
                      Product image 2
                    </p>
                  </div>

                  {/* Slide 3 */}
                  <div className="flex flex-col items-center px-1 sm:items-center sm:px-4">
                    <div className="bg-white flex items-center justify-center p-3 w-[40vw] sm:w-[180px] lg:p-8 lg:w-auto">
                      <img
                        src={ProductImage3}
                        alt="Product 3"
                        className="w-[30vw] sm:w-[150px] lg:w-[200px] xl:w-[230px] h-[40vw] sm:h-[140px] lg:h-[170px] xl:h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[3.5vw] sm:text-[14px] lg:text-[16px] font-inter font-normal mt-1 text-center">
                      Product image 3
                    </p>
                  </div>
                </Slider>

                {/* Custom Navigation Buttons */}
                <button
                  onClick={goToPrev2}
                  className="absolute top-1/2 left-[-5vw] sm:left-[-30px] lg:left-[-40px] transform -translate-y-1/2 z-10"
                >
                  <img src={LeftArrow} alt="Previous" className="w-[2.5vw] sm:w-[10px] lg:w-[12px] xl:w-[13px] h-[6vw] sm:h-[25px] lg:h-[28px] xl:h-[30px]" />
                </button>
                <button
                  onClick={goToNext2}
                  className="absolute top-1/2 right-[-5vw] sm:right-[-30px] lg:right-[-40px] transform -translate-y-1/2 z-10"
                >
                  <img src={RightArrow} alt="Next" className="w-[2.5vw] sm:w-[10px] lg:w-[12px] xl:w-[13px] h-[6vw] sm:h-[25px] lg:h-[28px] xl:h-[30px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section - Left Heading + Right Carousel */}
      <div className="bg-[#FFF9FB] w-full p-4 sm:p-16 mt-8 sm:mt-16">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            {/* Left Side - Heading */}
            <div className="md:w-1/3 w-full text-center md:text-left relative">
              <h1 className="text-[5vw] sm:text-[28px] lg:text-[36px] font-poppins font-semibold leading-[125%] text-[#252627] mb-4 sm:mb-0 translate-x-[-30px] sm:translate-x-0 translate-y-[16px] sm:translate-y-0 ml-3 sm:ml-0">
                <span className="sm:hidden">Premium grade employee and customer gifts</span>
                <span className="hidden sm:block">
                  Premium grade <br /> employee and customer gift
                </span>
              </h1>
            </div>

            {/* Right Side - Carousel */}
            <div className="md:w-2/3 w-full flex justify-center md:justify-end relative">
              <div className="w-full max-w-[840px] relative">
                <Slider ref={sliderRef3} {...settings}>
                  {/* Slide 1 */}
                  <div className="flex flex-col items-end px-1 sm:items-center sm:px-4">
                    <div className="bg-white flex items-center justify-center p-3 w-[40vw] sm:w-[180px] lg:p-8 lg:w-auto mr-2 sm:mr-0">
                      <img
                        src={ProductImage1}
                        alt="Product 1"
                        className="w-[30vw] sm:w-[150px] lg:w-[200px] xl:w-[230px] h-[40vw] sm:h-[140px] lg:h-[170px] xl:h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[3.5vw] sm:text-[14px] lg:text-[16px] font-inter font-normal mt-1 text-left sm:text-center w-[40vw] sm:w-auto ml-6 sm:mr-0">
                      Product image 1
                    </p>
                  </div>

                  {/* Slide 2 */}
                  <div className="flex flex-col items-center px-1 sm:items-center sm:px-4">
                    <div className="bg-white flex items-center justify-center p-3 w-[40vw] sm:w-[180px] lg:p-8 lg:w-auto">
                      <img
                        src={ProductImage2}
                        alt="Product 2"
                        className="w-[30vw] sm:w-[150px] lg:w-[200px] xl:w-[230px] h-[40vw] sm:h-[140px] lg:h-[170px] xl:h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[3.5vw] sm:text-[14px] lg:text-[16px] font-inter font-normal mt-1 text-center">
                      Product image 2
                    </p>
                  </div>

                  {/* Slide 3 */}
                  <div className="flex flex-col items-center px-1 sm:items-center sm:px-4">
                    <div className="bg-white flex items-center justify-center p-3 w-[40vw] sm:w-[180px] lg:p-8 lg:w-auto">
                      <img
                        src={ProductImage3}
                        alt="Product 3"
                        className="w-[30vw] sm:w-[150px] lg:w-[200px] xl:w-[230px] h-[40vw] sm:h-[140px] lg:h-[170px] xl:h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[3.5vw] sm:text-[14px] lg:text-[16px] font-inter font-normal mt-1 text-center">
                      Product image 3
                    </p>
                  </div>
                </Slider>

                {/* Custom Navigation Buttons */}
                <button
                  onClick={goToPrev3}
                  className="absolute top-1/2 left-[-5vw] sm:left-[-30px] lg:left-[-40px] transform -translate-y-1/2 z-10"
                >
                  <img src={LeftArrow} alt="Previous" className="w-[2.5vw] sm:w-[10px] lg:w-[12px] xl:w-[13px] h-[6vw] sm:h-[25px] lg:h-[28px] xl:h-[30px]" />
                </button>
                <button
                  onClick={goToNext3}
                  className="absolute top-1/2 right-[-5vw] sm:right-[-30px] lg:right-[-40px] transform -translate-y-1/2 z-10"
                >
                  <img src={RightArrow} alt="Next" className="w-[2.5vw] sm:w-[10px] lg:w-[12px] xl:w-[13px] h-[6vw] sm:h-[25px] lg:h-[28px] xl:h-[30px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Section */}
      <div className="bg-[#FFF9FB] w-full p-4 sm:p-16 mt-8 sm:mt-16">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            {/* Right Side - Heading */}
            <div className="md:w-1/3 w-full text-center md:text-left relative order-1 md:order-2 md:ml-[10%] whitespace-nowrap">
              <h1 className="text-[5vw] sm:text-[28px] lg:text-[36px] font-poppins font-semibold leading-[125%] text-[#252627] mb-4 sm:mb-0 translate-x-[-30px] sm:translate-x-0 translate-y-[16px] sm:translate-y-0 ml-2 sm:ml-0">
                <span className="sm:hidden">Standard grade employee <br /> and customer gifts</span>
                <span className="hidden sm:block md:hidden">
                  Standard grade <br /> employee and <br /> customer gift
                </span>
                <span className="hidden md:block lg:hidden">
                  Standard <br /> grade <br /> employee <br /> and <br /> customer <br /> gifts
                </span>
                <span className="hidden lg:block">
                  Standard grade <br /> employee and <br /> customer gift
                </span>
              </h1>

            </div>

            {/* Left Side */}
            <div className="md:w-2/3 w-full flex justify-center md:justify-start relative order-2 md:order-1">
              <div className="w-full max-w-[840px] relative">
                <Slider ref={sliderRef4} {...settings}>
                  {/* Slide 1 */}
                  <div className="flex flex-col items-end px-1 sm:items-center sm:px-4">
                    <div className="bg-white flex items-center justify-center p-3 w-[40vw] sm:w-[180px] lg:p-8 lg:w-auto mr-2 sm:mr-0">
                      <img
                        src={ProductImage1}
                        alt="Product 1"
                        className="w-[30vw] sm:w-[150px] lg:w-[200px] xl:w-[230px] h-[40vw] sm:h-[140px] lg:h-[170px] xl:h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[3.5vw] sm:text-[14px] lg:text-[16px] font-inter font-normal mt-1 text-left sm:text-center w-[40vw] sm:w-auto ml-6 sm:mr-0">
                      Product image 1
                    </p>
                  </div>

                  {/* Slide 2 */}
                  <div className="flex flex-col items-center px-1 sm:items-center sm:px-4">
                    <div className="bg-white flex items-center justify-center p-3 w-[40vw] sm:w-[180px] lg:p-8 lg:w-auto">
                      <img
                        src={ProductImage2}
                        alt="Product 2"
                        className="w-[30vw] sm:w-[150px] lg:w-[200px] xl:w-[230px] h-[40vw] sm:h-[140px] lg:h-[170px] xl:h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[3.5vw] sm:text-[14px] lg:text-[16px] font-inter font-normal mt-1 text-center">
                      Product image 2
                    </p>
                  </div>

                  {/* Slide 3 */}
                  <div className="flex flex-col items-center px-1 sm:items-center sm:px-4">
                    <div className="bg-white flex items-center justify-center p-3 w-[40vw] sm:w-[180px] lg:p-8 lg:w-auto">
                      <img
                        src={ProductImage3}
                        alt="Product 3"
                        className="w-[30vw] sm:w-[150px] lg:w-[200px] xl:w-[230px] h-[40vw] sm:h-[140px] lg:h-[170px] xl:h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[3.5vw] sm:text-[14px] lg:text-[16px] font-inter font-normal mt-1 text-center">
                      Product image 3
                    </p>
                  </div>
                </Slider>

                {/* Custom Navigation Buttons */}
                <button
                  onClick={goToPrev4}
                  className="absolute top-1/2 left-[-5vw] sm:left-[-30px] lg:left-[-40px] transform -translate-y-1/2 z-10"
                >
                  <img src={LeftArrow} alt="Previous" className="w-[2.5vw] sm:w-[10px] lg:w-[12px] xl:w-[13px] h-[6vw] sm:h-[25px] lg:h-[28px] xl:h-[30px]" />
                </button>
                <button
                  onClick={goToNext4}
                  className="absolute top-1/2 right-[-5vw] sm:right-[-30px] lg:right-[-40px] transform -translate-y-1/2 z-10"
                >
                  <img src={RightArrow} alt="Next" className="w-[2.5vw] sm:w-[10px] lg:w-[12px] xl:w-[13px] h-[6vw] sm:h-[25px] lg:h-[28px] xl:h-[30px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sixth Section */}
      <div className="bg-[#FFF9FB] w-full p-4 sm:p-16 mt-8 sm:mt-16">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            {/* Left Side - Heading */}
            <div className="md:w-1/3 w-full text-center md:text-left relative">
              <h1 className="text-[5vw] sm:text-[28px] lg:text-[36px] font-poppins font-semibold leading-[125%] text-[#252627] mb-4 sm:mb-0 translate-x-[-30px] sm:translate-x-0 translate-y-[16px] sm:translate-y-0 ml-2 sm:ml-0">
                <span className="sm:hidden">Basic grade employee and customer gifts</span>
                <span className="hidden sm:block">
                  Basic grade employee and customer gift
                </span>
              </h1>
            </div>

            {/* Right Side - Carousel */}
            <div className="md:w-2/3 w-full flex justify-center md:justify-end relative">
              <div className="w-full max-w-[840px] relative">
                <Slider ref={sliderRef5} {...settings}>
                  {/* Slide 1 */}
                  <div className="flex flex-col items-end px-1 sm:items-center sm:px-4">
                    <div className="bg-white flex items-center justify-center p-3 w-[40vw] sm:w-[180px] lg:p-8 lg:w-auto mr-2 sm:mr-0">
                      <img
                        src={ProductImage1}
                        alt="Product 1"
                        className="w-[30vw] sm:w-[150px] lg:w-[200px] xl:w-[230px] h-[40vw] sm:h-[140px] lg:h-[170px] xl:h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[3.5vw] sm:text-[14px] lg:text-[16px] font-inter font-normal mt-1 text-left sm:text-center w-[40vw] sm:w-auto ml-6 sm:mr-0">
                      Product image 1
                    </p>
                  </div>

                  {/* Slide 2 */}
                  <div className="flex flex-col items-center px-1 sm:items-center sm:px-4">
                    <div className="bg-white flex items-center justify-center p-3 w-[40vw] sm:w-[180px] lg:p-8 lg:w-auto">
                      <img
                        src={ProductImage2}
                        alt="Product 2"
                        className="w-[30vw] sm:w-[150px] lg:w-[200px] xl:w-[230px] h-[40vw] sm:h-[140px] lg:h-[170px] xl:h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[3.5vw] sm:text-[14px] lg:text-[16px] font-inter font-normal mt-1 text-center">
                      Product image 2
                    </p>
                  </div>

                  {/* Slide 3 */}
                  <div className="flex flex-col items-center px-1 sm:items-center sm:px-4">
                    <div className="bg-white flex items-center justify-center p-3 w-[40vw] sm:w-[180px] lg:p-8 lg:w-auto">
                      <img
                        src={ProductImage3}
                        alt="Product 3"
                        className="w-[30vw] sm:w-[150px] lg:w-[200px] xl:w-[230px] h-[40vw] sm:h-[140px] lg:h-[170px] xl:h-[190px] object-contain"
                      />
                    </div>
                    <p className="text-[#252627] text-[3.5vw] sm:text-[14px] lg:text-[16px] font-inter font-normal mt-1 text-center">
                      Product image 3
                    </p>
                  </div>
                </Slider>

                {/* Custom Navigation Buttons */}
                <button
                  onClick={goToPrev5}
                  className="absolute top-1/2 left-[-5vw] sm:left-[-30px] lg:left-[-40px] transform -translate-y-1/2 z-10"
                >
                  <img src={LeftArrow} alt="Previous" className="w-[2.5vw] sm:w-[10px] lg:w-[12px] xl:w-[13px] h-[6vw] sm:h-[25px] lg:h-[28px] xl:h-[30px]" />
                </button>
                <button
                  onClick={goToNext5}
                  className="absolute top-1/2 right-[-5vw] sm:right-[-30px] lg:right-[-40px] transform -translate-y-1/2 z-10"
                >
                  <img src={RightArrow} alt="Next" className="w-[2.5vw] sm:w-[10px] lg:w-[12px] xl:w-[13px] h-[6vw] sm:h-[25px] lg:h-[28px] xl:h-[30px]" />
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
