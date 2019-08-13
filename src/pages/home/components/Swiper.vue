<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide><img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/0b0622e5b6ac5fbed3084dd2832e6f8f.jpg_750x200_895321b6.jpg" alt=""></swiper-slide>
            <swiper-slide><img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/ffb06b600df4c655d10a1dfef4a8d0e9.jpg_750x200_7b1aec5e.jpg" alt=""></swiper-slide>
            <swiper-slide><img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/ffb06b600df4c655d10a1dfef4a8d0e9.jpg_750x200_7b1aec5e.jpg" alt=""></swiper-slide>
            <swiper-slide><img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/ffb06b600df4c655d10a1dfef4a8d0e9.jpg_750x200_7b1aec5e.jpg" alt=""></swiper-slide>
            
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            swiperOption:{
                pagination: {
                    el: '.swiper-pagination',
                },
                loop:true

                
            },
            swiperList:[]
        };
    },
    computed: {

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

<style lang='stylus' >
.wrapper>>> .swiper-pagination-bullet-active
    background-color #fff
.wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.7%
    //height 31.35vw
    .swiper-img 
        width 100%

</style>
