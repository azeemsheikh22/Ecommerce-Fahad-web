import './Client.css';
import Img1 from './Images/customer 1.png'
import Img2 from './Images/customer 2.png'
import Img3 from './Images/customer 3.png'
import Img4 from './Images/customer 4.png'
import Img5 from './Images/customer 5.png'
import Img6 from './Images/customer 6.png'
import Img7 from './Images/customer 7.png'
import Img8 from './Images/customer 8.png'

function About(){

    return(

        <div>
            <div className='container-fluid'>

                <div className='row'>
                    <h1>Customer Review</h1>
                   <div className='col-md-3'>
                      <div className='Client'>
                         <img src={Img1}></img>
                         </div>
                         
                                      </div> 
                                    
                                  
                              <div className='col-md-3'>
                                <div className='Client'>
                                  <img src={Img2}></img></div>
                                            </div>


                                <div className='col-md-3'>
                                <div className='Client'>
                                  <img src={Img3}></img></div>
                                            </div>

                                  <div className='col-md-3'>
                                    <div className='Client'>
                                        <img src={Img4}></img></div> 
                                        </div>  </div>


                                        <div className='row'>
                                          <div className='col-md-3'>
                                          <div className='Client'>
                                          <img src={Img5}></img>
                                            </div>
                                    
                                      </div> 
                                    
                                  
                                  <div className='col-md-3'>
                                <div className='Client'>
                                <img src={Img6}></img></div>
                                  </div>


                                  <div className='col-md-3'>
                                    <div className='Client'>
                                     <img src={Img7}></img></div>
                                </div>

                               <div className='col-md-3'>
                               <div className='Client'>
                           <img src={Img8}></img></div> 
                                 </div>  </div>



                        </div>
                      

              
        </div>


    )
}

export default About;