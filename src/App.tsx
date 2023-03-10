// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import ItemsList from './pages/ItemsList/ItemsList'
import NewItem from './pages/NewItem/NewItem'
import ItemDetials from './pages/ItemDetails/ItemDetails'
import EditItem from './pages/EditItem/EditItem'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as itemService from './services/itemService'

// stylesheets
import './App.css'

// types
import { User, Profile, Item } from './types/models'
import { ItemFormData } from './types/forms'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [items, setItems] = useState<Item[]>([])

  useEffect((): void => {
    const fetchAllItems = async (): Promise<void> => {
      try {
        const itemData: Item[] = await itemService.index()
        setItems(itemData)
      } catch (error) {
        console.log(error)
      }
    }
    if (user) fetchAllItems()
  }, [user])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  const handleAddItem = async (itemData: ItemFormData): Promise<void> => {
    const newItem = await itemService.create(itemData)
    setItems([newItem, ...items])
    navigate('/items')
  }

  const handleUpdateItem = async (itemData: ItemFormData): Promise<void> => {
    const updateItem = await itemService.update(itemData)
    setItems(items.map(item => itemData.id === item.id ? updateItem : item))
    navigate(`/items/${itemData.id}`)
  }

  const handleDeleteItem = async (id: number): Promise<void> => {
    const deleteItem = await itemService.delete(id)
    setItems(items.filter(item => item.id !== deleteItem.id))
    navigate('/items')
  }



  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/items"
          element={
            <ProtectedRoute user={user}>
              <ItemsList items={items} user={user}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/items/:id"
          element={
            <ProtectedRoute user={user}>
              <ItemDetials handleDeleteItem={handleDeleteItem} user={user}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/items/new"
          element={
            <ProtectedRoute user={user}>
              <NewItem handleAddItem={handleAddItem}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/items/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditItem handleUpdateItem={handleUpdateItem}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
