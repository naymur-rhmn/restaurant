const SingleFoodMenu = ({ menu }) => {
  const { name, img, group, price, contain } = menu;
  return (
    <div className="group bg-gray bg-opacity-35 p-2 shadow-lg overflow-hidden">
      <div className="overflow-hidden w-full max-h-[285px] h-52 sm:h-auto">
        <img
          className="group-hover:scale-110 duration-300 transition h-full w-full"
          src={img}
          alt={`Image of ${name}`}
        />
      </div>
      <div className="py-2 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h4 className="heading-5 md:heading-4">{name}</h4>
          <span className="py-[2px] px-3 rounded-full text-white capitalize para-sm bg-orange text-wrap">
            {group}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-disable capitalize">{`${contain?.item1}, ${
            contain.item2 && contain.item2
          }`}</p>
          <span className="heading-5 md:heading-4">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodMenu;
