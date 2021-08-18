<template>
  <div class="page">
    <!---->
    <div class="banner"
         :style="{
        backgroundImage:'url('+images+')','margin':0+'px'} ">
    </div>
    <div class="page-box">
      <div class="page-tree">
        <div class="page-menu">
          <p class="title">产品概述</p>
          <div data-v-3df8f478=""
               class="see-anchor detail">
            <div data-v-3df8f478=""
                 class="ant-anchor-wrapper"
                 style="max-height: calc(100vh - 220px);">
              <div class="ant-anchor fixed">
                <div class="ant-anchor-ink"><span class="ant-anchor-ink-ball"
                        style="top: 15.5px;"></span>
                </div>

                <div data-v-3df8f478=""
                     class="ant-anchor-link ant-anchor-link-active"><a href="#160316180399142"
                     title="一物一码"
                     target="_self"
                     class="ant-anchor-link-title">一物一码</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-box1">
        <div class="header-top">

        </div>
        <div>

          <div data-v-492dc475=""
               class="see-space"
               id="160316180399142"
               style="height: 50px;"></div>
          <div class="see-title"
               id="160316180399140">
            <div class="title">
              <!---->
              <div title="一、一物一码"
                   class="text">
                一物一码
              </div>
            </div>
          </div>
          <div data-v-492dc475=""
               class="see-space"
               id="160316182924251"
               style="height: 50px;"></div>
          <div class="see-title"
               id="160316183600653">
            <div class="title">
              <!---->
              <div title="功能介绍"
                   class="text1">
                功能介绍
              </div>
              <div title="功能介绍"
                   class="text1-link"
                   id="link-text1"
                   style="cursor: pointer;">
                立即体验
              </div>
            </div>
            <div class="sub-title">
              通过标识码将每一个工业品都赋予一个唯一的“身份证”标识，包括统一的编码标准、统一的身份识别、统一的信息沟通“语言”，为促进企业间的信息资源集成共享提供坚实基础。
            </div>
          </div>
          <div data-v-492dc475=""
               class="see-space"
               id="1603161829242511"
               style="height: 20px;"></div>
          <div class="see-title"
               id="1603161836006531">
            <div class="title">
              <!---->
              <div title="价值"
                   class="text1">
                价值
              </div>
            </div>
            <div class="sub-title">
              出厂编号与产品唯一码，一一绑定，不可复制
              用户拿到产品后扫码可查看产品的出厂编号，与铭牌刻印的出厂编号一一比对，用户可以轻松判断产品的真伪。
            </div>
          </div>
          <div data-v-492dc475=""
               class="see-space"
               id="160316182924252"
               style="height: 20px;"></div>
          <div class="see-title"
               id="1603161836006532">
            <div class="title">
              <!---->
              <div title="应用场景"
                   class="text1">
                应用场景
              </div>
            </div>
            <div class="sub-title">
              产品的市场监察人员可以通过用手机直接扫描代理商/经销商所在区域的包装箱条码和单品上的二维码，查看产品按时间顺序的详细物流信息，通过当前位置与扫码显示的计划销售区域进行对比，判断是否窜货。
            </div>

            <div data-v-492dc475=""
                 class="see-space"
                 style="height: 30px;"></div>
            <div data-tips=""
                 class="see-image-normal"
                 id=""
                 style="height: auto;">
              <!----><img src="../../assets/images/service.png"
                   class="see-image-normal__image">
              <!---->
            </div>
          </div>

          <div data-v-492dc475=""
               class="see-space"
               id="160316467834034821"
               style="height: 120px;"></div>
        </div>
      </div>
    </div>
    <!---->
    <div data-v-6ea93a13=""
         class="backTop homePage__back"
         style="display: none;">
      <svg data-v-6ea93a13=""
           aria-hidden="true"
           class="svg-icon">
        <use xlink:href="#iconzhiding"></use>
      </svg>
    </div>

    <Pop />
  </div>
</template>
<script>
import Pop from "./Pop.vue"
export default {
  components: {
    Pop,
  },
  data () {
    return {
      images: require('../../assets/images/service1.jpg'),
    }
  },
}
</script>
<style  src="../../assets/css/customer_case.css"  scoped>
</style>

<style>
</style>