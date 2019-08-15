<template>
<div>
    <div class="search">
    <input v-model="search"
    class="search-input" type="text" placeholder="输入城市名或者拼音">
    </div>
    <div class="search-content" ref="wrapper" v-show="search">
        <ul >
            <li class="search-item border-topbottom" v-for="(item) in keyWordToCities" :key="item.id">{{item.name}}</li>
            <li v-show="keyWordToCities.length<=0" class="search-item border-topbottom">没有找到匹配数据</li>
        </ul>
    </div>
</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import BScroll from 'better-scroll'
export default {
    props: {

    },
    data() {
        return {
            search:''
        };
    },
    computed: {
        ...mapGetters(['keyWordToCities'])
    },
    created() {
        
        
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper)
   
    },
    updated(){
       
    },
    watch: {
        search(newValue){
            this.handleSearch(newValue)
        }
    },
    methods: {
        ...mapActions(['searchKeyWord']),
        handleSearch(newValue){
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                this.searchKeyWord(newValue)
            }, 100);
                
        }

    },
    components: {

    },
};
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .search
        height .72rem
        background-color $bgColor
        padding 0 .1rem
        .search-input
            height .62rem
            line-height .62rem
            width 100%
            text-align center
            border-radius .06rem
            box-sizing border-box
            padding 0 .1rem
    .search-content
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        background-color #fff
        z-index 1
        .search-item
            line-height .64rem
            background-color #fff
            padding-left .2rem
            color #333
            font-size .3rem
            .border-topbottom
                &:before
                    border-color:#ccc
                &:after
                    border-color:#ccc
</style>
