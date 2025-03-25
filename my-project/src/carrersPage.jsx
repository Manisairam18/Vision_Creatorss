import React, { useState } from "react";
import dotsImage from "../assets/Dots.svg";
import dotsImageRed from "../assets/Dots_Red.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import uploadIcon from "../assets/ContactFormAssets/upload_Icon.svg";

const CareersPage = () => {
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
    };

    const [openIndex, setOpenIndex] = useState(null);

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
        "Accounting Director": "Oversees all accounting operations including financial reporting, budgeting, and compliance. Manages accounting team and ensures accurate financial records.",
        "Account Manager": "Maintains client relationships, manages accounts, and ensures client satisfaction. Acts as liaison between clients and internal teams.",
        "Treasury Manager": "Manages company's liquidity, investments, and financial risk. Oversees cash management and banking relationships.",
        "Strategy Director": "Leads strategic planning initiatives, identifies growth opportunities, and develops long-term business strategies.",
        "Strategy Head": "Directs strategic projects, conducts market research, and formulates business plans to achieve company objectives.",
        "Junior Strategist": "Assists in research, data analysis, and strategy development. Supports senior strategists in planning and execution.",
        "Creative Director": "Leads creative vision and direction for projects. Oversees design teams and ensures brand consistency across all outputs.",
        "Content and Copywriter": "Creates compelling written content for various platforms. Develops brand messaging and marketing copy.",
        "Marketing Manager": "Plans and executes marketing campaigns. Analyzes market trends and manages marketing budgets.",
        "Marketer": "Implements marketing strategies, conducts outreach, and assists in campaign execution across digital and traditional channels.",
        "Graphic Designer": "Creates visual concepts and designs for branding, marketing materials, and digital platforms.",
        "Account Executive/ Sales Executive": "Generates new business opportunities, manages sales pipeline, and closes deals with clients.",
        "Videographer": "Plans, shoots, and edits video content. Manages video production from concept to final delivery.",
        "Administrative Admin": "Provides administrative support, manages schedules, and handles office operations.",
        "Financial Admin": "Assists with financial record-keeping, invoicing, and basic accounting tasks.",
        "Editor": "Reviews and edits content for clarity, accuracy, and consistency. Ensures all materials meet quality standards.",
    };

    const toggleRole = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white w-full p-4 sm:p-8 md:p-12 lg:p-16 mt-8 sm:mt-12 md:mt-16">
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[113px]">
                <div className="flex flex-col w-full gap-[10px] shrink-0">
                    {/* Heading Section */}
                    <div className="flex flex-col items-center text-center w-full sm:items-start sm:text-left">
                        <h1 className="text-[20px] xs:text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-poppins font-medium leading-[125%] text-[#252627] mb-4 sm:mb-6 sm:ml-0 md:ml-32 whitespace-nowrap">
                            Let's create fun brands together.
                        </h1>
                    </div>

                    {/* Dots Image and Text Section */}
                    <div className="flex flex-col items-center space-y-3 xs:space-y-4 sm:flex-row sm:justify-start sm:items-start sm:space-y-0 sm:space-x-6 md:space-x-8 w-full sm:-ml-16 mt-4 sm:mt-8">
                        <div className="flex items-center space-x-2 xs:space-x-3 sm:-ml-36 sm:pr-9">
                            <img
                                src={dotsImage}
                                alt="Dot"
                                className="w-[16px] xs:w-[18px] sm:w-[28px] md:w-[34px] h-[16px] xs:h-[18px] sm:h-[28px] md:h-[34px]"
                            />
                            <h2 className="text-[16px] xs:text-[18px] sm:text-[28px] md:text-[36px] font-poppins font-semibold leading-[114%] text-black whitespace-nowrap">
                                Life at Vishan Creators
                            </h2>
                        </div>
                        <div className="flex items-center space-x-2 xs:space-x-3 sm:ml-auto sm:mr-10 sm:pr-10">
                            <img
                                src={dotsImageRed}
                                alt="Dot"
                                className="w-[16px] xs:w-[18px] sm:w-[28px] md:w-[34px] h-[16px] xs:h-[18px] sm:h-[28px] md:h-[34px]"
                            />
                            <h2 className="text-[16px] xs:text-[18px] sm:text-[28px] md:text-[36px] font-poppins font-semibold leading-[114%] text-black whitespace-nowrap">
                                Life at Vishan Creators
                            </h2>
                        </div>
                        <div className="flex items-center space-x-2 xs:space-x-3 sm:ml-auto sm:mr-0 sm:pr-10">
                            <img
                                src={dotsImage}
                                alt="Dot"
                                className="w-[16px] xs:w-[18px] sm:w-[28px] md:w-[34px] h-[16px] xs:h-[18px] sm:h-[28px] md:h-[34px]"
                            />
                            <h2 className="text-[16px] xs:text-[18px] sm:text-[28px] md:text-[36px] font-poppins font-semibold leading-[114%] text-black whitespace-nowrap">
                                Life at Vishan Creators
                            </h2>
                        </div>
                    </div>


                </div>

                <div className="flex flex-col items-center justify-center w-full mt-8 sm:mt-12 md:mt-20">
                    {/* Background Box */}
                    <div className="w-full xs:w-[90%] sm:w-[85%] md:w-[80%] lg:w-[924px] h-[180px] xs:h-[220px] sm:h-[300px] md:h-[400px] lg:h-[520px] bg-[#D9D9D9]"></div>

                    {/* Buttons Container */}
                    <div className="flex flex-row items-start gap-4 sm:flex-row sm:gap-6 mt-6 sm:mt-8 md:mt-10">
                        <div>
                            <button className="border-2 border-[#E92429] text-[#E92429] font-poppins text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[22px] py-1 xs:py-1.5 sm:py-2 px-3 xs:px-4 sm:px-5 md:px-6 transition-colors whitespace-nowrap">
                                See all openings
                            </button>
                        </div>

                        {/* Learn More Section */}
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

                {/* Dots Image and Text Section (Bottom) */}
                <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-start sm:items-start sm:space-y-0 sm:space-x-6 md:space-x-8 w-full sm:-ml-16 mt-8 sm:mt-12 md:mt-20">
                    <div className="flex items-center space-x-3 sm:-ml-36 sm:pr-9">
                        <img
                            src={dotsImage}
                            alt="Dot"
                            className="w-[20px] xs:w-[24px] sm:w-[28px] md:w-[34px] h-[20px] xs:h-[24px] sm:h-[28px] md:h-[34px]"
                        />
                        <h2 className="text-[20px] xs:text-[24px] sm:text-[28px] md:text-[36px] font-poppins font-semibold leading-[114%] text-black whitespace-nowrap">
                            Life at Vishan Creators
                        </h2>
                    </div>
                    <div className="flex items-center space-x-3 sm:ml-auto sm:mr-10 sm:pr-10">
                        <img
                            src={dotsImageRed}
                            alt="Dot"
                            className="w-[20px] xs:w-[24px] sm:w-[28px] md:w-[34px] h-[20px] xs:h-[24px] sm:h-[28px] md:h-[34px]"
                        />
                        <h2 className="text-[20px] xs:text-[24px] sm:text-[28px] md:text-[36px] font-poppins font-semibold leading-[114%] text-black whitespace-nowrap">
                            Life at Vishan Creators
                        </h2>
                    </div>
                    <div className="flex items-center space-x-3 sm:ml-auto sm:mr-0 sm:pr-10">
                        <img
                            src={dotsImage}
                            alt="Dot"
                            className="w-[20px] xs:w-[24px] sm:w-[28px] md:w-[34px] h-[20px] xs:h-[24px] sm:h-[28px] md:h-[34px]"
                        />
                        <h2 className="text-[20px] xs:text-[24px] sm:text-[28px] md:text-[36px] font-poppins font-semibold leading-[114%] text-black whitespace-nowrap">
                            Life at Vishan Creators
                        </h2>
                    </div>
                </div>
            </div>



            {/* Roles Section */}
            <div className="w-full max-w-2xl mx-auto py-6 xs:py-8 sm:py-10 mt-12 mr-0 sm:mr-14">
                <h2 className="flex justify-start -translate-x-0 sm:-translate-x-[65%] translate-y-0 sm:translate-y-8 text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-black leading-[125%] mb-3 xs:mb-4">
                    Roles
                </h2>

                {/* Roles List Section */}
                <div className="border-t border-gray-400 ml-0 sm:ml-0">
                    {roles.map((role, index) => (
                        <div
                            key={index}
                            className="border-t border-b border-gray-400 text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] font-medium font-poppins text-[#252627] leading-[120%]"
                        >
                            {/* Individual Role Container */}
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
                                    className="w-5 xs:w-6 h-5 xs:h-6"
                                />
                            </div>
                            {openIndex === index && (
                                <div className="p-3 xs:p-4 text-gray-400 text-[14px] xs:text-[16px] sm:text-[18px] leading-[150%]">
                                    {roleDetails[role]}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Job Form */}
            <div className="w-full max-w-[1400px] mx-auto px-2 py-1 xs:py-1 sm:py-2 mt-4 xs:mt-6">
                <div className="text-[20px] xs:text-[28px] sm:text-[36px] font-semibold text-black leading-[45px] mb-4 xs:mb-5 sm:mb-6 font-poppins text-left sm:text-left">
                    <h2>Job Form</h2>
                </div>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-[40px]">
                    {/* First Div - Required Fields */}
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
                                    className={`peer w-full border-b-2 py-1 xs:py-1.5 sm:py-2 text-xs xs:text-sm sm:text-sm focus:outline-none border-[#808080] transition-colors h-8 xs:h-9 sm:h-10 order-1 mt-4 xs:mt-5 sm:mt-6 ${formData[field.name] ? "filled" : ""
                                        }`}
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

                    {/* Second Div - Other Fields */}
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
                                    className={`peer w-full border-b-2 py-1 xs:py-1.5 sm:py-2 text-xs xs:text-sm sm:text-sm focus:outline-none border-[#808080] transition-colors h-8 xs:h-9 sm:h-10 order-1 mt-4 xs:mt-5 sm:mt-6 ${formData[field.name] ? "filled" : ""
                                        }`}
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

                        {/* File Upload Field */}
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
                                    className={`absolute left-0 text-[#808080] font-medium transition-all duration-300 ease-in-out text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] top-3 xs:top-3.5 sm:top-4 peer-focus:text-xs peer-focus:top-1 xs:peer-focus:top-1.5 sm:peer-focus:top-2 peer-focus:text-gray-600 ${formData.resume ? "text-xs top-1 xs:top-1.5 sm:top-2 text-gray-600" : ""
                                        }`}
                                >
                                    Attach resume*:
                                </label>
                            </div>
                        </div>

                        {/* Textarea Field */}
                        <div className="flex flex-col relative">
                            <textarea
                                name="additionalInfo"
                                value={formData.additionalInfo}
                                onChange={handleChange}
                                className={`peer w-full border-b-2 py-1 xs:py-1.5 sm:py-2 text-xs xs:text-sm sm:text-sm focus:outline-none border-[#808080] transition-colors h-8 xs:h-9 sm:h-10 order-1 mt-4 xs:mt-5 sm:mt-6 resize-none ${formData.additionalInfo ? "filled" : ""
                                    }`}
                                rows="2"
                            />
                            <label
                                htmlFor="additionalInfo"
                                className="absolute left-0 text-[#808080] font-semibold transition-all duration-300 ease-in-out text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] top-3 xs:top-3.5 sm:top-4 peer-focus:text-xs peer-focus:top-1 xs:peer-focus:top-1.5 sm:peer-focus:top-2 peer-focus:text-gray-600 peer-[.filled]:text-xs peer-[.filled]:top-1 xs:peer-[.filled]:top-1.5 sm:peer-[.filled]:top-2 peer-[.filled]:text-gray-600"
                            >
                                Additional information:
                            </label>
                        </div>

                        {/* Submit Button */}
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
        </div>
    );
};

export default CareersPage;
