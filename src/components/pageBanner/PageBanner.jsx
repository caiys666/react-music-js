import React, { Component } from 'react'
import { Swiper, Image } from 'antd-mobile'
import user from '../../api/user'
import Banner from '../banner/Banner'
import Recommend from '../recommend/Recommend'
import Boutique from '../boutique/Boutique'
import './PageBanner.less'

export default class PageBanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageImg: require('../../assets/images/ice.jpg').default,
      isShowPageImg: true,
    }
  }
  componentDidMount = async () => {}

  //关闭图片
  handleClosePageImg = () => {
    this.setState({
      isShowPageImg: false,
    })
  }

  render() {
    const { pageImg, isShowPageImg } = this.state
    return (
      <div className='page'>
        {isShowPageImg ? (
          <div className='page-image'>
            <Image lazy src={pageImg} />
            <span className='count-down' onClick={this.handleClosePageImg}>
              跳过广告
            </span>
          </div>
        ) : null}
        <div className='page-content'>
          <Banner />
          <Recommend />
          <Boutique />
        </div>
      </div>
    )
  }
}
