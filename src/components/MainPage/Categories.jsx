// import { Checkbox } from "@mui/material"
import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Gardening",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Plants",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Seeds",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Bulbs",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Planters",
    },
   
  ]

  return (
    <>
   
      <div className='category'>
      <div className='container d_flex'>
          <div className='catgrories d_flex'>
            
            <h4>
              Categories 
            </h4>
          </div>

          

        </div>
        {data.map((value, index) => {
          
          if(value.cateName==="Plants"){
            return (
            <div className='box f_flex' key={index} style={{fontWeight:"normal",color:"black",margin:"28px 18px"}}>
            <input checked type="checkbox" id={value.cateName} name={value.cateName} value={value.cateName} />
             <label for={value.cateName}> {value.cateName}</label>
            </div>
        )}
           
          return (
           
            <div className='box f_flex' key={index} style={{fontWeight:"normal",color:"grey",margin:"28px 18px"}}>
              <input type="checkbox" id={value.cateName} name={value.cateName} value={value.cateName} />
              <label for={value.cateName}> {value.cateName}</label>
              {/* <span>{value.cateName}</span> */}
             
            </div>
            
          )
        })}
        
        
       
        <p className="box f_flex" style={{margin:"30px", fontWeight:"lighter"}}>Others <i className='fa fa-chevron-down '></i></p>
        <hr style={{color:"grey"}} />
        <h3 style={{margin:"30px", fontWeight:"lighter"}} >Price Range</h3>
        <input type="button" name="Min" value="Min" style={{color:"grey",margin:"5px 40px", fontWeight:"lighter", padding:"10px 25px",borderRadius:10}} />
        <input type="button" name="Min" value="$400" style={{color:"black",backgroundColor:"white",border:"1px solid grey",margin:"5px 10px 10px", fontWeight:"lighter", padding:"10px 25px",borderRadius:10}} />
        <button style={{color:"white",backgroundColor:"green",margin:"30px", fontWeight:"lighter", padding:"10px 90px" }} >Set Price </button>
        

        
      </div>
       

    </>
  )
}

export default Categories
