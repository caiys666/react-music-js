import React, { Component } from 'react'
import PageBanner from './components/pageBanner/PageBanner'
import './App.less'

const basePath = '/cloud/'
const params = {
  phone: '15909820262',
  password: 'yongsheng1999',
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userObj: {
        phone: '15909820262',
        password: 'yongsheng1999',
      },
    }
  }

  componentDidMount() {}

  handleResult = res => {}
  render() {
    return (
      <div className='approve'>
        <PageBanner />
      </div>
    )
  }
}
