<template>
  <div class="banner hidden-xs">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <img class="img-responsive" src="../../assets/1.png" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss" scoped>
.banner{
  width: 100%;
  height: 9.1rem;
  // border: 1px solid red;
  .el-carousel{
    height: 100%;
  }
  .el-carousel__container{
    height: 100%;
    height: 9.1rem !important;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
}
</style>

<style>
 .banner .el-carousel__container{
    height: 100%;
  }
 .banner .el-carousel__container .el-carousel__arrow{
    display: none !important;
  }
 .banner .el-carousel__container .el-carousel__item img{
   width: 100%;
    height: 100%;
  }
  .banner .el-carousel__indicators{
    position: absolute;
    bottom: 0;
    z-index: 20;
  }
</style>

