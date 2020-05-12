import PropTypes from 'prop-types'
import React from 'react'
import Star from '@material-ui/icons/Star'
import StarBorder from '@material-ui/icons/StarBorder'

export default class StarRating extends React.Component {
  constructor(props) {
    super(props)

    this.generateStars = this.generateStars.bind(this)
  }

  generateStars() {
    const stars = []
    const { rating } = this.props
    for (let i = 0; i < 5; i += 1) {
      if (rating >= i) {
        stars.unshift(<Star color="secondary" key={i} />)
      } else {
        stars.push(<StarBorder color="secondary" key={i} />)
      }
    }
    return stars
  }

  render() {
    return <div>{this.generateStars()}</div>
  }
}

StarRating.propTypes = {
  rating: PropTypes.any
}
