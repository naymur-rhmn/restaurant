import OurJourney from "../components/AboutUs/OurJourney";
import Review from "../components/AboutUs/Review";
import Booking from "../components/Booking/Booking";
import PageTitle from "../components/Shared/PageTitle";
import SectionTitle from "../components/Shared/SectionTitle";
import TwoColumnTxtContent from "../components/Shared/TwoColumnTxtContent";
import XQuadShapeMask from "../components/Shared/XQuadShapeMask";
import cover1 from "../assets/res-bg/res-bg-3.jpg";
import cover2 from "../assets/res-bg/happy-test1.jpg";

const AboutUs = () => {
  return (
    <div>
      <PageTitle title={"Izakaya Restaurant"} />
      <div className="">
        <div className="pb-1">
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
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            para2={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
