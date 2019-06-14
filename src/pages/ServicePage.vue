<template>
  <div class="service">
    <div class="btnBox">
      <!-- 导航切换按钮 -->
      <div class="navBtn" @mouseover="showNav"></div>
    </div>
    <!-- banner图 -->
    <div class="topBanner">
      <img src="../assets/serviceTop.png" alt="">
    </div>
    <!-- 标题 -->
    <div class="title1">
      <span>New&nbsp;&nbsp;and&nbsp;&nbsp;Trends</span>
    </div>
    <div class="title2">
      <span>空间设计</span>
    </div>
    <div class="text">
      will do all the things to achieve the target.As long we have goal<br />
      to be realizedwon't be blind at least.
    </div>
    <div class="wrap1">
      <div :id="'anchor-'+index" class="item" v-for="index in 4" :key="index">
        {{index}}
      </div>
      <div class="btn">
        <a href="javascript:void(0)" @click="goAnchor('#anchor-'+index)" v-for="index in 4" :key="index"> {{index}} </a>
      </div>
    </div>
    <div class="sectBox">
      <div class="sect sect1">
        <div class="ico">
          <img src="../assets/ser1.png" alt="">
        </div>
        <div class="title">
          放心装修，真正0首付
        </div>
        <div class="detail">
          互联网装修公司没有安全感？首付太多，不放心？<br />
          没关系，我们支持真正的零首付。先装修后付款，看到隐蔽工程满意后再付款，不必担心装修不好有风险，我们为您的装修一路保驾护航。
        </div>
      </div>
      <div class="sect sect2">
        <div class="ico">
          <img src="../assets/ser2.png" alt="">
        </div>
        <div class="title">
          直选施工班组
        </div>
        <div class="detail">
          蔚蓝公装是包工侠旗下孵化的公装品牌。我们拥有装修一级资质，每一个施工班组都是经过实际施工考验，并且在包工侠平台积累了足够<br />
          好的江湖信用的。业主进行装修前可以充分考察施工班组的业绩及信用，直接选择满意的班组施工，不需要支付任何额外费用，拒绝中间商加价，用最低的价格做最好的装修。
        </div>
      </div>
      <div class="sect sect3">
        <div class="ico">
          <img src="../assets/ser3.png" alt="">
        </div>
        <div class="title">
          AI智能监理
        </div>
        <div class="detail">
          人工监理不能时刻在场，现场施工不放心，又没时间时刻关注进度，这些烦恼我们通通都懂，并且我们也为您找到了解决办法。我们现场安装智能AI摄像<br />
          头，时刻关注您的装修进度，按时发送进度报告给您。您在闲暇时还可以在自己手机上查看过往的施工图片和正在进行的施工视频，施工情况一手掌握，不用再为施工监管劳心费力
        </div>
      </div>
      <div class="sect sect4">
        <div class="ico">
          <img src="../assets/ser4.png" alt="">
        </div>
        <div class="title">
          优质材料精心选，打破底价放心买
        </div>
        <div class="detail">
          我们不敢保证每一样材料都是市场上价格最低的，但是我们可以确保我们采购的材料绝对是同等品质下最具性价比的。因为质量往往和价格挂钩，我们需要在确保材料安<br />
          全、环保的前提下为您选择用料，价格绝对透明公正，放心使用。
        </div>
      </div>
    </div>
    <!-- 软装服务 -->
    <div class="wrap2">
      <div class="title">
        <div class="t1">
          <span>
            Our&nbsp;Scenic&nbsp;Service
          </span>
        </div>
        <div class="t2">
          软装服务
        </div>
      </div>
      <div class="content">
        <div class="serItem" v-for="item in 4" :key="item">
          <div class="icon"></div>
          <div class="titleBox">
            <span>
              办公区域
            </span>
          </div>
          <div class="txt">
            <p>软装服务整配软装定制</p>
            <p>数十种搭配方案</p>
            <p>随心挑选，提前解决硬装以后的问题</p>
          </div>
          <div class="pic">
            <img src="../assets/casePic.png" alt="">
          </div>
          <div class="moreBtn">more</div>
        </div>
      </div>
    </div>
    <!-- 办公服务 -->
    <div class="office">
      <div class="contBox">
        <ul>
          <li>
            <img src="../assets/9.png" alt="">
            <span>甲醛治理</span>
          </li>
          <li>
            <img src="../assets/10.png" alt="">
            <span>日常保洁</span>
          </li>
          <li>
            <img src="../assets/lz.png" alt="">
            <span>绿植租赁</span>
          </li>
          <li>
            <img src="../assets/zn.png" alt="">
            <span>智能办公</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 网页脚部 -->
    <page-bottom></page-bottom>
    <!-- 默认隐藏的导航页 -->
    <div class="navPage" :class="isShowNav? 'navPageShow' : ''">
      <div class="closed" @click="closeNav">
        <div class="logo"><a href="/" title=""><img src="http://www.chuangwudao.com/upload/images/20180928/logo3710948.png" alt="" title=""></a></div>
        <div class="pf_menu_btn"><img src="http://www.chuangwudao.com/templates/cn/images/top3.jpg" alt=""></div>
      </div>
      <div id="navSlide" class="ph_menu">
              <div class='nav_box'>
                  <li class="nli l1" id="nav_1">
                      <p><span @click="toHome"><a href="javascrip:viod(0)" target="_self" class="l1_a" title="首 页">首 页<i>Home</i></a></span></p>
                  </li>
                  <li class="nli l2" id="nav_2">
                      <p><span @click="toCasePage"><a href="javascrip:viod(0)" target="_self" class="l1_a" title="我 们">案 例<i>Case</i></a></span>
                      </p>
                  </li>
                  <li class="nli l3" id="nav_3">
                      <p><span @click="toService"><a href="javascrip:viod(0)" target="_self" class="l1_a" title="案 例">服 务<i>Service</i></a></span></p>
                  </li>
                  <li class="nli l5" id="nav_5">
                      <p><span @click="toCurpartner"><a href="javascrip:viod(0)" target="_self" class="l1_a" title="客 户">客 户<i>Customer</i></a></span>
                      </p>
                  </li>
                  <li class="nli l6" id="nav_6">
                      <p><span @click="toNews"><a href="javascrip:viod(0)" target="_self" class="l1_a" title="新 闻">新 闻<i>News</i></a></span></p>
                  </li>
                  <li class="nli l4" id="nav_4">
                      <p><span @click="toAbout"><a href="javascrip:viod(0)" target="_self" class="l1_a" title="服 务">我 们<i>About</i></a></span></p>
                  </li>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import PageBottom from '../components/footer/PageBottom.vue'
