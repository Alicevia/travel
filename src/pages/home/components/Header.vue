<template>
    <div class="header">
        <div class="header-left"><span class="iconfont back">&#xe624;</span></div>
        <input class="header-input">
        <div class="header-right">城市<span class="iconfont city">&#xe638;</span></div>

    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

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

<style lang='stylus' scoped >
@import '~styles/varibles.styl';
    .header
        display flex
        line-height .86rem;
        height .86rem
        background-color $bgColor
        text-align center
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
        .header-right
            width 1.24rem
            color white
            .city
                font-size .24rem
                color white
                margin-left .1rem

</style>
