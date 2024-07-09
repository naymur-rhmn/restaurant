import SectionTitle from "../Shared/SectionTitle";
import TwoColumnTxtContent from "../Shared/TwoColumnTxtContent";
import XShapeMask from "../Shared/XShapeMask";
import cover from "../../assets/res-bg/res-bg-6.jpg";

const LongevityComponent = () => {
  return (
    <section className="bg-black py-10 md:py-16">
      <XShapeMask bg={cover}>
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
      </XShapeMask>
      {/* content */}
      <TwoColumnTxtContent
        para1={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        para2={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      />
    </section>
  );
};

export default LongevityComponent;
