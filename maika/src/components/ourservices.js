import React from 'react'
import dow1 from './image/m-logo.png'
import dow2 from './image/download.png'
import dow3 from './image/download1.png'
import dow4 from './image/download3.png'
import dow5 from './image/download4.png'
import dow6 from './image/download2.png'
import dow7 from './image/d-4.png'
import dow8 from './image/d-7.png'
import dow9 from './image/download2.png'
import dow10 from './image/d-5.png'
import dow11 from './image/d-6.png'
import dow12 from './image/download2.png'
import dow13 from './image/download.png'
import dow14 from './image/download1.png'
import dow15 from './image/download2.png'

function ourservices() {
    
  return (
    <section className="Our-Services">
				<div className="container">
					<div className="our-services-heading">
						<div className="our-services-image-heading">
							<img src={dow1} alt=""/>
						</div>
						<div className="our-services-image-content">
							<h3>Our Best Services</h3>
							<p>Praesent ut orci sodales, cursus mauris at, fringilla mi. Quisque feugiat, libero vel pulvinar accumsan, mauris nulla malesuada dolor, at varius mauris magna nec felis. In congue elit ligula.</p>
						</div>
					</div>
					<div className="row about-slider">
						<div className="col-lg-3">
							<div className="our-services-main">
								<div className="our-services-main-images">
									<div className="our-services-image">
										<img src={dow2} alt=""/>
									</div>
									<div className="our-services-image-1">
										<img src={dow3} alt=""/>
									</div>
								</div>
								<div className="our-services-content">
									<h3>Web Design</h3>
									<p>Pellentesque sit amet urna justo. Fusce velit nibh commo iaculis vestibulum condimentum.</p>
								</div>
								<div className="our-service-btn">
									<a href="javascript;">
										<span>Read More</span>
										<i className="fal fa-arrow-up"></i>
									</a>
								</div>
								<div className="our-service-hover-img">
									<div className="our-service-hover">
										<img src={dow9} alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="our-services-main">
								<div className="our-services-main-images">
									<div className="our-services-image">
										<img src={dow5} alt=""/>
									</div>
									<div className="our-services-image-1">
										<img src={dow5} alt=""/>
									</div>
								</div>
								<div className="our-services-content">
									<h3>Seo Service</h3>
									<p>Pellentesque sit amet urna justo. Fusce velit nibh commo iaculis vestibulum condimentum.</p>
								</div>
								<div className="our-service-btn">
									<a href="javascript;">
										<span>Read More</span>
										<i className="fal fa-arrow-up"></i>
									</a>
								</div>
								<div className="our-service-hover-img">
									<div className="our-service-hover">
										<img src={dow9} alt=""/>
									</div>
								</div>
							</div>
						</div>
						
					
						<div className="col-lg-3">
							<div className="our-services-main">
								<div className="our-services-main-images">
									<div className="our-services-image">
										<img src={dow10} alt=""/>
									</div>
									<div className="our-services-image-1">
										<img src={dow11} alt=""/>

									</div>
								</div>
								<div className="our-services-content">
									<h3>UX/UI Design</h3>
									<p>Pellentesque sit amet urna justo. Fusce velit nibh commo iaculis vestibulum condimentum.</p>
								</div>
								<div className="our-service-btn">
									<a href="javascript;">
										<span>Read More</span>
										<i className="fal fa-arrow-up"></i>
									</a>
								</div>
								<div className="our-service-hover-img">
									<div className="our-service-hover">
										<img src={dow12} alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="our-services-main">
								<div className="our-services-main-images">
									<div className="our-services-image">
											<img src={dow13} alt=""/>
									</div>
									<div className="our-services-image-1">
											<img src={dow14} alt=""/>
									</div>
								</div>
								<div className="our-services-content">
									<h3>Web Design</h3>
									<p>Pellentesque sit amet urna justo. Fusce velit nibh commo iaculis vestibulum condimentum.</p>
								</div>
								<div className="our-service-btn">
									<a href="javascript;">
										<span>Read More</span>
										<i className="fal fa-arrow-up"></i>
									</a>
								</div>
								<div className="our-service-hover-img">
									<div className="our-service-hover">
											<img src={dow15} alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="our-services-main">
								<div className="our-services-main-images">
									<div className="our-services-image">
											<img src={dow13} alt=""/>
									</div>
									<div className="our-services-image-1">
											<img src={dow14} alt=""/>
									</div>
								</div>
								<div className="our-services-content">
									<h3>Web Design</h3>
									<p>Pellentesque sit amet urna justo. Fusce velit nibh commo iaculis vestibulum condimentum.</p>
								</div>
								<div className="our-service-btn">
									<a href="javascript;">
										<span>Read More</span>
										<i className="fal fa-arrow-up"></i>
									</a>
								</div>
								<div className="our-service-hover-img">
									<div className="our-service-hover">
											<img src={dow15} alt=""/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
  )
}

export default ourservices