<template>
    <div class="case">
        <!-- 左边菜单项 -->
        <div class="leftBox">
            <div class="contBox">
                <div class="tablebox">
                    <div class="middlebox">
                        <div class="tit_1">案例<span>/case</span><h1>c&nbsp;a&nbsp;s&nbsp;e</h1></div>
                            <div class="slick_res1r">
                                <div>
                                    <li class="l1">
                                        <div class="ico"></div>
                                        <h4>机床设备</h4>
                                    </li>
                                </div>

                                <div>
                                    <li class="l1">
                                        <div class="ico"></div>
                                        <h4>医疗器械</h4>
                                    </li>
                                </div>

                                <div>
                                    <li class="l1">
                                        <div class="ico"></div>
                                        <h4>智能产品</h4>
                                    </li>
                                </div>

                                <div>
                                    <li class="l1">
                                        <div class="ico"></div>
                                        <h4>结构设计</h4>
                                    </li>
                                </div>

                                <div>
                                    <li class="l1">
                                        <div class="ico"></div>
                                        <h4>平面设计</h4>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <!-- 中间灰色部分 -->
        <div class="middleBox">
            <div class="title"><span>机床设备案例</span></div>
        </div>
        <!-- 右边展示案例 -->
        <div class="rightShowCase">
            <ul>
                <li class="l1">
                        <div class="tablebox">
                            <div class="middlebox">
                                <h5>外观设计 | 结构设计 | 样机制作</h5>
                                <h3 class="elli">冷弯成型机</h3>
                                <div class="img"><img src="http://www.chuangwudao.com/upload/images/20181005/18999971.jpg"
                                        alt="" title=""></div>
                                <div class="p">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                </li>
                <li class="l2">
                        <div class="tablebox">
                            <div class="middlebox">
                                <h5>外观设计 | 结构设计</h5>
                                <h3 class="elli">北方兵器研磨机-PZD1000</h3>
                                <div class="img"><img src="http://www.chuangwudao.com/upload/images/20181005/18999971.jpg"
                                        alt="" title=""></div>
                                <div class="p">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                </li>
                <li class="l3">
                        <div class="tablebox">
                            <div class="middlebox">
                                <h5>外观设计 | 结构设计</h5>
                                <h3 class="elli">防火玻璃生产线</h3>
                                <div class="img"><img src="http://www.chuangwudao.com/upload/images/20181005/18999971.jpg"
                                        alt="" title=""></div>
                                <div class="p">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Case'
}
</script>

<style lang="scss" scoped>
.case{
    width: 100%;
    height: 9.3rem;
    // padding: 0 3.9%;
    .leftBox{
        width: 28.64%;
        height: 100%;
        background: #fff;
        float: left;
        .contBox{
            width: 54.54%;
            height: 100%;
            float: right;
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
                    // padding-top: 0.5rem;
                    .tit_1 {
                        width: 100%;
                        float: left;
                        position: relative;
                        font-size: 0.36rem;
                        color: #555;
                        font-weight: bold;
                        letter-spacing: 1px;
                        line-height: 0.5rem;
                        span{
                            font-size: 0.24rem;
                            color: #888;
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
                            color: #333;
                            opacity: 0.05;
                            text-transform: uppercase;
                            font-family: 'OPENSANS-BOLD';
                            letter-spacing: 1px;
                            bottom: 0;
                            line-height: 0.6rem;
                            height: 0.76rem;
                            font-weight: bold;
                        }
                    }
                    .slick_res1r{
                        width: 100%;
                        float: left;
                        position: relative;
                        padding: 0.08rem 0 0.32rem 0;
                        margin-top: 0.17rem;
                        .l1{
                            width: 100%;
                            float: left;
                            margin-top: 0.2rem;
                            padding-left: 0.43rem;
                            position: relative;
                            cursor: pointer;
                            .ico{
                                width: 13px;
                                height: 52px;
                                position: absolute;
                                left: 0;
                                top: 0;
                                background: url('http://www.chuangwudao.com/templates/cn/images/index1.png') no-repeat center 150%;
                            }
                            .ico:hover{
                                background-position: center -60%;  //当选中时样式
                            }
                            h4{
                                width: 100%;
                                float: left;
                                font-size: 0.18rem;
                                color: #666;
                                line-height: 0.52rem;
                            }
                            h4:hover{
                                color: #f21e2f;
                            }
                            h4:hover{ //选中项的样式
                                color: #f21e2f;
                                background: #f4f4f6;
                                padding-left: 0.19rem;
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
    .middleBox{
        width: 4.68%;
        height: 100%;
        background: #f4f4f6;
        float: left;
        position: relative;
        .title{
            width: 0.62rem;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: #f4f4f6;
            padding: 0.3rem 0.22rem;
            span{
                display: block;
                width: 100%;
                text-align: center;
                float: left;
                padding-top: 0.2rem;
                background: url('http://www.chuangwudao.com/templates/cn/images/index1_1.jpg') no-repeat center top;
                font-size: 0.12rem;
                color: #888;
                line-height: 1.5;
                position: relative;
            }
            span:before{
                content: '';
                width: 1px;
                height: 10rem;
                border-left: dashed 1px #bcbcbd;
                position: absolute;
                left: 50%;
                top: 120%;
            }
        }
    }
    .rightShowCase{
        width: 66.68%;
        height: 100%;
        float: left;
        ul{
            width: 100%;
            float: left;
            height: 100%;
            position: relative;
            border-right: solid 1px #dfdfdf;
            li{
                width: 33.333%;
                float: left;
                height: 100%;
                position: relative;
                padding: 0 0.3rem;
                border-left: solid 1px #dfdfdf;
                text-align: center;
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
                        h5{
                            width: 100%;
                            font-size: 0.12rem;
                            color: #888;
                            line-height: 0.3rem;
                            margin-top: 0.1rem;
                        }
                        h3{
                            width: 100%;
                            font-size: 0.24rem;
                            margin: 0;
                            color: #333;
                            line-height: 0.42rem;
                            letter-spacing: 1px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        .img{
                            width: 100%;
                            margin-top: 40px;
                            overflow: hidden;
                            img{
                                width: 100%;
                                float: left;
                                transition: all 0.6s linear 0.3s;
                                -moz-transition: all 0.6s linear 0.3s;
                                -webkit-transition: all 0.6s linear 0.3s;
                                -o-transition: width all 0.6s linear 0.3s;
                            }
                        }
                        .p{
                            width: 100%;
                            margin-top: 0.32rem;
                            font-size: 0.14rem;
                            color: #666;
                            line-height: 0.28rem;
                            height: 1.4rem;
                            overflow: hidden;
                        }
                    }
                }
            }
            li:hover{
                cursor: pointer;
                background: #f1f1f1;
                padding-top: 0.4rem;
                -webkit-transition: all 0.3s ease-out 0s;
                transition: all 0.3s ease-out 0s;
            }
        }
    }
}
</style>


