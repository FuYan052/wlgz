<template>
  <div class="pageBottom">
    <div class="contBox">
      <div class="left">
        <p class="companyName">北京同创新业有限公司</p>
        <ul>
          <li>
            地址：<span>成都市高新区益州大道中段星宸国际B座1503号</span>
          </li>
          <li>
            邮编：<span>6100000</span>
          </li>
          <li>
            电话：<span>028-85521744</span>
          </li>
          <li>
            Q Q：<span>3235046695</span>
          </li>
          <li>
            邮箱：<span>baogongxia@163.com</span>
          </li>
        </ul>
        <div class="weixin">
          <p>
            <img src="../../assets/weixin.png" alt="">
          </p>
          <div class="weixinWrap">
            <!-- <img src="../../assets/weixin.png" alt=""> -->
          </div>
        </div>
      </div>
      <div class="right">
        <div class="navWrap">
          <ul>
            <li>首页</li>
            <li>案例</li>
            <li>服务</li>
            <li>客户</li>
            <li>新闻</li>
            <li>我们</li>
          </ul>
        </div>
        <div class="rightBottom">
          <ul>
            <li><span>智能设计</span></li>
            <li><span>高效省时</span></li>
            <li><span>直选班组</span></li>
            <li><span>无中间价</span></li>
            <li><span>先装后付</span></li>
            <li><span>征信白条</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="PageFooter">
      <div class="footer">
        <p>北京同创新业科技有限公司COPYRIGHT©2017包工侠baogongxia.com 备案号： 京ICP1备16032010号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageBottom'
}
</script>

<style lang="scss" scoped>
.pageBottom{
  width: 100%;
  height: 7.43rem;
  background: #fafafa;
  .contBox{
    width: 89.06%;
    height: 6.7rem;
    margin: 0 auto;
    .left{
      width: 50%;
      float: left;
      .companyName{
        font-size: 0.22rem;
        color: #9c9c9c;
        margin-top: 1.2rem;
        margin-bottom: 0.5rem;
        letter-spacing: 0.01rem;
      }
      ul{
        li{
          color: #9f9f9f;
          font-size: 0.18rem;
          margin-bottom: 0.3rem;
          letter-spacing: 0.01rem;
        }
      }
      .weixin{
        padding-top: 0.1rem;
        p{
          height: 0.26rem;
          img{
            width: 0.26rem;
            height: 0.26rem;
            float: left;
          }
        }
        .weixinWrap{
          width: 1.26rem;
          height: 1.26rem;
          margin-top: 0.2rem;
          background: #b1b1b1;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .right{
      width: 50%;
      float: right;
      .navWrap{
        width: 100%;
        height: 1.9rem;
        margin-top: 1.78rem;
        border-bottom: 2px solid #e8e8e8;
        ul{
          width: 100%;
          li{
            width: 33%;
            color: #9a9a9a;
            font-size: 0.18rem;
            float: left;
            margin-top: 0.5rem;
            cursor: pointer;
          }
        }
      }
      .rightBottom{
        width: 100%;
        height: 3rem;
        box-sizing: border-box;
        padding-top: 0.15rem;
        ul{
          width: 100%;
          li{
            float: left;
            height: 0.57rem;
            margin-top: 0.25rem;
            span{
              display: block;
              width: 1.8rem;
              height: 0.55rem;
              border: 2px solid #e8e8e8;
              color: #9a9a9a;
              font-size: 0.18rem;
              line-height: 0.55rem;
              text-align: center;
            }
          }
          li:nth-child(odd){
            width: 50.8%;
          }
          li:nth-child(even){
            width: 46%;
          }
        }
      }
    }
  }
  .PageFooter{
    width: 100%;
    height: 0.73rem;
    .footer{
      width: 89.06%;
      margin: 0 auto;
      color: #adadad;
      font-size: 0.16rem;
      line-height: 0.73rem;
    }
  }
}
</style>

