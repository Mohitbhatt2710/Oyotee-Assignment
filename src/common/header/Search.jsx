import React,{useState} from "react"
// import logo from "../../components/assets/images/favicon.ico"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  const [MobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
          <i class="fa-solid fa-leaf" style={{  borderRadius:"50%",backgroundColor:"green",color:"white" , fontSize:"30px",marginRight:"10px"}}></i>
            {/* <img src={logo} alt='' />  */}
           
            <Link to='/'>
            <a href="#home">OYOTEE</a>
            </Link>
          </div>

          

          <div className='navlink'>
             <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                  <li className="current">
                    <Link to='/'>Shop</Link>
                  </li>
                  <li>
                    <Link to='/pages'>Plant Care</Link>
                  </li>
                  <li>
                    <Link to='/user'>Workshops</Link>
                  </li>
                  <li>
                    <Link to='/vendor'>Blogs</Link>
                  </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        


          <div className='icon f_flex width'>
            
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
            <i className='fa fa-heart icon-circle'></i>
            <i className='fa fa-user icon-circle'></i>
          </div>
        </div>
      </section>
     
    </>
  )
}

export default Search
