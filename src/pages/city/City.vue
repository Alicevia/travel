<template>
    <div>
        <CityHeader />
        <Search />
        <List :select='select'/>
        <Alphabet @getSonData='handleSonData'  />
    </div>
</template>

<script>
import CityHeader from './components/CityHeader'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
export default {
    props: {

    },
    data() {
        return {
            select:''
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.$store.dispatch('getCityData')
    },
    watch: {
      
    },
    methods: {
        handleSonData(data){
            this.select = data
        }
    },
    components: {
        CityHeader,
        Search,
        List,
        Alphabet
    },
};
</script>

<style lang='stylus'>

</style>
