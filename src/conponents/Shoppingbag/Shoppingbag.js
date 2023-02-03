import Order from "./Order";
import Item from "./Item";
import { getShoppingBag } from "../../localStorage/localStorage";

export default function Shoppingbag() {
    const list = getShoppingBag()
    // localStorage.clear()
    //console.log(list)

    const drowtList = (list) => {
        if (list.length > 0) {
            return list.map((item, i) => {
                return <Item item={item} i={i} />
              })  
        } else {
            return null
        }
    }
    const productList = drowtList(list)
    
    return (
        <>
        {productList}
        <Order />
        </>
    )
}