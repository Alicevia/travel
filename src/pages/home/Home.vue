<template>
    <div>
        <Header/>
        <Swiper/>
        <Icons />
        <Recommend />
        <Weekend/>
    </div>
</template>

<script>
import Swiper from './components/Swiper'
import Header from './components/Header'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    props: {

    },
    data() {
        return {
            recommendList:[],
            lastCity:''
        };
    },
    computed: {
        ...mapState(['city'])
    },
    created() {

    },
    mounted() {
        this.lastCity=this.city
        this.$store.dispatch('getAllData',this.city)
       
    },
    activated(){
        if (this.lastCity!==this.city) {
            this.lastCity = this.city
            this.$store.dispatch('getAllData',this.city)
        }
    },
    watch: {

    },
    methods: { 
    },
    components: {
        Header,
        Swiper,
        Icons,
        Recommend,
        Weekend

    },
};
</script>

<style>


</style>
