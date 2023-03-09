import React, { Component } from 'react'
import './Section5.css'

export default class Section5 extends Component {
  render() {
    return (
      <div>

<section class="fifth-section  row">

			<div class="col-md-6">
				<div class="left-side-wrapper pt-5">
					<div className='product-title5 fs-1 fw-bold white'>
                     HomePod
                    </div>
					<div class="brief-description5">
						Profound sound.
					</div>
					<div class="links-wrapper">
						<ul>
							<li><a href="">Learn more</a></li>
							<li><a href="">Buy</a></li>
						</ul>
					</div>
				</div>
			</div>

			<div class="col-md-6 ">
				<div class="right-side-wrapper pt-5">
					<div className='product-title5 fs-1 fw-bold white'>
                     AirPod Pro
                    </div>
					<div class="brief-description5">
						Rebuild from the sound up.
					</div>
					<div class="links-wrapper">
						<ul>
							<li><a href="">Learn more</a></li>
							<li><a href="">Buy</a></li>
						</ul>
					</div>
				</div>
			</div>

		</section>

      </div>
    )
  }
}
