<template>
  <div class="service">
    <div class="contentBox">
      <div class="left">
        <div class="tablebox">
          <div class="middlebox">
              <div class="tit_1 tit_1_w">服务<span>/service</span>
                  <h1>s&nbsp;e&nbsp;r&nbsp;v&nbsp;i&nbsp;c&nbsp;e</h1>
              </div>
              <div class="slick_res2l">
                  <div>
                      <div class="zbox">
                          <div class="img">
                            <img src="../../assets/s-big.png" alt="" title=""></div>
                          <div class="text">
                              <h4>设计研究</h4>
                              <h6>Design Research</h6>
                              <div class="p">
                                  设计研究是一项综合工程，包括产品调研、需求分析、竞品分析等，其目的是熟悉掌握产品的基本原理、状况，了解产品的使用环境、消费者的喜好、行业特性、竞品现状等，帮助设计师全面充分的了解产品。
                              </div>
                              <div class="detail"><a href="javascript:void(0);" title="">more</a></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="tablebox">
            <div class="middlebox">
              <div class="slick_res2r">
                  <div>
                      <li class="l1">
                          <div class="zbox">
                              <div class="ico"><img src="../../assets/s1.png"
                                      alt="设计研究" title="设计研究"></div>
                              <h4>设计研究</h4>
                              <h5>Design Research</h5>
                          </div>
                      </li>
                  </div>

                  <div>
                      <li class="l2">
                          <div class="zbox">
                              <div class="ico"><img src="../../assets/s2.png"
                                      alt="外观设计" title="外观设计"></div>
                              <h4>外观设计</h4>
                              <h5>Appearance design</h5>
                          </div>
                      </li>
                  </div>

                  <div>
                      <li class="l3">
                          <div class="zbox">
                              <div class="ico"><img src="../../assets/s1.png"
                                      alt="结构设计" title="结构设计"></div>
                              <h4>结构设计</h4>
                              <h5>Structural design</h5>
                          </div>
                      </li>
                  </div>

                  <div>
                      <li class="l4">
                          <div class="zbox">
                              <div class="ico"><img src="../../assets/s3.png"
                                      alt="自动化设计" title="自动化设计"></div>
                              <h4>自动化设计</h4>
                              <h5>Automation design</h5>
                          </div>
                      </li>
                  </div>

                  <div>
                      <li class="l4">
                          <div class="zbox">
                              <div class="ico"><img src="../../assets/s3.png"
                                      alt="自动化设计" title="自动化设计"></div>
                              <h4>自动化设计</h4>
                              <h5>Automation design</h5>
                          </div>
                      </li>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service'
}
</script>

