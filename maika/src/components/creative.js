import React from 'react'
import videoicon from './image/video-icon.png'
import clock from './image/clock.png'
import mlogo from './image/m-logo.png'
import clogo from './image/creative-logo.png'

function creative() {
  return (
    <>
    <section className="creative">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="creative-content">
								<div className="creative-heading">
									<h1>The best work solution, for the best Creative Agency.</h1>
									<p>We Create our Digital creative agency Platform.</p>
								</div>
								<div className="about-btn-main">
									<div className="our-service-btn about-btn">
										<a href="javascript;">
											<span>Get More Videos </span>
											<i className="fal fa-arrow-up"></i>
										</a>
									</div>
									<div className="btn-image">
										<a href="javascript;">
											<img src={videoicon} alt=""/>
										</a>
									</div>
								</div>
							</div>
							<div className="creative-logo">
								<img src={clock} alt=""/>
							</div>
							<div className="cretive-logo-1">
								<img src={mlogo} alt=""/>
							</div>
							<div className="cretive-logo-2">
								<img src={clogo} alt=""/>
							</div>
						</div>
					</div>
				</div>
			</section>
    </>
  )
}

export default creative