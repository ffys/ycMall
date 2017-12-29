
import Mock from 'mockjs'
import bannerAPI from './bannerlist'

Mock.setup({
  timeout: '350-600'
})

// 首页轮播图
Mock.mock(/\/bannerList\//, 'get', bannerAPI.getBanner)

export default Mock
