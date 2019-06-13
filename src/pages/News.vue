<template>
  <div class="news">
    <div class="btnBox">
      <!-- 导航切换按钮 -->
      <div class="navBtn" @mouseover="showNav"></div>
    </div>
    <!-- 顶部图片 -->
    <div class="topBanner">
      <img src="../assets/newsTop.png" alt="">
    </div>
    <!-- 标题 -->
    <div class="pageTitle">
      <p class="chinTitle">新闻</p>
      <p class="engTitle">NEWS</p>
    </div>
    <!-- 分类按钮 -->
    <div class="cateBtn">
      <ul>
        <li>全部</li>
        <li>行业动态</li>
        <li class="last">公司新闻</li>
      </ul>
    </div>
    <!-- 新闻列表 -->
    <div class="newsList">
      <ul>
        <li v-for="item in 4" :key="item">
          <div class="leftPic">
            <img src="../assets/newsPic.png" alt="">
          </div>
          <div class="rightTitle">
            <p class="p1">
              家居体验馆-同一空间无限可能
            </p>
            <p class="p2">
              合理的家居尺度对于人们的的生活至关重要，掌握不当，会给使用者带来诸多不便，升值影响甚至影响
            </p>
            <p class="p3">
              12-08 / 
              <span>
                2015
              </span>
            </p>
          </div>
          <div class="moreBtn">
            MORE&nbsp;&nbsp;>
          </div>
        </li>
      </ul>
    </div>
    <!-- 分页器 -->
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="7">
      </el-pagination>
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
  name: 'News',
  components: {
    PageBottom
  },
  data() {
		return{
			isShowNav: false
		}
  },
  methods: {
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
		}
	}
}
</script>

<style lang="scss" scoped>
.news{
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
    height: 5.15rem;
    margin-bottom: 1.02rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .cateBtn{
    width: 100%;
    height: 1.02rem;
    ul{
      width: 4.20rem;
      height: 100%;
      margin: 0 auto;
      li{
        float: left;
        height: 100%;
        line-height: 1.02rem;
        height: 1.02rem;
        font-size: 0.16rem;
        padding: 0 0.35rem;
        color: #c1c1c1;
        cursor: pointer;
        background: url('../assets/cateBg.png') no-repeat right center;
      }
      li:hover{  //选中项样式
        color: #2a1e32;
      }
      .last{
        background: none;
      }
    }
  }
  .newsList{
    width: 88.90%;
    height: auto;
    margin: 0 auto;
    margin-top: 0.7rem;
    ul{
      width: 100%;
      height: auto;
      li{
        width: 100%;
        height: 2.7rem;
        border-bottom: 2px solid #eee;
        margin-bottom: 0.4rem;
        position: relative;
        .leftPic{
          width: 29.87%;
          height: 100%;
          float: left;
          img{
            width: 4.6rem;
            height: 2.3rem;
          }
        }
        .rightTitle{
          width: 70%;
          height: 100%;
          float: left;
          .p1{
            width: 52%;
            height: 0.58rem;
            font-size: .24rem;
            color: #757670;
            line-height: 0.58rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .p2{
            font-size: 0.18rem;
            width: 64.27%;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            line-height: 0.42rem;
            color: #716e75;
          }
          .p3{
            line-height: 1.18rem;
            font-size: 0.2rem;
            color: #cac8cb;
            margin-top: 0.55rem;
            span{
              font-size: 0.14rem;
            }
          }
        }
        .moreBtn{
          width: 2.15rem;
          height: 0.6rem;
          cursor: pointer;
          line-height: 0.6rem;
          text-align: center;
          font-size: 0.18rem;
          color: #b0afb4;
          position: absolute;
          top: 0.76rem;
          right: 0;
          border-left: 1px solid #b0afb4;
        }
        .moreBtn:hover{
          color: #120000;
        }
      }
      li:last-child{
        border: none;
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
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #3f3f3f;
  color: #FFF;
}
</style>
