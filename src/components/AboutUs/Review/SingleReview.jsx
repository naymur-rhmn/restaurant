const SingleReview = ({ review }) => {
  const { name, profession, img, comment } = review;

  return (
    <div className="h-full  flex flex-col justify-between mx-auto  items-center">
      {/* first child */}
      <h3 className="heading-5 sm:heading-4 md:heading-3 pt-5 px-4 text-center lg:w-[75%] mx-auto">
        "{comment}"
      </h3>
      {/* Second child (reviewer information) */}
      <div className="text-center mb-12">
        <div className="h-20 w-20 bg-gray rounded-full mx-auto mb-3">
          <img
            className="block rounded-full h-full w-full"
            src={img}
            alt="Reviewer"
          />
        </div>
        <p className="text-xl font-bold">{name}</p>
        <p>{profession}</p>
      </div>
    </div>
  );
};

export default SingleReview;
