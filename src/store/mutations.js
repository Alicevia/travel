import * as TYPES from './mutation-types'
export default{
    [TYPES.RECEIVE_DATA](state,{data}){
        state.iconList=data.iconList,
        state.recommendList=data.recommendList,
        state.swiperList=data.swiperList,
        state.weekendList=data.weekendList
    },
    [TYPES.RECEIVE_CITY_DATA](state,{data}){
        state.cities = data.cities
        state.hotCities = data.hotCities
    },
    [TYPES.CHANGE_KEYWORD](state,{data}){
        state.search=data
    },
    [TYPES.CHANGE_CITY](state,{data}){
        state.city = data
    },
    [TYPES.RECEIVE_DETAIL_DATA](state,{data}){
        state.detailData = data
    },
    [TYPES.CHANGE_SHOWGALLARY](state,{data}){
        state.showGallary = data
    }
}