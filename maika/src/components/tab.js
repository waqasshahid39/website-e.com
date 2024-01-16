import React from 'react'
import tab1 from './image/tabs-1.png'
import tab2 from './image/tabs-2.png'
import tab3 from './image/tabs-3.png'
import tab4 from './image/tabs-4.png'
function tab() {
  return (
    <>
    <section className="tabs">
				<div className="container">
					<div className="our-services-heading">
						<div className="our-services-image-heading">
							<img src="./image/download (3).png" alt=""/>
						</div>
						<div className="our-services-image-content">
							<h3>Newest Portfolio</h3>
							<p>Praesent ut orci sodales, cursus mauris at, fringilla mi. Quisque feugiat, libero vel pulvinar accumsan, mauris nulla malesuada dolor, at varius mauris magna nec felis. In congue elit ligula.</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="tab-center">
								<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
									<li className="nav-item" role="presentation">
										<button className="nav-link active" id="pills-View-All-tab" data-bs-toggle="pill" data-bs-target="javascript;pills-View-All" type="button" role="tab" aria-controls="pills-View-All" aria-selected="true">View All</button>
									</li>
									<li className="nav-item" role="presentation">
										<button className="nav-link" id="pills-Web-Design-tab" data-bs-toggle="pill" data-bs-target="javascript;pills-Web-Design" type="button" role="tab" aria-controls="pills-Web-Design" aria-selected="false">Web Design</button>
									</li>
									<li className="nav-item" role="presentation">
										<button className="nav-link" id="pills-ux-design-tab" data-bs-toggle="pill" data-bs-target="javascript;pills-ux-design" type="button" role="tab" aria-controls="pills-ux-design" aria-selected="false">UX Design</button>
									</li>
									<li className="nav-item" role="presentation">
										<button className="nav-link" id="pills-Branding-tab" data-bs-toggle="pill" data-bs-target="javascript;pills-Branding" type="button" role="tab" aria-controls="pills-Branding" aria-selected="false">Branding</button>
									</li>
									<li className="nav-item" role="presentation">
										<button className="nav-link" id="pills-app-tab" data-bs-toggle="pill" data-bs-target="javascript;pills-app" type="button" role="tab" aria-controls="pills-app" aria-selected="false">App Design</button>
									</li>
									<li className="nav-item" role="presentation">
										<button className="nav-link" id="pills-Marketing-tab" data-bs-toggle="pill" data-bs-target="javascript;pills-Marketing" type="button" role="tab" aria-controls="pills-Marketing" aria-selected="false">Marketing</button>
									</li>
								</ul>
								
							</div>
						</div>
					</div>
                    <div className="row">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-View-All" role="tabpanel" aria-labelledby="pills-View-All-tab">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="tab-main">
                                                <div className="tab-image">
                                                   <img src={tab1} alt=""/>
                                                </div>
                                                <div className="tab-hover">
                                                    <p>Branding Design</p>
                                                    <h3>Fashion Chair Design Brand</h3>
                                                    <i className="fal fa-arrow-up"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="tab-main">
                                                <div className="tab-image">
                                                 <img src={tab2} alt=""/>
                                                </div>
                                                <div className="tab-hover">
                                                    <p>Branding Design</p>
                                                    <h3>Fashion Chair Design Brand</h3>
                                                    <i className="fal fa-arrow-up"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="tab-main">
                                                <div className="tab-image">
                                                     <img src={tab3} alt=""/>
                                                </div>
                                                <div className="tab-hover">
                                                    <p>Branding Design</p>
                                                    <h3>Fashion Chair Design Brand</h3>
                                                    <i className="fal fa-arrow-up"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="tab-main">
                                                <div className="tab-image">
                                                    <img src={tab4} alt=""/>
                                                </div>
                                                <div className="tab-hover">
                                                    <p>Branding Design</p>
                                                    <h3>Fashion Chair Design Brand</h3>
                                                    <i className="fal fa-arrow-up"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-Web-Design" role="tabpanel" aria-labelledby="pills-Web-Design-tab">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="tab-main">
                                                <div className="tab-image">
                                                  <img src={tab1} alt=""/>
                                                </div>
                                                <div className="tab-hover">
                                                    <p>Branding Design</p>
                                                    <h3>Fashion Chair Design Brand</h3>
                                                    <i className="fal fa-arrow-up"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="tab-main">
                                                <div className="tab-image">
                                                    <img src={tab2} alt=""/>
                                                </div>
                                                <div className="tab-hover">
                                                    <p>Branding Design</p>
                                                    <h3>Fashion Chair Design Brand</h3>
                                                    <i className="fal fa-arrow-up"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-ux-design" role="tabpanel" aria-labelledby="pills-ux-design-tab">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="tab-main">
                                                <div className="tab-image">
                                                     <img src={tab3} alt=""/>
                                                </div>
                                                <div className="tab-hover">
                                                    <p>Branding Design</p>
                                                    <h3>Fashion Chair Design Brand</h3>
                                                    <i className="fal fa-arrow-up"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="tab-main">
                                                <div className="tab-image">
                                                        <img src={tab1} alt=""/>
                                                </div>
                                                <div className="tab-hover">
                                                    <p>Branding Design</p>
                                                    <h3>Fashion Chair Design Brand</h3>
                                                    <i className="fal fa-arrow-up"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-Branding" role="tabpanel" aria-labelledby="pills-Branding-tab">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="tab-main">
                                                <div className="tab-image">
                                                  <img src={tab3} alt=""/>
                                                </div>
                                                <div className="tab-hover">
                                                    <p>Branding Design</p>
                                                    <h3>Fashion Chair Design Brand</h3>
                                                    <i className="fal fa-arrow-up"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="tab-main">
                                                <div className="tab-image">
                                                 <img src={tab2} alt=""/>
                                                </div>
                                                <div className="tab-hover">
                                                    <p>Branding Design</p>
                                                    <h3>Fashion Chair Design Brand</h3>
                                                    <i className="fal fa-arrow-up"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-app" role="tabpanel" aria-labelledby="pills-app-tab">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="tab-main">
                                                <div className="tab-image">
                                                <img src={tab1} alt=""/>
                                                </div>
                                                <div className="tab-hover">
                                                    <p>Branding Design</p>
                                                    <h3>Fashion Chair Design Brand</h3>
                                                    <i className="fal fa-arrow-up"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="tab-main">
                                                <div className="tab-image">
                                                <img src={tab1} alt=""/>
                                                </div>
                                                <div className="tab-hover">
                                                    <p>Branding Design</p>
                                                    <h3>Fashion Chair Design Brand</h3>
                                                    <i className="fal fa-arrow-up"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-Marketing" role="tabpanel" aria-labelledby="pills-Marketing-tab">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="tab-main">
                                                <div className="tab-image">
                                                <img src={tab1} alt=""/>
                                                </div>
                                                <div className="tab-hover">
                                                    <p>Branding Design</p>
                                                    <h3>Fashion Chair Design Brand</h3>
                                                    <i className="fal fa-arrow-up"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="tab-main">
                                                <div className="tab-image">
                                                <img src={tab1} alt=""/>
                                                </div>
                                                <div className="tab-hover">
                                                    <p>Branding Design</p>
                                                    <h3>Fashion Chair Design Brand</h3>
                                                    <i className="fal fa-arrow-up"></i>
                                                </div>
                                            </div>
                                        </div>
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

export default tab