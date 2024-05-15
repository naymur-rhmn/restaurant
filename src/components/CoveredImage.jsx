const CoveredImage = ({ bgImg }) => {
  const bg = {
    backgroundImage: bgImg,
  };
  return <div style={bg} className="cover-image"></div>;
};

export default CoveredImage;
