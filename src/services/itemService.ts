// services
import * as tokenService from './tokenService'

// types
import { Item } from '../types/models'
import { ItemFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/items`

async function index(): Promise<Item[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Item[]
  } catch (error) {
    throw error
  }
}

async function addPhoto(
  photoData: FormData, 
  profileId: number
): Promise<string> {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData
    })
    return await res.json() as string
  } catch (error) {
    throw error
  }
}

async function show (id:number): Promise<Item> {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`},
    })
    return await res.json() as Item
  } catch (error) {
    throw error
  }
}

async function create (itemData: ItemFormData): Promise<Item> {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itemData)
    })
    return await res.json() as Item
  } catch (error) {
    throw error
  }
}

async function update (itemData: ItemFormData): Promise<Item> {
  try {
    const res = await fetch(`${BASE_URL}/${itemData.id}`, {
      method: 'PUT',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itemData)
    })
    return await res.json() as Item
  } catch (error) {
    throw error
  }
}

async function deleteItem (id: number): Promise<Item> {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    return await res.json() as Item
  } catch (error) {
    throw error
  }
}





export { 
  index, 
  addPhoto,
  show,
  create,
  update,
  deleteItem as delete 
}
