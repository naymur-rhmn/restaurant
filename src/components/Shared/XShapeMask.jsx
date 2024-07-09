const XShapeMask = ({ children, bg }) => {
  return (
    <div className="overflow-hidden py-8">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="longevity-bg relative flex flex-col items-center"
      >
        <div className="angle-down"></div>
        <div className="angle-up"></div>
        <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex flex-col justify-between h-full items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default XShapeMask;
