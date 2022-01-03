import { get, post } from './http'
const basePath = '/cloud'

/**
 * @description: 获取推荐歌单
 * @param {*}
 * @return {*}
 * @author: cabbage
 */
const getRecommendPlayList = () => get(`${basePath}/personalized`)

export default { getRecommendPlayList }
