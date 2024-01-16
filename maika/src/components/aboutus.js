import React from 'react'
import about1 from './image/about-1.png'
import aboutimg from './image/download3.png'
import btnimg from './image/video-icon.png'
function aboutus() {
  return (
    <section className="about-us" id='aboutus'>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<div className="about-us-main">
								<div className="about-us-image">
									<img src={about1} alt=""/>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="about-us-main about-us-main-1">
								<div className="about-us-content">
									<div className="about-us-heading">
										<div className="about-inner">
											<div className="about-inner-img">
												<img src={aboutimg} alt=""/>
											</div>
											<div className="about-inner-hed">
												<h5>About Us Meika</h5>
											</div>
										</div>
										<div className="abut-us-providing">
											<h4>We Provide You Best Experience</h4>
											<ul>
												<li>Sed feugiat feugiat felis. Curabitur posuere tristique mauris non blandit. Sed consectetur venenatis enim vitae vestibulum.</li>
											</ul>
										</div>
									</div>
									<div className="about-us-pra">
										<p>Mauris ut enim sit amet lacus ornare ullamcorper. Praesent placerat neque eu purus rhoncus, vel tincidunt odio ultrices. Sed feugiat feugiat felis. Curabitur posuere tristique mauris non blandit.</p>
									</div>
									<div className="about-item-main">
										<div className="about-item">
											<div className="about-us-number">
												<div className="about-us-ano">
													<span>01</span>
												</div>
												<div className="about-us-text">
													<h6>We’re Serving Years</h6>
												</div>
											</div>
											<div className="about-us-pra-1">
												<p>Purus vel tincidunt odio ultrices. Sed feugiat feugiat felis. Fusce et nulla.</p>
											</div>
										</div>
										<div className="about-item">
											<div className="about-us-number">
												<div className="about-us-ano">
													<span>01</span>
												</div>
												<div className="about-us-text">
													<h6>We’re Serving Years</h6>
												</div>
											</div>
											<div className="about-us-pra-1">
												<p>Purus vel tincidunt odio ultrices. Sed feugiat feugiat felis. Fusce et nulla.</p>
											</div>
										</div>
									</div>
									<div className="about-btn-main">
										<div className="our-service-btn about-btn">
											<a href="javascript;">
												<span>About More</span>
												<i className="fal fa-arrow-up"></i>
											</a>
										</div>
										<div className="btn-image">
											<a href="javascript;">
												<img src={btnimg} alt=""/>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
  )
}

export default aboutus