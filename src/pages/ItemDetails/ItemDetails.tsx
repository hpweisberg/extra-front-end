import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

// services
import * as itemServices from '../../services/itemService'

// types
import { Item, User } from "../../types/models";

interface ItemDetailsProps {
  user: User | null;
  handleDeleteItem: (id: number) => void;
}

const ItemDetials = (props: ItemDetailsProps): JSX.Element => {
  const { id } = useParams()
  const [item, setItem] = useState<Item | null>(null)
  const { user } = props

  useEffect((): void => {
    const fetchItem = async (): Promise<void> => {
      try {
        if (id) {
          const itemData = await itemServices.show(parseInt(id))
          setItem(itemData)
        } else return
      } catch (error) {
        console.log(error)
      }
    }
    fetchItem()
  }, [id])
console.log(item)
  return (
    <>
      <Link to='/items'>
        <button>Back</button>
      </Link>
      {item ?
        <section>


          <h1>{item.name}</h1>
          <h1>{item.quantity}</h1>
          <h1>{item.location}</h1>
          <h1>{item.experation}</h1>
          <h1>{item.photo}</h1>
          <Link to={`/items/${id}/edit`} state={item}>
            <button>Edit Item</button>
          </Link>
          <button onClick={() => props.handleDeleteItem(item.id)}>Delete Item</button>

        </section>

        :
        <h3>Loading Item...</h3>
      }
    </>
  )
}

export default ItemDetials;