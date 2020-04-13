import React from 'react'
import Star from "@material-ui/icons/Star"
import StarBorder from "@material-ui/icons/StarBorder"

export default class StarRating extends React.Component {
	constructor(props) {
		super(props)

		this.generateStars = this.generateStars.bind(this)
	}

  generateStars() {
		let stars = []
		const { rating } = this.props
		for (let i = 0; i < 5; i++) {
			if (rating >= i) {
				stars.unshift(<Star color="primary" key={i} />)
			} else {
				stars.push(<StarBorder color="primary" key={i} />)
			}
		}
		return stars
	}

	render () {
		return (
      <div >
        {this.generateStars()}
      </div>
    )
	}
}
