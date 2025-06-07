import React from "react";
import solarImage from "../assets/images/BIO2.jpg";

const DayLight = () => {
  return (
    <div className="w-full py-8 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-[#18181B] font-[Onest] font-semibold text-2xl sm:text-3xl md:text-[44px] leading-[1.2] md:leading-[52px] text-center mb-8 sm:mb-12 md:mb-16">
          Our Story
        </h2>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Image on Left (moves to top on mobile) */}
          <div className="w-full lg:w-1/2">
            <img
              src={solarImage}
              alt="Solar energy solutions"
              className="w-full h-auto rounded-xl sm:rounded-[14px]"
              style={{
                maxHeight: "427px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Text Content on Right */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#475569] font-[Onest] font-normal text-sm sm:text-[16px] leading-[1.5] sm:leading-[22px]">
                "Founded by Charity Atuheire, a Ugandan law graduate turned
                social entrepreneur, Bio-Filter Initiative was born when Charity
                returned to her village near the Ishasha River. Seeing children
                drink from the same contaminated water that made her family
                sick, she pioneered a grassroots solution: training women to
                build affordable bio-sand filters using local materials."
              </p>
            </div>

            {/* Button - centered on mobile, left-aligned on larger screens */}
            <div className="mt-6 sm:mt-8 text-center lg:text-left">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition">
                See more about us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayLight;
