<template>
    <div class="wrapper" v-if="swiperList.length">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl" alt=""></swiper-slide>
            
            
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
    </div>
</template>

<script>
import {mapState} from 'vuex'
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
        };
    },
    computed: {
        ...mapState(['swiperList'])
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
    padding-bottom 31.25%
    //height 31.35vw
    .swiper-img 
        width 100%

</style>
