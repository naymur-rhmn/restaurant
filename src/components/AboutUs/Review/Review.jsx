import XShapeMask from "../../Shared/XShapeMask";
import cover from "../../../assets/res-bg/res-bg-1.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Review.css";
import { useEffect, useState } from "react";
import SingleReview from "./SingleReview";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://izakaya-restaurant.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <XShapeMask bg={cover}>
      {/* First child (review information) */}
      <div id="reviewCarousel" className="w-full">
        <Carousel
          className="h-full "
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          infiniteLoop={true}
          useKeyboardArrows
          autoPlay={true}
          interval={5000}
          centerMode
          centerSlidePercentage={100}
        >
          {reviews?.map((review) => (
            <SingleReview key={review._id} review={review} />
          ))}
        </Carousel>
      </div>
    </XShapeMask>
  );
};
export default Review;
