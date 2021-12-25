import { get, post } from './http'
const basePath = '/cloud'
/**
 * @description: 请求轮播图的参数
 * @param {params}
 * @return {null}
 * @author: cabbage
 */
const getBannerList = params => get(`${basePath}/banner`, params)

export default {
  getBannerList,
}
