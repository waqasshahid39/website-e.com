import React from 'react'
import bussines1 from './image/bussines-1.png'
import bussines2 from './image/download3.png'
function growbusiness() {
  return (
    <>
    <section className="grow-business">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<div className="about-us-main">
								<div className="grow-business-image">
									<img src={bussines1} alt=""/>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="grow-business-item">
								<div className="about-us-content">
									<div className="about-us-heading">
										<div className="about-inner">
											<div className="about-inner-img">
												<img src={bussines2} alt=""/>
											</div>
											<div className="about-inner-hed">
												<h5>WHAT DO WE DO</h5>
											</div>
										</div>
										<h4>Grow your business with a creative agency.</h4>
									</div>
									<div className="about-us-pra">
										<p>Mauris ut enim sit amet lacus ornare ullamcorper. Praesent placerat neque eu purus rhoncus, vel tincidunt odio ultrices. Sed feugiat feugiat felis. Curabitur posuere tristique mauris non blandit.</p>
									</div>
									<div className="grow-business-main">
										<div className="about-item">
											<div className="about-us-number">
												<div className="about-us-text">
													<strong>Content Strategy 90%</strong>
												</div>
											</div>
											<div className="about-us-border"></div>
										</div>
										<div className="about-item">
											<div className="about-us-number">
												<div className="about-us-text">
													<strong>Content Strategy 90%</strong>
												</div>
											</div>
											<div className="about-us-border"></div>
										</div>
									</div>
									<div className="about-btn-main">
										<div className="grow-business-btn">
											<a href="javascript;">Discover More <i className="fal fa-arrow-up"></i>
											</a>
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

export default growbusiness