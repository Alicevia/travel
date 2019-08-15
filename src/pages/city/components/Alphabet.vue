<template>
    <ul class="list">
        <li @touchstart='toFatherClick' @touchmove='toFather' @touchend='handleTouchEnd'
        @click="handleLetterClick"
        class="item" v-for="(item, key) in cities" :key="key">{{key}}</li>
       
    </ul>
</template>

<script>
import {mapState} from 'vuex'
export default {
    props: {

    },
    data() {
        return {
            touchStatus:false
        };
    },
    computed: {
        ...mapState(['cities'])
    },
    created() {

    },
    mounted() {
       
    },
    watch: {

    },
    methods: {
        toFatherClick(){
            this.touchStatus=true
        },
        handleLetterClick(e){
            this.$emit('getSonData',e.target.innerText)

        },
        toFather(e){
            if (!this.touchStatus) {
                return
            }
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(()=>{

                let x =e.changedTouches[0].clientX
                let y =e.changedTouches[0].clientY
                let text =document.elementFromPoint(x,y).innerText
                if (!text) {
                    return 
                }
                this.$emit('getSonData',text)
            },8)
            
        },
        handleTouchEnd(){
            this.touchStatus=false
        }
    },
    components: {

    },
};
</script>

<style lang='stylus'scoped>
@import '~styles/varibles.styl'
    .list
        display flex
        position absolute
        right .2rem
        top 3rem
        flex-direction column
        justify-content center
        .item
            text-align center
            line-height .4rem
            color $bgColor
            font-size .34rem

</style>
