import React, { useState } from 'react'

const AddItemForm = (props) => {

    const initialFormState = { id: null, itemName: '', itemSellingPrice: '', itemBuyingPrice: '' }
    const [item, setItem] = useState(initialFormState)
  
    const handleInputChange = (event) => {
      const { name, value } = event.target
      setItem({ ...item, [name]: value })
    }

  return (
    <form
    onSubmit={(event) => {
        event.preventDefault()
        console.log(item)
        if (!item.itemName || !item.itemBuyingPrice || !item.itemSellingPrice) return
       
        props.addItem(item)
        setItem(initialFormState)
        }}
      >
      <label>Item Name</label>
      <input type="text" name="itemName" value={item.itemName} onChange={handleInputChange} />
      <label>Item Selling Price</label>
      <input type="text" name="itemSellingPrice" value={item.itemSellingPrice} onChange={handleInputChange} />
      <label>Buying Selling Price</label>
      <input type="text" name="itemBuyingPrice" value={item.itemBuyingPrice} onChange={handleInputChange} />
      <button>Submit</button>
    </form>
  )
}

export default AddItemForm