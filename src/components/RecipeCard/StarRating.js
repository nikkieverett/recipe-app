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

    if (rating === null) {
      for (let i = 1; i <= 5; i += 1) {
        stars.push(<StarBorder color="primary" key={i} />)
      }
    } else {
      for (let i = 0; i < 5; i += 1) {
        if (rating > i) {
          stars.push(<Star color="primary" key={i} />)
        } else {
          stars.push(<StarBorder color="primary" key={i} />)
        }
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
