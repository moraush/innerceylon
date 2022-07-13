import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='newletter'>
        <div className="container">
          <div className="left">
          <h1>Stay tune to get updates on <br/>new Places to explore</h1>
            <span>Don't miss to update Attractions nearby your Area</span>
          </div>


          <div className='rightmain'>
          <div className="right">
            
          <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
            </div>

            <div className="social">
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
            </div>
          </div>

        </div>
        



        <div className='legal'>
<p>
  Copyright ©2022 All rights reserved || INNERCEYLON.COM
</p>
</div>
    </div>



    
  )
}

export default Footer