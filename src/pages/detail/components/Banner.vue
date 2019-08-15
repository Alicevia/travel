<template>
    <div class="banner" @click="openGallary">
        <img class="banner-img" :src="bannerImg">
        <div class="banner-info">
            <div class="banner-title ">{{sightName}}</div>
            <div class="banner-number">
                <span class="iconfont">&#xe693;</span>
                39
            </div>
        </div>
        <Fade>
            <Gallary  :imgs='bannerImgs' ref="gal"/>
        </Fade>
    </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'
import Fade from 'common/fade/Fade'
import { mapState } from 'vuex';
export default {
    props: {
        bannerImg:String,
        sightName:String,
        bannerImgs:Array
    },
    data() {
        return {
            showGallary:false
        };
    },
    computed: {
       
    },
    created() {

    },
    mounted() {
        // this.$on('close',this.closeGallary)
        
    },
  
    watch: {
        
    },
    methods: {
        openGallary(){
            this.showGallary=true
            this.$refs.gal.handleGallaryClick()
        },


       
    },
    components: {
        Gallary,Fade
    },
};
</script>

<style lang='stylus' scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem 
            background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                flex 1
                color white
                font-weight bold
                padding 0 .2rem
            .banner-number
                margin-top .14rem
                padding:0 .4rem
                line-height .4rem
                height .32rem
                border-radius .2rem
                background-color rgba(0,0,0,.5)
                color white
                font-size .24rem
                font-weight bold
</style>
