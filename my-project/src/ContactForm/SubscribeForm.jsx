import { useState } from "react";
import ContactFormBG from "../assets/ContactFormAssets/Forms_BG.jpg";
import closeButton from "../assets/ContactFormAssets/close.svg";
import Arrow from "../assets/ContactFormAssets/Submit_Arrow.svg";
import VishanCreatorsLogo from "../assets/ContactFormAssets/VishanCreatorsLogo.png";

const SubscribeForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        agreeToTerms: false,
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.agreeToTerms) {
            setIsSubmitted(true); // Show the thank-you modal after submission
        } else {
            alert("Please agree to the terms and conditions.");
        }
    };

    const handleClose = () => {
        setIsSubmitted(false);
        setFormData({
            name: "",
            email: "",
            agreeToTerms: false,
        });
    };

    return (
        <div className="min-h-screen flex justify-center p-6 relative">
            <div
                className={`relative w-[300px] md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[35%]  text-white p-6 md:p-10 lg:p-20 transition-all duration-300 ${isSubmitted ? "blur-sm" : ""
                    }`}
                style={{
                    backgroundImage: `url(${ContactFormBG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    maxHeight: "600px",
                    
                }}
            >
                <button className="absolute top-4 right-4 w-6 h-6 flex-shrink-0" onClick={handleClose}>
                    <img src={closeButton} alt="Close" className="w-full h-full" />
                </button>

                {/* Logo, Title, and Subtitle */}
                <div className="flex flex-col items-center mb-4">
                    <img src={VishanCreatorsLogo} alt="Vishan Creators Logo" className="h-16 mb-3" />
                    <h2 className="text-[24px] font-poppins font-semibold leading-[125%] text-white text-center">
                        Stop guessing with Branding
                    </h2>

                    <p className="text-[16px] font-inter font-normal leading-[150%] text-white mt-2 text-center whitespace-nowrap">
                        Subscribe to Vishan Creators’ blogs and get weekly insights.
                    </p>


                </div>

                <form className="mt-4 space-y-5" onSubmit={handleSubmit}>
                    {/* Standard Input Fields */}
                    {[
                        { label: "Name*", id: "name", required: true },
                        { label: "Email*", id: "email", required: true },
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


                    {/* Submit Button */}
                    <div className="mt-10 flex justify-center mr-4">
                        <button
                            type="submit"
                            className="bg-white w-max text-redCustom font-poppins text-[18px] font-semibold leading-[150%] py-2 px-6 flex items-center mt-5"
                            style={{ color: "#E92429" }}
                        >
                            Subscribe
                        </button>
                    </div>
                    {/* Checkbox for Terms and Conditions */}
                    <div className="flex mt-6 mr-10 ">
                        <input
                            type="checkbox"
                            id="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleInputChange}
                            className="w-[18px] h-[18px] flex items-center justify-center mt-1 mr-2 ml-5"
                        />

                        <label
                            htmlFor="agreeToTerms"
                            className="text-white text-[18px] font-inter  leading-[150%]  whitespace-nowrap"
                        >
                    I agree to the terms and conditions.
                        </label>

                    </div>

                    {/* Terms and Conditions Text */}

                    <div className="w-[410px] text-white text-[12px] font-inter font-normal leading-[150%] text-center mt-2">
                        <p className=" mr-12 mt-2">
                            Vishan Creators will use the information provided to contact you with our
                         latest content, products, and services. You may unsubscribe at any time.
                        </p>
                    </div>




                </form>
            </div>

            {/* Thank You Modal */}
            {isSubmitted && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className="relative w-[420px] h-[238px] text-white p-10 rounded-lg shadow-lg"
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
                            <h2 className="text-[36px] font-poppins font-semibold leading-[125%] text-white text-center mt-8">
                                Thank you!
                            </h2>
                            <p className="text-[18px] font-inter font-normal leading-[150%] text-white mt-2 text-center">
                                For Subscribing Vishan Creators                             </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubscribeForm;