<template>
  <div class="contact">
    <div class="contBox">
      <div class="middlebox">
          <div class="c_1570">
            <div class="tit_1 tit_1_w">联系<span>/contact</span>
                <h1>c&nbsp;o&nbsp;n&nbsp;t&nbsp;a&nbsp;c&nbsp;t</h1>
            </div>
            <div class="row_1">
                <div class="hometop">
                    <div>
                        <!-- <ul class="ul_1">

                            <li class="l1">
                                <div class="zbox"><span>
                                        <div class="ico"><img
                                                src="/upload/images/20180928/index4_22974213.png"
                                                alt="ADDRES" title="ADDRES"></div>
                                        <h4>ADDRES</h4>
                                        <div class="p">
                                            <p>北京市朝阳区建国路88号<br />SOHO现代城1号楼10层</p>
                                        </div>
                                    </span></div>
                            </li>

                            <li class="l2">
                                <div class="zbox"><span>
                                        <div class="ico"><img
                                                src="/upload/images/20180928/index4_31113971.png"
                                                alt="PHONE" title="PHONE"></div>
                                        <h4>PHONE</h4>
                                        <div class="p">
                                            <p>010-85891412<br />15901331708</p>
                                        </div>
                                    </span></div>
                            </li>

                            <li class="l3">
                                <div class="zbox"><span>
                                        <div class="ico"><img
                                                src="/upload/images/20180929/index4_43598246.png"
                                                alt="e-MAIL" title="e-MAIL"></div>
                                        <h4>e-MAIL</h4>
                                        <div class="p">
                                            <p>bj@chuangwudao.com</p>
                                        </div>
                                    </span></div>
                            </li>

                            <li class="l4">
                                <div class="zbox"><span>
                                        <div class="ico"><img
                                                src="/upload/images/20180929/index4_51075678.png"
                                                alt="QQ" title="QQ"></div>
                                        <h4>QQ</h4>
                                        <div class="p">
                                            <p>745025186</p>
                                        </div>
                                    </span></div>
                            </li>

                        </ul> -->
                    </div>

                    <div>
                        <!-- <ul class="ul_1">

                            <li class="l1">
                                <div class="zbox"><span>
                                        <div class="ico"><img
                                                src="/upload/images/20180928/index4_22974213.png"
                                                alt="ADDRES" title="ADDRES"></div>
                                        <h4>ADDRES</h4>
                                        <div class="p">
                                            <p>河北省廊坊市安次区龙河高新技术开发区<br />瑞雪道29号9#厂房9-17室</p>
                                        </div>
                                    </span></div>
                            </li>

                            <li class="l2">
                                <div class="zbox"><span>
                                        <div class="ico"><img
                                                src="/upload/images/20180928/index4_31113971.png"
                                                alt="PHONE" title="PHONE"></div>
                                        <h4>PHONE</h4>
                                        <div class="p">
                                            <p>189 1125 0929‬</p>
                                        </div>
                                    </span></div>
                            </li>

                            <li class="l3">
                                <div class="zbox"><span>
                                        <div class="ico"><img
                                                src="/upload/images/20180929/index4_43598246.png"
                                                alt="e-MAIL" title="e-MAIL"></div>
                                        <h4>e-MAIL</h4>
                                        <div class="p">
                                            <p>lf@chuangwudao.com</p>
                                        </div>
                                    </span></div>
                            </li>

                            <li class="l4">
                                <div class="zbox"><span>
                                        <div class="ico"><img
                                                src="/upload/images/20180929/index4_51075678.png"
                                                alt="QQ" title="QQ"></div>
                                        <h4>QQ</h4>
                                        <div class="p">
                                            <p>609912124</p>
                                        </div>
                                    </span></div>
                            </li>
                        </ul> -->
                    </div>

                  </div>
              </div>
          </div>
          <div class="tab">
              <div class="homedown">

                  <div>
                      <div class="zbox">
                          <div class="ico"></div>
                          <h4>北京</h4>
                      </div>
                  </div>

                  <div>
                      <div class="zbox">
                          <div class="ico"></div>
                          <h4>廊坊</h4>
                      </div>
                  </div>

                  <div>
                      <div class="zbox">
                          <div class="ico"></div>
                          <h4>宁波</h4>
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
  name: 'Contact',
  data() {
    return {

    }
  },
  created() {
    console.log($('.hometop'))
    $('.hometop').slick({
      // setting-name: setting-value,
    })
  }
}
</script>

<style lang="scss" scoped>
.contact{
  width: 100%;
  height: 9.24rem;
  background: url('../../assets/lx-bg.png') no-repeat center center;
  background-size: cover;
}
</style>

