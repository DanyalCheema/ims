import React from 'react'

const InventoryDetailsTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>ItemName</th>
        <th>ItemSellingPrice</th>
        <th>ItemBuyingPrice</th>
        <th>ItemStatus</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.items.length > 0 ? (
        props.items.map((item) => (
          <tr key={item.id}>
            <td>{item.itemName}</td>
            <td>{item.itemSellingPrice}</td>
            <td>{item.itemBuyingPrice}</td>
            <td>{item.status}</td>
            <td>
              <button className="button muted-button" onClick={() => {props.editRow(item)}} >Edit</button>
              <button className="button muted-button" onClick={() => props.deleteItem(item.id)}>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No items</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default InventoryDetailsTable