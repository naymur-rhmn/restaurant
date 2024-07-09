const XQuadShapeMask = ({ children, cover1, cover2, bgPosition }) => {
  return (
    <div className="relative mb-[326px]">
      <div
        style={{ backgroundImage: `url(${cover1})` }}
        className="longevity-bg relative flex flex-col items-center"
      >
        <div className="angle-down"></div>
        <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex flex-col justify-between h-full items-center">
          {children}
        </div>
      </div>
      <div className="h-[650px] w-full z-10 absolute top-[325px]">
        <div
          style={{
            backgroundImage: `url(${cover2})`,
            backgroundPosition: `${bgPosition}`,
          }}
          className="shapeFourAngle shadow-xl"
        ></div>
      </div>
    </div>
  );
};

export default XQuadShapeMask;
