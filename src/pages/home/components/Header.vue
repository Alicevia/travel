<template>
    <div class="header">
        <div class="header-left"><span class="iconfont back">&#xe624;</span></div>
        <span class="iconfont header-search">&#xe632;</span>
        
        <input class="header-input" placeholder="请输入城市/景点/游玩主题">
        <router-link to='/city'>
            <div class="header-right">{{city.name}}<span class="iconfont city">&#xe638;</span></div>
        </router-link>

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
        ...mapState(['city'])
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
@import '~styles/varibles.styl';
    .header
        display flex
        line-height .86rem;
        height .86rem
        background-color $bgColor
        text-align center
        .header-search
            position absolute
            left 1rem
            color #666
        .header-left
            width .86rem
            .back 
                font-size .3rem
                color white
                font-weight bold
        .header-input
            flex 1
            background-color #fff
            height .64rem
            border-radius .1rem
            align-self center
            padding 0 .2rem
            padding-left .5rem
            margin-right .2rem
        .header-right
            min-width 1.24rem
            color white
            .city
                font-size .24rem
                color white
                margin-left .1rem

</style>
