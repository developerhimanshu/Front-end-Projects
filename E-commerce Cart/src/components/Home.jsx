import React from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
const img1 = "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664423222/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_0_cjayuw.png/mxw_2048,f_auto"

const img2 ="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRkz0VmeNnr4tkoTQ3pOMckrSWqYBFl4WF8OW6ygtEDy_hLNGqd8uySVv1d7x6_wzKkp_Q7YswNFpCoNh0RpIHdlTua79cfdJuIiDesCDThNUDW1CAXNdqxZoFrNmZUSerZoeE&usqp=CAc"

const img3 = "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRapducrp3tNhF1XFKJbo8bJtGXZjbdHrOXYV0_mHUZXwFWCmwxczKR9NnpmEq3pKMMZPdLeXURUAxh7KLeICC-bRhhtNqXYXs-YjNroXv_rh1Bvw1zIoRy1g&usqp=CAc"

const img4 = "https://drop.ndtv.com/TECH/product_database/images/530201361437PM_635_Apple_iPhone_first_gen.png"


const Home = () => {

  const productList = [
    {
      name:"Macbook", 
      price:12999, 
      imgSrc:img1,
      id:"laps123"
    },
    {
      name:"Black shoes", 
      price:12, 
      imgSrc:img2,
      id:"blckshoe"
    },
    {
      name:"Poco Mobile", 
      price:129, 
      imgSrc:img3,
      id:"pocombl"
    },
    {
      name:"Iphone 32", 
      price:909, 
      imgSrc:img4,
      id:"iphone32"
    },
  ]
  
  const dispatch = useDispatch()

  const addToCartHandler = (options) => {
      dispatch({type:"addToCart",payload:options});
      dispatch({type:"calculatePrice"})
      toast.success("Added to cart")
  }
  return (
    <div className='home'>
      {productList.map((i)=>(
        <ProductCard
          key={i.id}
          name = {i.name}
          id= {i.id}
          price={i.price}
          imgSrc={i.imgSrc}
          handler = {addToCartHandler}
        />
      ))}
    </div>
  )
}

const ProductCard = ({name, id, price, handler, imgSrc}) => (
  <div className='productCart'>
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick = {()=> handler({name, price, id, quantity:1, imgSrc})}>Add to Cart</button>

  </div>
)

export default Home