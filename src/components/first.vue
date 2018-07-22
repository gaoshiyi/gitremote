<template>
    <div class="first" ref="first">
        <p>我是第一个第一页</p>
        <button @click="gotonext">去第二个第一</button>
        <imagesLoader class="imageloader" :imgs="images"
            :modalclose='modalclose'
            :mousescroll='mousescroll'>
        </imagesLoader>
        <scroll class="scroll-view" ref="scroll" @scroll="listenScroll">
            <div  class="single-item"></div>
            <div  class="single-item"></div>
            <div  class="single-item"></div>
            <div  class="single-item"></div>
        </scroll>
        <router-view></router-view>
    </div>
    
</template>
<style lang="scss" scoped="" type="text/css">
.first{
    width: 100%;
    position: fixed;
    top: 44px;
    bottom: 44px;
    background: #0f0;
    .imageloader{
        width: 200px;
        height: 100px;
        background: #fff;
    }
    .scroll-view{
        width: 100%;
        height: 600px;
        background: #f00;
        .single-item{
            width: 100%;
            height: 200px;
            background: #333;
            margin-top: 2px;
        }
    }
}
</style>
<script>
import getDiscList from '../common/recommend';
import Scroll from '../base/scroll'
import ImageUploader from 'vue-core-image-upload'
import ImagesLoader from 'vue-images'
export default {
    components:{
        scroll: Scroll,
        imageUploader: ImageUploader,
        imagesLoader: ImagesLoader
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll)
    },
    data(){
        return{
            item:{
                index: 1,
                conent: 'dsadas'
            },
            images: [
        {
          imageUrl: 'https://static.littlewin.wang/blog/1-thumb.png',
          caption: '<a href="#">Photo by 1</a>'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/2-thumb.png',
          caption: 'Photo by 2'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/3-thumb.jpeg',
          caption: 'Photo by 3'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/4-thumb.png',
          caption: 'Photo by 4'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/5-thumb.png',
          caption: 'Photo by 5'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/6-thumb.jpeg',
          caption: 'Photo by 6'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/7-thumb.jpg',
          caption: 'Photo by 7'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/8-thumb.png',
          caption: 'Photo by 8'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/9-thumb.png',
          caption: 'Photo by 9'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/10-thumb.png',
          caption: 'Photo by 10'
        }
      ],
      modalclose: true,
      keyinput: true,
      mousescroll: true,
      showclosebutton: true,
      showcaption: true,
      imagecountseparator: 'of',
      showimagecount: true,
      showthumbnails: true
    
        }
    },
    methods:{
        gotonext () {
            this.$router.push({
                path: `/first/${this.item.index}`
            })
        },
        imageuploaded(res){
            if(res.errcode == 1){
                console.log(res)
                this.src = res.data.src
            }
        },
        listenScroll(event){
            //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                console.log('listen',event)
        },
        handleScroll(event){
              var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  console.log('handle',scrollTop)

        }
        
    },
    created(){
      
    }
  
}
</script>
