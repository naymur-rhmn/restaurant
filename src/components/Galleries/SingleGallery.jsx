const SingleGallery = ({ item }) => {
  const { img } = item;
  return (
    <div>
      <img src={img} alt="Gallery Image" />
    </div>
  );
};

export default SingleGallery;
