/**
 * 接口调用层
 */

import axios from 'axios'
/**
 * @description: axios的get请求处理
 * @param {url, params}
 * @return {null}
 * @author: cabbage
 */
export const get = (url, params) =>
  axios.get(url, {
    params,
  })
/**
 * @description: axios的post请求处理
 * @param {url, params}
 * @return {null}
 * @author: cabbage
 */
export const post = (url, params) => axios.post(url, params)
