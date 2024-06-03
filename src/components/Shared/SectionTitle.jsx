const SectionTitle = ({ subtitle, titlePart1, titlePart2 }) => {
  // titlePart1 and titlePart2 two variables are used for one title purpose. used two titles to maintain  responsive design  consistency
  return (
    <div className="text-center w-full md:max-w-[550px] sm:max-w-[450px] max-w-[350px] py-4 md:py-0">
      <p className="md:heading-5 heading-6 text-green mb-4 uppercase">
        {subtitle}
      </p>
      <h2 className="heading-4 sm:heading-3 md:heading-2 text-white capitalize text-wrap">
        {titlePart1}
      </h2>
      <h2 className="heading-4 sm:heading-3 md:heading-2 text-white capitalize text-wrap">
        {titlePart2}
      </h2>
    </div>
  );
};

export default SectionTitle;
