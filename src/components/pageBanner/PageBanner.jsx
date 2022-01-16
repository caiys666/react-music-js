import React, { Component } from 'react'
import { Image } from 'antd-mobile'
import Home from './home/Home'
import Search from './search/Search'
import Mine from './mine/Mine'
import Attention from './attention/Attention'

import './PageBanner.less'

export default class PageBanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageImg: require('../../assets/images/ice.jpg').default,
      isShowPageImg: true,
      categoryList: [
        { name: '主页', component: 'Home', icon: 'icon-zhuyedianji', selected: true },
        { name: '搜索', component: 'Search', icon: 'icon-search', selected: false },
        { name: '我的', component: 'Mine', icon: 'icon-music', selected: false },
        { name: '关注', component: 'Attention', icon: 'icon-wodeguanzhu', selected: false },
      ],
      currentComponent: 'Home',
    }
  }
  componentDidMount = async () => {}

  //关闭图片
  handleClosePageImg = () => {
    this.setState({
      isShowPageImg: false,
    })
  }

  // 切换导航
  handleChangeComponent = (item, index) => {
    const { categoryList } = this.state
    categoryList.map((category, cIndex) => {
      if (index === cIndex) {
        category.selected = true
      } else {
        category.selected = false
      }
    })
    this.setState({ categoryList: [...categoryList], currentComponent: item.component })
  }

  render() {
    const { pageImg, isShowPageImg, categoryList, currentComponent } = this.state
    const { handleChangeComponent } = this
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
          {currentComponent === 'Home' ? (
            <Home />
          ) : currentComponent === 'Search' ? (
            <Search />
          ) : currentComponent === 'Mine' ? (
            <Mine />
          ) : currentComponent === 'Attention' ? (
            <Attention />
          ) : null}
        </div>
        <div className='page-category'>
          {categoryList.map((item, index) => {
            return (
              <div
                className={`category ${item.selected ? 'selected' : ''}`}
                key={index}
                onClick={handleChangeComponent.bind(this, item, index)}
              >
                <span className={`iconfont ${item.icon}`}></span>
                <span className='category-name'>{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
