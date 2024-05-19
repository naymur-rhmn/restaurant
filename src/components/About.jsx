import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-black pb-10 md:pb-40">
      <div className=" py-8">
        <div className="relative">
          <div className="longevity-bg relative flex flex-col items-center">
            <div className="angle-down"></div>
            {/* <div className="angle-up"></div> */}
            {/* <div className="angle-up-down"></div> */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex flex-col justify-between h-full items-center">
              <SectionTitle
                titlePart1="Original japanese"
                titlePart2="cuisine"
                subtitle="authentic"
              />
            </div>
          </div>
          <div className="h-[650px] w-full z-10 absolute top-[325px]">
            <div className="shapeFourAngle shadow-xl"></div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex flex-col md:flex-row gap-6 mt-6 md:mt-20 pt-[326px]">
        <div className="">
          <p className="para-lead text-disable">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <p className="para-lead text-disable">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
