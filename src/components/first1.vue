<template>
    <div class="first1" ref="first1">
        <p>我是第二个第一</p>
        
    </div>
</template>
<script>
export default {
    created(){
        console.log(window.location.href)
    }
}
</script>
<style scoped>
.first1{
    position: fixed;
    z-index: 100;
    width: 100%;
    top: 44px;
    bottom: 44px;
    background: #00f;
}
</style>

