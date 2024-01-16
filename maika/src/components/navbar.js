import React from 'react'
import logo from './image/logo.png'
import home from './image/home.png'
export default function navbar() {
  return (
    <>
    <header className="top-header">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-2 col-2">
                    <div className="image-logo">
                        <a href="javascript;">
                            <img src={logo} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-8 col-8">
                    <div className="main-nav">
                        <nav>
                            <ul>
                                <li>
                                    <a href="index.html">Home</a>
                                    <ul>
                                        <li>
                                            <a href="index.html">Home - 1</a>
                                        </li>
                                        <li>
                                            <a href="javascript;">Home - 1</a>
                                        </li>
                                        <li>
                                            <a href="javascript;">Home - 1</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#aboutus">About Us</a>
                                </li>
                                <li>
                                    <a href="javascript;"> pages</a>
                                    <ul>
                                        <li>
                                            <a href="Services.html">Services</a>
                                        </li>
                                        <li>
                                            <a href="Services-detail.html#">Services Details</a>
                                        </li>
                                        <li>
                                            <a href="project.html">Project</a>
                                        </li>
                                        <li>
                                            <a href="team.html">Our Team</a>
                                        </li>
                                        <li>
                                            <a href="javascriptjavascript;">Team Details</a>
                                        </li>
                                        <li>
                                            <a href="javascriptjavascript;">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="javascriptjavascript;">Faq</a>
                                        </li>
                                        <li>
                                            <a href="javascriptjavascript;">Shop</a>
                                        </li>
                                        <li>
                                            <a href="javascriptjavascript;">Shop Details</a>
                                        </li>

                                    </ul>
                                </li>
                                <li>
                                    <a href="blogs.html"> Blogs</a>
                                    <ul>
                                        <li>
                                            <a href="blogs.html">Blogs</a>
                                        </li>
                                        <li>
                                            <a href="blog-details.html">Blogs Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#contact"> Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-2 col-2">
                    <div className="main-coll-box">
                        <div className="coll-box">
                            <div className="coll-src">
                                <a href="javascript;">Fb.Ln.</a>
                                <a href="javascript;">Tw.Be.</a>
                            </div>
                        </div>
                        <div className="coll-box">
                            <div className="coll-pra">
                                <p>Best Solution ForBusiness</p>
                                <p>Consulting Service</p>
                            </div>
                        </div>
                        <div className="coll-box">
                            <div className="coll-contact">
                                <a href="javascript;">P: 0312-8254639</a>
                                <a href="https://mail.google.com">E: waqasshahid964@gmail.com</a>
                            </div>
                        </div>
                        <div className="home-logo">
                            <a href="javascript;">
                            <img src={home} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}