<style lang="scss" scoped>
.service{
  width: 100%;
  height: 9.24rem;
  background: url('../../assets/serviceBg.png') no-repeat center center;
  background-size: cover;
  position: relative;
  z-index: 3;
  .contentBox{
    width: 74.47%;
    height: 100%;
    margin: 0 auto;
    .left{
      width: 74%;
      height: 100%;
      position: relative;
      border-right: solid 1px rgba(255,255,255,0.15);
      float: left;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      .tablebox {
          display: table;
          vertical-align: middle;
          height: 100%;
          position: relative;
          width: 100%;
          table-layout: fixed;
          .middlebox {
            display: table-cell;
            vertical-align: middle;
            .tit_1 {
              width: 100%;
              float: left;
              position: relative;
              font-size: 0.36rem;
              color: #fff;
              font-weight: bold;
              letter-spacing: 1px;
              line-height: 0.5rem;
              span{
                font-size: 24px;
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
                opacity: 0.05;
                text-transform: uppercase;
                font-family: 'OPENSANS-BOLD';
                letter-spacing: 1px;
                bottom: 0;
                line-height: 0.6rem;
                height: 0.76rem;
              }
          }
          .slick_res2l{
            width: 100%;
            float: left;
            background: #191822;
            margin-top: 0.28rem;
            overflow: hidden;
            .zbox{
              width: 100%;
              float: left;
              padding: 0.8rem 7.46% 0.8rem 6.78%;
              img{
                width: 55.45%;
                float: left;
                position: relative;
                z-index: 5;
              }
              .text{
                margin-left: 60.4%;
                h4{
                  width: 100%;
                  position: relative;
                  margin-top: 0.22rem;
                  font-size: 0.24rem;
                  color: white;
                  line-height: 0.4rem;
                  letter-spacing: 0.01rem;
                }
                h4:before{
                  content: '';
                  width: 0.3rem;
                  height: 0.01rem;
                  background: white;
                  position: absolute;
                  left: -0.5rem;
                  top: 50%;
                  opacity: 0.2;
                }
                h6{
                  width: 100%;
                  font-size: 0.12rem;
                  color: white;
                  line-height: 0.26rem;
                  letter-spacing: 0.01rem;
                  font-family: Arial;
                  opacity: 0.4;
                }
                .p{
                  width: 100%;
                  position: relative;
                  margin-top: 0.22rem;
                  font-size: 0.15rem;
                  color: white;
                  line-height: 0.36rem;
                  letter-spacing: 0.01rem;
                  opacity: 0.5;
                  height: 1.44rem;
                  overflow: hidden;
                }
                .detail{
                  width: 100%;
	                margin-top: 0.4rem;
                  a{
                    display: block;
                    float: right;
                    margin-right: 0.06rem;
                    width: 0.46rem;
                    height: 0.46rem;
                    line-height: 0.46rem;
                    text-align: center;
                    background: url('../../assets/blueBg.png') no-repeat center center;
                    background-size: cover;
                    font-size: 0.1rem;
                    font-family: Arial;
                    text-transform: uppercase;
                    color: rgba(255, 255, 255, 0.6);
                    -moz-border-radius: 50%;
                    -webkit-border-radius: 50%;
                    -khtml-border-radius: 50%;
                    border-radius: 50%;
                  }
                  a:hover{
                    color: #fff;
                  }
                }
              }
            }
          }
        }
      }
    }
    .right{
      width: 24.84%;
      float: left;
      height: 100%;
      position: relative;
      .tablebox {
        display: table;
        vertical-align: middle;
        height: 100%;
        position: relative;
        width: 100%;
        table-layout: fixed;
        .middlebox {
          display: table-cell;
          vertical-align: middle;
          padding-top: 0.8rem;
          .slick_res2r{
            width: 100%;
            float: left;    
            li{
              width: 100%;
              float: left;
              padding: 0 35.38% 0 10.26%;
              position: relative;
              cursor: pointer;
              .zbox{
                width: 100%;
                float: left;
                padding: 0.2rem 0 0.22rem 0.1rem;
                border-top: solid 0.01rem #2a2932;
                .ico{
                  width: 0.67rem;
                  height: 0.67rem;
                  border: solid 0.01rem rgba(200, 200, 200, 0.3);
                  position: absolute;
                  right: 0.4rem;
                  top: 50%;
                  margin-top: -0.33rem;
                  -moz-border-radius: 50%;
                  -webkit-border-radius: 50%;
                  -khtml-border-radius: 50%;
                  border-radius: 50%;
                  img{
                    display: block;
                  }
                }
                h4{
                  width: 100%;
                  float: left;
                  font-size: 0.2rem;
                  color: white;
                  line-height: 0.38rem;
                  letter-spacing: 0.01rem;
                }
                h5{
                  width: 100%;
                  float: left;
                  font-size: 0.12rm;
                  color: white;
                  line-height: 0.3rem;
                  letter-spacing: 0.01rem;
                  opacity: 0.4;
                }
              }
            }
            li:hover{   //选择项样式
              background: #191822;
            }
          }
        }
      }
    }
  }
}
</style>

