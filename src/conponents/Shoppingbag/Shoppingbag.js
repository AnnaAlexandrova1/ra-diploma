import { useSelector } from "react-redux"

export default function Shoppingbag() {

    const itemId = useSelector(state => state.Shoppingbag)
    return (
        <div>{itemId}</div>
   ) 
}