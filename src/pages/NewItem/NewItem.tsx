import React, { useState } from "react";
import { ItemFormData } from "../../types/forms";

interface NewItemProps {
  handleAddItem: (itemData: ItemFormData) => void;
}

const NewItem = (props: NewItemProps): JSX.Element => {
  const [form, setForm] = useState<ItemFormData>({
    name: '',
    quantity: 0,
    location: '',
    experation: '',
    photo: '',
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

  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    setForm({...form, [evt.currentTarget.name]: evt.currentTarget.value})
  }

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault()
    props.handleAddItem(form)
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
          type="text" 
          id="photo"
          name="photo"
          value={form.photo} 
          // placeholder="MM-DD-YY" 
          autoComplete="off"
          onChange={handleChange} 
          />
          <button type="submit">Add Item</button>
      </form>
    </>
  )
}

export default NewItem;