import React from "react";
import Button from "./Button";
import FoodMenu from "./FoodMenu";

const FavMenu = () => {
  return (
    <section className="bg-black  py-10 md:py-40">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        {/* title */}
        <div className="flex justify-between w-full mb-10 items-center">
          <h2 className="heading-3 text-white capitalize">Favourite menu</h2>
          <div>
            <Button text="See all" px="px-6" />
          </div>
        </div>
        {/* menu */}
        <FoodMenu sliced={true} />
      </div>
    </section>
  );
};

export default FavMenu;

// img collected link > https://www.japancentre.com/en/page/156-30-must-try-japanese-foods
// const menuItems = [
//   {
//     id: 1,
//     name: "sushi",
//     category: "regular",
//     price: 10,
//     code: 101,
//     contain: ["rice", "vegetables", "seafood"],
//     type: ["chirashizushi", "inarizushi", "nigirizushi"],
//     img: "https://i.ibb.co/17vtnPF/menu-item-1.jpg",
//   },
//   {
//     id: 2,
//     name: "udon",
//     category: "noodle",
//     price: 12,
//     code: 102,
//     contain: ["flour", "water", "salt"],
//     type: ["Niku Udon", "Kitsune Udon", "Kake Udon"],
//     img: "https://i.ibb.co/mT6zjGJ/menu-item-2.jpg",
//   },
//   {
//     id: 3,
//     name: "Tofu",
//     category: "vegterian",
//     price: 14,
//     code: 103,
//     contain: ["coagulant", "soybeans", "water"],
//     type: ["Ganmodoki", "Aburaage", "Okara"],
//     img: "https://i.ibb.co/m6MzVXr/menu-item-3.jpg",
//   },
//   {
//     id: 4,
//     name: "Tempura",
//     category: "fried",
//     price: 15,
//     code: 104,
//     contain: ["vegetables ", "fish", "vegetables "],
//     type: ["Mixed ", "Anago ", "Kakiage"],
//     img: "https://i.ibb.co/1GVL0hr/menu-item-4.jpg",
//   },
//   {
//     id: 5,
//     name: "Yakitori",
//     category: "barbecued ",
//     price: 18,
//     code: 105,
//     contain: ["chicken  ", "sugar", "soy sauce "],
//     type: ["Mixed ", "Anago ", "Kakiage"],
//     img: "https://i.ibb.co/VJJy2Cn/menu-item-5.jpg",
//   },
//   {
//     id: 6,
//     name: "Sashimi",
//     category: "seafood ",
//     price: 12,
//     code: 106,
//     contain: ["seafood"],
//     type: ["Hotate", "Hamachi", "Sake"],
//     img: "https://i.ibb.co/gzJSwJ6/menu-item-6.jpg",
//   },
//   // below data are copy of top items, change it after complete design
//   {
//     id: 7,
//     name: "sushi",
//     category: "regular",
//     price: 10,
//     code: 101,
//     contain: ["rice", "vegetables", "seafood"],
//     type: ["chirashizushi", "inarizushi", "nigirizushi"],
//     img: "https://i.ibb.co/17vtnPF/menu-item-1.jpg",
//   },
//   {
//     id: 8,
//     name: "udon",
//     category: "noodle",
//     price: 12,
//     code: 102,
//     contain: ["flour", "water", "salt"],
//     type: ["Niku Udon", "Kitsune Udon", "Kake Udon"],
//     img: "https://i.ibb.co/mT6zjGJ/menu-item-2.jpg",
//   },
//   {
//     id: 9,
//     name: "Tofu",
//     category: "vegterian",
//     price: 14,
//     code: 103,
//     contain: ["coagulant", "soybeans", "water"],
//     type: ["Ganmodoki", "Aburaage", "Okara"],
//     img: "https://i.ibb.co/m6MzVXr/menu-item-3.jpg",
//   },
//   {
//     id: 10,
//     name: "Tempura",
//     category: "fried",
//     price: 15,
//     code: 104,
//     contain: ["vegetables ", "fish", "vegetables "],
//     type: ["Mixed ", "Anago ", "Kakiage"],
//     img: "https://i.ibb.co/1GVL0hr/menu-item-4.jpg",
//   },
//   {
//     id: 11,
//     name: "Yakitori",
//     category: "barbecued ",
//     price: 18,
//     code: 105,
//     contain: ["chicken  ", "sugar", "soy sauce "],
//     type: ["Mixed ", "Anago ", "Kakiage"],
//     img: "https://i.ibb.co/VJJy2Cn/menu-item-5.jpg",
//   },
//   {
//     id: 12,
//     name: "Sashimi",
//     category: "seafood ",
//     price: 12,
//     code: 106,
//     contain: ["seafood"],
//     type: ["Hotate", "Hamachi", "Sake"],
//     img: "https://i.ibb.co/gzJSwJ6/menu-item-6.jpg",
//   },
// ];
