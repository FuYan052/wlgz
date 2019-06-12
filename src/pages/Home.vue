<template>
  <div class="home">
    <!-- logo -->
    <div class="pz_top hidden-xs">
      <div class="top">
          <div class="logo">
            <img src="../assets/logo.png">
          </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <banner></banner>
    <!-- 左侧导航栏 -->
      <ul class="leftnav">
        <li data-menuanchor="1" class="active first"><a href="#1" title="创物道">1<span>创物道</span></a></li>
        <li data-menuanchor="2"><a href="#2" title="案例">2<span>案例</span></a></li>
        <li data-menuanchor="3"><a href="#3" title="服务">3<span>服务</span></a></li>
        <li data-menuanchor="4"><a href="#4" title="客户">4<span>客户</span></a></li>
        <li data-menuanchor="5"><a href="#5" title="联系">5<span>联系</span></a></li>
    </ul>
    <!-- 手机可见菜单 -->
    <div class="pz_top visible-xs">
        <div class="top">
            <div class="logo"><a href="/" title=""><img class="img-responsive" src="../assets/logo.png"></a></div>
            <div class="menulist">

                <li class="l1 first" id="wap_3"><a class="l1_a" href="/list/10/" target="_self" title="案 例">案 例</a></li>


                <li class="l1" id="wap_2"><a class="l1_a" href="/page/2.htm" target="_self" title="我 们">我 们</a></li>

                <li class="l1" id="wap_5"><a class="l1_a" href="/list/5/" target="_self" title="客 户">客 户</a></li>

            </div>
        </div>
    </div>

    <!-- 案例 -->
    <Case></Case>
		<!-- 服务 -->
		<Service></Service>
		<!-- 客户 -->
		<customer></customer>
		<!-- 联系 -->
		<contact></contact>
  </div>
</template>

<script>
import Banner from '../components/home/Banner.vue'
import Case from '../components/home/Case.vue'
import Service from '../components/home/Service.vue'
import Customer from '../components/home/Customer.vue'
import Contact from '../components/home/Contact.vue'
export default {
  name: 'Home',
  components: {
    Banner,
    Case,
    Service,
    Customer,
    Contact,
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  position: relative;
  .logo{
    position: absolute;

    z-index: 99;
  }
}
</style>
<style>
.leftnav {
	position: fixed;
	left: 0.35rem;
	top: 50%;
	z-index: 9;
	width: 0.5rem;
	margin-top: -1.3rem;
}

.home .leftnav:before {
	content: '';
	width: 0.01rem;
	height: 90%;
	background: #ccc;
	opacity: 0.6;
	position: absolute;
	left: 50%;
	top: -95%;
}

.home .leftnav:after {
	content: '';
	width: 0.01rem;
	height: 90%;
	background: #ccc;
	opacity: 0.6;
	position: absolute;
	left: 50%;
	bottom: -95%;
}

.home .leftnav li {
	width: 100%;
	height: 52px;
	float: left;
	text-align: center;
	overflow: hidden;
	position: relative;
}

.home .leftnav li:before {
	content: '';
	width: 0;
	height: 1px;
	background: white;
	position: absolute;
	left: 50%;
	bottom: 0;
	opacity: 0.4;
	-webkit-transition: all 0.3s ease-out 0s;
	-moz-transition: all 0.3s ease-out 0s;
	-o-transition: all 0.3s ease-out 0s;
	transition: all 0.3s ease-out 0s;
}

.home .leftnav li a {
	display: block;
	width: 100%;
	height: 1.04rem;
	line-height: 0.52rem;
	font-size: 0.16rem;
	color: #78777c;
	-webkit-transition: all 0.5s ease-out 0s;
	-moz-transition: all 0.5s ease-out 0s;
	-o-transition: all 0.5s ease-out 0s;
	transition: all 0.5s ease-out 0s;
}

.home .leftnav li a span {
	display: block;
	width: 100%;
	float: left;
	color: #f11c34;
}

.leftnav li:hover a,
.leftnav li.active a {
	margin-top: -0.52rem;
}

.leftnav li.active a {
	color: white;
	font-weight: bold;
}

.leftnav li.active:before {
	width: 0.23rem;
	margin-left: -0.12rem;
}

.leftnav li a {
	display: block;
	width: 100%;
	height: 100%;
}

/*.leftnav li.first a span{ font-size:12px;font-family: 'OPENSANS-LIGHT';}*/
.leftnav.white:before,
.leftnav.white:after {
	background: #d1d1d1;
	opacity: 1;
}

.leftnav.white li a {
	color: #78777c;
}

.leftnav.white li.active a {
	color: #333;
}

.leftnav.white li:before {
	background: #d1d1d1;
	opacity: 0.4;
}
@media screen and (max-width:767px) {
	.leftnav {
		display: none !important;
	}
}
</style>

