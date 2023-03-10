// stylesheets
import styles from './Items.module.css'

// types
import { Item, User } from '../../types/models'

interface ItemProps {
  user: User | null;
}

const Items = (props: ItemProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}, here is a list of all your EXTRA items</h1>
    </main>
  )
}

export default Items
