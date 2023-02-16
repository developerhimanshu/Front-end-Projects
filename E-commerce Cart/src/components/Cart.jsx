import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    const {cartItems, subTotal, shipping, tax, total} = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    const increment = (id) =>{
        dispatch({
            type:"addToCart",
            payload:{id},
        })
        dispatch({
            type:"calculatePrice"
        })
    }

    const decrement = (id) =>{
        dispatch({
            type:"decrement",
            payload:{id},
        })
        dispatch({
            type:"calculatePrice"
        })

    }

    const deleteHandler = (id) =>{
        dispatch({
            type:"deleteHandler",
            payload:{id},
        })
        dispatch({
            type:"calculatePrice"
        })
        
    }

  return (
    <div className = "cart">
        <main>
            {
                
                cartItems.length > 0 ?(
                    cartItems.map(i=>{
                        return(
                        <CartItem 
                            name = {i.name}
                            imgSrc={i.imgSrc}
                            price ={i.price}
                            qty ={i.quantity}
                            id ={i.id}
                            key = {i.id}
                            decrement={decrement}
                            increment={increment}
                            deleteHandler={deleteHandler}
                        />
                        )
                    })
                ):<h1>No items in the cart</h1>
            }
        </main>
        <aside>
            <h2>Subtotal: ${subTotal}</h2>
            <h2>Shipping: ${shipping}</h2>
            <h2>Tax: ${tax}</h2>
            <h2>Total: ${total}</h2>
        </aside>
    </div>
  )
}

const CartItem = ({name, imgSrc,price, qty,id, decrement, increment, deleteHandler })=>(
    <div className="cartItem">
        <img src={imgSrc} alt="Item" />
        <article className = "details"> 
            <h3>{name}</h3> 
            <p>${price}</p>
        </article>

        <div>
            <button onClick={()=>decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={()=>increment(id)}>+</button>
        </div>
        <AiFillDelete onClick={()=>deleteHandler(id)} className="svg"/>
    </div>
)

export default Cart