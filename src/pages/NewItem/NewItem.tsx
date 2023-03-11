import React, { useState } from "react";
import { update } from "../../services/itemService";
import { ItemFormData, PhotoFormData } from "../../types/forms";
import { Profile } from "../../types/models";
import { handleErrMsg } from "../../types/validators";

interface NewItemProps {
  handleAddItem: (itemData: ItemFormData) => void;
}

const NewItem = (props: NewItemProps): JSX.Element => {
  // const {updateMessage, handleAuthEvt} = props
  const [form, setForm] = useState<ItemFormData>({
    name: '',
    quantity: 0,
    location: '',
    experation: '',
    // photo: '',
    //? Fix hardcoded number
    profileId: 1,
    
    // createdAt?: '',
    // updateddAt?: '',
    // name: '',
    // quantity: 0,
    // location?: '',
    // experation?: '',
    // photo?: '',
    // //? Fix hardcoded number
    // profileId?: 1,
    
    // createdAt?: '',
    // updateddAt?: '',
  })

  const [photoData, setPhotoData] = useState<PhotoFormData>({
    photo: null
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    setForm({...form, [evt.currentTarget.name]: evt.currentTarget.value})
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    if(isSubmitted) return
    try {
      props.handleAddItem(form)
      
    } catch (error) {
      console.log(error)
      // handleErrMsg(err, updateMessage)
    }
  }


  const handleChangePhoto = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) setPhotoData({ photo: evt.target.files.item(0) })
  }

  return ( 
    <>
      <h1>New Item</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name"
          name="name"
          required 
          value={form.name} 
          placeholder="Honey" 
          autoComplete="off"
          onChange={handleChange} 
          />
        <label htmlFor="quantity">Quantity:</label>
        <input 
          type="number" 
          id="quantity"
          name="quantity"
          required 
          value={form.quantity} 
          placeholder="3" 
          autoComplete="off"
          onChange={handleChange} 
          />
        <label htmlFor="location">Location:</label>
        <input 
          type="text" 
          id="location"
          name="location"
          value={form.location} 
          placeholder="Kitchen spice cabinate" 
          autoComplete="off"
          onChange={handleChange} 
          />
        <label htmlFor="experation">Experation:</label>
        <input 
          type="text" 
          id="experation"
          name="experation"
          value={form.experation} 
          placeholder="MM-DD-YY" 
          autoComplete="off"
          onChange={handleChange} 
          />
        <label htmlFor="photo">Photo:</label>
        <input 
          type="file" 
          id="photo"
          name="photo"
          value={form.photo} 
          // placeholder="MM-DD-YY" 
          autoComplete="off"
          onChange={handleChangePhoto} 
          />
          <button type="submit">Add Item</button>
      </form>
    </>
  )
}

export default NewItem;