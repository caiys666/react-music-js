import React, { Component } from 'react'
import image from '../../api/image'
import { Swiper } from 'antd-mobile'
import './Banner.less'

export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerList: [],
    }
  }

  async componentDidMount() {
    await this.handleGetBannerList()
  }

  handleGetBannerList = async () => {
    const res = await image.getBannerListIos()
    if (res && res.status === 200 && res.data) {
      this.setState({
        bannerList: res.data.banners,
      })
    }
  }

  render() {
    const { bannerList } = this.state
    return (
      <div className='banner'>
        <div className='banner-list'>
          <Swiper autoplay loop>
            {bannerList.map(item => {
              return (
                <Swiper.Item key={item.bannerId}>
                  <img className='banner-image' src={item.pic} alt='' />
                </Swiper.Item>
              )
            })}
          </Swiper>
        </div>
      </div>
    )
  }
}
