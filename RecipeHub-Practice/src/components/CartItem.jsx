import React, { useContext } from 'react'
import { MyStore } from '../context/MyStore'

const CartItem = ({recipe}) => {
  
  const {setCartItems,decrementCartitem,incrementCartitem} = useContext(MyStore)

  const deleteItem = (id)=>{
    setCartItems(prev => 
      prev.filter(elem => elem.id !== id)
    )
  }

  return (
    <div className="flex gap-4">
            <img
              src={recipe.image}
              alt=""
              className="h-20 w-20 rounded-lg object-cover"
            />

            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-semibold">{recipe.name}</h3>

                <span className="font-bold text-orange-500">$ {recipe.price}</span>
              </div>

              <p className="text-sm text-gray-500">{recipe.chef}</p>

              {/* Quantity */}

              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center rounded-lg border">
                  <button onClick={()=>{decrementCartitem(recipe.id)}} className="px-3 py-1" type="button">
                    -
                  </button>

                  <span className="px-4">{recipe.quantity}</span>

                  <button onClick={()=>{incrementCartitem(recipe.id)}} className="px-3 py-1" type="button">
                    +
                  </button>
                </div>

                <button onClick={()=>{deleteItem(recipe.id)
                  console.log("delete clicked")
                }} className="text-red-500" type="button">
                  Remove
                </button>
              </div>
            </div>
          </div>
  )
}

export default CartItem