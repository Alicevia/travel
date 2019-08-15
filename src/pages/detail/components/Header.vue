<template>
    <div>
        <router-link tag="div" to='/' class="header-abs">
           <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div v-show="showAbs"
        class="header-flexd" :style="headerOpacity">             
             <div class="header-left">
                 <span class="iconfont back">&#xe624;</span>
            </div>
            {{sightName}}
        </div>

    </div>
</template>

<script>
export default {
    props: {
        sightName:String
    },
    data() {
        return {
            headerOpacity:{opacity:0},
          
            
        };
    },
    computed: {
        showAbs:{
            get:function(){
                if (this.headerOpacity.opacity<=0.2) {
                    return false
                }
                return true
            }
        }

        
    },
    created() {

    },
    mounted() {
       
    },
    activated(){
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
        window.removeEventListener('scroll',this.handleScroll)
    },
    watch: {

    },
    methods: {
       handleScroll(){
           let top = document.body.scrollTop||document.documentElement.scrollTop
           
           this.headerOpacity.opacity = top/300
           if (this.headerOpacity.opacity>=1) {
               this.headerOpacity.opacity=1
           }

          
       }
    },
    components: {

    },
};
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        border-radius 50%
        background rgba(0,0,0,.8)
        .header-abs-back
            color white
            text-align center
            line-height .8rem
    .header-flexd
        position fixed
        top 0
        left 0
        width 100%
        line-height .86rem;
        height .86rem
        background-color $bgColor
        text-align center
        color white
        .header-left
            position absolute
            width .86rem
            .back 
                font-size .3rem
                color white
                font-weight bold
</style>
