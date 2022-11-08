import React from 'react'
import './Carousel.css'
import Swal from 'sweetalert2'
import shapes from '../../Img/shapes-balance.gif'


const Carousel = () => {
  return (
    <>
     <div className="conteudo">
        <div className="carrosel">
            <div className="caixa__card cc__1">HOLA  <br/> THEO</div>
            <div className="caixa__card cc__2">
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/headphone-3994316-3307650.png" width="100%"
                    height="100%"/>
                </div>
            <div className="caixa__card cc__3">
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/weightlifter-lifting-free-weight-3895499-3255871.png" width="100%"
                     height="100%"/>
                </div>
            <div className="caixa__card cc__4">
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/weightlifter-working-out-with-dumbbells-3895490-3255862.png" width="100%"
                    height="100%"/>
                    </div>
            <div className="caixa__card cc__5">
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/man-lifting-dumbbells-3895486-3255858.png" width="100%"
                    height="100%"/>
                    </div>
            <div className="caixa__card cc__6">
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/male-weightlifter-lying-on-bench-and-lifting-weight-3895509-3255881.png" width="100%"
                    height="100%"/>
                    </div>
            <div className="caixa__card cc__7">
                  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/man-doing-pushups-with-dumbbells-3895489-3255861.png" width="100%"   height="100%"/>
                </div>
            <div className="caixa__card cc__8">
                
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/powerlifter-doing-training-3895502-3255874.png" width="100%"
                height="100%"/>
                
            </div>
        </div>
    </div>
    
    
    <div className="li__sideBar">
    

        
                <div id="playlist__btn" className="music-icon"><i className="material-icons">  
                <img src="https://media.giphy.com/media/3ornjNM6wlq8i87aQU/giphy.gif" height="120px"/>
                

</i></div> 
</div>








            
    </>

  )
}

export default Carousel