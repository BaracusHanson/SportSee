import icon1 from "../assets/images/icon-1.png";
import icon2 from "../assets/images/icon-2.png";
import icon3 from "../assets/images/icon-3.png";
import icon4 from "../assets/images/icon.png";
import feu from "../assets/logo/feu.png";
import poulet from "../assets/logo/poulet.png";
import pomme from "../assets/logo/pomme.png";
import humburger from "../assets/logo/humburger.png";

export const logos = [icon1, icon2, icon3, icon4];

export const copyright = "Copiryght, SportSee 2020";

export const getApportNutritionnel = ( user ) => {
  return [
    {
      name: "Calories",
      unit: "Kcal",
      quantity: user.calorieCount,
      image: feu,
    },
    {
      name: "Protéines",
      unit: "g",
      quantity: user.proteinCount,
      image: poulet,
    },
    {
      name: "Glucides",
      unit: "g",
      quantity: user.carbohydrateCount,
      image: pomme,
    },
    {
      name: "Lipides",
      unit: "g",
      quantity: user.lipidCount,
      image: humburger,
    },
  ];
};

