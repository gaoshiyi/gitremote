<template>
    <div ref='wrapper' class="scroll">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    props: {
        probeType: {
            type: Number,
            default: 1
        },
        click: {
            type : Boolean,
            default: true
        },
        listenScroll: {
            type: Boolean,
            default: true
        },
        data: {
            type: Array,
            default: null
        },
        pullup: {
            type: Boolean,
            default: false
        },
        beforeScroll: {
            type: Boolean,
            default: false
        },
        refreshDelay: {
            type: Number,
            default: 20
        }

    },
    mounted(){
        setTimeout(()=>{
            this.initScroll()
        },30)
    },
    methods:{
        initScroll(){
            if(!this.$refs.wrapper){
                return
            }
            this.scroll = new BScroll(this.$refs.wrapper,{
                probeType: this.probeType,
                click: this.click
            })
            if(this.listenScroll){
                let self = this
                this.scroll.on('scroll',(pos)=>{
                    self.$emit('scroll',pos)
                })
            }
            if(this.pullup){
                this.scroll.on('scrollEnd',()=>{
                    if(this.scroll.y <= (this.scroll.maxScrollY + 50)){
                        this.$emit('scrollEnd')
                    }
                })
            }
            if(this.beforeScroll){
                this.scroll.on('beforeScrollStart',()=>{
                    this.$emit('beforeScroll')
                })
            }
        },
        disable(){
            this.scroll && this.scroll.disable()
        },
        enable(){
            this.scroll && this.scroll.enable()
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        },
        scrollTo(){
            this.scroll && this.scroll.scrollTo.apply(this.scroll,arguments)
        },
        scrollToElement(){
            this.scroll && this.scroll.scrollToElement.apply(this.scroll,arguments)
        }
    },
    watch:{
        data(){
            setTimeout(()=>{
                this.refresh()
            },this.refreshDelay)
        }
    }

    
}
</script>
<style lang="scss" scoped="" type="text/css">
.scroll{
    overflow: scroll;
}
</style>
