import axios from '../http'

const PLANETS = 'https://asteroids.dev.mediasia.cn/planets'

export function getPlanetListApi() {
  return axios({
    url: PLANETS,
    method: 'get'
  })
}
