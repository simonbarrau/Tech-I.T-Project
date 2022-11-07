import React from 'react'
import './Carousel.css'
import Swal from 'sweetalert2'

const Carousel = () => {
  return (
    <>
     <div className="conteudo">
        <div className="carrosel">
            <div className="caixa__card cc__1">PROGRAMADOR <br/> CS</div>
            <div className="caixa__card cc__2">HTML</div>
            <div className="caixa__card cc__3">CSS</div>
            <div className="caixa__card cc__4">JS</div>
            <div className="caixa__card cc__5">GIT</div>
            <div className="caixa__card cc__6">REACT</div>
            <div className="caixa__card cc__7">LÓGICA</div>
            <div className="caixa__card cc__8">
    <a  href='https://i.etsystatic.com/22958011/r/il/537e6e/2886325626/il_fullxfull.2886325626_ajjn.jpg' target="_blank">


                <img src="https://i.etsystatic.com/22958011/r/il/537e6e/2886325626/il_fullxfull.2886325626_ajjn.jpg" width="100%"
                height="100%"/>
                </a>
            </div>
        </div>
    </div>
    
    
    <div className="li__sideBar">
    

        
                <div id="playlist__btn" className="music-icon"><i class="material-icons">    <img src='https://cdn3d.iconscout.com/3d/premium/thumb/headphone-3994316-3307650.png' height="120px"/>
                

</i></div> 


            </div>
            
    </>

  )
}

export default Carousel