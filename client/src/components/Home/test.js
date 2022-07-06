import React from 'react'
import './test.css'

const test = () => {
  return (
	<div><div className="card card-blog fill-light" >
	<div className="card-image">
		<img className="img" src="https://source.unsplash.com/collection/582860/660x440" />
	</div>

	<div className="content">
		<h6 className="category text-primary" >Cards</h6>
		<p className="card-description text-dark-secondary" >
			Cards are a part of the material design guidelines, but beyond that they're easy to use and look great on desktop and mobile.
		</p>
	</div>
</div></div>
  )
}

export default test