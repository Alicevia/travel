<template>
    <div class="header">
        <router-link to='/'>
            <span class="iconfont back">&#xe624;</span>
        </router-link>
        城市选择
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

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .header
        position relative
        overflow hidden
        line-height .86rem
        text-align center
        color white
        background-color $bgColor
        .back 
            position absolute
            top 0
            left 0
            width .86rem
            height .86rem
            font-size .3rem
            color white
            font-weight bold

</style>
