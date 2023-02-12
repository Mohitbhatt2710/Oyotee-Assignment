import React from "react"
import Categories from "./Categories"
import Shop from './Shop'
import "./Home.css"



const Home = (shopItems) => {
  return (
    <>
      <section className='home'>
      
        <div className='container d_flex'>
          <Categories />
          <div  className="container d_flex" >
           <Shop />
           <Shop />
           <Shop />          
           <Shop />
           
           
        
           
          </div>
        </div>
        
          
        
      
      </section>

   
    </>
  )
}

export default Home

