<template>
  <div class="contact">
    <div class="contBox">
      <div class="middlebox">
        <div class="c_1570">
          <div class="tit_1 tit_1_w">
            联系
            <span>/contact</span>
            <h1>c&nbsp;o&nbsp;n&nbsp;t&nbsp;a&nbsp;c&nbsp;t</h1>
          </div>
          <div class="row_1">
            <div class="hometop">
              <el-carousel 
              :interval="5000" 
              arrow="always" 
              :autoplay="false"
              indicator-position="outside"
              >
                <el-carousel-item v-for="item in 2" :key="item">
                    <ul class="ul_1">
                        <li class="l1">
                            <div class="zbox"><span>
                                    <div class="ico"><img
                                            src="http://www.chuangwudao.com/upload/images/20180928/index4_22974213.png"
                                            alt="ADDRES" title="ADDRES"></div>
                                    <h4>ADDRES</h4>
                                    <div class="p">
                                        <p>河北省廊坊市安次区龙河高新技术开发区<br />瑞雪道29号9#厂房9-17室</p>
                                    </div>
                                </span>
                            </div>
                        </li>
                        <li class="l2">
                            <div class="zbox"><span>
                                    <div class="ico"><img
                                            src="http://www.chuangwudao.com/upload/images/20180928/index4_22974213.png"
                                            alt="PHONE" title="PHONE"></div>
                                    <h4>PHONE</h4>
                                    <div class="p">
                                        <p>189 1125 0929‬</p>
                                    </div>
                                </span>
                            </div>
                        </li>
                        <li class="l3">
                            <div class="zbox"><span>
                                    <div class="ico"><img
                                            src="http://www.chuangwudao.com/upload/images/20180928/index4_22974213.png"
                                            alt="e-MAIL" title="e-MAIL"></div>
                                    <h4>e-MAIL</h4>
                                    <div class="p">
                                        <p>lf@chuangwudao.com</p>
                                    </div>
                                </span>
                            </div>
                        </li>
                        <li class="l4">
                            <div class="zbox"><span>
                                    <div class="ico"><img
                                            src="http://www.chuangwudao.com/upload/images/20180928/index4_22974213.png"
                                            alt="QQ" title="QQ"></div>
                                    <h4>QQ</h4>
                                    <div class="p">
                                        <p>609912124</p>
                                    </div>
                                </span>
                            </div>
                        </li>
                    </ul>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 网页脚部 -->
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import BottomFooter from '../footer/BottomFooter.vue'
export default {
  name: "Contact",
  components: {
    BottomFooter,
  },
  data() {
    return {};
  },
  created() {
  }
};
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  height: 9.24rem;
  background: url("../../assets/lx-bg.png") no-repeat center center;
  background-size: cover;
  .contBox {
    width: 100%;
    // float: left;
    height: 100%;
    position: relative;
    padding-bottom: 0.66rem;
    display: table;
    vertical-align: middle;
    table-layout: fixed;
    .middlebox {
      display: table-cell;
      vertical-align: middle;
      .c_1570{
          width: 100%;
        height: auto !important;
        position: relative;
        float: left;
        padding: 0 1.75rem;
        .tit_1 {
            width: 100%;
            float: left;
            position: relative;
            font-size: 0.36rem;
            color: #fff;
            font-weight: bold;
            letter-spacing: 0.01rem;
            line-height: 0.5rem;
            span{
                font-size: 0.24rem;
                color: #fff;
                opacity: 0.6;
                text-transform: uppercase;
                vertical-align: middle;
                line-height: 0.37rem;
                font-weight: normal;
                font-family: 'OPENSANS-LIGHT';
                margin-left: 0.1rem;
            }
            h1{
                position: absolute;
                left: -1.45rem;
                font-size: 0.8rem;
                color: #fff;
                opacity: 0.02;
                text-transform: uppercase;
                font-family: 'OPENSANS-BOLD';
                letter-spacing: 0.01rem;
                bottom: 0;
                line-height: 0.6rem;
                height: 0.76rem;
            }
        }
        .row_1 {
            margin: 0 -0.02rem;
            .hometop {
                width: 100%;
                float: left;
                margin-top: 73px;
                position: relative;
                ul{
                    width: 100%;
                    width: 100%;
                    float: left;
                    -webkit-transition: all 0.3s ease-out 0s;
                    -moz-transition: all 0.3s ease-out 0s;
                    -o-transition: all 0.3s ease-out 0s;
                    transition: all 0.3s ease-out 0s;
                    li{
                        width: 25%;
                        float: left;
                        padding: 0 2px;
                        -webkit-transition: all 0.3s ease-out 0s;
                        -moz-transition: all 0.3s ease-out 0s;
                        -o-transition: all 0.3s ease-out 0s;
                        transition: all 0.3s ease-out 0s;
                        animation-name: fadeInRight;
                        line-height: normal;
                        .zbox{
                            width: 100%;
                            float: left;
                            background: black;
                            background: rgba(27,25,37,0.8);
                            padding: 63px 30px 0 30px;
                            height: 270px;
                            text-align: center;
                            -webkit-transition: all 0.3s ease-out 0s;
                            -moz-transition: all 0.3s ease-out 0s;
                            -o-transition: all 0.3s ease-out 0s;
                            transition: all 0.3s ease-out 0s;
                            .ico{
                                width: 100%;
                                height: 45px;
                                -webkit-transition: all 0.3s ease-out 0s;
                                -moz-transition: all 0.3s ease-out 0s;
                                -o-transition: all 0.3s ease-out 0s;
                                transition: all 0.3s ease-out 0s;
                                img{
                                    height: 100%;
                                    display: inline-block;
                                    vertical-align: top;
                                    -webkit-transition: all 0.3s ease-out 0s;
                                    -moz-transition: all 0.3s ease-out 0s;
                                    -o-transition: all 0.3s ease-out 0s;
                                    transition: all 0.3s ease-out 0s;
                                    transition: all 0.6s linear;
                                    -moz-transition: all 0.6s linear;
                                    -webkit-transition: all 0.6s linear;
                                    -o-transition: width all 0.6s linear;
                                    border: 0;
                                    max-width: 100%;
                                }
                            }
                            h4{
                                width: 100%;
                                margin-top: 8px;
                                font-size: 18px;
                                color: white;
                                line-height: 24px;
                                text-transform: uppercase;
                                font-family: 'OPENSANS-BOLD';
                                letter-spacing: 1px;
                                -webkit-transition: all 0.3s ease-out 0s;
                                -moz-transition: all 0.3s ease-out 0s;
                                -o-transition: all 0.3s ease-out 0s;
                                transition: all 0.3s ease-out 0s;
                                font-weight: normal;
                            }
                            .p{
                                width: 100%;
                                margin-top: 18px;
                                font-size: 14px;
                                color: white;
                                line-height: 24px;
                                letter-spacing: 1px;
                                opacity: 0.8;
                                word-wrap: break-word;
                                -webkit-transition: all 0.3s ease-out 0s;
                                -moz-transition: all 0.3s ease-out 0s;
                                -o-transition: all 0.3s ease-out 0s;
                                transition: all 0.3s ease-out 0s;
                            }
                        }
                    }
                }
            }
        }
      }
    }
  }
}
</style>
<style>
/* .row_1 .hometop{
    position: relative;
}
.row_1 .hometop .el-carousel__container{
    position: relative;
} */
.hometop .el-carousel__arrow{
  display: none !important;
}
.hometop .el-carousel .el-carousel__indicators{
  width: 100%;
  float: left;
  margin-top: 32px;
  position: static;
  text-align: center;
}
.hometop .el-carousel .el-carousel__indicators .el-carousel__indicator{
  width: 1.62rem;
  display: block;
}
.hometop .el-carousel .el-carousel__indicators::before{
  content: '';
  width: 100%;
  height: 3px;
  background: #3a3945;
  position: absolute;
  left: 0;
  top: 340px;
  z-index: 2;
}
</style>

