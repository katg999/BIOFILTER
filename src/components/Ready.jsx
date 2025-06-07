import React from "react";

const Ready = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-xl py-16 px-6 sm:px-8 w-full"
          style={{
            background: "linear-gradient(to right, #4F96FF, #004CB6)",
          }}
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
            <h2 className="font-onest font-semibold text-[44px] leading-[120%] tracking-[0%] text-white mb-4">
              Ready to get started?
            </h2>
            <p className="font-onest font-normal text-[18px] leading-[120%] tracking-[0%] text-white/80 mb-8 max-w-2xl">
              Let's help you get the right bio-filter solutions for your
              community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ready;
