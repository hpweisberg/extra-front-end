import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

// types
import { Item } from "../../types/models";
import { ItemFormData } from "../../types/forms";

interface EditItemProps {
  handleUpdateItem: (itemData: ItemFormData) => void;
}

const EditItem = (props: EditItemProps): JSX.Element => {
  const { state } = useLocation()
  const [form, setForm] = useState<ItemFormData>(state)

  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    setForm({...form, [evt.currentTarget.name]: evt.currentTarget.value})
  }

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault()
    props.handleUpdateItem(form)
  }

  return ( 
    <>
    
      <h1>Edit Item</h1>
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
          <button type="submit">Update Item</button>
          <Link to={`/items/${state.id}`}>
            <button>Back</button>
          </Link>
      </form>
    
    </>
  )
}

export default EditItem;