import fetch from '@utils/fetch'

export function bannerList () {
  return fetch({
    url: '/bannerList',
    method: 'get,'
  })
}
