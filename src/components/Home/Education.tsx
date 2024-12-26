import { headVariants } from "@/animation";
import * as motion from "framer-motion/client";
import Image from "next/image";
const Education = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-[80px]">
      <div className="max-w-[1500px] mx-auto">
        <h2
          className="text-4xl font-bold mb-2 text-white textShadow"
          style={{ color: "white !important" }}
        >
          My <span className="text-mainTxt">Education</span>
        </h2>
        <p className="text-gray-400 mb-12">
          My Education Background and My Passion for Web Development
        </p>
        <div className="w-full flex items-start justify-start gap-[15px] flex-col lg:flex-row">
          {/* Profile Image */}
          <motion.div
            {...headVariants(0.5)}
            className="w-full sm:w-[443px] aspect-[443/507] shrink-0"
          >
            <Image
              src="/images/assets/me.jpg"
              alt="Profile photo"
              width={443}
              height={507}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="space-y-8 w-full">
            {/* Education Section */}
            <div className="space-y-6">
              <motion.div
                {...headVariants(0.5)}
                className="py-[15px] border-y-[1px] border-mainTxt"
              >
                <div className="flex items-start justify-between">
                  <h2 className="text-2xl font-semibold">
                    Diploma in Engineering (Architechture)
                  </h2>
                  <span className="text-gray-400">2022 - present</span>
                </div>
                <p className="text-gray-400">
                  Shyamoli Ideal Polytechnic institute
                </p>
              </motion.div>
              <motion.div
                {...headVariants(0.9)}
                className="py-[15px] border-b-[1px] border-mainTxt"
              >
                <div className="flex items-start justify-between">
                  <h2 className="text-2xl font-semibold">
                    Secondary School Certificate (Secondary School Certificate)
                  </h2>
                  <span className="text-gray-400">2021</span>
                </div>
                <p className="text-gray-400">MISSION INTERNATIONAL COLLEGE</p>
              </motion.div>
            </div>

            {/* Why I chose Web Development Section */}
            <div className="bg-[#009688] border-none text-white">
              <div className="p-6 space-y-4">
                <h2 className="text-3xl font-bold">
                  Why I choosed Web Development ?
                </h2>
                <p className="text-lg font-medium">
                  Passionate About Code, Focused on Web Development
                </p>
                <div className="space-y-4">
                  <p>
                    From childhood, coding has been my passion, driving me to
                    create and innovate. In the vast world of technology, I
                    found my true calling in web development.
                  </p>
                  <p>
                    Web development, for me, is not just a career choice;
                    it&apos;s a thrilling blend of creativity and logic. The
                    prospect of shaping the online world and crafting
                    user-friendly interfaces resonated deeply with my desire to
                    build something meaningful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
