// stylesheets
import styles from './ItemsList.module.css'

import ItemCard from '../../components/ItemCard/ItemCard';

// types
import { Item, User } from '../../types/models'



interface ItemProps {
  user: User | null;
  items: Item[];
}

const ItemsList = (props: ItemProps): JSX.Element => {
  const { user, items } = props

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}, here is a list of all your EXTRA items</h1>
      
      <h2>Items</h2>
      {props.items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </main>
  )
}

export default ItemsList
