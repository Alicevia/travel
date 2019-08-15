<template>
    <div >
        <Banner :bannerImg='detailData.bannerImg' :sightName='detailData.sightName'  :bannerImgs="detailData.gallaryImgs" />
        <Header :sightName='detailData.sightName' />
        <div class="content" v-if="detailData.categoryList">
            <List :list='detailData.categoryList' />
        </div>
    </div>
</template>

<script>
import Banner from './components/Banner'
import Header from './components/Header'
import List from './components/List'
import { mapState } from 'vuex';
export default {
    props: {

    }, 
    data() {
        return {

        };
    },
    computed: {
        ...mapState(['detailData'])
    },
    created() {

    },
    mounted() {
        // console.log(this.$route.params.id)

        this.$store.dispatch('getDetailData',this.$route.query.id)
    },
    watch: {

    },
    methods: {

    },
    components: {
        Banner,Header,List
    },
};
</script>

<style lang='stylus' scoped>
    .content
        height 50rem
</style>
