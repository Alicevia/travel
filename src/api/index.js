import axios from "axios";

export function reqAllData(city){
    return axios.get('/api/index.json?city='+city)
}

export function reqCityData(){
    return axios.get('/api/city.json')
}
export function reqDetailData(id){
    return axios.get('/api/detail.json',{
        params:{
            id
        }
    })
}