<template>
    <div class="icons">
        <swiper >
            <swiper-slide>
                <div class="icon">
                    <div class="icon-img">
                        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="景点门票" style="opacity: 1;">
                    </div>
                    <p class="icon-desc">热门景点</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="icon">
                    <div class="icon-img">
                        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="景点门票" style="opacity: 1;">
                    </div>
                    <p class="icon-desc">热门景点</p>
                </div>
            </swiper-slide>            
        </swiper >
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            iconList:[]
        };
    },
    computed: {
        pages(){
            let pages = []
            this.iconList.forEach((item,index)=>{
                let page = Math.floor(index/8)
                if (!pages[page]) {
                    pages[page]=[]
                }
                pages[pages].push(item)
            })
            return pages
        }
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
