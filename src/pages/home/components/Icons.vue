<template>
    <div class="icons">
        <swiper >
            <swiper-slide v-for="(iconList,index) in pages" :key="index" >
                <div class="icon" v-for="item in iconList" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="景点门票" style="opacity: 1;">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
            
        </swiper >
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    props: {

    },
    data() {
        return {
            
        };
    },
    computed: {
        ...mapGetters(['pages'])
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style lang='stylus' scoped rel='stylesheet/stylus'>
@import '~styles/mixins.styl'
    .icons>>>.swiper-container
        
        height 0
        padding-bottom 50%
    .icons
        margin-top .1rem
        .icon
            position relative
            overflow hidden
            float left
            width 25%
            height 0
            padding-bottom 25%
            .icon-img
                position absolute
                top 0
                right 0
                bottom .44rem
                left 0
                box-sizing border-box
                padding .1rem
                .icon-img-content
                    display block
                    margin 0 auto
                    height 100%
            .icon-desc
                position absolute
                left 0
                bottom 0
                width 100%
                height .44rem
                line-height .44rem
                text-align center
                color $darkTextColor
                ellipsis()

</style>
