import { get, post } from './http'
const basePath = '/cloud'
/**
 * @description: 请求轮播图的参数
 * @param {params} 0表示PC 1表示Android 2表示Ios 3表示Ipad
 * @return {null}
 * @author: cabbage
 */
const getBannerListPC = () => get(`${basePath}/banner`, { type: 0 })

const getBannerListAndroid = () => get(`${basePath}/banner`, { type: 1 })

const getBannerListIos = () => get(`${basePath}/banner`, { type: 2 })

const getBannerListIpad = () => get(`${basePath}/banner`, { type: 3 })

/**
 * @description: 获取首页信息
 * @param {*}
 * @return {*}
 * @author: cabbage
 */
const getHomePageInfo = () => get(`${basePath}/homepage/block/page`)

/**
 * @description: 获取首页信息列表
 * @param {*}
 * @return {*}
 * @author: cabbage
 */
const getHomePageList = () => get(`${basePath}/homepage/dragon/ball`)

export default {
  getBannerListPC,
  getBannerListAndroid,
  getBannerListIos,
  getBannerListIpad,
  getHomePageInfo,
  getHomePageList,
}
