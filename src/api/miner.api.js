import axios from '../http'

const MINERS = 'https://asteroids.dev.mediasia.cn/miners'

export function getMinersListApi() {
  return axios({
    url: MINERS,
    method: 'get'
  })
}

export function createMinersApi(minerObj) {
  return axios({
    url: MINERS,
    method: 'post',
    data: minerObj
  })
}
