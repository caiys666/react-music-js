import React, { Component } from 'react'
import Banner from '../../banner/Banner'
import Recommend from '../../recommend/Recommend'
import Boutique from '../../boutique/Boutique'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Recommend />
        <Boutique />
      </div>
    )
  }
}
