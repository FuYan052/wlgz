<template>
  <div class="casePage">
    <div class="topnav">
        <div class="top">
          <div class="case-logo"><a href="/" title=""><img src="http://www.chuangwudao.com/upload/images/20180928/logo25606209.jpg"></a></div>
          <!-- 导航切换按钮 -->
          <div class="navBtn" @mouseover="showNav"></div>
        </div>
  </div>
  <!-- 标题 -->
  <div class="pageTitle">
    <p class="chinTitle">案例</p>
    <p class="engTitle">Projects</p>
    <p></p>
  </div>
  <!-- 分类按钮 -->
  <div class="cateBtn">
    <ul>
      <li>
        全部
      </li>
      <li>
        办公空间
      </li>
      <li>
        餐饮空间设计
      </li>
      <li>
        酒店会所设计
      </li>
      <li>
        住宅空间设计
      </li>
      <li>
        住宅空间设计
      </li>
      <li class="last">
        其它
      </li>
    </ul>
  </div>
  <!-- 案例列表 -->
  <div class="caseList">
    <ul>
      <li v-for="item in 7" :key="item">
        <img src="../assets/casePic.png" alt="">
        <h4>艺廊及商店改造</h4>
        <h6>办公空间设计</h6>
      </li>
    </ul>
  </div>
<!-- 默认隐藏的导航页 -->
	<div class="navPage" :class="isShowNav? 'navPageShow' : ''">
		<div class="closed" @click="closeNav">
			<div class="logo"><a href="/" title=""><img src="http://www.chuangwudao.com/upload/images/20180928/logo3710948.png" alt="" title=""></a></div>
			<div class="pf_menu_btn"><img src="http://www.chuangwudao.com/templates/cn/images/top3.jpg" alt=""></div>
		</div>
		<div id="navSlide" class="ph_menu">
            <div class='nav_box'>
                <li class="nli l1" id="nav_1">
                    <p><span><a href="/" target="_self" class="l1_a" title="首 页">首 页<i>Home</i></a></span></p>
                </li>
                <li class="nli l2" id="nav_2">
                    <p><span><a href="/page/2.htm" target="_self" class="l1_a" title="我 们">案 例<i>Case</i></a></span>
                    </p>
                </li>
                <li class="nli l3" id="nav_3">
                    <p><span><a href="/list/10/" target="_self" class="l1_a" title="案 例">服 务<i>Service</i></a></span></p>
                </li>
								<li class="nli l5" id="nav_5">
                    <p><span><a href="/list/5/" target="_self" class="l1_a" title="客 户">客 户<i>Customer</i></a></span>
                    </p>
                </li>
                <li class="nli l6" id="nav_6">
                    <p><span><a href="/list/7/" target="_self" class="l1_a" title="新 闻">新 闻<i>News</i></a></span></p>
                </li>
								<li class="nli l4" id="nav_4">
                    <p><span><a href="/#3" target="_self" class="l1_a" title="服 务">我 们<i>About</i></a></span></p>
                </li>
            </div>
        </div>
	</div>
</div>
</template>

<script>
export default {
  name: 'Case',
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
		}
	}
}
</script>

<style lang="scss" scoped>
.casePage{
  width: 100%;
  .topnav{
    width: 100%;
    // position: fixed;
    // left: 0;
    // top: 0;
    height: 186px;
    background: #fff;
    z-index: 9;
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
    .top {
      width: 100%;
      float: left;
      height: 26px;
      padding: 0 60px;
      .case-logo {
        float: left;
        width: 204px;
        margin-top: 20px;
      }
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
  }
  .cateBtn{
    width: 100%;
    height: 1.02rem;
    border-bottom: 2px solid #ececec;
    ul{
      width: 10.7rem;
      height: 100%;
      margin: 0 auto;
      li{
        float: left;
        height: 100%;
        line-height: 1.02rem;
        height: 1.02rem;
        font-size: 0.16rem;
        padding: 0 0.35rem;
        cursor: pointer;
        background: url('../assets/cateBg.png') no-repeat right center;
      }
      .last{
        background: none;
      }
    }
  }
  .caseList{
    width: 100%;
    height: auto;
    padding: 0 0.26rem;
    margin-top: 1.68rem;
    ul{
      width: 100%;
      li{
        width: 23.22%;
        height: 4.85rem;
        float: left;
        margin-left: 0.15rem;
        img{
          width: 4.6rem;
          height: 3rem;
        }
        h4{
          font-size: 0.24rem;
          color: #766e6b;
          margin-top: 0.3rem;
        }
        h6{
          font-size: 0.18rem;
          color: #9ba9b2;
          margin-top: 0.15rem;
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
  .navPageShow{
		left: 0;
	}
}
</style>

