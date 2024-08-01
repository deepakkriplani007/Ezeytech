import { TypeAnimation } from "react-type-animation";
import sideImg from "../assets/p1.svg";
const TypingAnim = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-gray-50 1000px]:pt-[10vh] pb-16">
        <div className="pl-6 self-center">
          <div className="flex">
            <div className=" font-bold sm:text-[50px] text-[#183c57] font-body">
              <div className="pt-20  max-[1048px]:pt-4 pb-2.5 block min-w-[191px] max-w-60">
                <TypeAnimation
                  className="font-body "
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    "THE#1",
                    1000,
                    "BEST",
                    2000,
                  ]}
                  speed={50}
                  style={{
                    // fontamily: "DM Sans",

                    color: "#f7990c",
                    fontWeight: "bold",
                    display: "block",
                    textShadow: "1px 1px ",
                  }}
                  repeat={Infinity}
                />
              </div>
              Tech Service Provider
            </div>
          </div>

          <div className="text-base sm:text-2xl pt-4 pr-8 text-[#2f5068] font-par">
            ezeytech offers top-notch, reliable, and affordable freelancing
            services globally, specializing in DevOps, Cloud, Backend, Frontend,
            App Development, and Salesforce. Our certified experts from India
            provide extensive IT experience to elevate your projects. Let's
            collaborate and bring your vision to life! 🚀
          </div>
        </div>

        <img
          className="w-1/2 self-center max-md:hidden pl-8 pt-20 p-2  drop-shadow-[3px_2px_15px_rgba(98,60,163,.7)]"
          src={sideImg}
          alt=""
        />
      </div>
    </>
  );
};

export default TypingAnim;

//  ezeytech offer top-notch Product/Project Freelancing Services
//           worldwide, spanning the U.S.A, Europe, Asia, and Africa, all from
//           India.
