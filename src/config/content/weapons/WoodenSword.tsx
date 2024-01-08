import item from "../ContentConfig";
import woodenSwordImg from "./../../../assets/wooden_sword.png"

const WoodenSword: item = {
    name: "Wooden Sword",
    category: "Weapon",
    price: 4,
    value: 5,
    description: "Simple training sword",
    size: [
        0, 0, 0,
        0, 0, 0,
        0, 1, 1,
    ],
    img: woodenSwordImg
}

export default WoodenSword;