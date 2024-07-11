const TwoColumnTxtContent = ({ para1, para2 }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex flex-col md:flex-row gap-6 -mt-10 md:mt-16">
      <div className="">
        <p className="para-lead text-disable">{para1}</p>
      </div>
      <div>
        <p className="para-lead text-disable md:pl-4">{para2}</p>
      </div>
    </div>
  );
};

export default TwoColumnTxtContent;
