import { Link } from "react-router-dom";

//types
import { Item } from "../../types/models";

interface ItemCardProps {
  item: Item
}

const ItemCard = (props: ItemCardProps): JSX.Element => {
  const { item } = props

  return ( 
    <>
    <h1>{item.name}</h1>
    <h4>{item.quantity}</h4>
    <h4>{item.location}</h4>
    </>
  )
}

export default ItemCard;