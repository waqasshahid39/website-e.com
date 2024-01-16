import React from 'react'
import service1 from './image/service-1.png'
import service2 from './image/service-2.png'
import service3 from './image/service-3.png'
import service5 from './image/service-5.png'
import service4 from './image/service-4.png'
import service6 from './image/service-6.png'

function services() {
  return (
    <>
    <section className="serviuce">
				<div className="container">
					<div className="row service-slider">
						<div className="col-lg-3">
							<div className="services-image">
								<img src={service1} alt=""/>
							</div>
						</div>
						
						<div className="col-lg-3">
							<div className="services-image">
								<img src={service5} alt=""/>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="services-image">
								<img src={service4} alt=""/>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="services-image">
								<img src={service6} alt=""/>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="services-image">
								<img src={service6} alt=""/>
							</div>
						</div>
					</div>
				</div>
			</section>
    </>
  )
}

export default services