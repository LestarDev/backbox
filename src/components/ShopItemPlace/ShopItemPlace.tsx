import item from "../../config/content/ContentConfig"
import "./ShopItemPlace.css"
import coin from "./../../assets/coin.png"
import usePlayer from "../../hook/usePlayer"
import Empty from "../../config/content/other/Empty"

const ShopItemPlace = (itemToSell: item) => {

    const player = usePlayer();

    const buyItem = () => {
        if(player.Gold<itemToSell.price) return;

        for(let i=0; i<20; i++){
            if(player.getPageNr(i+1).innerItem==Empty){
                player.setPageNr(i, itemToSell);
                player.setCurrentGold(player.Gold-itemToSell.price);
                return;
            }
        }
    }

    return <div className="ShopItemPlace" onClick={buyItem}>
        <img src={itemToSell.img} alt={itemToSell.name} />
        <span>{itemToSell.price}<img src={coin} alt="$" /></span>
    </div>
}

export default ShopItemPlace