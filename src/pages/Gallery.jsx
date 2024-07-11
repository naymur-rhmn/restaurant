import Galleries from "../components/Galleries/Galleries";
import PageTitle from "../components/Shared/PageTitle";

const Gallery = () => {
  return (
    <div>
      <PageTitle title={"our gallery"} />
      <Galleries />
    </div>
  );
};

export default Gallery;