export default {
  name: 'ServicePage',
  components: {
    PageBottom
  },
  data() {
    return {
      isShowNav: false
    }
  },
  methods:{
    // 鼠标滑过按钮显示导航页
		showNav(){
			this.isShowNav = true
		},
		// 鼠标滑过按钮隐藏导航页
		closeNav(){
			this.isShowNav = false
    },
    toHome(){
			this.$router.push({
				path: '/',
				name: 'Home'
			})
		},
		toCasePage(){
			this.$router.push({
				path: '/case',
				name: 'Case'
			})
		},
		toService(){
			this.$router.push({
				path: '/service',
				name: 'ServicePage'
			})
		},
		toCurpartner(){
			this.$router.push({
				path: '/curpartner',
				name: 'Curpartner'
			})
		},
		toNews(){
			this.$router.push({
				path: '/news',
				name: 'News'
			})
		},
		toAbout(){
			this.$router.push({
				path: '/about',
				name: 'About'
			})
		},
    goAnchor(selector) {
      console.log(selector)
      var anchor = this.$el.querySelector(selector)
      document.documentElement.scrollTop = anchor.offsetTop
    }
  }
}
</script>

<style lang="scss" scoped>
.service{
  width: 100%;
  .btnBox{
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: 1.86rem;
    z-index: 99;
    .navBtn{
      position: fixed;
      cursor: pointer;
      right: 0.5rem;
      top: 0.5rem;
      width: 0.2rem;
      height: 0.16rem;
      text-align: center;
      display: block;
      z-index: 82;
      margin-top: 20px;
      background: url('../assets/navBtn.png') no-repeat center center;
      -webkit-transition: all 0.3s ease-out 0s;
      -moz-transition: all 0.3s ease-out 0s;
      -o-transition: all 0.3s ease-out 0s;
      transition: all 0.3s ease-out 0s;
    }
  }
  .topBanner{
    width: 100%;
    height: 8.68rem;
    img{
      width: 100%;
      height: 8.68rem;
    }
  }
  .title1{
    width: 100%;
    height: 0.47rem;
    margin-top: 0.35rem;
    text-align: center;
    span{
      display: block;
      height: 0.47rem;
      width: 3.2rem;
      font-size: 0.34rem;
      color: #393939;
      font-weight: bold;
      margin: 0 auto;
      background: url('../assets/cir.png') no-repeat right top;
    }
  }
  .title2{
    width: 100%;
    height: 0.5rem;
    text-align: center;
    span{
      display: block;
      height: 0.5rem;
      line-height: 0.5rem;
      width: 3.2rem;
      font-size: 0.18rem;
      color: #383838;
      margin: 0 auto;
      background: url('../assets/smBorder.png') no-repeat center bottom;
    }
  }
  .text{
    width: 55.46%;
    height: 1.2rem;
    margin: 0 auto;
    background: url('../assets/longBorder.png') no-repeat center bottom;
    background-size: 100% auto;
    color: #989898;
    font-size: 0.14rem;
    text-align: center;
    line-height: 0.2rem;
    padding-top: 0.15rem;
    word-spacing: 0.01rem;
  }
  .wrap1{
    width: 71.77%;
    height: 6.85rem;
    margin: 0 auto;
    border: 1px solid red;
    .item{
      width: 25%;
      height: 5rem;
      font-size: 0.18rem;
      border: 1px solid paleturquoise;
      float: left;
    }
    .btn{
      width: 100%;
      height: 1.85rem;
      a{
        font-size: 0.16rem;
      }
    }
  }
  .sectBox{
    width: 100%;
    height: 14.32rem;
    background: url('../assets/bg1-1.png') no-repeat center center;
    background-size: 100% 100%;
    .sect{
      width: 100%;
      height: 3.58rem;
      overflow: hidden;
      .ico{
        width: 0.67rem;
        height: 0.67rem;
        margin: 0.35rem auto;
        img{
          float: left;
          width: 100%;
          height: 100%;
        }
      }
      .title{
        font-size: 0.22rem;
        text-align: center;
        color: #fff;
      }
      .detail{
        font-size: 0.18rem;
        line-height: 0.36rem;
        text-align: center;
        margin-top: 0.55rem;
        color: #e9e9e9;
      }
    }
    .sect:nth-child(even){
      .title{
        color: #030303;
      }
      .detail{
        color: #353432;
      }
    }
  }
  .wrap2{
    width: 100%;
    height: 7.22rem;
    .title{
      width: 60.41%;
      height: 1.46rem;
      margin: 0 auto;
      padding-top: 0.8rem;
      .t1{
        width: 100%;
        height: 0.36rem;
        line-height: 0.36rem;
        font-size: 0.22rem;
        color: #343b43;
        text-align: center;
        position: relative;
        font-weight: bold;
        span{
          display: block;
        }
        span::before{
          content: '';
          width: 39%;
          height: 100%;
          background: url('../assets/33.png') no-repeat right center;
          background-size: 90% 0.02rem;
          position: absolute;
          left: 0;
          top: 0;
        }
        span::after{
          content: '';
          width: 39%;
          height: 100%;
          background: url('../assets/34.png') no-repeat left center;
          background-size: 90% 0.02rem;
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      .t2{
        width: 100%;
        height: 0.18rem;
        font-size: 0.18rem;
        line-height: 0.28rem;
        text-align: center;
        color: #383838;
      }
    }
    .content{
      width: 60.41%;
      height: 4.86rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding-top: 0.4rem;
      .serItem{
        width: 22.27%;
        height: 4.2rem;
        border: 2px solid #9dc8ea;
        cursor: pointer;
        position: relative;
        .icon{
          width: 0.79rem;
          height: 0.79rem;
          background: url('../assets/ser11.png') no-repeat center;
          border-radius: 50%;
          position: absolute;
          top: -9.5%;
          left: 33%;
        }
        .titleBox{
          width: 100%;
          height: 0.6rem;
          position: absolute;
          top: 1.02rem;
          left: 0;
          span{
            display: inline-block;
            position: absolute;
            top: 0;
            left: 33%;
            width: 0.84rem;
            height: 0.58rem;
            font-size: 0.24rem;
            box-sizing: border-box;
            text-align: center;
            padding: 0 0.14rem;
            letter-spacing: 0.01rem;
          }
          span::before{
            content: '';
            width: 90%;
            height: 100%;
            background: url('../assets/34.png') no-repeat left center;
            background-size: 100% 0.02rem;
            position: absolute;
            right: -100%;
            top: 0;
          }
          span::after{
            content: '';
            width: 90%;
            height: 100%;
            background: url('../assets/33.png') no-repeat left center;
            position: absolute;
            left: -100%;
            top: 0;
          }
        }
        .txt{
          text-align: center;
          width: 74%;
          height: auto;
          margin: 0 auto;
          margin-top: 2.5rem;
          opacity: 1;
          p{
            width: 100%;
            height: 0.24rem;
            font-size: 0.12rem;
            line-height: 0.24rem;
            color: #383838;
            overflow: hidden;
          }
        }
        .moreBtn{
          width: 0.97rem;
          height: 0.35rem;
          text-align: center;
          line-height: 0.35rem;
          font-size: 0.12rem;
          color: #9dc8ea;
          position: absolute;
          background: #fff;
          border: 2px solid #9dc8ea;
          top: 96%;
          left: 29.25%;
          z-index: 29;
        }
        .pic{
          width: 100%;
          height: 3.2rem;
          opacity: 0;
          position: absolute;
          left: 0;
          bottom: 0;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .serItem:hover{
        .icon{
          background: url('../assets/32.png') no-repeat center;
          -webkit-transition: all 0.3s ease-out 0s;
          -moz-transition: all 0.3s ease-out 0s;
          -o-transition: all 0.3s ease-out 0s;
          transition: all 0.3s ease-out 0s;
        }
        .titleBox{
          top: 0.5rem;
          -moz-transition: all 0.3s ease-out 0s;
          -o-transition: all 0.3s ease-out 0s;
          transition: all 0.3s ease-out 0s;
          span{
            width: 1.2rem;
            height: 0.3rem;
            width: 1.5rem;
            height: 0.3rem;
            left: 19%;
          }
          span::before{
            width: 40%;
            right: -40%;
          }
          span::after{
            width: 40%;
            left: -40%;
          }
        }
        .txt{
          opacity: 0;
          -webkit-transition: all 0.3s ease-out 0s;
          -moz-transition: all 0.3s ease-out 0s;
          -o-transition: all 0.3s ease-out 0s;
          transition: all 0.3s ease-out 0s;
        }
        .pic{
          opacity: 1;
          -webkit-transition: all 0.3s ease-out 0s;
          -moz-transition: all 0.3s ease-out 0s;
          -o-transition: all 0.3s ease-out 0s;
          transition: all 0.3s ease-out 0s;
        }
        .moreBtn{
          background: #299df4;
          -webkit-transition: all 0.3s ease-out 0s;
          -moz-transition: all 0.3s ease-out 0s;
          -o-transition: all 0.3s ease-out 0s;
          transition: all 0.3s ease-out 0s;
        }
      }
    }
  }
  .office{
    width: 100%;
    height: 7.27rem;
    overflow: hidden;
    background: url('../assets/b-bg.png') no-repeat center center;
    .contBox{
      width: 60.41%;
      height: 2.4rem;
      margin: 0 auto;
      margin-top: 2.9rem;
      ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        li{
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: center;
          img{
            width: 100%;
          }
          span{
            font-size: 0.26rem;
            color: #fff;
          }
        }
      }
    }
  }
  .navPage{
    position: fixed;
    width: 100%;
    height: 100%;
    left: -100%;
    top: 0;
    display: block !important;
    float: left;
    z-index: 101;
    background: rgba(0,0,0,0.8);
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
    .closed{
			width: 100%;
			height: 120px;
			float: left;
			padding: 0.4rem 0.4rem 0 0.6rem;
			.logo{
				float: left;
    		margin-top: 7px;
				width: 2.04rem;
				img{
					width: 100%;
    			float: left;
				}
			}
			.pf_menu_btn{
				float: right;
				cursor: pointer;
				width: 40px;
				margin-right: 30px;
				img{
					width: 100%;
					float: left;
					-webkit-transition: all 0.3s ease-out 0s;
					-moz-transition: all 0.3s ease-out 0s;
					-o-transition: all 0.3s ease-out 0s;
					transition: all 0.3s ease-out 0s;
				}
			}
			.pf_menu_btn:hover{
				img{
					transform: rotate(180deg);
				}
			}
		}
		.ph_menu {
			position: absolute;
			left: 0;
			top: 120px;
			height: 100%;
			width: 100%;
			text-align: left;
			overflow: hidden;
			border-top: solid 1px #353536;
			.nav_box {
				width: 100%;
				position: relative;
				height: 100%;
				.nli {
					float: left;
					position: relative;
					height: 100%;
					width: 16.666%;
					border-right: solid 1px #353536;
					p{
						span{
							float: left;
							width: 100%;
							padding-top: 56px;
							text-align: center;
							-webkit-transition: all 0.3s ease-out 0s;
							-moz-transition: all 0.3s ease-out 0s;
							-o-transition: all 0.3s ease-out 0s;
							transition: all 0.3s ease-out 0s;
							.l1_a {
								float: left;
								width: 100%;
								color: #fff;
								font-size: 24px;
								line-height: 32px;
								padding: 0 10px;
								position: relative;
								i{
									display: block;
									width: 100%;
									font-size: 14px;
									color: #aeaeae;
									line-height: 18px;
									text-transform: uppercase;
									font-style: normal;
								}
							}
						}
					}
				}
				.nli:hover{
					.l1_a {
						color: #fa2812;
						font-weight: bold;
						i{
							font-weight: normal;
						}
					}
					span {
						padding-top: 78px;
					}
				}
			}
		}
  }
  .page{
    width: 100%;
    height: 1.14rem;
    display: block;
    .el-pagination {
      white-space: nowrap;
      padding: 2px 5px;
      color: #fff;
      font-weight: 700;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-pager{
        .active{
          background-color: #3f3f3f;
        }
      }
    }
  }
  .navPageShow{
		left: 0;
	}
}
</style>
<style>

</style>

