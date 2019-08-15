<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="(item) in weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
               
                </div>
            </li>
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
        ...mapState(['weekendList'])
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
    line-height .8rem
    background-color #ccc
    text-indent .2rem
.item
    overflow hidden
    display flex
    flex-direction column
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 37.1%
        .item-img
            width 100%
    .item-info
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
        


</style>
