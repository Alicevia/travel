export default {
    pages(state,getters){
       let {iconList} = state
       let pages = []
       iconList.forEach((item,index)=>{

            let page = Math.floor(index/8)
            if (!pages[page]) {
                pages[page] =[]
            }
            pages[page].push(item)
       })
       return pages
    },
    keyWordToCities(state,getters){
        let {search,cities} = state
        if (!search) {
            return []
        }
        let keyWordToCities = []
        for (const key in cities) {
            if (!cities.hasOwnProperty(key)) return
            let element = cities[key];
            let city =element.filter(item=>{
                return item.name.indexOf(search)!== -1||item.spell.indexOf(search)!==-1
            })
            keyWordToCities =keyWordToCities.concat(city)
        }
        return keyWordToCities
    }

}