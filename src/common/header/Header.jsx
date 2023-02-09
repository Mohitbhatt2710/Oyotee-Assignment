import React from "react"
import "./Header.css"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem }) => {
  return (
    <>
   
      <Search CartItem={CartItem} />
      <hr />
      <Navbar />
      
      
      
    </>
  )
}

export default Header
