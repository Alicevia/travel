<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <router-link :to='`/detail?id=${item.id}`' tag='li' class="item border-bottom" v-for="(item) in recommendList" :key="item.id">
             <!-- <router-link :to='`/detail/${item.id}`' tag='li' class="item border-bottom" v-for="(item) in recommendList" :key="item.id"> -->
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {
        ...mapState(['recommendList'])
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

<style lang='stylus' scoped >
@import '~styles/mixins.styl'
.title
    margin-top .2rem
    line-height .8rem
    background-color #ccc
    text-indent .2rem
.item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
        width 1.7rem
        height 1.7rem
        padding .1rem
    .item-info
        min-width 0//解决无法多余的字显示省略号
        flex 1
        padding .1rem
        .item-title
            line-height .54rem
            font-size .32rem
            font-weight bold
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
        .item-button
            margin-top .16rem
            background-color #ff9300
            padding 0 .2rem
            border-radius .06rem
            color #fff
            line-height .44rem


</style>
