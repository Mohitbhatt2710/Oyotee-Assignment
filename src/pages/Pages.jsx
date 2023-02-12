import React from "react"
import Home from "../components/MainPage/Home"
import Wrapper from "../components/wrapper/Wrapper"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
     
      <Wrapper />
    </>
  )
}

export default Pages
