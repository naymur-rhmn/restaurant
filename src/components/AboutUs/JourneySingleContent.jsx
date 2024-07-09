const JourneySingleContent = ({ bg, content }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="w-full h-[250px] bg-cover bg-center bg-no-repeat"
      >
        {" "}
      </div>
      <div className="mt-4">{content}</div>
    </>
  );
};

export default JourneySingleContent;
