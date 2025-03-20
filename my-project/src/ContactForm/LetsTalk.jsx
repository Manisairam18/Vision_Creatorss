import { useState } from "react";
import closeButton from "../assets/ContactFormAssets/close.svg";
import Arrow from "../assets/ContactFormAssets/Submit_Arrow.svg";
import Wp from "../assets/ContactFormAssets/WhatsApp_Icon.svg";
import Instagram from "../assets/ContactFormAssets/Instagram_icon.svg";
import FaceBook from "../assets/ContactFormAssets/FaceBook_Icon.svg";
import LinkedIn from "../assets/ContactFormAssets/LinkedIn_Icon.svg";
import YouTube from "../assets/ContactFormAssets/YouTube_Icon.svg";
import ContactFormBG from "../assets/ContactFormAssets/Form_BG_1.png";


const LetsTalk = () => {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false); // State to toggle the thank-you modal

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true); // Show the thank-you modal after submission
    };

    const handleClose = () => {
        setIsSubmitted(false); // Close the modal
        setFormData({
            name: "",
            mobile: "",
            email: "",
            message: "",
        }); // Reset form data
    };

    // Reusable SocialIcons Component
    const SocialIcons = () => {
        const socialIcons = [
            { src: Wp, href: "https://wa.me/yourlink" },
            { src: Instagram, href: "https://instagram.com/yourlink" },
            { src: FaceBook, href: "https://facebook.com/yourlink" },
            { src: LinkedIn, href: "https://linkedin.com/yourlink" },
            { src: YouTube, href: "https://youtube.com/yourlink" },
        ];

        return (
            <div className="mt-6">
                <h3 className="font-poppins font-semibold text-white mb-2 text-[24px] leading-[30px] self-stretch">
                    Social
                </h3>
                <div className="flex items-start gap-[20px] self-stretch mt-4">
                    {socialIcons.map((icon, index) => (
                        <a
                            key={index}
                            href={icon.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                        >
                            <img
                                src={icon.src}
                                alt="Social"
                                className="w-[28px] h-[28px] aspect-square"
                            />
                        </a>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white flex justify-center p-6 relative">
            <div
                className={`relative w-full md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[35%] text-white p-6 md:p-10 lg:p-20 transition-all duration-300 ${isSubmitted ? "blur-sm" : ""
                    }`} // Apply blur effect when modal is active
                style={{
                    backgroundImage: `url(${ContactFormBG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <button className="absolute top-4 right-4 w-6 h-6 flex-shrink-0" onClick={handleClose}>
                    <img src={closeButton} alt="Close" className="w-full h-full" />
                </button>

                <div>
                    <h2 className="text-[36px] font-poppins font-semibold leading-[125%] text-white self-stretch">
                        Great!
                    </h2>

                    <h2 className="text-base font-inter font-normal leading-[150%] text-white self-stretch">
                        We would love to hear from you.
                    </h2>
                </div>

                <form className="mt-4 space-y-5" onSubmit={handleSubmit}>
                    {/* Standard Input Fields */}
                    {[
                        { label: "Name*", id: "name", required: true },
                        { label: "Mobile*", id: "mobile", required: true },
                        { label: "Email ID*", id: "email", required: true },
                    ].map((field, index) => (
                        <div key={index} className="flex flex-col relative">
                            <input
                                type="text"
                                id={field.id}
                                value={formData[field.id]}
                                onChange={handleInputChange}
                                className="peer bg-transparent border-b border-white outline-none text-white h-10 order-1 mt-6 placeholder-transparent"
                                placeholder={field.label}
                                required={field.required}
                            />
                            <label
                                htmlFor={field.id}
                                className="absolute left-0 text-white text-[16px] font-inter leading-[150%] transition-all duration-300 ease-in-out 
                                peer-placeholder-shown:top-8 peer-placeholder-shown:text-[16px] 
                                peer-focus:top-2 peer-focus:text-[12px] peer-focus:text-white
                                peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-[12px]"
                            >
                                {field.label}
                            </label>
                        </div>
                    ))}

                    {/* Message Input Field */}
                    <div className="flex flex-col relative ">
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="peer bg-transparent border-b border-white outline-none text-white h-20 order-1 mt-3 placeholder-transparent resize-none"
                            placeholder="Type your message"
                        />
                        <label
                            htmlFor="message"
                            className="absolute left-0 text-white text-[16px] font-inter leading-[150%] transition-all duration-300 ease-in-out 
        peer-placeholder-shown:top-[4.5rem] peer-placeholder-shown:text-[16px] 
        peer-focus:top-2 peer-focus:text-[12px] peer-focus:text-white
        peer-[&_*]:not(:placeholder-shown):top-2 peer-[&_*]:not(:placeholder-shown):text-[12px] -mt-3"
                        >
                            Type your message
                        </label>
                    </div>



                    {/* Submit Button */}
                    <div className="mt-10 flex justify-end">
                        <button
                            type="submit"
                            className="bg-white w-max text-redCustom font-poppins text-[18px] font-semibold leading-[150%] py-2 px-6 flex items-center"
                            style={{ color: "#E92429" }}
                        >
                            Say Hello
                            <img src={Arrow} alt="Arrow" className="ml-2 w-[28px] h-[28px]" />
                        </button>
                    </div>
                </form>



                <div className="mt-6">
                    <h3 className="self-stretch text-white font-poppins text-[24px] font-semibold leading-[125%]">
                        Call Us
                    </h3>
                    <p className="h-[47px] self-stretch text-white font-inter text-[16px] font-normal leading-[150%] flex items-center">
                        <a href="tel:+919942437803" className="no-underline text-white">
                            +91 99424 37803
                        </a>
                    </p>
                    <p className="h-[47px] self-stretch text-white font-inter text-[16px] font-normal leading-[150%] flex items-center mt-[-15px]">
                        <a href="tel:+919952248682" className="no-underline text-white">
                            +91 99522 48682
                        </a>
                    </p>

                    <h3 className="self-stretch text-white font-poppins text-[24px] font-semibold leading-[125%] mt-4">
                        Write Us
                    </h3>
                    <p className="self-stretch text-white font-inter text-[16px] font-normal leading-[150%] mt-4">
                        <a href="mailto:Vishancreators@gmail.com" className="no-underline text-white">
                            Vishancreators@gmail.com
                        </a>
                    </p>

                    <SocialIcons />
                </div>
            </div>

            {/* Thank You Modal */}
            {isSubmitted && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className="relative w-[420px] h-[238px] text-white p-10 rounded-lg shadow-lg"
                        style={{
                            backgroundImage: `url(${ContactFormBG})`,
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
                        <div className="flex flex-col items-center justify-center h-full">
                            <h2 className="text-[36px] font-poppins font-semibold leading-[125%] text-white">
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

export default LetsTalk;