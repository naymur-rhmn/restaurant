import React from "react";

const GalleryCategory = ({ bg }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="galleryCategory relative bg-cover bg-center bg-no-repeat bg-slate-500 mt-10 sm:mt-14 mb-10 sm:mb-14 h-[150px] sm:h-[200px] md:h-[240px]"
    ></div>
  );
};

export default GalleryCategory;
