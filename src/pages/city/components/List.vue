<template>
<div class="list" ref="wrapper">
    <div >
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{city.name}}</div>
                </div>                
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
             <div class="button-list">
                <div class="button-wrapper" v-for="(item) in hotCities" :key="item.id">
                    <div class="button" @click='handleChangeCity(item)'>{{item.name}}</div>
                </div>                  
            </div>
        </div>
        <div class="area" v-for="(city, key) in cities" :key="key" :ref="key">
            <div class="title border-topbottom" >{{key}}</div>
            <div class="item-list">
                <div class="item border-bottom" @click='handleChangeCity(item)'
                v-for="(item) in city" :key="item.id">{{item.name}}</div>
            </div>
        </div>                
    </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState,mapActions} from 'vuex'
export default {
    props: {
        select:String
    },
    data() {
        return {

        };
    },
    computed: {
        ...mapState(['cities','hotCities','city'])
    },
    created() {
        // this.changeCity(JSON.parse(localStorage.getItem('city')))

    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch: {
        select(a,b){
            if (!this.$refs[a]) {
                return
            }
           let el= this.$refs[a][0]
           this.scroll.scrollToElement(el)
        }
    },
    methods: {
        ...mapActions(['changeCity']),
        handleChangeCity(city){
            this.changeCity(city)
            localStorage.setItem('city',JSON.stringify(city))
            this.$router.back()
        }
    },
    components: {

    },
};
</script>

<style lang='stylus' scoped>
    .border-topbottom
        &:before
            border-color:#ccc
        &:after
            border-color:#ccc
    .border-bottom 
        &:before
            border-color:#ccc
.list 
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
        line-height .54rem
        background-color #eee
        padding-left .2rem
        color #666
        font-size .26rem
    .button-list
        padding .1rem .6rem .1rem .1rem
        overflow hidden
        .button-wrapper
            float left
            width 33.33%
            .button
                border-radius .06rem
                margin .1rem
                padding .1rem 0
                text-align center
                border .02rem solid #ccc
    .item-list 
        .item
            line-height .76rem
            padding-left .2rem

</style>
