import React, {useState} from 'react'
import InventoryDetailsTable
 from './tables/InventoryDetailsTable'
import AddItemForm from './forms/AddItemForm'
import EditItemForm from './forms/editItemForm'

const App = () => {

  //Repalce with api data
  const itemsData = [
    { id: 0, itemName: 'Computer', itemSellingPrice: 5000, itemBuyingPrice: 3000, status: "Available" },
    { id: 1, itemName: 'Laptop', itemSellingPrice: 7000, itemBuyingPrice: 6000, status: "Available" },
    { id: 2, itemName: 'Charger', itemSellingPrice: 8000, itemBuyingPrice: 5000, status: "Available" },
  ]


  const [items, setItems] = useState(itemsData)
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, itemName: '', itemSellingPrice: '', itemBuyingPrice: '' }
  const [currentItem, setCurrentItem] = useState(initialFormState)

  const addItem = (item) => {
    item.id = items.length + 1
    console.log(item)
    setItems([...items, item])
  }

  const updateItem = (id, updatedItem) => {
    setEditing(false)
    setItems(items.map((item) => (item.id === id ? updatedItem : item)))
  }

  const deleteItem = (id) => {
    setEditing(false)
    setItems(items.filter((item) => item.id !== id))
  }

  const editRow = (item) => {
    setEditing(true)
    setCurrentItem({ id: item.id, itemName: item.itemName, itemSellingPrice: item.itemSellingPrice, itemBuyingPrice: item.itemBuyingPrice })
  }

  return (
    <div className="container">
      <h1>Inventory Management System</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit Item</h2>
              <EditItemForm setEditing = {setEditing} currentItem = {currentItem} updateItem={updateItem} />
            </div>
          ) : (
            <div>
              <h2>Add</h2>
              <AddItemForm addItem = {addItem} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View</h2>
          <InventoryDetailsTable items= {items} editRow={editRow} deleteItem={deleteItem} />
        </div>
      </div>
    </div>
  )
}

export default App