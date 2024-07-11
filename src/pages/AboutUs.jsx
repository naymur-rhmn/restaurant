import OurJourney from "../components/AboutUs/OurJourney";
import Booking from "../components/Booking/Booking";
import PageTitle from "../components/Shared/PageTitle";
import SectionTitle from "../components/Shared/SectionTitle";
import TwoColumnTxtContent from "../components/Shared/TwoColumnTxtContent";
import XQuadShapeMask from "../components/Shared/XQuadShapeMask";
import cover1 from "../assets/res-bg/res-bg-3.jpg";
import cover2 from "../assets/res-bg/happy-test1.jpg";
import Review from "../components/AboutUs/Review/Review";

const AboutUs = () => {
  return (
    <div>
      <PageTitle title={"Izakaya Restaurant"} />
      <div className="">
        <div className="pb-1 overflow-hidden">
          <XQuadShapeMask cover1={cover1} cover2={cover2} bgPosition={"0% 30%"}>
            <SectionTitle
              titlePart1="We bring japanese"
              titlePart2="taste to you"
              subtitle="about us"
            />
          </XQuadShapeMask>
        </div>
        {/* content */}
        <div>
          <TwoColumnTxtContent
            para1={
              "At Izakaya Restaurant, we embody the essence of Japanese culinary tradition. With over 20 years of dedication, we bring authentic flavors and impeccable service to every table. Join us and experience the heart of Japan, right here in 123 Sushi St., Tokyo, Japan."
            }
            para2={
              "Our commitment extends beyond cuisine; it's a celebration of Japanese culture and community. From our chefs' meticulous craftsmanship to our welcoming atmosphere, every visit promises a journey into the heart of Japan's culinary legacy."
            }
          />
        </div>
      </div>
      <OurJourney />
      <Review />
      <Booking />
    </div>
  );
};

export default AboutUs;
