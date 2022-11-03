import './Tech.css'
import { Link } from 'react-router-dom'

const Tech = () => {
  return (
    <>
  {/* <Navbar/> */}
  <div className='div'>

    <h1 className='tech'> Welcome to Lion Bulk</h1>
    <Link to={"/home"}>
    <div className='carrt'> Go Lion Way </div>
    <img className='lionpic'  src='https://media.giphy.com/media/OqFpgF7bet1sRoCmpb/giphy.gif' alt='lion'/>


    </Link>
    


    </div>



    </>
  )
}

export default Tech