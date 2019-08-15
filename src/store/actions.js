import {reqAllData,reqCityData,reqDetailData} from '@/api'
import * as TYPES from './mutation-types'
export default {
    async getAllData({commit},city){
        let res = await reqAllData(city.name)
        let data = res.data.data
        commit(TYPES.RECEIVE_DATA,{data})
    },
    async getCityData({commit}){
        let res = await reqCityData()
        let data = res.data.data
        commit(TYPES.RECEIVE_CITY_DATA,{data})
    },
    searchKeyWord({commit},data){
        commit(TYPES.CHANGE_KEYWORD,{data})
    },
    changeCity({commit},data){
        commit(TYPES.CHANGE_CITY,{data})
    },
    async getDetailData({commit},id){
        let res = await reqDetailData(id)
        let data = res.data.data
        commit(TYPES.RECEIVE_DETAIL_DATA,{data})
    },
    showGallary({commit},data){
        commit(TYPES.CHANGE_SHOWGALLARY,{data})
    }

}