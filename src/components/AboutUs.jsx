import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/images/BIO20.jpeg";

import image43 from "../assets/images/BIO21.jpeg";
import image42 from "../assets/images/BIO22.jpeg";
import image41 from "../assets/images/BIO23.jpeg";
import image38 from "../assets/images/image 38.png";
import image32 from "../assets/images/image 46.png";
import image45 from "../assets/images/image 45.png";
import image47 from "../assets/images/image 47.png";
import Choose from "../components/Choose";
import Ready from "../components/Ready";
import Footer from "../components/Footer";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* Hero Section with Gradient Background */}
      <div
        className="w-full py-20 px-4 md:px-8 text-center"
        style={{
          background: "linear-gradient(135deg, #EFF6FF 0%, #BFDBFE 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="font-[Onest] font-semibold text-[50px] leading-[64px] tracking-[-1.36px] text-blue-950 mb-8">
            Our mission is to provide easy access to clean Water for every
            Ugandan household most especially those in rural communities.
          </h1>

          <p className="text-blue-950/80 font-[Onest] text-lg leading-[28px] max-w-3xl mx-auto">
            Founded by Charity Atuheire, a Ugandan law graduate turned social
            entrepreneur, Bio-Filter Initiative was born when Charity returned
            to her village near the Ishasha River. Seeing children drink from
            the same contaminated water that made her family sick, she pioneered
            a grassroots solution: training women to build affordable bio-sand
            filters using local materials.
          </p>
        </div>
      </div>

      {/* Why Bio-Sand Filters Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
        <h2 className="font-[Onest] font-semibold text-3xl md:text-4xl text-blue-950 mb-12 text-center">
          Why Bio-Sand Filters?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-[Onest] font-bold text-xl text-blue-950 mb-2">
              Affordable
            </h3>
            <p className="text-gray-600">
              $15 = 5+ years of clean water per family
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-[Onest] font-bold text-xl text-blue-950 mb-2">
              Effective
            </h3>
            <p className="text-gray-600">
              90% pathogen removal (cholera, E. coli)
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-[Onest] font-bold text-xl text-blue-950 mb-2">
              Sustainable
            </h3>
            <p className="text-gray-600">No electricity/chemicals needed</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-[Onest] font-bold text-xl text-blue-950 mb-2">
              Empowering
            </h3>
            <p className="text-gray-600">Women-led production creates jobs</p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-[Onest] font-semibold text-[44px] leading-[56px] tracking-[-1.36px] text-blue-950 mb-6">
            Our vision is a Uganda where no child drinks from a polluted river.
          </h2>
          <p className="text-[#64748B] font-[Onest] text-base leading-[26px] tracking-[-0.22px]">
            We envision a future where every community has reliable access to
            clean water and sanitation. By combining AI, solar energy, and
            community-driven solutions, we're turning water infrastructure
            financing into a bridge to better living.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={heroImage}
            alt="Clean water vision"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>

      {/* Our Impact Section */}
      <div className="w-full bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-[Onest] font-semibold text-3xl md:text-4xl text-blue-950 mb-4 text-center">
            Our Impact
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-950 mb-2">200+</div>
              <p className="text-gray-600">filters installed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-950 mb-2">
                1,000+
              </div>
              <p className="text-gray-600">people served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-950 mb-2">55%</div>
              <p className="text-gray-600">reduction in diarrheal diseases</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-950 mb-2">30+</div>
              <p className="text-gray-600">women trained as filter artisans</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Story Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="p-8 md:p-12">
            <h2 className="font-[Onest] font-semibold text-2xl md:text-3xl text-blue-950 mb-6">
              Featured Story
            </h2>
            <blockquote className="text-lg italic text-gray-700 mb-6">
              "Meet Sarah, a mother of three in Kanungu. Before her bio-sand
              filter, her children missed school weekly due to cholera. Now,
              they haven't been sick in 8 months – and Sarah earns income
              building filters for neighbors."
            </blockquote>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
        <h2 className="font-[Onest] font-semibold text-3xl md:text-4xl text-blue-950 mb-12 text-center">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-950 font-bold text-xl">1</span>
            </div>
            <h3 className="font-[Onest] font-semibold text-xl text-blue-950 mb-2">
              Train Women's Groups
            </h3>
            <p className="text-gray-600">
              Train women's groups to construct filters using local sand/gravel
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-950 font-bold text-xl">2</span>
            </div>
            <h3 className="font-[Onest] font-semibold text-xl text-blue-950 mb-2">
              Distribute Filters
            </h3>
            <p className="text-gray-600">
              Distribute to households/schools at subsidized costs
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-950 font-bold text-xl">3</span>
            </div>
            <h3 className="font-[Onest] font-semibold text-xl text-blue-950 mb-2">
              Educate Communities
            </h3>
            <p className="text-gray-600">
              Educate communities on hygiene and maintenance
            </p>
          </div>
        </div>
      </div>

      {/* Three Images Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <img
          src={image43}
          alt="Water project 1"
          className="rounded-lg shadow-md w-full h-auto"
        />
        <img
          src={image42}
          alt="Water project 2"
          className="rounded-lg shadow-md w-full h-auto"
        />
        <img
          src={image41}
          alt="Water project 3"
          className="rounded-lg shadow-md w-full h-auto"
        />
      </div>

      {/* Who We Serve Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <h2 className="font-[Onest] font-semibold text-3xl md:text-4xl text-blue-950 mb-4 text-center">
          Who We Serve
        </h2>
        <p className="text-[#64748B] font-[Onest] text-lg text-center max-w-2xl mx-auto mb-12">
          Our Platform is Designed For
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <img
              src={image47}
              alt="Farmers"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-[Onest] font-semibold text-xl text-blue-950 mb-2">
                Farmers
              </h3>
              <p className="text-gray-600 font-[Onest]">
                Helping farmer groups finance irrigation systems that improve
                productivity.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <img
              src={image32}
              alt="Savings Groups"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-[Onest] font-semibold text-xl text-blue-950 mb-2">
                Savings Groups
              </h3>
              <p className="text-gray-600 font-[Onest]">
                Enabling savings groups, SACCOs, and VSLAs to invest in
                community water projects.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <img
              src={image45}
              alt="Schools & Health Centers"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-[Onest] font-semibold text-xl text-blue-950 mb-2">
                Schools & Health Centers
              </h3>
              <p className="text-gray-600 font-[Onest]">
                Supporting educational institutions and health centers to fund
                sanitation solutions, like latrines.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="w-full bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-[Onest] font-semibold text-3xl md:text-4xl text-blue-950 mb-12 text-center">
            Get Involved
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="font-[Onest] font-bold text-xl text-blue-950 mb-4">
                Donate
              </h3>
              <p className="text-gray-600 mb-6">
                "$50 = Clean water for a family for 5+ years"
              </p>
              <button
                onClick={() => navigate("/donate")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
              >
                Donate Now
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="font-[Onest] font-bold text-xl text-blue-950 mb-4">
                Partner
              </h3>
              <p className="text-gray-600 mb-6">
                "NGOs, schools, and businesses: Let's collaborate to scale our
                impact!"
              </p>
              <button
                onClick={() => navigate("/partners")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
              >
                Partner With Us
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="font-[Onest] font-bold text-xl text-blue-950 mb-4">
                Volunteer
              </h3>
              <p className="text-gray-600 mb-6">
                "Join our WASH education teams or filter-building workshops."
              </p>
              <button
                onClick={() => navigate("/volunteer")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
              >
                Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Choose Component */}
      <Choose />

      {/* Customized Ready Component */}
      <Ready
        title="Ready to bring clean water to your community?"
        description="Join our network of partners and start your water project today."
        primaryButtonText="Get Started"
        secondaryButtonText="Contact Us"
        onPrimaryClick={() => navigate("/apply")}
        onSecondaryClick={() => navigate("/contact")}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
