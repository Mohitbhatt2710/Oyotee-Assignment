import React from "react"
import Categories from "./Categories"
// import Shop from "./Shop"
import "./Home.css"



const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categories />
          {/* <Shop/> */}
        </div>
        
      </section>
    </>
  )
}

export default Home
