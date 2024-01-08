import ShopItemPlace from "../../components/ShopItemPlace/ShopItemPlace"
import IronSword from "../../config/content/weapons/IronSword"
import WoodenSword from "../../config/content/weapons/WoodenSword"
import "./Shop.css"

const Shop = () => {

    return <div className="Shop">
        <ShopItemPlace {...WoodenSword} />
        <ShopItemPlace {...IronSword} />
    </div>
}

export default Shop