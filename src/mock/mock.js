const Mock = require('mockjs')
const Random = Mock.Random
const prduceNewsData = function () {
  let articles = []
  for (let i = 0; i < 100; i++) {
    let newAirticleObject = {
      title: Random.csentence(5, 30),  // Random.csentence(min, max)
      thumbnail_pic_s: Random.dataImage('300*250', 'mock的图片'), // Random.dataImage(size, text)生成一段随机的BaseT图片编码
      authou_name: Random.cname(), // 随机生成一个常见的中文名
      data: Random.data() + ' ' + Random.time() // Random.data()指示生成的日期字符串的格式，默认为yyyy-MM-dd; Random.time()返回一个随机的时间字符串
    }
    articles.push(newAirticleObject)
  }
  return {
    articles: articles
  }
}

// Mock.mock(url,post/get,返回的数据);
Mock.mock(/\/banner/, 'post', prduceNewsData)
