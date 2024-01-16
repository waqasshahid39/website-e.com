import React from 'react'
import services1 from './image/download3.png'
import services2 from './image/man-1.png'
import services3 from './image/stars.png'
import services4 from './image/LOGO-2.png'
import services5 from './image/LOGO-3.png'

function clindsay() {
  return (
    <>
    <section className="clind-say">
        <div className="container">
            <div className="our-services-heading">
                <div className="our-services-image-heading">
                      <img src={services1} alt=""/>
                </div>
                <div className="our-services-image-content">
                    <h3>What client Says?</h3>
                    <p>Praesent ut orci sodales, cursus mauris at, fringilla mi. Quisque feugiat, libero vel pulvinar accumsan, mauris nulla malesuada dolor, at varius mauris magna nec felis. In congue elit ligula.</p>
                </div>
            </div>
            <div className="row grow-business-slider">
                <div className="col-lg-6 col-md-12">
                    <div className="clind-say-main">
                        <div className="clind-say-item">
                            <div className="clind-say-image">
                            <img src={services2} alt=""/>
                            </div>
                            <div className="clind-say-main-logo">
                                <div className="clind-say-heading">
                                    <h6>IT. Isabella Theodore</h6>
                                </div>
                                <div className="clind-say-stars">
                                <img src={services3} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="clind-say-pra">
                            <p>Nam ultricies sed leo eget vehi. Sed variunoni magna quistoli mats. Inte tempus semper leoli rokomoni our has been lecto.</p>
                        </div>
                        <div className="clind-say-content">
                            <div className="clind-logo-1">
                                <img src={services4} alt=""/>
                            </div>
                            <div className="clind-logo-2">
                                <img src={services5} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="clind-say-main">
                        <div className="clind-say-item">
                            <div className="clind-say-image">
                            <img src={services2} alt=""/>
                            </div>
                            <div className="clind-say-main-logo">
                                <div className="clind-say-heading">
                                    <h6>IT. Isabella Theodore</h6>
                                </div>
                                <div className="clind-say-stars">
                                <img src={services3} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="clind-say-pra">
                            <p>Nam ultricies sed leo eget vehi. Sed variunoni magna quistoli mats. Inte tempus semper leoli rokomoni our has been lecto.</p>
                        </div>
                        <div className="clind-say-content">
                            <div className="clind-logo-1">
                                <img src={services4} alt=""/>
                            </div>
                            <div className="clind-logo-2">
                                <img src={services5} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default clindsay