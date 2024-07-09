const CoveredImage = ({ bgImg }) => {
  const bg = {
    backgroundImage: bgImg,
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "100% 70%",
      }}
      className="cover-image"
    ></div>
  );
};

export default CoveredImage;
