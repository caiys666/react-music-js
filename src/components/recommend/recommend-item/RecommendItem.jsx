import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './RecommendItem.less'

export default class RecommendItem extends Component {
  render() {
    const { data } = this.props
    return (
      <div className='recommend-item'>
        <div className='recommend-item-img'>
          <img src={data.picUrl} alt='' />
        </div>
        <div className='recommend-item-desc'>{data.name}</div>
      </div>
    )
  }
}

RecommendItem.propTypes = {
  data: PropTypes.object,
}
