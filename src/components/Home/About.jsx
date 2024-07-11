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
          "Immerse yourself in the genuine taste of Japan with our original cuisine, prepared with the finest ingredients. Each dish embodies the artistry and tradition of Japanese cooking, delivering an unforgettable dining experience."
        }
        para2={
          "Delight in the authentic flavors of Japan with our original cuisine, crafted from time-honored recipes. Our menu showcases the rich diversity of Japanese culinary traditions, ensuring an exceptional dining experience with every visit."
        }
      />
    </section>
  );
};

export default About;
