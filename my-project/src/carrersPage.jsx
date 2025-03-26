import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dotsImage from "../assets/Dots.svg";
import dotsImageRed from "../assets/Dots_Red.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import uploadIcon from "../assets/ContactFormAssets/upload_Icon.svg";
import closeButton from "../assets/ContactFormAssets/close.svg";

const CareersPage = () => {
    const sliderSettings = {
        dots: false,
        cssEase: "cubic-bezier(0.32, 0.32, 0.32, 0.32)",
        infinite: true,
        speed: 4500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        responsive: [
            {
                breakpoint: 9999,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const sliderItems = [
        {
            id: 1,
            dot: dotsImage,
            title: "Life at Vishan Creators",
        },
        {
            id: 2,
            dot: dotsImageRed,
            title: "Life at Vishan Creators",
        },
        {
            id: 3,
            dot: dotsImage,
            title: "Life at Vishan Creators",
        },
    ];

    const duplicatedItems = [...sliderItems, ...sliderItems, ...sliderItems];

    const [formData, setFormData] = useState({
        name: "",
        applyingFor: "",
        mobile: "",
        email: "",
        socialMedia: "",
        portfolio: "",
        resume: null,
        additionalInfo: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        setIsSubmitted(true);
    };

    const handleClose = () => {
        setIsSubmitted(false);
        setFormData({
            name: "",
            applyingFor: "",
            mobile: "",
            email: "",
            socialMedia: "",
            portfolio: "",
            resume: null,
            additionalInfo: "",
        });
    };

    const roles = [
        "Accounting Director",
        "Account Manager",
        "Treasury Manager",
        "Strategy Director",
        "Strategy Head",
        "Junior Strategist",
        "Creative Director",
        "Content and Copywriter",
        "Marketing Manager",
        "Marketer",
        "Graphic Designer",
        "Account Executive/ Sales Executive",
        "Videographer",
        "Administrative Admin",
        "Financial Admin",
        "Editor",
    ];

    const roleDetails = {
        "Accounting Director": "Responsible for client budgeting decisions and overall management of the accounting department.",
        "Account Manager": "Facilitates client servicing and coordination between clients and the VC team.",
        "Treasury Manager": "Manages overall finances within VC.",
        "Strategy Director": "Holds decision-making authority in strategy and oversees the management of the strategy department.",
        "Strategy Head": "Leads the strategy team, coordinating strategies for multiple projects.",
        "Junior Strategist": "Engages in project strategy, involving the creation and presentation of strategies, analysis of primary and secondary data to generate insights used in campaigns and strategies.",
        "Creative Director": "Manages and fosters the growth of the creative team.",
        "Content and Copywriter": "Creates copy and content for client briefs, websites, campaigns, ads, and social media.",
        "Marketing Manager": "Heads and manages VC's marketing team.",
        "Marketer": "Focuses on branding and marketing strategies for VC.",
        "Graphic Designer": "Designs creative print and digital outputs, innovates in design.",
        "Account Executive/ Sales Executive": "Conducts meetings and procures new clients for VC.",
        "Videographer": "Handles the planning, shooting, and arrangements of content.",
        "Administrative Admin": "Manages overall administration and client servicing.",
        "Financial Admin": "Handles overall financial administration both internally and for client-side servicing.",
        "Editor": "Must be able to edit immersive videos. Basic colour grading skill, creating basic 2D & 3D animated videos.",
    };

    const toggleRole = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleShare = (role, index) => {
        const roleLink = `${window.location.origin}/careers/${role.toLowerCase().replace(/\s+/g, "-")}`;
        navigator.clipboard.writeText(roleLink).then(() => {
            setCopiedIndex(index);
        });
    };

    const handleCloseCopiedMessage = () => {
        setCopiedIndex(null);
    };

    const scrollToJobForm = (role) => {
        setFormData(prev => ({ ...prev, applyingFor: role }));
        const jobForm = document.getElementById('jobForm');
        if (jobForm) {
            jobForm.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white w-full lg: mt-8 sm:mt-12 md:mt-16">
            <div className="w-full mx-auto">
                <div className="flex flex-col w-full gap-[10px] shrink-0">
                    <div className="flex flex-col items-center text-center w-full">
                        <h1 className="text-[20px] xs:text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-poppins font-medium leading-[125%] text-[#252627] mb-4 sm:mb-6 whitespace-nowrap">
                            Let's create fun brands together.
                        </h1>
                    </div>

                    <div className="w-full mt-4 sm:mt-8 overflow-hidden relative">
                        <Slider {...{
                            ...sliderSettings,
                            centerMode: true,
                            centerPadding: '0',
                            variableWidth: true,
                            initialSlide: 1
                        }}>
                            {duplicatedItems.map((item, index) => (
                                <div
                                    key={`${item.id}-${index}`}
                                    className="px-2 sm:px-4"
                                    style={{ width: 'auto' }}
                                >
                                    <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
                                        <img
                                            src={item.dot}
                                            alt="Dot"
                                            className="w-[16px] xs:w-[18px] sm:w-[28px] md:w-[34px] h-[16px] xs:h-[18px] sm:h-[28px] md:h-[34px]"
                                        />
                                        <h2 className="text-[16px] xs:text-[18px] sm:text-[28px] md:text-[36px] font-poppins font-semibold leading-[114%] text-black whitespace-nowrap">
                                            {item.title}
                                        </h2>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center w-full mt-8 sm:mt-12 md:mt-20">
                    <div className="w-[90%] xs:w-[90%] sm:w-[85%] md:w-[80%] lg:w-[924px] h-[180px] xs:h-[220px] sm:h-[300px] md:h-[400px] lg:h-[520px] bg-[#D9D9D9]"></div>

                    <div className="flex flex-row items-start gap-4 sm:flex-row sm:gap-6 mt-6 sm:mt-8 md:mt-10">
                        <div>
                            <button className="border-2 border-[#E92429] text-[#E92429] font-poppins text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[22px] py-1 xs:py-1.5 sm:py-2 px-3 xs:px-4 sm:px-5 md:px-6 transition-colors whitespace-nowrap">
                                See all openings
                            </button>
                        </div>

                        <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:ml-0 sm:mt-[-10px] md:ml-16 md:mt-[5px] mt-0 [text-align:left] [align-items:flex-start] sm:[text-align:left] sm:[align-items:start]">
                            <div>
                                <a
                                    href="#"
                                    className="relative text-[#252627] font-poppins font-normal text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] leading-normal 
                            after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full 
                            after:h-[2px] xs:after:h-[3px] after:bg-[#E92429] after:transition-transform after:scale-x-100 [margin-left:30px] sm:ml-7"
                                >
                                    Learn more
                                </a>
                            </div>
                            <div>
                                <p className="text-[#252627] text-[12px] xs:text-[14px] sm:text-[15px] md:text-[16px] text-center sm:text-left font-poppins font-normal leading-[100%] mt-1 sm:mt-2 md:mt-3 [text-align:left] sm:[text-align:left] whitespace-nowrap">
                                    You are already qualified,
                                    <br /> if you want to know more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-8 sm:mt-8 overflow-hidden relative">
                    <Slider {...{
                        ...sliderSettings,
                        centerMode: true,
                        centerPadding: '0',
                        variableWidth: true,
                        initialSlide: 1,
                        rtl: true
                    }}>
                        {duplicatedItems.map((item, index) => (
                            <div
                                key={`${item.id}-${index}-2`}
                                className="px-2 sm:px-4"
                                style={{ width: 'auto' }}
                            >
                                <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
                                    <img
                                        src={item.dot}
                                        alt="Dot"
                                        className="w-[16px] xs:w-[18px] sm:w-[28px] md:w-[34px] h-[16px] xs:h-[18px] sm:h-[28px] md:h-[34px]"
                                    />
                                    <h2 className="text-[16px] xs:text-[18px] sm:text-[28px] md:text-[36px] font-poppins font-semibold leading-[114%] text-black whitespace-nowrap">
                                        {item.title}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="w-full max-w-3xl mx-auto xs:py-8 sm:mt-12 mr-0 sm:mr-14 px-4 sm:px-5 md:px-6 lg:px-8 mt-12">
                <h2 className="flex justify-start translate-x-4 xs:translate-x-3 sm:translate-x-3 translate-y-0 sm:translate-y-0 md:translate-x-3 lg:-translate-x-[60%] lg:translate-y-16 xl:-translate-x-[60%] xl:translate-y-16 2xl:-translate-x-[60%] 2xl:translate-y-16 text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-black leading-[125%] mb-3 xs:mb-4">
                    Roles
                </h2>

                <div className="px-0 sm:px-5 md:px-6 lg:px-2">
                    {roles.map((role, index) => (
                        <div
                            key={index}
                            className="border-t border-b border-gray-400 text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] font-medium font-poppins text-[#252627] leading-[120%]"
                        >
                            <div
                                className="flex justify-between items-center py-2 xs:py-3 px-3 xs:px-4 cursor-pointer"
                                onClick={() => toggleRole(index)}
                            >
                                <p className="text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] font-medium font-poppins text-[#252627] leading-[120%]">
                                    {role}
                                </p>
                                <img
                                    src={openIndex === index ? minus : plus}
                                    alt="toggle"
                                    className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 transition-all duration-200 ease-in-out"
                                />
                            </div>
                            {openIndex === index && (
                                <div className="p-2 xs:p-3 sm:p-4 text-[#252627] text-[14px] xs:text-[16px] sm:text-[18px] leading-[150%]">
                                    {roleDetails[role]}
                                    <div className="flex items-center mt-3 xs:mt-4 relative">
                                        <button 
                                            className="border-2 border-[#252627] text-[#252627] text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] font-normal py-1 xs:py-1.5 px-2 xs:px-3 mr-2 xs:mr-3"
                                            onClick={() => scrollToJobForm(role)}
                                        >
                                            Apply
                                        </button>
                                        <button
                                            onClick={() => handleShare(role, index)}
                                            className="text-[#252627] text-[18px] xs:text-[16px] sm:text-[22px] font-medium underline underline-offset-[4px] font-[Poppins] pl-2 w-[16px] xs:w-[18px] h-[24px] xs:h-[26px]"
                                        >
                                            Share
                                        </button>
                                        {copiedIndex === index && (
                                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                                <div
                                                    className="relative w-[90%] max-w-[400px] text-white p-10 rounded-lg shadow-lg"
                                                    style={{
                                                        background: "linear-gradient(180deg, #E92429 0%, #00C4B4 100%)",
                                                        backgroundSize: "cover",
                                                        backgroundPosition: "center",
                                                    }}
                                                >
                                                    <button
                                                        className="absolute top-4 right-4 w-6 h-6 flex-shrink-0"
                                                        onClick={handleCloseCopiedMessage}
                                                    >
                                                        <img src={closeButton} alt="Close" className="w-full h-full" />
                                                    </button>
                                                    <div className="flex flex-col items-center justify-center">
                                                        <p className="text-[18px] font-inter font-normal leading-[150%] text-white text-center">
                                                            Role link copied to the clipboard
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div id="jobForm" className="w-full max-w-[1400px] mx-auto px-4 sm:px-5 md:px-6 lg:px-2 py-1 xs:py-1 sm:py-2 mt-4 xs:mt-6">
                <div className="text-[20px] xs:text-[28px] sm:text-[36px] font-semibold text-black leading-[45px] mb-4 xs:mb-5 sm:mb-6 font-poppins text-left sm:text-left">
                    <h2>Job Form</h2>
                </div>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-[40px]">
                    <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                        {[
                            { label: "Name*", name: "name", type: "text", required: true },
                            { label: "Applying for*:", name: "applyingFor", type: "text", required: true },
                            { label: "Mobile*:", name: "mobile", type: "tel", required: true },
                            { label: "Email*:", name: "email", type: "email", required: true },
                        ].map((field, index) => (
                            <div key={index} className="flex flex-col relative">
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className={`peer w-full border-b-2 py-1 xs:py-1.5 sm:py-2 text-xs xs:text-sm sm:text-sm focus:outline-none border-[#808080] transition-colors h-8 xs:h-9 sm:h-10 order-1 mt-4 xs:mt-5 sm:mt-6 ${formData[field.name] ? "filled" : ""}`}
                                    required={field.required}
                                />
                                <label
                                    htmlFor={field.name}
                                    className="absolute left-0 text-[#808080] font-semibold transition-all duration-300 ease-in-out text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] top-3 xs:top-3.5 sm:top-4 peer-focus:text-xs peer-focus:top-1 xs:peer-focus:top-1.5 sm:peer-focus:top-2 peer-focus:text-gray-600 peer-[.filled]:text-xs peer-[.filled]:top-1 xs:peer-[.filled]:top-1.5 sm:peer-[.filled]:top-2 peer-[.filled]:text-gray-600"
                                >
                                    {field.label}
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                        {[
                            { label: "Social media link:", name: "socialMedia", type: "text", required: false },
                            { label: "Portfolio link:", name: "portfolio", type: "text", required: false },
                        ].map((field, index) => (
                            <div key={index} className="flex flex-col relative">
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className={`peer w-full border-b-2 py-1 xs:py-1.5 sm:py-2 text-xs xs:text-sm sm:text-sm focus:outline-none border-[#808080] transition-colors h-8 xs:h-9 sm:h-10 order-1 mt-4 xs:mt-5 sm:mt-6 ${formData[field.name] ? "filled" : ""}`}
                                    required={field.required}
                                />
                                <label
                                    htmlFor={field.name}
                                    className="absolute left-0 text-[#808080] font-semibold transition-all duration-300 ease-in-out text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] top-3 xs:top-3.5 sm:top-4 peer-focus:text-xs peer-focus:top-1 xs:peer-focus:top-1.5 sm:peer-focus:top-2 peer-focus:text-gray-600 peer-[.filled]:text-xs peer-[.filled]:top-1 xs:peer-[.filled]:top-1.5 sm:peer-[.filled]:top-2 peer-[.filled]:text-gray-600"
                                >
                                    {field.label}
                                </label>
                            </div>
                        ))}

                        <div className="relative flex flex-col">
                            <div className="relative">
                                <input
                                    type="file"
                                    name="resume"
                                    id="resume"
                                    onChange={handleFileChange}
                                    className="absolute opacity-0 w-full h-full cursor-pointer"
                                    required
                                />
                                <div className="flex items-center w-full border-b-2 border-[#808080] py-1 xs:py-1.5 sm:py-2 peer h-8 xs:h-9 sm:h-10 mt-4 xs:mt-5 sm:mt-6">
                                    <span className="text-gray-400 text-xs xs:text-sm sm:text-sm truncate">
                                        {formData.resume ? formData.resume.name : ""}
                                    </span>
                                    <label htmlFor="resume" className="ml-auto cursor-pointer">
                                        <img
                                            src={uploadIcon}
                                            alt="Upload"
                                            className="w-5 xs:w-5.5 sm:w-6 h-5 xs:h-5.5 sm:h-6"
                                            style={{ filter: "invert(60%)" }}
                                        />
                                    </label>
                                </div>
                                <label
                                    htmlFor="resume"
                                    className={`absolute left-0 text-[#808080] font-medium transition-all duration-300 ease-in-out text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] top-3 xs:top-3.5 sm:top-4 peer-focus:text-xs peer-focus:top-1 xs:peer-focus:top-1.5 sm:peer-focus:top-2 peer-focus:text-gray-600 ${formData.resume ? "text-xs top-1 xs:top-1.5 sm:top-2 text-gray-600" : ""}`}
                                >
                                    Attach resume*:
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col relative">
                            <textarea
                                name="additionalInfo"
                                value={formData.additionalInfo}
                                onChange={handleChange}
                                className={`peer w-full border-b-2 py-1 xs:py-1.5 sm:py-2 text-xs xs:text-sm sm:text-sm focus:outline-none border-[#808080] transition-colors h-8 xs:h-9 sm:h-10 order-1 mt-4 xs:mt-5 sm:mt-6 resize-none ${formData.additionalInfo ? "filled" : ""}`}
                                rows="2"
                            />
                            <label
                                htmlFor="additionalInfo"
                                className="absolute left-0 text-[#808080] font-semibold transition-all duration-300 ease-in-out text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] top-3 xs:top-3.5 sm:top-4 peer-focus:text-xs peer-focus:top-1 xs:peer-focus:top-1.5 sm:peer-focus:top-2 peer-focus:text-gray-600 peer-[.filled]:text-xs peer-[.filled]:top-1 xs:peer-[.filled]:top-1.5 sm:peer-[.filled]:top-2 peer-[.filled]:text-gray-600"
                            >
                                Additional information:
                            </label>
                        </div>

                        <div className="flex justify-center sm:justify-start mt-3 xs:mt-4 sm:mt-6 p-2 xs:p-4 sm:p-6">
                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 xs:gap-2.5 border-2 border-[#E92429] text-[#E92429] font-poppins text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[22px] py-1 xs:py-1.5 sm:py-2 px-4 xs:px-5 sm:px-6 transition-colors -ml-0 sm:-ml-32"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {isSubmitted && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className="relative w-[90%] max-w-[400px] text-white p-10 rounded-lg shadow-lg"
                        style={{
                            background: "linear-gradient(180deg, #E92429 0%, #00C4B4 100%)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <button
                            className="absolute top-4 right-4 w-6 h-6 flex-shrink-0"
                            onClick={handleClose}
                        >
                            <img src={closeButton} alt="Close" className="w-full h-full" />
                        </button>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-[36px] font-poppins font-semibold leading-[125%] text-white text-center">
                                Thank you!
                            </h2>
                            <p className="text-[18px] font-inter font-normal leading-[150%] text-white mt-2 text-center">
                                We will get back to you within 48 hours.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CareersPage;
