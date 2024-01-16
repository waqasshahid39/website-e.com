import React from 'react'
import logo from './image/logo.png'
import  footerloogo from './image/footer-logo.png'
import  email from './image/email.png'

function footer() {
  return (
    <>
    <footer className="footer">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-5 col-md-6">
								<div className="footer-main">
									<div className="footer-image">
										<img src={logo} alt=""/>
									</div>
									<div className="about-inner-hed">
										<h5>Get Contact</h5>
									</div>
									<div className="footer-email-main">
										<div className="footer-email-img">
											<img src={email} alt=""/>
										</div>
										<div className="footer-email">
											<form>
												<input type="email" placeholder=""/>
											</form>
										</div>
									</div>
									<div className="footer-pra">
										<ul>
											<li>
												<a href='javascript;'><span>P:</span> +99 88 55 666 000</a>
											</li>
										</ul>
										<ul>
											<li><a href='javascript;'><span>L:</span> 13 Road Mirpur Street, 600New York, USA</a></li>
										</ul>
										
									</div> 
								</div>
							</div>
							<div className="col-lg-2 col-md-6">
								<div className="footer-main">
									<div className="footer-heading">
										<h6>Follow Me</h6>
										<ul>
											<li>
												<li><a href="javascript">Facebook</a></li>
												<li><a href="javascript">Twitter</a></li>
												<li><a href="javascript">Instagram</a></li>
												<li><a href="javascript">LinkedIn</a></li>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="footer-main">
									<div className="footer-heading footer-heading-1">
										<h6>Top Links</h6>
										<ul>
											<li><a href="javascript">About</a></li>
											<li><a href="javascript">Careers</a></li>  
											<li><a href="javascript">Terms of service</a></li>
											 <li><a href="javascript">We’re Hiring</a></li> 
											 <li><a href="javascript">Cookie Policy</a></li> 
											<li><a href="javascript">News & Media</a></li>
										
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6">
								<div className="footer-main">
									<div className="footer-heading">
										<h6>Explore</h6>
										<ul>
											<li><a href="javascript">Contact Us</a>
												<li><a href="javascript">Team Member</a></li>
												<li><a href="javascript">Latest Portfolio</a></li>
												<li><a href="javascript">Shop Page</a></li>
												<li><a href="javascript">News & Media</a></li>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-8 col-sm-12">
								<div className="footer-bottom-pra">
									<p>Copyright © 2023 <span>Zucbedesign.</span> All rights reserved.</p>
								</div>
							</div>
							<div className="col-lg-6 col-md-4 col-sm-12">
								<div className="footer-logo-main">
									<div className="footer-bottom-logo">
										<img src={footerloogo} alt=""/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
    </>
  )
}

export default footer