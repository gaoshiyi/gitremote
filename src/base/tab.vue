<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/first">
            <span class="tab-link">首页</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/second">
            <span class="tab-link">次页</span>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.tab{
    display: flex;
    width: 100%;
    height: 44px;
    background: #f00;
    position: absolute;
    bottom: 0px;
    left: 0px;
    line-height: 44px;
}
.tab-item{
    flex: 1;
    text-align: center;
}
.tab-link{
    padding-bottom: 5px;
}
</style>
