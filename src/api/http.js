/**
 * 接口调用层
 */

import axios from 'axios'
 
export const get = (url, params) => axios.get(url, {
    params
})
export const post = (url, params) => axios.post(url, params)
