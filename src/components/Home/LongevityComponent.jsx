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
          "Experience the true flavors of Japan with our authentic cuisine, meticulously crafted using traditional recipes. Each dish reflects our dedication to culinary excellence, offering a taste of Japan's rich heritage."
        }
        para2={
          "For over two decades, we've been committed to providing exceptional Japanese cuisine. Our years of experience ensure that every meal is a celebration of taste, tradition, and impeccable service. Join us and savor the difference."
        }
      />
    </section>
  );
};

export default LongevityComponent;
