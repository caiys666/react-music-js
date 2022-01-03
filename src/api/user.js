import { get, post } from './http'
const basePath = '/cloud'

/**
 * @description: 用户登录接口
 * @param {phone, password} 手机号，密码
 * @return {null}
 * @author: cabbage
 */
const userLogin = params => get(`${basePath}/login/cellphone`, params)

export default { userLogin }
