import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/account/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/account/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/account/user/logout',
    method: 'post'
  })
}
