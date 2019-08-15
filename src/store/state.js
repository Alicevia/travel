// let city = JSON.parse(localStorage.getItem('city'))
export default {
    iconList:[],
    recommendList:[],
    swiperList:[],
    weekendList:[],
    cities:[],
    hotCities:[],
    search:undefined,
    city:JSON.parse(localStorage.getItem('city'))||{name:'北京'},
    detailData:{},

}