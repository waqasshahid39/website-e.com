import React from 'react'
import map from './image/map.png'
import phone from './image/phone.png'
import loc from './image/loc.png'
import mess from './image/mess.png'
import time from './image/time.png'




const contactus = () => {
  return (
    <>
      <section className="map" id='contact'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="map-image">
                        <img src={map} alt=""/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-8 col-lg-7 col-md-12">
                    <div className="form-main">
                        <div className="form-head">
                            <h3>Get in touch with Us</h3>
                        </div>
                        <div className="form-input">
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" placeholder="First Name"/>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Last Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-input">
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Eamil"/>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Phone No."/>
                                </div>
                            </div>
                        </div>
                        <div className="form-input">
                            <div className="row">
                                <div className="col-lg-12">
                                    <input type="text" placeholder="Subject"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-input">
                            <div className="row">
                                <div className="col-lg-12">
                                    <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Write comments"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="forms-pra">
                            <p>* Call us 24/7 or fill out the form below to receive a free.</p>
                        </div>
                        <div className="about-btn-main">
                            <div className="grow-business-btn">
                                <a href="#">Send Message<i className="fal fa-arrow-up"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-12">
                    <div className="form-bk">
                        <div className="contact-items">
                            <div className="form-icon">
                                <img src={phone} alt=""/>
                            </div>
                            <div className="form-headeing">
                                <p>Contact Phone</p>
                                <h4>+55 (9900) 666 22</h4>
                            </div>
                        </div>
                        <div className="contact-items">
                            <div className="form-icon">
                                <img src={loc} alt=""/>
                            </div>
                            <div className="form-headeing">
                                <p>Contact Phone</p>
                                <h4>+55 (9900) 666 22</h4>
                            </div>
                        </div>
                        <div className="contact-items">
                            <div className="form-icon">
                                <img src={mess} alt=""/>
                            </div>
                            <div className="form-headeing">
                                <p>Contact Phone</p>
                                <h4>+55 (9900) 666 22</h4>
                            </div>
                        </div>
                        <div className="contact-items">
                            <div className="form-icon">
                               <img src={time} alt=""/>
                            </div>
                            <div className="form-headeing">
                                <p>Contact Phone</p>
                                <h4>+55 (9900) 666 22</h4>
                            </div>
                        </div>
                        <div className="input-icon-main">                           
                            <div className="input-icon-hover">
                                <a href="">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </div>
                            <div className="input-icon-hover">
                                <a href="">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </div>
                            <div className="input-icon-hover">
                                <a href="">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                            <div className="input-icon-hover">
                                <a href="">
                                    <i className="fa-brands fa-pinterest-p"></i>
                                </a>
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

export default contactus
