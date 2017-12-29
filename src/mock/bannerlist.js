const bannerList = [
  {
    bannerid: 1,
    bannerUrl: '',
    bannerImg: '../assets/images/v_01.jpg'
  },
  {
    bannerid: 2,
    bannerUrl: '',
    bannerImg: '../assets/images/v_02.jpg'
  },
  {
    bannerid: 3,
    bannerUrl: '',
    bannerImg: '../assets/images/v_03.jpg'
  },
  {
    bannerid: 4,
    bannerUrl: '',
    bannerImg: '../assets/images/v_04.jpg'
  }
]

export default {
  getBanner: () => {
    return bannerList
  }
}
