import SectionTitle from "../Shared/SectionTitle";
import TwoColumnTxtContent from "../Shared/TwoColumnTxtContent";
import XQuadShapeMask from "../Shared/XQuadShapeMask";
import coverBg1 from "../../assets/res-bg/res-bg-4.jpg";
import coverBg2 from "../../assets/res-bg/res-bg-2.jpg";

const About = () => {
  return (
    <section className="bg-black pb-10 md:pb-20 overflow-hidden">
      <div className="py-4">
        <XQuadShapeMask cover1={coverBg1} cover2={coverBg2}>
          <SectionTitle
            titlePart1="Original japanese"
            titlePart2="cuisine"
            subtitle="authentic"
          />
        </XQuadShapeMask>
      </div>
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

export default About;
