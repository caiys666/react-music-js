import React, { Component } from 'react'
import playlist from '../../api/playlist'
import RecommendItem from './recommend-item/RecommendItem'
import './Recommend.less'

export default class Recommend extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recommendList: [],
    }
  }

  componentDidMount = async () => {
    await this.handelGetRecommendList()
  }

  handelGetRecommendList = async () => {
    const res = await playlist.getRecommendPlayList()
    console.log('res', res)
    if (res && res.status === 200 && res.data) {
      this.setState({
        recommendList: res.data.result,
      })
    }
  }

  render() {
    const { recommendList } = this.state
    return (
      <div className='recommend'>
        <div className='recommend-top'>
          <span className='title'>推荐歌单</span>
          <span className='recommend-top-more'>
            更多
            <span className='iconfont icon-right'></span>
          </span>
        </div>
        <div className='recommend-list'>
          {recommendList.map((item, index) => {
            return <div key={item.id}>{index < 6 ? <RecommendItem data={item} /> : null}</div>
          })}
        </div>
      </div>
    )
  }
}
