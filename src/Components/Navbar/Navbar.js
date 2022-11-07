import { Link } from 'react-router-dom'
import Carousel from '../Carousel/Carousel'
import Liongym from '../Liongym/Liongym'
import './Navbar.css'

const Navbar = () => {
  return (     <>

    <div className='navbar'>
    <div className='bar'> 
    <img height="120px" className='lionn' src='https://cdn.dribbble.com/users/677572/screenshots/17019929/media/87ee5e329021a8561d95be362445e6f9.png?compress=1&resize=400x300&vertical=top' alt='lion'/>
    <h6> LionGym</h6>

    <h6>Lions</h6>

    <h6>Be a lion</h6>


    </div>
    </div>
    <Liongym/>
    <Carousel/>

    </>

  )
}

export default Navbar