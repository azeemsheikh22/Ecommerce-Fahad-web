import './Items.css';

import Img1 from './Images/4.png'
import Img2 from './Images/11.png'  
import Img3 from './Images/8.jpg'
import Img4 from './Images/9.png'
import Img5 from './Images/10.png'
import Img6 from './Images/6.jpg'
import Img7 from './Images/12.png'
import Img8 from './Images/13.png'
import Img9 from  './Images/star.png';




function Items(){

    return(

<div>

  <div className='container'>
 <h4>Top Sale on This Week</h4>
<h1>Favourite Product</h1> 
<div className='row'>

  <div className='col-md-3'>
    
  <div className='item'>
    <img src={Img1}></img>
      <h3>Man Watch</h3> 
      <button>MORE</button>
   
    
 
    </div>

  </div>
  <div className='col-md-3'>
  <div className='item'>
    <img src={Img2}></img>
    <h3>T-Shirt</h3>
    <button>MORE</button>
   
    
    
    </div>

  </div>
  <div className='col-md-3'>
  <div className='item'>
    <img src={Img3}></img>
    <h3>Head Phones</h3>
    <button>MORE</button>
   
    </div>

  </div>
  <div className='col-md-3'>
  <div className='item'>
    <img src={Img4}></img>
    <h3>Sports Shoes</h3>
    <button>MORE</button>
   
    </div>

  </div>



  
</div>

<div className='row'>

  <div className='col-md-3'>
    
  <div className='item'>
    <img src={Img5}></img>
    <h3>Boy Chain</h3>
    <button>MORE</button>
   
    </div>

  </div>
  <div className='col-md-3'>
  <div className='item'>
    <img src={Img6}></img>
    <h3>Smart Watch</h3>
    <button>MORE</button>
   
    
    </div>

  </div>
  <div className='col-md-3'>
  <div className='item'>
    <img src={Img7}></img>
    <h3>Iphone Cover</h3>
    <button>MORE</button>
   
    </div>

  </div>
  <div className='col-md-3'>
  <div className='item'>
    <img src={Img8}></img>
    <h3>Iphone 13</h3>
    <button>MORE</button>
   
    </div>

  </div>



  
</div>

    


  </div>



 
</div>

    )
}

export default Items;

// linear-gradient(90deg, rgb(0 0 0 / 30%), rgb(68 68 68 / 90%)),
//     url(./Images/header.jpg) no-repeat;