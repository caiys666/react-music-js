import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import axios from 'axios'
import image from './api/image'
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

  componentDidMount() {
    this.handleLogin()
    image.getBannerList({ type: 2 })
  }

  handleLogin = async () => {
    let res = await axios.get(`${basePath}login/cellphone`, { params })
    console.log('----res----', res)
    // let resData = await get(`${basePath}login/cellphone`, params)
    // console.log('----res----', resData)
  }

  handleResult = res => {}
  render() {
    return (
      <div className='approve'>
        Approve-Demo
        <Button>你好</Button>
      </div>
    )
  }
}
