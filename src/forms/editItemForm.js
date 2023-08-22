import React, { useState, useEffect  } from 'react'

const EditItemForm = (props) => {

    const [item, setItem] = useState(props.currentItem)
  
    const handleInputChange = (event) => {
      const { name, value } = event.target
      setItem({ ...item, [name]: value })
    }

    useEffect(() => { setItem(props.currentItem)}, [props])

  return (
    <form
    onSubmit={(event) => {
        event.preventDefault()
       
        props.updateItem(item.id, item)
        }}
      >
      <label>Item Name</label>
      <input type="text" name="itemName" value={item.itemName} onChange={handleInputChange} />
      <label>Item Selling Price</label>
      <input type="text" name="itemSellingPrice" value={item.itemSellingPrice} onChange={handleInputChange} />
      <label>Buying Selling Price</label>
      <input type="text" name="itemBuyingPrice" value={item.itemBuyingPrice} onChange={handleInputChange} />
      <button>Update Item</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</button>
    </form>
  )
}

export default EditItemForm