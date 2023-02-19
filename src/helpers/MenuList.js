import BeefKottu from '../assets/kottu-1.jpg';
import ChickenKottu from '../assets/kottu-2.jpg';
import Masala from '../assets/masala.jpg';
import CCheese from '../assets/cheese2.jpg';
import BCheese from '../assets/cheese3.jpeg';
import Wok from '../assets/wok2.jpg';
import SF from '../assets/sf2.jpg';


const MenuList = [
    {
      name: "Beef Kottu",
      image: BeefKottu,
      price: 1500,
    },
    {
        name: "Chicken Kottu",
        image: ChickenKottu,
        price: 1300,
      },
      {
        name: "Chicken/Beef Masala Kottu",
        image: Masala,
        price: 1800,
      },
      {
        name: "Chicken & Cheese Kottu",
        image: CCheese,
        price: 2000,
      },
      {
        name: "Beef & Cheese Kottu",
        image: BCheese,
        price: 2200,
      },
      {
        name: "Egg Kottu",
        image: Wok,
        price: 1000,
      },
      {
        name: "Sea-Food Kottu",
        image: SF,
        price: 2000,
      },
];

export default MenuList;