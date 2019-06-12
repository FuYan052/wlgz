<template>
  <div class="casePage">
    <div class="topnav">
        <div class="top">
          <div class="logo"><a href="/" title=""><img src="http://www.chuangwudao.com/upload/images/20180928/logo25606209.jpg"></a></div>
          <!-- 导航切换按钮 -->
          
        </div>
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
  name: 'Case'
}
</script>

<style lang="scss" scoped>
.casePage{
  width: 100%;
  .topnav{
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: 116px;
    background: white;
    z-index: 9;
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
    .menu {
      position: fixed;
      cursor: pointer;
      right: 50px;
      top: 50px;
      width: 20px;
      height: 16px;
      text-align: center;
      display: block;
      z-index: 82;
      background: url('../assets/navBtn.png') no-repeat center center;
      -webkit-transition: all 0.3s ease-out 0s;
      -moz-transition: all 0.3s ease-out 0s;
      -o-transition: all 0.3s ease-out 0s;
      transition: all 0.3s ease-out 0s;
      position: absolute;
    }
    .pz_top {
      float: left;
      width: 100%;
      position: absolute;
      left: 0;
      top: 45px;
      z-index: 80;
      -webkit-transition: all 0.3s ease-out 0s;
      -moz-transition: all 0.3s ease-out 0s;
      -o-transition: all 0.3s ease-out 0s;
      transition: all 0.3s ease-out 0s;
      .top {
        width: 100%;
        float: left;
        height: 26px;
        padding: 0 60px;
        .logo {
          float: left;
          width: 204px;
          margin-top: 0px;
        }
      }
    }
  }
}
</style>

