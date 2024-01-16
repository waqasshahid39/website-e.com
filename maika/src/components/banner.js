import React from 'react'
import circle from './image/circle.png'
import manbannner from './image/man-bannner.png'
import mlogo from './image/m-logo.png'
import shine from './image/shine.png'
function banner() {
      
  return (
    <>
    <section className="banner">
        <div className="top-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="banner-content">
                            <div className="banner-heading">
                                <h2 id="check">Smooth and grow your busines.</h2>
                                <p>Nulla lobortis orci vel rutrum cursus. Curabitur at hendrerit libero. Curabitur bibendum eros nec augue egestas facilisis. Duis sit amet aliquet arcu, sit amet fermentum lectus.</p>
                            </div>
                            <div className="banner-btn">
                                <a href="javascript;" id="check-btn">Discover Now <i className="fal fa-arrow-up"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="circle-shape">
                 <img src={circle} alt=""/>
            </div>
            <div className="man-shape">
                <img src={manbannner} alt=""/>
            </div>
            <div className="m-logo">
                <img src={mlogo} alt=""/>
            </div>
            <div className="shine-shape">
                <img src={shine} alt=""/>
            </div>
        </div>


    </section>
    </>
  )
}

export default banner