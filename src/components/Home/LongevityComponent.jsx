import SectionTitle from "../Shared/SectionTitle";

const LongevityComponent = () => {
  return (
    <section className="bg-black py-10 md:py-40">
      <div className="overflow-hidden py-8">
        <div className="longevity-bg relative flex flex-col items-center">
          <div className="angle-down"></div>
          <div className="angle-up"></div>
          <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex flex-col justify-between h-full items-center">
            <SectionTitle
              titlePart1="Original japanese"
              titlePart2="cuisine"
              subtitle="authentic"
            />
            <SectionTitle
              titlePart1="Serving for"
              titlePart2="20+ years"
              subtitle="experience"
            />
          </div>
        </div>
      </div>
      {/* content */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex flex-col md:flex-row gap-6 mt-6 md:mt-20">
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

export default LongevityComponent;
